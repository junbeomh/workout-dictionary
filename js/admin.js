var typeSelector = document.getElementById("type");
var nameInput = document.getElementById('name');
var descriptionBox = document.getElementById("description");
var type = 'shoulder';
var name = 'Bench Press'
var description = 'Lying down on a flat bench, bring the bar down to your chest and press it back up.';

typeSelector.addEventListener("change", (e) => {
    console.log(`e.target.value = ${e.target.value} `);
    type = e.target.value;
});

nameInput.addEventListener('input', function (evt) {
    name = document.getElementById('name').value;
});

var onTextAreaChange = () => {
    description = document.getElementById('description').value;
}

var addToDic = async () => {
    let url = API_ADD_TO_DICTIONARY;
    console.log("ID_TOKEN: " + ID_TOKEN);
    console.log("ACCESS_TOKEN: " + ACCESS_TOKEN);
    console.log("ID: " + ID);
    let body = {
        "type": type,
        "name": name,
        "description": description 
    }
    console.log(body);

    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Authorization': ID_TOKEN,
            // 'Authorization': 'eyJraWQiOiJwRlNGSVE3WWVRaEhpbHNtZWRXeVwveEdHQnRkU2lDdVNCblVHQjVmWllrcz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiRF9weXNQdy1pclkzeGtpYUlIc2xaZyIsInN1YiI6ImUxZGVhNTIyLWIzYWItNDJjNy1hZjA3LWUwZDM3ZGNmYmIwYSIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9KaUVaaW4xVGlfR29vZ2xlIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9KaUVaaW4xVGkiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ29vZ2xlXzEwNzY3MDQ1ODE0Nzc5ODM4NTI0MCIsImF1ZCI6IjZwNW9wazNyaHBkMzNqMjAwc2U5OHRldTFoIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA3NjcwNDU4MTQ3Nzk4Mzg1MjQwIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYwNjcxNzk0MTMzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDY3NjkwNjMsImV4cCI6MTYwNjc3MjY2MywiaWF0IjoxNjA2NzY5MDYzLCJlbWFpbCI6Imp1bmJlb21oOTRAZ21haWwuY29tIn0.QCFKzU6DsK4YWwFfc9ezW3MKeRepKc1sFi2TK03j8RKQdn-ZiZhlHoqrDj2M2nIbITUjeqO5tkZwRP07a22G-M_4v0rlRzqkL0HlXvTXLYLcdntcPlVOhoQ6XjWaw4S9luU663SqVwwvW2im6M7NeQ8xrZco3KiOsEvH2Cm1fYSAns871liqr-pBSVxiJTmC4k8nNzvXoTIQ7zh5PMsbFg8kS7ujVSyu-9hJPKCYCt9a_jaiE1lUWJ0XlD4VZX6r5_1kRcfA4ZBICunZIlZszQfiVlveP753UNJniCpzW-yJAqFcF9ITDnBbtS_xMYs4MXZvWpadL8KGGwmp2ZrfYA',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    }).then((response) => {
        console.log(response);
        // let btn = document.getElementById(`fav-btn-${index}`);
        // btn.innerHTML = 'added';
        // btn.style.pointerEvents = 'none';
    });
    // return response.json(); // parses JSON response into native JavaScript objects
}

document.getElementById("add").addEventListener("click", addToDic);