function addExercise() {
    let exercise = document.getElementById("inputExercise").value;
    let list = document.getElementById("workoutList");
    let entry = document.createElement("li");
    entry.innerHTML = exercise;
    list.appendChild(entry);
}
document.getElementById("add").addEventListener("click", addExercise);