// selection/créer élements necessaires
chrEspace = "‎ "
const phrase = document.querySelector(".container-texte")
const liste = [
    `${chrEspace} ARE CREATING LUXURY.`,
    `${chrEspace} DEFINE ELEGANCE.`,
    `${chrEspace} SHAPE EXCLUSIVITY.`,
    `${chrEspace} DESIGN TIMELESS PRODUCTS.`,
    `${chrEspace} INNOVATE WITH STYLE.`,
    `${chrEspace} CRAFT LUXURIOUS DREAMS.`,
    `${chrEspace} EMBODY SOPHISTICATION.`,
    `${chrEspace} BUILD LUXE VISIONS.`,
    `${chrEspace} LOVE WHAT WE DO.`,
    `${chrEspace} DESIGN WITH LOVE.`,
    `${chrEspace} CRAFT ELEGANCE.`,
    `${chrEspace} LOVE DESIGN.`,
    `${chrEspace} DESIGN WITH LOVE.`,
    `${chrEspace} LOVE STYLE.`,
    `${chrEspace} DESIGN.`,
    `${chrEspace} CRAFT LOVE.`,
    `${chrEspace} ARE THE LOVE BEHIND DESIGN.`,
    `${chrEspace} CRAFT, BUILD, ANTICIPATE.`,
    `${chrEspace} DESIGN WHILE YOU WAIT.`,
    `${chrEspace} BUILD, DESIGN, REVEAL NEXT.`,
    `${chrEspace} ARE LAUNCHING SOON.`,
    `${chrEspace} EMBRACE BEAUTY.`,
    `${chrEspace} CHERISH HUMANITY.`,
    `${chrEspace} HONOR CRAFTSMEN.`,
    `${chrEspace} REBIRTH.`,
    `${chrEspace} LOVE ELEGANCE.`,
    `${chrEspace} CONNECT WITH HUMANITY.`,
    `${chrEspace} SUPPORT CRAFTSMEN.`,
    `${chrEspace} CRAFT BEAUTY.`,
    `${chrEspace} SHAPE ELEGANT OBJECTS.`,
    `${chrEspace} THINK WITH KINDNESS.`,
    `${chrEspace} DESIGN BEAUTIFUL THOUGHTS.`,
    `${chrEspace} CHERISH OBJECTS OF GRACE.`,
    `${chrEspace} CREATE BEAUTIFUL IDEAS.`,
    `${chrEspace} FOSTER OBJECTS OF JOY.`,
    `${chrEspace} NOURISH THOUGHTFUL DESIGN.`,
    `${chrEspace} SCULPT BEAUTY WITH CARE.`,
    `${chrEspace} INSPIRE THROUGH OBJECTS.`,
    `${chrEspace} DESIGN WITH PASSION.`,
    `${chrEspace} EMBRACE ELEGANCE.`,
    `${chrEspace} CRAFT DESIRABLE OBJECTS.`,
    `${chrEspace} DEFINE DESIGN RICH IN REFINEMENT.`,
    `${chrEspace} LOVE ART.`,
    `${chrEspace} FUSE PASSION INTO DESIGN.`,
    `${chrEspace} ELEVATE ELEGANCE.`,
    `${chrEspace} CREATE IRRESISTIBLE DESIGN.`,
    `${chrEspace} DESIGN WITH DESIRABILITY.`,
    `${chrEspace} ARE THE ARCHITECTS OF LUXURY EXPERIENCES.`,
    `${chrEspace} BUILD INCREDIBLE MOMENTS WITH PASSION.`,
    `${chrEspace} CRAFT LUXURIOUS JOURNEYS FOR ALL.`,
    `${chrEspace} DESIGN THE EXTRAORDINARY FOR EVERYONE.`,
    `${chrEspace} CREATE LUXURY, CURATED BY THE FINEST MINDS.`,
    `${chrEspace} BUILD BRIDGES TO INCREDIBLE LUXURY.`,
    `${chrEspace} ARE CREATORS OF EXCEPTIONAL EXPERIENCES.`,
    `${chrEspace} SHAPE LUXURIOUS DREAMS INTO REALITY.`
]

//fonction retournant un element d'une liste a partir de son index
function getPhrase(index) {
    return liste[index]
}

//fonction retournant une lettre a partir d'une phrase 
function getLetter(phrase, index) {
    return phrase[index]
}

//fonction permettant de determiner l'index de la phrase suivante
function getRandomIndex() {
    return Math.floor(Math.random() * liste.length)
}

//fonction ajoutant la lettre au texte de la page
function addLetter(phraseIndex) {
    let texte = getPhrase(phraseIndex).split("");
    length = texte.length;
    let i = 0;

    let interval = setInterval(() => {
        
        if (i < length) {
            let letterSpan = document.createElement('span');
            letterSpan.textContent = getLetter(texte, i);
            letterSpan.classList.add('appear-animation'); // Ajoutez la classe pour l'animation
            phrase.appendChild(letterSpan);
            i++; // Incrémentation de i à chaque itération
        } 
        
        else {
            clearInterval(interval);
            setTimeout(() => {
                removeLetter(phraseIndex);
            }, 1000);
        }
    }, 100);
}

//fonction retirant la lettre au texte de la page
function removeLetter(phraseIndex) {
    let texte = getPhrase(phraseIndex);
    let i = texte.length;
    let interval = setInterval(() => {
        if (i > 0) {
            let newTexte = texte.slice(0, -1);
            phrase.textContent = newTexte;
            texte = newTexte;
            i--; // Décrémentation de i à chaque itération
        } else {
            clearInterval(interval);
            changePhrase();
        }
    }, 100);
}

//fonction permettant de lancer les fonctions addLetter et removeLetter
function changePhrase() {
    let phraseIndex = getRandomIndex();
    if (phrase.textContent.length > 0) {
        setTimeout(() => {
            removeLetter(phraseIndex);
        }, 1000);
    } else {
        addLetter(phraseIndex);
    }
}

//on lance les fonction une fois que les éléments de la page sont chargés
document.addEventListener("DOMContentLoaded", function () {
    changePhrase();
});