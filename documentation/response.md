# API Endpoint

## Table of Content

- [Auth](#auth)
  - [Login](#login)
  - [Register](#register)
  - [Logout](#logout)
  - [Profile](#profile)
- [Dictionary](#dictionary)
  - [Dictionary Alphabet](#dictionary-alphabet)
  - [Dictionary Number](#dictionary-number)
  - [Dictionary Detail](#dictionary-detail)
- [Quizzes](#quizzes)
  - [Get Quiz Alphabet](#get-quiz-alphabet)
  - [Get Quiz Number](#get-quiz-number)
  - [Post Quiz](#post-quiz)
  - [Get Quiz History User](#get-quiz-history-user)
  - [Get Quiz Detail](#get-quiz-detail)
    
<br>

# Auth
## Login

- Auth : Not Required
- Method : `POST`
- URL : `/login`
  <br>
- Request:

```JSON
{
    "email": "user@example.com",
    "password": "userpassword"
}
```

- Response:

```JSON
Status Code: 200
{
    "success": true,
    "message": "User logged in successfully.",
    "authResult": {
        "id": "",
        "fullName": "John Doe",
        "email": "john.doe@example.com",
        "token": ""
    }
}
```

```JSON
Status Code: 400
{
    "success": false,
    "message": "Invalid email or password"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Register

- Auth : Not Required
- Method : `POST`
- URL : `/register`
  <br>

- Request:

```JSON
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

- Response:

```JSON
Status Code: 200
{
    "success": true,
    "message": "User registered successfully",
    "authResult": {
        "id": "123",
        "fullName": "John Doe",
        "email": "john.doe@example.com",
        "token": "token",
      }
}
```

```JSON
Status Code: 400
{
    "success": false,
    "message": "Register failed"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Logout

- Auth : Required
- Method : `POST`
- URL : `/logout`
- Headers : `Authorization : Bearer <token>`

- Response:
  <br>

```JSON
Status Code: 200
{
    "success": true,
    "message": "Logout successful"
}
```

```JSON
Status Code: 400
{
    "success": false,
    "message": "Logout failed",
    "token": null
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Profile

- Auth : Required
- Method :
- URL : `/profile`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 200
{
    "success": true,
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

```JSON
Status Code: 400
{
    "success": false,
    "message": "User failed to obtain"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

# Dictionary
## Dictionary Alphabet

- Auth : Required
- Method : `GET`
- URL : `/dictionary/alphabet`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 200
{
    "success": true,
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

```JSON
Status Code:400
{
    "success": true,
    "message": "Dictionary failed to obtain",
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}

```

<br>

## Dictionary Number

- Auth : Required
- Method : `GET`
- URL : `/dictionary/number`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 200
{
    "success": true,
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

```JSON
Status Code:400
{
    "success": true,
    "message": "Dictionary failed to obtain",
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Dictionary Detail

- Auth : Required
- Method : `GET`
- URL : `/dictionary/{{ type }}/{{ word }}`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 200
{
    "success": true,
    "message": "Dictionary detail obtain succesfully",
    "data": {
        "_id": "",
        "value": "",
        "urlImage": "",
        "description": ""
    }
}
```

```JSON
Status Code:400
{
    "success": false,
    "message": "Dictionary detail failed to obtain",
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

# Quizzes
## Get Quiz Alphabet

- Auth : Required
- Method : `GET`
- URL : `/quizzes/type/alphabet`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 200
{
    "success": true,
    "message": "Quiz obtained successfully",
    "data": {
        "id": "",
        "score" : "",
        "type" : "alphabet"
        "questions": [
            {
                "question": "",
                "correct": false,
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

```JSON
Status Code:400
{
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Get Quiz Number

- Auth : Required
- Method : `GET`
- URL : `/quizzes/type/number`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 200
{
    "success": true,
    "message": "Quiz obtained successfully",
    "data": {
        "id": "",
        "score" : "",
        "type" : "number"
        "questions": [
            {
                "question": "",
                "correct": false,
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

```JSON
Status Code:400
{
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Post Quiz

- Auth : Required
- Method : `POST`
- URL : `/quiz`
- Headers : `Authorization : Bearer <token>`
  <br>

- Request:

```JSON
{
    "id": "",
    "score": "",
        "type": "alphabet",
        "questions":[
            {
                "question": "v",
                "urlImage": "",
                "userAnswer": "q",
                "answers": [
                    {
                        "value": "r",
                        "correct": false
                    },
                    {
                        "value": "q",
                        "correct": false
                    },
                    {
                        "value": "f",
                        "correct": false
                    },
                    {
                        "value": "v",
                        "correct": true
                    }
                    ...
                ]
            }
        ],
    "createdAt": "",
    "updatedAt": ""
}
```

- Response:

```JSON
Status Code:201
{
    "success" : false
    "message": "Quiz submited successfully"
}
```

```JSON
Status Code:400
{
    "success" : true
    "message": "Quiz failed to submit"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}

```

<br>

## Get Quiz History User

- Auth : Recquired
- Method : `GET`
- URL : `/quizzes/history`
- Headers : `Authorization : Bearer <token>`
- Parameters : count (optional): Gets the number of historical entries (0-9999).
  <br>

- Response:

```JSON
Status Code: 200
{
    "success" : true
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
            "correct": false,
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

```JSON
Status Code:400
{
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Get Quiz Detail

- Auth : Required
- Method : `GET`
- URL : `/quizzes/{{ quizId }}`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```JSON
Status Code: 201
{
    "success" : true
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

```JSON
Status Code:400
{
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```JSON
Status Code: 500
{
    "success": false,
    "message": "Internal Server Error",
}
```
