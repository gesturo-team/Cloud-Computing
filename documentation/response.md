# Documentation

## Login

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
    "success": true,
    "message": "Login successful",
}
```

```
Status Code: 400
body:
{
    "success": false,
    "message": "Invalid email or password"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Register

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

Status Code: 200
body:
{
    "success": true,
    "message": "User registered successfully",
    "authResult": {
        id: "123",
        fullName: "John Doe",
        email: "john.doe@example.com",
        token: "token",
      }
}
```

```
Status Code: 400
body:
{
    "success": false,
    "message": "Register failed"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

## Logout

- Auth : Required
- Method : POST
- URL : /logout

- Respoonse:

```
Status Code: 200
body:
{
    "success": true,
    "message": "Logout successful"
}
```

```
Status Code: 400
body:
{
    "success": false,
    "message": "Logout failed"
}
```

```
Status Code: 500
body:
{
    "success": false,
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

```
Status Code: 400
body:
{
    "success": false,
    "message": "User failed to obtain"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Dictionary Alphabet

- Auth : Required
- Method : GET
- URL : /dictionary/alphabet

- Respoonse:

```
Status Code: 200
body:
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

```
Status Code:400
body:
{
    "success": true,
    "message": "Dictionary failed to obtain",
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}

```

<br>

## Dictionary Number

- Auth : Required
- Method : GET
- URL : /dictionary/number

- Response:

```
Status Code: 200
body:
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

```
Status Code:400
body:
{
    "success": true,
    "message": "Dictionary failed to obtain",
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Get Quiz Alphabet

- Auth : Required
- Method : GET
- URL : /quiz/alphabet

- Respoonse:

```
Status Code: 200
body:
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
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Get Quiz Number

- Auth : Required
- Method : GET
- URL : /quiz/number

- Respoonse:

```
Status Code: 200
body:
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
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Post Quiz

- Auth : Required
- Method : POST
- URL : /quiz

- Request:

```
{
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
    "success" : false
    "message": "Quiz submited successfully"
}
```

```
Status Code:400
body:
{
    "success" : true
    "message": "Quiz failed to submit"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}

```

<br>

## Get Quiz History User

- Auth : Recquired
- Method : GET
- URL : /quiz/history

- Request:

- Respoonse:

```
Status Code: 200
body:
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
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```

<br>

## Get Quiz Detail

- Auth : Required
- Method : GET
- URL : /quiz/{{ quizId }}

- Respoonse:

```
Status Code: 201
body:
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

```
Status Code:400
body:
{
    "success" : false
    "message": "Quiz failed to obtain"
}
```

```
Status Code: 500
body:
{
    "success": false,
    "message": "Internal Server Error",
}
```
