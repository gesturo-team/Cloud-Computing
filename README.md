# Cloud Computing Documentation

## Diagram Architecture

<img src="documentation/architecture.png">

<br>

## Firestore Database Structure

<img src="documentation/firestore.png">

<br>

## Tech Architecture

- Node.js
- Express.js
- App Engine
- Cloud Storage
- Tensorflow Lite
- Firestore

<br>

## Recap Endpoint Routes

| Route                | HTTP Method | Description                 | Auth         |
| -------------------- | ----------- | --------------------------- | ------------ |
| /login               | POST        | Log in a user               | Not Required |
| /register            | POST        | Register a new user         | Not Required |
| /logout              | POST        | Log out a user              | Not Required |
| /profile             | GET         | Get user profile            | Required     |
| /dictionary/alphabet | GET         | Get dictionary alphabet     | Required     |
| /dictionary/number   | GET         | Get dictionary number       | Required     |
| /quiz/alphabet       | GET         | Get alphabet quiz           | Required     |
| /quiz/number         | GET         | Get number quiz             | Required     |
| /quiz                | POST        | Submit a quiz               | Required     |
| /quiz/history        | GET         | Get all user quiz history   | Required     |
| /quiz/history?count  | GET         | Get count user quiz history | Required     |
| /quiz/{{ quizId }}   | GET         | Get quiz details            | Required     |

<br>

## API Endpoint

| Link                                                                  |
| --------------------------------------------------------------------- |
| <a href="./documentation/response.md"> API Endpoint Documentation</a> |
