var ID_TOKEN = localStorage.getItem("ID_TOKEN");
var ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
var ID = localStorage.getItem("USER_ID");

console.log("ID: " + ID);
let url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/getuser?uid=' + ID;

var getUserData = async () => {
    await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        async:false,
        credentials: 'same-origin',
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUEx0Y2g2LXF5SWkwbkV5N3dlVGh2QSIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsIm5vbmNlIjoielJRSk1SOWp2VTNCbDgzRHJRUmg1Z1hyZzhWcEo1NVdGdU0tQ3p1RG1rUXhjMV8xZG95R19oOTRDNnlhMXFja3VGQl90YzV1cUVOMVhhUDk5UU1FSUtZSWZER0ZXR0xaUGEwamduZmVjMnBVbzhrNHZkRGs5cUQxa1BjQkpGRU5XdlNhb2xrTDJ0X0lnUzhtR3ZhQW9xNkh2YzJ3V01wVkdSU2FJdWJsNmpnIiwiYXVkIjoiNnA1b3BrM3JocGQzM2oyMDBzZTk4dGV1MWgiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDc2NzA0NTgxNDc3OTgzODUyNDAiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjA2NzE3OTQxMzMxIn1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwNjcxNzk0MiwiZXhwIjoxNjA2NzIxNTQyLCJpYXQiOjE2MDY3MTc5NDIsImVtYWlsIjoianVuYmVvbWg5NEBnbWFpbC5jb20ifQ.SWjNZD2V1PGbrKXT7cvDmquaJVwacI8zULZP762UMqnRLOgiEaA-tXk5exaG-PRmnr9V1IehsFe6d_xlr2eJA4BUz5d6G3u6loKCGpWP2pyOn9OJ0LoZURyOGjx_djPsPZ_-w-RRrCtBh-IJiwTSCpvLs4e0zVk5--gl7yXLZVDpl6x2S8pn7WvZoHjDuZD9rSSPIDTjJygev_ZtvJ9XYD_t7GuXLHNkiSej0oAtKvSFRt-tgvqyZC9txMWssd6YfBEpgDWagGAWhGfENoQQqML2GiM2xR99O1rh3ju680EVS2I3gCqNx0IcL99UBeiccCHf8Sz68UVw51EFWnrF6Q',
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data.Item);
        let admin = document.getElementById('admin');
        if (data.Item.admin) {
            admin.style.display = 'block';
        } else {
            admin.style.display = 'none';
        }
    });
}

getUserData();
