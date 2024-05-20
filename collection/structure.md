# Database Structure

## Users

```
{
    "id": "",
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "createdAt": "",
    "updatedAt": ""
}
```

## Quiz

```
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
    },
    ...
  ],
  "createdAt" : "",
  "updateAt" : "",
}
```

## Dictionary

```
{
  "id": "",
  "type" : "",
  "createdAt" : "",
  "updateAt" : "",
}
```
