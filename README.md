# NestJS Boilerplate with clean structure

[![nestjs-boilerplate](https://github.com/ITZSHOAIB/nestjs-boilerplate/assets/48586775/bf40b508-7381-4a2c-b0f3-aba4f8f46d4d)](https://github.com/new?template_name=nestjs-boilerplate&template_owner=ITZSHOAIB)

A NestJS project template for building scalable and production-ready REST APIs using [NestJS](https://nestjs.com/), a progressive Node.js framework. NestJS Boilerplate includes many features and libraries, such as:

- Docker support using [Docker Compose](https://docs.docker.com/compose/)
- MongoDB integration using [@nestjs/mongoose](https://docs.nestjs.com/techniques/mongodb) and [Mongoose](https://mongoosejs.com/)
- Open API documentation using [swagger](https://docs.nestjs.com/openapi/introduction)
- Validation using [class-validator](https://docs.nestjs.com/pipes#class-validator)
- A Basic clean folder structure with CRUD operation to get started.
- Testing using [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest)

## Getting Started

To run this project, you need to have [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Docker](https://www.docker.com/) installed on your machine.

### Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/ITZSHOAIB/nestjs-boilerplate.git
cd nestjs-boilerplate
npm install
```

Copy the `default.env` file and rename it to `.env`. Fill in the required environment variables, such as the database URL, and ports.

### Running the app

To run the app in development mode, use:

```bash
npm run start:dev
```

To run the app in production mode, use:

```bash
npm run start:prod
```

To run the app in a Docker container, use:

```bash
docker-compose up
```

The app will be available at `http://localhost:${PORT}`.

### Testing the app

To run the unit tests, use:

```bash
npm run test
```

To run the end-to-end tests, use:

```bash
npm run test:e2e
```

## API Documentation

The app uses [Swagger](https://swagger.io/) to document the API endpoints. You can access the Swagger UI at `http://localhost:${PORT}/api`.

## Contributing

We welcome contributions from the community.

## License

This project is licensed under the MIT License.
