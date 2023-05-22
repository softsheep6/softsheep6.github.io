var text = document.getElementById('text');
var dialogueLine = 0;

function talk(dialogue) {
    text.innerHTML = dialogue;
}

document.addEventListener("click", function() {
    dialogueLine == 0 ? talk("Hi") : console.log("");
    dialogueLine == 1 ? talk("Im softsheep14") : console.log("");
    dialogueLine == 2 ? talk("You look familiar, but I dont think we have met") : console.log("");
    dialogueLine == 3 ? talk("Anyways I need help with something") : console.log("");
    dialogueLine == 4 ? talk("words1") : console.log("");
    dialogueLine == 5 ? talk("words2") : console.log("");
    dialogueLine == 6 ? talk("words3") : console.log("");
    dialogueLine == 7 ? talk("words4") : console.log("");
    dialogueLine == 8 ? talk("words5") : console.log("");
    dialogueLine == 9 ? talk("words6") : console.log("");
    dialogueLine == 10 ? talk("words7") : console.log("");
    dialogueLine == 11 ? talk("words8") : console.log("");
    dialogueLine == 12 ? talk("words9") : console.log("");
    dialogueLine++;
});

