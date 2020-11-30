var addToDic = async () => {
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").innerHTML;
    console.log(name);
    console.log(type);
    console.log(description);

    let url = 'https://d8rmqw1449.execute-api.us-west-2.amazonaws.com/prod/createexercise';
    console.log("ID_TOKEN: " + ID_TOKEN);
    console.log("ACCESS_TOKEN: " + ACCESS_TOKEN);
    console.log("ID: " + ID);
    let body = {
        "type": type,
        "name": name,
        "description": description 
    }

    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Authorization': ID_TOKEN,
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