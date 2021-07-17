# Endpoints

- /classroom
```json
{
    "community": {
        "id": 1,
        "name": "Example School"
    },
    "class": {
        "id": 1,
        "name": "Example Class"
    },
    "categories": [
        {
            "name": "General",
            "channels": [
                {
                    "name": "announcements",
                    "type": "text"
                },
                {
                    "name": "classroom",
                    "type": "mixed",
                    "subchannels": [
                        {
                        }
                    ]
                }
            ]
        }
    ]
}
```

- /activities

- /leaderboard/
``` json
{
    "school": [
        {
            "name": "John Smith",
            "points": 9999
        }
    ],
    "community": [
        {
            "name": "John Smith",
            "points": 9999
        }
    ]
}
