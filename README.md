# CloudProcure Platform

Enterprise Cloud Architecture Final Project

## Student Information

- Student Name: Thenuri Nethangi Nanayakkara
- Student ID: 241711017
- Module: ITS 2130 - Enterprise Cloud Architecture

## Google Cloud Project

- Project Name: ProcureFlow ECA
- Project ID: `procureflow-eca`
- Primary Region: `us-central1`

## About This Repository

This is the CloudProcure platform super repository.

It contains the platform components as Git submodules:

- `api-gateway`
- `config-server`
- `config-repository`
- `eureka-server`

## Platform Architecture

The platform layer provides centralized configuration, service discovery, and API routing for the CloudProcure microservice architecture.

### Spring Cloud Config Server

Provides centralized configuration to the platform and business services.

### Eureka Server

Provides service registration and service discovery.

Multiple Eureka instances are deployed across availability zones for high availability.

### API Gateway

Provides the main backend entry point and routes requests to the appropriate microservices using Eureka service discovery.

The API Gateway is deployed using a regional Managed Instance Group behind a Google Cloud Load Balancer.

## Google Cloud Infrastructure

The project uses:

- Google Compute Engine
- Managed Instance Groups
- Instance Templates
- Custom VM Image
- Health Checks
- External Load Balancing
- Custom VPC
- Firewall Rules
- Cloud Router
- Cloud NAT
- Cloud DNS
- Service Accounts
- Google Cloud Storage
- Artifact Registry
- Workload Identity Federation

Java services running on Compute Engine are managed using PM2.

## Deployment Architecture

Browser

→ Cloud Run Frontend

→ External Load Balancer

→ API Gateway

→ Eureka Service Discovery

→ Business Microservices

## Submodules

Clone this repository together with all submodules:

```bash
git clone --recurse-submodules <cloudprocure-platform-repository>
