function editWorkout(workout) {
    localStorage.setItem("name", workout);
    window.location.href = "workoutEditor.html";
}

document.getElementById("Chest Day").addEventListener("click", function () { editWorkout("Chest Day"); });
document.getElementById("Back Day").addEventListener("click", function () { editWorkout("Back Day"); });
document.getElementById("Leg Day").addEventListener("click", function () { editWorkout("Leg Day"); });