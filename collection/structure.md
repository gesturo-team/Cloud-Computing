# Database Structure

## Users

```
{
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
        "score": "",
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
```

## Dictionary

```
{
  "_id": "",
  "type": "",
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
```
