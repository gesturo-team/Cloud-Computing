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
  - [Setup Google Cloud](#setup-google-cloud)
    - [App Engine](#app-engine)
    - [Cloud Storage](#cloud-storage)
    - [Firestore](#firestore)
  - [Setup Service Account](#setup-service-account)
    - [Firestore](#firestore-1)
    - [Cloud Storage](#cloud-storage-1)
  - [Deploy Google Cloud](#deploy-google-cloud)
    - [App Engine](#app-engine-1)
  - [Contributor](#contributor)
  
<br>

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
- 
<br>

## Dependencies

- [**@google-cloud/firestore**](https://www.npmjs.com/package/@google-cloud/firestore) - Version: ^7.7.0
- [**bcrypt**](https://www.npmjs.com/package/bcrypt) - Version: ^5.1.1
- [**cors**](https://www.npmjs.com/package/cors) - Version: ^2.8.5
- [**dotenv**](https://www.npmjs.com/package/dotenv) - Version: ^16.4.5
- [**express**](https://www.npmjs.com/package/express) - Version: ^4.19.2
- [**express-validator**](https://www.npmjs.com/package/express-validator) - Version: ^7.1.0
- [**firebase-admin**](https://www.npmjs.com/package/firebase-admin) - Version: ^12.1.1
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken) - Version: ^9.0.2
- [**multer**](https://www.npmjs.com/package/multer) - Version: ^1.4.5-lts.1
- 
<br>

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

<br>

## API Endpoint

For detailed information on each API endpoint, refer to the <a href="./documentation/response.md"> API Endpoint Documentation</a>
<br>

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

<br>

## Setup Google Cloud

### App Engine

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Go to App Engine.
3. Start a app engine by clicking CREATE APPLICATIOn button.
4. Choose your region (We Use asia-souteast-2) and click next.
5. Click I'LL DO THIS LATER.

### Cloud Storage

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Go to Cloud Storage.
3. Create a bucket by clicking CREATE button.
4. Set your globally unique bucket name.
5. Choose your region (We Use asia-souteast-2).
6. Set a default class (Standard).
7. Uncheck the <I>Enforce public access prevent ...</I>
8. Select Access Control as `Fine-grained`.
9. Then, hit CREATE.
10. On your buckets, click the three dots at the right of your bucket.
11. Click Edit Access and click Add Principal.
12. In the new principal column type `allUsers`.
13. In the role column select Cloud Storage > `Storage Object Viewer`.
14. Click Save.

### Firestore

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Go to Firestore.
3. Crete a databases by clicking CREATE DATABASE button.
4. Set a firestore mode (Native Mode) and click continue.
5. Set a database id (default).
6. Choose your region (We Use asia-souteast-2).
7. Click CREATE DATABASE button.

<br>

## Setup Service Account

### Firestore

1. Go to IAM & Admin > Service Accounts or click [here](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Select your project.
3. Click Create Service Account
4. Set your name, Select role `Firebase Admin`
5. Click your service account email > KEYS > Select ADD KEY and click Create new key.
6. Select JSON and click CREATE.
7. Save your credential account.

### Cloud Storage

1. Go to IAM & Admin > Service Accounts or click [here](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Select your project.
3. Click Create Service Account
4. Set your name, Select role Cloud Storage > `Storage Admin`
5. Click your service account email > KEYS > Select ADD KEY and click Create new key.
6. Select JSON and click CREATE.
7. Save your credential account.

<br>

## Deploy Google Cloud

### App Engine

1. Open your Cloud Shell by clicking [here](https://shell.cloud.google.com/).
2. Set your project.

```bash
  gcloud config set project [PROJECT_ID]
```

3. Clone this repository by the below command.

```bash
  git clone -b master https://github.com/gesturo-team/Cloud-Computing
  cd Cloud Computing/api
```

4. Create a .env file and import your JWT Secret Key and Port into .env file.

```
  touch .env && nano .env
```

```
  PORT=<Your_Port>
  JWT_SECRET=<Your_JWT>
```

5. Upload your Service Account Credentials to the Cloud Computing/api/src/configs.
6. Rename the file as `serviceKey.json`.

7. Install node package by the bellow command.

```bash
  npm install
```

8. Deploy the API by running the command on your cloud shell.

```bash
  gcloud app deploy
```

9. Type youyr service name and select your region (We Use asia-souteast-2).
10. Wait until it finishes.

<br>

## Contributor

| Name               | University                    | Role            | Links                                                                                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ryan Rizky Pratama | Politeknik Negeri Banjarmasin | Cloud Computing | [![GitHub](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ryanriz) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryanriz/)          |
| Reja Revaldy. F.   | Politeknik Negeri Banjarmasin | Cloud Computing | [![GitHub](https://img.shields.io/badge/github-121013?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rejarevaldy) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rejarevaldyf/) |
