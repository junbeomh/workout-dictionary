 // Todo - delete from db
 function deleteExercise(exercise) {
    let card = document.getElementById(exercise);
    card.remove();
}

//Todo - save into db
function saveExercise(exercise){
    console.log("Todo - save into db")
}

// Will be manually added to element when created dynamically when page loaded
document.getElementById("manualDelete").addEventListener("click", function () { deleteExercise("BenchPress"); });