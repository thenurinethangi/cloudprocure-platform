# CloudProcure Platform

Super-repository for the independently buildable Config Server, Eureka Server, API Gateway, and externalized configuration repository. Each component is a public Git submodule with its own lifecycle and `main` branch.

## Submission identity

- Student Name: `<STUDENT_NAME>`
- Student Number: `<STUDENT_NUMBER>`
- Slack Handle: `<SLACK_HANDLE>`
- GCP Project ID: `<GCP_PROJECT_ID>`

## Repository structure

| Path | Repository | Local port |
| --- | --- | ---: |
| `config-server` | `cloudprocure-config-server` | 8888 |
| `eureka-server` | `cloudprocure-eureka-server` | 8761 |
| `api-gateway` | `cloudprocure-api-gateway` | 8088 |
| `config-repository` | `cloudprocure-config-repository` | n/a |

## Clone

```powershell
git clone --recurse-submodules https://github.com/thenurinethangi/cloudprocure-platform.git
cd cloudprocure-platform
git submodule update --init --recursive
```

## Build and startup

Build each Spring application independently with its own Maven wrapper:

```powershell
.\config-server\mvnw.cmd test
.\eureka-server\mvnw.cmd test
.\api-gateway\mvnw.cmd test
```

For local operation, start Config Server first, Eureka second, and then the API Gateway and business services. All browser-facing backend traffic goes through the Gateway on port 8088. Configuration clients use fail-fast/retry behavior, and `/actuator/health` is the baseline health-check endpoint.

The non-destructive GCP preparation assets are under `docs/gcp`. Real GCP resources and final deployment values must be created and verified before academic completion; placeholders are intentionally retained until those values are available.

