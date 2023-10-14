
function getComputerChoice() {
//crear variable que contenga todas las opciones
    const options = ["rock", "paper", "scissors"];
//se elije una posibilidad
    const randomSelection = Math.floor(Math.random() * 3);
    const choice = options[randomSelection];
// entregar la posibilidad
    return choice
}

