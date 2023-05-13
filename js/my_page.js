window.onload = () => {
    profile()
}

async function profile() {
    const response = await fetch(`http://127.0.0.1:8000/users/profile/`, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzOTk5ODYyLCJpYXQiOjE2ODM5NTY2NjIsImp0aSI6ImM1NjY3MThhYjM2ODQ1ODZiZTBhNzA0MGQyYzRiNGFhIiwidXNlcl9pZCI6MSwiZW1haWwiOiJrbXk5ODEwQG5hdmVyLmNvbSIsInVzZXJuYW1lIjoiXHVhZTQwXHViYmY4XHVjNjAxIn0.5Z4pffF0R8NnBN3KTNaeGNlrHQ7Q2_2SsuzZ0B-UbkI`
        },
        method: 'GET',
    })
    const response_json = await response.json()
    console.log(response_json)
}