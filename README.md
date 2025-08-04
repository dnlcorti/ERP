# Insurance Portal Monorepo

This repository contains an Nx-based monorepo with Angular frontend (`apps/frontend`) and NestJS backend (`apps/api`) for an insurance-agency management system.

## Requirements

- Node.js 18+
- Docker (optional for containerised dev)

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start backend and frontend:

```bash
npm run start:api
npm run start:frontend
```

or using docker:

```bash
docker-compose up
```

## Tests

Run unit and e2e tests:

```bash
npm test
```

## Migrations

Generate and run TypeORM migrations:

```bash
npm run migration:generate
npm run migration:run
```

## Production build

Build apps:

```bash
npm run build:api
npm run build:frontend
```

Environment variables are defined in `.env` files under `apps/frontend` and `apps/api`.
