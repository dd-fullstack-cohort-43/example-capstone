module.exports = {
  apps: [
    {
      name: "example-app",
      script: "PORT=3000 npm run start",
      env: {
        NODE_ENV: "production",
      },
      cwd: ".",
    },
  ],
};