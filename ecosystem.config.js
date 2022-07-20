const packageJson = require("./package.json");
module.exports = {
  apps: [
    {
      name: packageJson.name,
      script: "pnpm run dev",
      instances: 1,
      autorestart: true,
      restart_delay: 60000,
      error_file: `./logs/error.log`,
      out_file: `./logs/out.log`,
      merge_logs: true,
    },
  ],
};
