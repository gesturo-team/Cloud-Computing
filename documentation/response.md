# Documentation

## Login

- Auth : Not Required
- Method : `POST`
- URL : `/login`
  <br>
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
    "message": "User logged in successfully.",
    "authResult": {
        "id": "",
        "fullName": "John Doe",
        "email": "john.doe@example.com",
        "token": ""
    }
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
- Method : `POST`
- URL : `/register`
  <br>

- Request:

```
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

- Response:

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

<br>

## Logout

- Auth : Required
- Method : `POST`
- URL : `/logout`
- Headers : `Authorization : Bearer <token>`

- Response:
  <br>

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
    "message": "Logout failed",
    "token": null
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
- URL : `/profile`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

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
- Method : `GET`
- URL : `/dictionary/alphabet`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

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
- Method : `GET`
- URL : `/dictionary/number`
- Headers : `Authorization : Bearer <token>`
  <br>

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

## Dictionary Detail

- Auth : Required
- Method : `GET`
- URL : `/dictionary/{{ type }}/{{ word }}`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

```
Status Code: 200
body:
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

```
Status Code:400
body:
{
    "success": false,
    "message": "Dictionary detail failed to obtain",
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
- Method : `GET`
- URL : `/quiz/alphabet`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

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
- Method : `GET`
- URL : `/quiz/number`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

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
- Method : `POST`
- URL : `/quiz`
- Headers : `Authorization : Bearer <token>`
  <br>

- Request:

```
{
    "id": "",
    "score": "",
        "type": "alphabet",
        "questions":[
            {
                "question": "v",
                "correct": false,
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
                ]
            },
            {
                "question": "c",
                "correct": true,
                "urlImage": "",
                "userAnswer": "c",
                "answers": [
                    {
                        "value": "f",
                        "correct": false
                    },
                    {
                        "value": "h",
                        "correct": false
                    },
                    {
                        "value": "n",
                        "correct": false
                    },
                    {
                        "value": "c",
                        "correct": true
                    }
                ]
            },
            {
                "question": "j",
                "correct": false,
                "urlImage": "",
                "userAnswer": "y",
                "answers": [
                    {
                        "value": "j",
                        "correct": true
                    },
                    {
                        "value": "u",
                        "correct": false
                    },
                    {
                        "value": "y",
                        "correct": false
                    },
                    {
                        "value": "f",
                        "correct": false
                    }
                ]
            },
            {
                "question": "r",
                "correct": true,
                "urlImage": "",
                "userAnswer": "r",
                "answers": [
                    {
                        "value": "h",
                        "correct": false
                    },
                    {
                        "value": "c",
                        "correct": false
                    },
                    {
                        "value": "r",
                        "correct": true
                    },
                    {
                        "value": "o",
                        "correct": false
                    }
                ]
            },
            {
                "question": "y",
                "correct": true,
                "urlImage": "",
                "userAnswer": "y",
                "answers": [
                    {
                        "value": "x",
                        "correct": false
                    },
                    {
                        "value": "k",
                        "correct": false
                    },
                    {
                        "value": "c",
                        "correct": false
                    },
                    {
                        "value": "y",
                        "correct": true
                    }
                ]
            },
            {
                "question": "a",
                "correct": true,
                "urlImage": "",
                "userAnswer": "a",
                "answers": [
                    {
                        "value": "g",
                        "correct": false
                    },
                    {
                        "value": "a",
                        "correct": true
                    },
                    {
                        "value": "q",
                        "correct": false
                    },
                    {
                        "value": "j",
                        "correct": false
                    }
                ]
            },
            {
                "question": "t",
                "correct": true,
                "urlImage": "",
                "userAnswer": "t",
                "answers": [
                    {
                        "value": "t",
                        "correct": true
                    },
                    {
                        "value": "l",
                        "correct": false
                    },
                    {
                        "value": "p",
                        "correct": false
                    },
                    {
                        "value": "c",
                        "correct": false
                    }
                ]
            },
            {
                "question": "u",
                "correct": true,
                "urlImage": "",
                "userAnswer": "u",
                "answers": [
                    {
                        "value": "u",
                        "correct": true
                    },
                    {
                        "value": "m",
                        "correct": false
                    },
                    {
                        "value": "h",
                        "correct": false
                    },
                    {
                        "value": "o",
                        "correct": false
                    }
                ]
            },
            {
                "question": "d",
                "correct": true,
                "urlImage": "",
                "userAnswer": "d",
                "answers": [
                    {
                        "value": "r",
                        "correct": false
                    },
                    {
                        "value": "d",
                        "correct": true
                    },
                    {
                        "value": "w",
                        "correct": false
                    },
                    {
                        "value": "z",
                        "correct": false
                    }
                ]
            },
            {
                "question": "o",
                "correct": true,
                "urlImage": "",
                "userAnswer": "o",
                "answers": [
                    {
                        "value": "w",
                        "correct": false
                    },
                    {
                        "value": "z",
                        "correct": false
                    },
                    {
                        "value": "f",
                        "correct": false
                    },
                    {
                        "value": "o",
                        "correct": true
                    }
                ]
            }
        ],
    "createdAt": "",
    "updatedAt": ""
}
```

- Response:

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
- Method : `GET`
- URL : `/quiz/history`
- Headers : `Authorization : Bearer <token>`
- Parameters : count (optional): Gets the number of historical entries (0-9999).
  <br>

- Response:

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
- Method : `GET`
- URL : `/quiz/{{ quizId }}`
- Headers : `Authorization : Bearer <token>`
  <br>

- Response:

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
