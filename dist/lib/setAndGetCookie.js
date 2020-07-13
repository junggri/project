"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var crypto_1 = __importDefault(require("crypto"));
var ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "abcdefghijklmnop".repeat(2); // Must be 256 bits (32 characters)
var IV_LENGTH = 16; // For AES, this is always 16
function encrypt(text) {
    var iv = crypto_1.default.randomBytes(IV_LENGTH);
    var cipher = crypto_1.default.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
    var encrypted = cipher.update(text);
    return iv.toString("hex") + ":" + Buffer.concat([encrypted, cipher.final()]).toString("hex");
}
exports.encrypt = encrypt;
function decrypt(text) {
    var textParts = text.split(":");
    var iv = Buffer.from(textParts.shift(), "hex");
    var encryptedText = Buffer.from(textParts.join(":"), "hex");
    var decipher = crypto_1.default.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
    var decrypted = decipher.update(encryptedText);
    return Buffer.concat([decrypted, decipher.final()]).toString();
}
exports.decrypt = decrypt;
//# sourceMappingURL=setAndGetCookie.js.map