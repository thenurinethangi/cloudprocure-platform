# CloudProcure Platform

Platform super-repository for the **ProcureFlow Enterprise Procurement System**, developed for the ITS 2130 - Enterprise Cloud Architecture final project.

## Student Information

- **Student Name:** Thenuri Nethangi Nanayakkara
- **Student ID:** 241711017
- **Module:** ITS 2130 - Enterprise Cloud Architecture

## Google Cloud Project

- **Project Name:** ProcureFlow ECA
- **Project ID:** `procureflow-eca`
- **Primary Region:** `us-central1`

## Live Application

**Frontend:**  
https://procureflow-frontend-7vni4yihhq-uc.a.run.app

## Repository Purpose

This repository is the **platform parent / super-repository**.

It contains the shared Spring Cloud platform components required by the backend microservices.

### Submodules

| Submodule | Purpose |
|---|---|
| `config-server` | Centralized Spring Cloud configuration server |
| `config-repository` | External configuration repository used by Config Server |
| `eureka-server` | Service registration and discovery |
| `api-gateway` | Central API entry point and service routing |

Submodule repositories:

- https://github.com/thenurinethangi/cloudprocure-config-server
- https://github.com/thenurinethangi/cloudprocure-config-repository
- https://github.com/thenurinethangi/cloudprocure-eureka-server
- https://github.com/thenurinethangi/cloudprocure-api-gateway

## Platform Deployment

The platform components are deployed on **Google Compute Engine**.

Key infrastructure includes:

- Managed Instance Groups
- Multiple VM instances across zones
- Instance Templates
- Health Checks
- External Load Balancer
- Custom VPC
- Firewall Rules
- Cloud Router
- Cloud NAT
- Private Cloud DNS
- Service Accounts
- PM2 process management

Config Server and Eureka run with multiple instances to provide platform availability.

## Setup / Getting Started

### Prerequisites

- Git
- Java 25
- Internet access to clone the submodule repositories

### Clone the Repository

Clone the parent repository together with all platform submodules:

```bash
git clone --recurse-submodules https://github.com/thenurinethangi/cloudprocure-platform.git
cd cloudprocure-platform
```

If the repository was already cloned without submodules:

```bash
git submodule update --init --recursive
```

The repository includes:

- `config-server`
- `config-repository`
- `eureka-server`
- `api-gateway`

Each platform component contains its own build and runtime instructions.

## Architecture

```text
Cloud Run Frontend
        |
        v
External Load Balancer
        |
        v
API Gateway
        |
        v
Eureka Service Discovery
        |
        v
Business Microservices
