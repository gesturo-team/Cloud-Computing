# Cloud Computing Documentation

## Table of Content

- [Cloud Computing Documentation](#cloud-computing-documentation)
  - [Diagram Architecture](#diagram-architecture)
  - [Firestore Database Structure](#firestore-database-structure)
  - [Tech Architecture](#tech-architecture)
  - [Dependencies](#dependencies)
  - [Recap Endpoint Routes](#recap-endpoint-routes)
  - [API Endpoint](#api-endpoint)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributor](#contributor)

## Diagram Architecture

<img src="documentation/architecture.png">

## Firestore Database Structure

<img src="documentation/firestore.png">

## Tech Architecture

- Node.js
- Express.js
- App Engine
- Cloud Storage
- Tensorflow Lite
- Firestore

## Dependencies

- [**@google-cloud/firestore**](https://www.npmjs.com/package/@google-cloud/firestore) - Version: ^7.7.0
- [**bcrypt**](https://www.npmjs.com/package/bcrypt) - Version: ^5.1.1
- [**cookie-parser**](https://www.npmjs.com/package/cookie-parser) - Version: ^1.4.5
- [**cors**](https://www.npmjs.com/package/cors) - Version: ^2.8.5
- [**dotenv**](https://www.npmjs.com/package/dotenv) - Version: ^16.4.5
- [**express**](https://www.npmjs.com/package/express) - Version: ^4.19.2
- [**express-validator**](https://www.npmjs.com/package/express-validator) - Version: ^7.1.0
- [**firebase-admin**](https://www.npmjs.com/package/firebase-admin) - Version: ^12.1.1
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) - Version: ^9.0.2
- [**multer**](https://www.npmjs.com/package/multer) - Version: ^1.4.5-lts.1

## Recap Endpoint Routes

| Route                  | HTTP Method | Description                 | Auth         |
| ---------------------- | ----------- | --------------------------- | ------------ |
| /login                 | POST        | Log in a user               | Not Required |
| /register              | POST        | Register a new user         | Not Required |
| /logout                | POST        | Log out a user              | Not Required |
| /profile               | GET         | Get user profile            | Required     |
| /dictionary/alphabet   | GET         | Get dictionary alphabet     | Required     |
| /dictionary/number     | GET         | Get dictionary number       | Required     |
| /quizzes               | POST        | Submit a quiz               | Required     |
| /quizzes/{{ id }}      | GET         | Get quiz details            | Required     |
| /quizzes/type/number   | GET         | Get number quiz             | Required     |
| /quizzes/type/alphabet | GET         | Get alphabet quiz           | Required     |
| /quizzes/history       | GET         | Get all user quiz history   | Required     |
| /quizzes/history?count | GET         | Get count user quiz history | Required     |

## API Endpoint

For detailed information on each API endpoint, refer to the <a href="./documentation/response.md"> API Endpoint Documentation</a>

## Installation

1. Prerequisites

- Ensure you have Node.js installed, preferably version 18.x or later.

2. Clone The Project

```bash
git clone https://github.com/gesturo-team/Cloud-Computing.git
cd Cloud-Computing
```

3. Install Dependencies

```bash
npm install
```

4. Environment Variables (.env)

- Create a `.env` file in the root directory of the project.
- Set the following environment variables:

```plaintext
PORT=<Your_Port>
JWT_SECRET=<Your_JWT>
```

5. Running the Application

- To start the application in development mode, run:

```bash
npm run start:dev
```

- For production mode, simply run:

```bash
npm start
```

## Contributor

| Name               | University                    | Role            | Links                                                                                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ryan Rizky Pratama | Politeknik Negeri Banjarmasin | Cloud Computing | [![GitHub](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ryanriz) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryanriz/)          |
| Reja Revaldy. F.   | Politeknik Negeri Banjarmasin | Cloud Computing | [![GitHub](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rejarevaldy) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rejarevaldyf/) |
