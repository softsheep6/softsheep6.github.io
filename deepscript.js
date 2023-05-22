var text = document.getElementById('text');
var dialogueLine = 0;

function talk(dialogue) {
    text.innerHTML = dialogue;
}

document.addEventListener("click", function() {
    if (dialogueLine == 0) { talk("Im softsheep14"); document.getElementById('clicktocontinue').style.display = 'none'; }
    dialogueLine == 1 ? talk("You look familiar, but I dont think we have met") : console.log("");
    dialogueLine == 2 ? talk("Anyways I need help with something") : console.log("");
    dialogueLine == 3 ? talk("As a member of the Council Of Soft Sheeps its my job to ensure the safety of all softsheeps") : console.log("");
    dialogueLine == 4 ? talk("words2") : console.log("");
    dialogueLine == 5 ? talk("words3") : console.log("");
    dialogueLine == 6 ? talk("words4") : console.log("");
    dialogueLine == 7 ? talk("words5") : console.log("");
    dialogueLine == 8 ? talk("words6") : console.log("");
    dialogueLine == 9 ? talk("words7") : console.log("");
    dialogueLine == 10 ? talk("words8") : console.log("");
    dialogueLine == 11 ? talk("words9") : console.log("");
    dialogueLine == 12 ? talk("words0") : console.log("");
    dialogueLine++;
});

