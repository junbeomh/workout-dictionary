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

document.getElementById("hardcodeBench").addEventListener("click", function () { removeExercise("Bench"); });
document.getElementById("hardcodeInclineBench").addEventListener("click", function () { removeExercise("InclineBench"); });
document.getElementById("delete").addEventListener("click", deleteWorkout);
