var text = document.getElementById('text');
var dialogueLine = 0;
var nothing;

function talk(dialogue) {
    text.innerHTML = dialogue;
}

document.addEventListener("click", function() {
    if (dialogueLine == 0) { talk("Im softsheep14"); document.getElementById('clicktocontinue').style.display = 'none'; }
    dialogueLine == 1 ? talk("You look familiar, but I dont think we have met before") : nothing;
    dialogueLine == 2 ? talk("Anyways I need help with something") : nothing;
    dialogueLine == 3 ? talk("As a member of the Council Of Soft Sheeps its my job to ensure the safety of all softsheeps") : nothing;
    dialogueLine == 4 ? talk("And recently a council member by the name of softsheep13 has gone missing") : nothing;
    dialogueLine == 5 ? talk("Very bad things have been happening to softsheeps ever since then") : nothing;
    dialogueLine == 6 ? talk("Just yesterday softsheep249 was attacked by alligators") : nothing;
    dialogueLine == 7 ? talk("We suspect that softsheep13 may be responsible for this increase in violence") : nothing;
    dialogueLine == 8 ? talk("So we need your help in tracking him down") : nothing;
    dialogueLine == 9 ? talk("Last time we saw him he was in his popular roblox game \"softsheep13 hangout\"") : nothing;
    dialogueLine == 10 ? talk("So you should probably start there") : nothing;
    dialogueLine == 11 ? talk("Also there will be a very cool prize if you find him") : nothing;
    dialogueLine == 12 ? talk("I wish you the best of luck") : nothing;
    dialogueLine == 13 ? talk("You should be able to find his roblox game on his youtube channel") : nothing;
    dialogueLine == 14 ? talk("https://www.youtube.com/@SOFTSHEEP13") : nothing;
    dialogueLine++;
});
