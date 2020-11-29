function addToDic(){
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").innerHTML;
    console.log(name);
    console.log(type);
    console.log(description);
}

document.getElementById("add").addEventListener("click", addToDic);