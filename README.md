# Cloud Computing Documentation

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

## Recap Endpoint Routes

| Route                             | HTTP Method | Description                 | Auth         |
| ----------------------------------| ----------- | --------------------------- | ------------ |
| /login                            | POST        | Log in a user               | Not Required |
| /register                         | POST        | Register a new user         | Not Required |
| /logout                           | POST        | Log out a user              | Not Required |
| /profile                          | GET         | Get user profile            | Required     |
| /dictionary/alphabet              | GET         | Get dictionary alphabet     | Required     |
| /dictionary/number                | GET         | Get dictionary number       | Required     |
| /dictionary/{{ type }}/{{ word }} | GET         | Get dictionary detail       | Required     |
| /quiz/alphabet                    | GET         | Get alphabet quiz           | Required     |
| /quiz/number                      | GET         | Get number quiz             | Required     |
| /quiz                             | POST        | Submit a quiz               | Required     |
| /quiz/history                     | GET         | Get all user quiz history   | Required     |
| /quiz/history?count               | GET         | Get count user quiz history | Required     |
| /quiz/{{ quizId }}                | GET         | Get quiz details            | Required     |

## API Endpoint

| Link                                                                  |
| --------------------------------------------------------------------- |
| <a href="./documentation/response.md"> API Endpoint Documentation</a> |

## Contributor

| Name               | University                    | Role            | Links                                                                                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ryan Rizky Pratama | Politeknik Negeri Banjarmasin | Cloud Computing | [![GitHub](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ryanriz) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryanriz/)          |
| Reja Revaldy. F.   | Politeknik Negeri Banjarmasin | Cloud Computing | [![GitHub](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rejarevaldy) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rejarevaldyf/) |
