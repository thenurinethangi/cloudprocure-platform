// Copy beside deployed JARs and replace every <TOKEN> before enabling PM2 startup.
module.exports = {
  apps: [
    {
      name: "cloudprocure-config-server",
      script: "java",
      args: "-XX:MaxRAMPercentage=70 -jar <CONFIG_SERVER_JAR>",
      cwd: "/opt/cloudprocure/config-server",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        SPRING_PROFILES_ACTIVE: "prod",
        SERVER_PORT: "8888",
        CONFIG_GIT_URI: "<PUBLIC_CONFIG_REPOSITORY_URL>",
      },
    },
    {
      name: "cloudprocure-eureka-server",
      script: "java",
      args: "-XX:MaxRAMPercentage=70 -jar <EUREKA_SERVER_JAR>",
      cwd: "/opt/cloudprocure/eureka-server",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        SPRING_PROFILES_ACTIVE: "prod",
        SERVER_PORT: "8761",
        CONFIG_SERVER_URL: "<INTERNAL_CONFIG_SERVER_URL>",
        EUREKA_SERVER_URL: "<INTERNAL_EUREKA_PEER_URLS>",
      },
    },
    {
      name: "cloudprocure-api-gateway",
      script: "java",
      args: "-XX:MaxRAMPercentage=70 -jar <API_GATEWAY_JAR>",
      cwd: "/opt/cloudprocure/api-gateway",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        SPRING_PROFILES_ACTIVE: "prod",
        SERVER_PORT: "8080",
        CONFIG_SERVER_URL: "<INTERNAL_CONFIG_SERVER_URL>",
        EUREKA_SERVER_URL: "<INTERNAL_EUREKA_URL>",
        CORS_ALLOWED_ORIGINS: "<CLOUD_RUN_FRONTEND_ORIGIN>",
      },
    },
  ],
};
