let name = localStorage.getItem("name");
document.getElementById("title").innerHTML = name;

// TODO: Delete workout from db
function deleteWorkout(){
    window.location.href = "profile.html"
}

// TODO: delete exercise in workout in db
function removeExercise(exercise){
    let card = document.getElementById(exercise)
    card.remove();
}

let sudoData = ["Bench", "Incline", "test"]

function createExercise(exercise) {
    let container = document.createElement("div");
    let titleDiv = document.createElement("div");
    let title = document.createElement("p");
    let buttonDiv = document.createElement("div");
    let button = document.createElement("button");

    container.setAttribute("id", exercise);
    container.setAttribute("class", "row mb-2");
    titleDiv.setAttribute("class", "col-2");
    title.innerHTML = exercise;
    titleDiv.appendChild(title);
    container.appendChild(titleDiv);
    buttonDiv.setAttribute("class","col-10");
    button.setAttribute("id", exercise + "Btn");
    button.setAttribute("class", "btn btn-secondary")
    button.innerHTML = "X";
    button.addEventListener("click", function () { removeExercise(exercise); });
    buttonDiv.appendChild(button);
    container.appendChild(buttonDiv);

    document.getElementById("workout").appendChild(container);
}

sudoData.forEach(element => {
    createExercise(element);
});

document.getElementById("delete").addEventListener("click", deleteWorkout);
