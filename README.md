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

### Login

- Auth : Not Required
- Method : POST
- URL : /login

- Request:

```
{
    "email": "user@example.com",
    "password": "userpassword"
}
```

- Response:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Login successful",
}
```

```
Status Code: 400
body:
{
    "status": "fail",
    "message": "Invalid email or password"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

### Register

- Auth : Not Required
- Method : POST
- URL : /register

- Request:

```
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
}

```

- Respoonse:

```

Status Code: 201
body:
{
    "status": "success",
    "message": "User registered successfully",
}
```

```
Status Code: 400
body:
{
    "status": "fail",
    "message": "Register failed"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

### Logout

- Auth : Required
- Method : POST
- URL : /logout

- Respoonse:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Logout successful"
}
```

```
Status Code: 400
body:
{
    "status": "fail",
    "message": "Logout failed"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

## Profile

- Auth : Required
- Method :
- URL : /profile

- Respoonse:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Profile obtain successfuly"
    "data": {
        "id": "",
        "fullName": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "createdAt": ""
    }
}
```

```
Status Code: 400
body:
{
    "status": "fail",
    "message": "User failed to obtain"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

### Dictionary Alphabet

- Auth : Required
- Method : GET
- URL : /dictionary/alphabet

- Respoonse:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Dictionary alphabet obtain succesfully",
    "data": {
        "_id": "",
        "type": "alphabet",
        "createdAt": "",
        "updatedAt": "",
        "wordList" [
            {
            "_id": "",
            "value": "",
            "urlImage": "",
            "description": ""
            },
            {
            "_id": "",
            "value": "",
            "urlImage": "",
            "description": ""
            },
        ]
    }
}
```

```
Status Code:400
body:
{
    "status": "success",
    "message": "Dictionary failed to obtain",
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}

```

<br>

### Dictionary Number

- Auth : Required
- Method : GET
- URL : /dictionary/number

- Response:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Dictionary number obtain succesfully",
    "data": {
        "_id": "",
        "type": "number",
        "createdAt": "",
        "updatedAt": "",
        "wordList" [
            {
            "_id": "",
            "value": "",
            "urlImage": "",
            "description": ""
            },
            {
            "_id": "",
            "value": "",
            "urlImage": "",
            "description": ""
            },
        ]
    }
}
```

```
Status Code:400
body:
{
    "status": "success",
    "message": "Dictionary failed to obtain",
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

### Get Quiz Alphabet

- Auth : Required
- Method : GET
- URL : /quiz/alphabet

- Respoonse:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Quiz obtained successfully",
    "data": {
        "id": "",
        "score" : "",
        "type" : "alphabet"
        "questions": [
            {
                "question": "",
                "urlImage": "",
                "userAnswer": "",
                "answers": [
                    {
                        "option": "A",
                        "answer": "Paris",
                        "correct": true
                    },
                    {
                        "option": "B",
                        "answer": "London",
                        "correct": false
                    },
                    {
                        "option": "C",
                        "answer": "Berlin",
                        "correct": false
                    },
                    {
                        "option": "D",
                        "answer": "Madrid",
                        "correct": false
                    }
                ]
            }
        ],
        "createdAt": "",
        "updatedAt": ""
    }
}
```

```
Status Code:400
body:
{
    "status" : "fail"
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

### Get Quiz Number

- Auth : Required
- Method : GET
- URL : /quiz/number

- Respoonse:

```
Status Code: 200
body:
{
    "status": "success",
    "message": "Quiz obtained successfully",
    "data": {
        "id": "",
        "score" : "",
        "type" : "number"
        "questions": [
            {
                "question": "",
                "urlImage": "",
                "userAnswer": "",
                "answers": [
                    {
                        "option": "A",
                        "answer": "Paris",
                        "correct": true
                    },
                    {
                        "option": "B",
                        "answer": "London",
                        "correct": false
                    },
                    {
                        "option": "C",
                        "answer": "Berlin",
                        "correct": false
                    },
                    {
                        "option": "D",
                        "answer": "Madrid",
                        "correct": false
                    }
                ]
            }
        ],
        "createdAt": "",
        "updatedAt": ""
    }
}
```

```
Status Code:400
body:
{
    "status" : "fail"
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

### Post Quiz

- Auth : Required
- Method : POST
- URL : /quiz

- Request:

```
{
        "idUser : "",
        "id": "",
        "score" : "",
        "type" : "number/alphabet"
        "questions": [
            {
                "question": "",
                "urlImage": "",
                "userAnswer": "",
                "answers": [
                    {
                        "option": "A",
                        "answer": "Paris",
                        "correct": true
                    },
                    {
                        "option": "B",
                        "answer": "London",
                        "correct": false
                    },
                    {
                        "option": "C",
                        "answer": "Berlin",
                        "correct": false
                    },
                    {
                        "option": "D",
                        "answer": "Madrid",
                        "correct": false
                    }
                ]
            }
        ],
        "createdAt": "",
        "updatedAt": ""
    }
```

- Respoonse:

```
Status Code:201
body:
{
    "status" : "fail"
    "message": "Quiz submited successfully"
}
```

```
Status Code:400
body:
{
    "status" : "fail"
    "message": "Quiz failed to submit"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}

```

<br>

### Get Quiz History User

- Auth : Recquired
- Method : GET
- URL : /quiz/history/{{ userId }}

- Request:

- Respoonse:

```
Status Code: 200
body:
{
    "status" : "success"
    "message": "Quiz history obtain successfully"
    "data" : {
    "_id": "",
    "email": "",
    "firstName": "",
    "lastName": "",
    "createdAt": "",
    "updatedAt": "",
    "quiz": [
        {
        "_id": "",
        "score" : "",
        "type" : "number/alphabet"
        "questions": [
          {
            "question": "",
            "urlImage": "",
            "userAnswer": "",
            "answers": [
              {
                "option": "A",
                "answer": "Paris",
                "correct": true
              },
              {
                "option": "B",
                "answer": "Londres",
                "correct": false
              },
              {
                "option": "C",
                "answer": "Berlin",
                "correct": false
              },
              {
                "option": "D",
                "answer": "Madrid",
                "correct": false
              }
            ]
          }
        ],
        "createdAt": "",
        "updatedAt": ""
      }
    ]
}
}
```

```
Status Code:400
body:
{
    "status" : "fail"
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```

<br>

### Get Quiz Detail

- Auth : Required
- Method : GET
- URL : /quiz/{{ quizId }}

- Respoonse:

```
Status Code: 201
body:
{
    "status" : "success"
    "message" : "Quiz obtain succesfully"
    "data" :
    {
    "_id": "",
    "score": "",
    "type" : "number/alphabet"
    "questions": [
        {
            "question": "",
            "urlImage": "",
            "userAnswer": "",
            "answers": [
        {
            "option": "A",
            "answer": "Paris",
            "correct": true
        },
        {
            "option": "B",
            "answer": "Londres",
            "correct": false
        },
        {
            "option": "C",
            "answer": "Berlin",
            "correct": false
        },
        {
            "option": "D",
            "answer": "Madrid",
            "correct": false
        }
    ]
    }
    ],
    "createdAt": "",
    "updatedAt": ""
}
}
```

```
Status Code:400
body:
{
    "status" : "fail"
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error",
}
```
