# Documentation

## Login

- Method : POST
- URL : /login

- Request:

```
{
    "email": "user@example.com",
    "password": "userpassword"
}
```

- Respoonse:

```
code: 201
body:
{
    "status": "success",
    "message": "Login successful",
}
```

```
code: 400
body:
{
    "status": "fail",
    "message": "Invalid email or password"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

<br>

## Register

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

code: 201
body:
{
    "status": "success",
    "message": "User registered successfully",
}
```

```
code: 400
body:
{
    "status": "fail",
    "message": "Invalid input data"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

## Logout

- Method : POST
- URL : /logout

- Respoonse:

```
code: 200
body:
{
    "status": "fail",
    "message": "Logout successful"
}
```

```
code: 400
body:
{
    "status": "fail",
    "message": "Invalid"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

<br>

## Dictionary Alphabet

- Method : GET
- URL : /dictionary/alphabet

- Respoonse:

```

code: 201
body:
{
    "status": "success",
    "message": "Dictionary obtain succesfully",
    "data":
}
```

```
code:400
body:
{

}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}

```

<br>

## Dictionary Number

- Method : GET
- URL : /dictionary/number

- Request:

```

```

- Response:

```
code: 201
body:
{

}
```

```
code:400
body:
{

}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

<br>

## Get Quiz

- Method : GET
- URL : /quiz

- Respoonse:

```
code: 200
body:
{
    "status" : "success"
    "message" : "Quiz obtain succesfully"
    "data" :
{
    "id": "",
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
code:400
body:
{
    "status" : "fail"
    "message": "Bad Request"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

<br>

## Post Quiz

- Method : POST
- URL : /quiz

- Request:

```
{
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
    ]
}
```

- Respoonse:

```
code:201
body:
{
    "status" : "fail"
    "message": "Quiz post success"
}
```

```
code:400
body:
{
    "status" : "fail"
    "message": "Bad Request"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}

```

<br>

## Get Quiz User

- Method : GET
- URL : /quiz/user/{{ userId }}

- Request:

- Respoonse:

```
code: 200
body:
{
    "status" : "success"
    "message": "Get quiz user"
    "data" : {
    "_id": "",
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "createdAt": "",
    "updatedAt": "",
    "quiz": [
        {
        "_id": "",
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
code:400
body:
{
    "status" : "fail"
    "message": "Bad Request"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

<br>

## Get Quiz Detail

- Method : GET
- URL : /quiz/{{ quizId }}

- Respoonse:

```
code: 201
body:
{
    "status" : "success"
    "message" : "Quiz obtain succesfully"
    "data" :
    {
    "id": "",
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
code:400
body:
{
    "status" : "fail"
    "message": "Bad Request"
}
```

```
code: 500
body:
{
    "status": "error",
    "message": "Internal Server Error, An unexpected error occurred on the server. Please try again later.",
}
```

<br>
