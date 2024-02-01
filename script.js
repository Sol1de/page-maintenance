// selection/créer élements necessaires
const phrase = document.querySelector(".texte")
const liste = [
    "WE ARE CREATING LUXURY.",
    "WE DEFINE ELEGANCE.",
    "WE SHAPE EXCLUSIVITY.",
    "WE DESIGN TIMELESS PRODUCTS.",
    "WE INNOVATE WITH STYLE.",
    "WE CRAFT LUXURIOUS DREAMS.",
    "WE EMBODY SOPHISTICATION.",
    "WE BUILD LUXE VISIONS.",
    "WE LOVE WHAT WE DO.",
    "WE DESIGN WITH LOVE.",
    "WE CRAFT ELEGANCE.",
    "WE LOVE DESIGN.",
    "WE DESIGN WITH LOVE.",
    "WE LOVE STYLE.",
    "WE DESIGN.",
    "WE CRAFT LOVE.",
    "WE ARE THE LOVE BEHIND DESIGN.",
    "WE CRAFT, BUILD, ANTICIPATE.",
    "WE DESIGN WHILE YOU WAIT.",
    "WE BUILD, DESIGN, REVEAL NEXT.",
    "WE ARE LAUNCHING SOON.",
    "WE EMBRACE BEAUTY.",
    "WE CHERISH HUMANITY.",
    "WE HONOR CRAFTSMEN.",
    "WE REBIRTH.",
    "WE LOVE ELEGANCE.",
    "WE CONNECT WITH HUMANITY.",
    "WE SUPPORT CRAFTSMEN.",
    "WE CRAFT BEAUTY.",
    "WE SHAPE ELEGANT OBJECTS.",
    "WE THINK WITH KINDNESS.",
    "WE DESIGN BEAUTIFUL THOUGHTS.",
    "WE CHERISH OBJECTS OF GRACE.",
    "WE CREATE BEAUTIFUL IDEAS.",
    "WE FOSTER OBJECTS OF JOY.",
    "WE NOURISH THOUGHTFUL DESIGN.",
    "WE SCULPT BEAUTY WITH CARE.",
    "WE INSPIRE THROUGH OBJECTS.",
    "WE DESIGN WITH PASSION.",
    "WE EMBRACE ELEGANCE.",
    "WE CRAFT DESIRABLE OBJECTS.",
    "WE DEFINE DESIGN RICH IN REFINEMENT.",
    "WE LOVE ART.",
    "WE FUSE PASSION INTO DESIGN.",
    "WE ELEVATE ELEGANCE.",
    "WE CREATE IRRESISTIBLE DESIGN.",
    "WE DESIGN WITH DESIRABILITY.",
    "WE ARE THE ARCHITECTS OF LUXURY EXPERIENCES.",
    "WE BUILD INCREDIBLE MOMENTS WITH PASSION.",
    "WE CRAFT LUXURIOUS JOURNEYS FOR ALL.",
    "WE DESIGN THE EXTRAORDINARY FOR EVERYONE.",
    "WE CREATE LUXURY, CURATED BY THE FINEST MINDS.",
    "WE BUILD BRIDGES TO INCREDIBLE LUXURY.",
    "WE ARE CREATORS OF EXCEPTIONAL EXPERIENCES.",
    "WE SHAPE LUXURIOUS DREAMS INTO REALITY."
]

//fonction retournant un element d'une liste a partir de son index
function getPhrase(index) {
    return liste[index]
}

//fonction retournant une lettre a partir d'une phrase 
function getLetter(phrase, index) {
    return phrase[index]
}

//fonction ajoutant la lettre au texte de la page
function addLetter(phraseIndex) {
    let texte = getPhrase(phraseIndex).split("");
    let i = 0;

    let interval = setInterval(() => {
        if (i < texte.length) {
            phrase.textContent += texte[i];
            i++;
        } 
        
        else {
            clearInterval(interval);
            removeLetter(phraseIndex);
        }
    }, 100);
}

//fonction retirant la lettre au texte de la page
function removeLetter(phraseIndex) {
    let texte = getPhrase(phraseIndex);
    let i = texte.length
    let interval = setInterval(() => {
        phrase.textContent = ""

        if (i >= texte.length) {
            let newTexte = texte.slice(0, -1);
            texte = newTexte
            phrase.textContent = newTexte
            i--
        }

        else {
            clearInterval(interval)
        }
    }, 100)
}

//on lance les fonction une fois que les éléments de la page sont chargés
document.addEventListener("DOMContentLoaded", function () {
    addLetter(0)
});