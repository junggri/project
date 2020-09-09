module.exports = {
  apps: [
    {
      name: "apps",
      script: "src/index.ts",
      watch: true,
      instances: 4,
      exec_mode: "cluster",
    },
  ],
};
