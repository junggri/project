import fs from "fs";
import winston from "winston";
import moment from "moment";
const { combine, label, printf } = winston.format;

const logDir = __dirname + "/../logs";
let date = moment().format("YYYY-MM-DD HH:mm:ss");
const myFormat = printf(({ level, message, label }) => {
  return `${date} [${label}] ${level}: ${message}`; // log 출력 포맷 정의
});

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const infoTransport = new winston.transports.File({
  level: "info",
  filename: "info.log",
  dirname: logDir, // 로그파일을 남길 경로
  handleExceptions: true,
  maxsize: 5242880, // 5MB
  maxFiles: 5,
  format: combine(
    label({ label: "info_log" }),
    myFormat // log 출력 포맷
  ),
});

const errorTransport = new winston.transports.File({
  level: "error",
  filename: "error.log",
  dirname: logDir, // 로그파일을 남길 경로
  handleExceptions: true,
  maxsize: 5242880, // 5MB
  maxFiles: 5,
});

const logger = winston.createLogger({
  transports: [infoTransport, errorTransport],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      format: combine(label({ label: "console" }), myFormat),
    })
  );
}

const stream = {
  write: (message: any) => {
    logger.info(message);
  },
};

export { logger, stream };
