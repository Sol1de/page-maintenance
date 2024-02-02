// selection/créer élements necessaires
chrEspace = "‎ "
const phrase = document.querySelector(".container-texte")
const cursor = document.querySelector(".cursor")
const liste = [
    `ARE CREATING LUXURY.`,
    `DEFINE ELEGANCE.`,
    `SHAPE EXCLUSIVITY.`,
    `DESIGN TIMELESS PRODUCTS.`,
    `INNOVATE WITH STYLE.`,
    `CRAFT LUXURIOUS DREAMS.`,
    `EMBODY SOPHISTICATION.`,
    `BUILD LUXE VISIONS.`,
    `LOVE WHAT WE DO.`,
    `DESIGN WITH LOVE.`,
    `CRAFT ELEGANCE.`,
    `LOVE DESIGN.`,
    `DESIGN WITH LOVE.`,
    `LOVE STYLE.`,
    `DESIGN.`,
    `CRAFT LOVE.`,
    `ARE THE LOVE BEHIND DESIGN.`,
    `CRAFT, BUILD, ANTICIPATE.`,
    `DESIGN WHILE YOU WAIT.`,
    `BUILD, DESIGN, REVEAL NEXT.`,
    `ARE LAUNCHING SOON.`,
    `EMBRACE BEAUTY.`,
    `CHERISH HUMANITY.`,
    `HONOR CRAFTSMEN.`,
    `REBIRTH.`,
    `LOVE ELEGANCE.`,
    `CONNECT WITH HUMANITY.`,
    `SUPPORT CRAFTSMEN.`,
    `CRAFT BEAUTY.`,
    `SHAPE ELEGANT OBJECTS.`,
    `THINK WITH KINDNESS.`,
    `DESIGN BEAUTIFUL THOUGHTS.`,
    `CHERISH OBJECTS OF GRACE.`,
    `CREATE BEAUTIFUL IDEAS.`,
    `FOSTER OBJECTS OF JOY.`,
    `NOURISH THOUGHTFUL DESIGN.`,
    `SCULPT BEAUTY WITH CARE.`,
    `INSPIRE THROUGH OBJECTS.`,
    `DESIGN WITH PASSION.`,
    `EMBRACE ELEGANCE.`,
    `CRAFT DESIRABLE OBJECTS.`,
    `DEFINE DESIGN RICH IN REFINEMENT.`,
    `LOVE ART.`,
    `FUSE PASSION INTO DESIGN.`,
    `ELEVATE ELEGANCE.`,
    `CREATE IRRESISTIBLE DESIGN.`,
    `DESIGN WITH DESIRABILITY.`,
    `ARE THE ARCHITECTS OF LUXURY EXPERIENCES.`,
    `BUILD INCREDIBLE MOMENTS WITH PASSION.`,
    `CRAFT LUXURIOUS JOURNEYS FOR ALL.`,
    `DESIGN THE EXTRAORDINARY FOR EVERYONE.`,
    `CREATE LUXURY, CURATED BY THE FINEST MINDS.`,
    `BUILD BRIDGES TO INCREDIBLE LUXURY.`,
    `ARE CREATORS OF EXCEPTIONAL EXPERIENCES.`,
    `SHAPE LUXURIOUS DREAMS INTO REALITY.`
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
            letterSpan.classList.add('appear-animation');
            phrase.appendChild(letterSpan);
            i++; // Incrémentation de i à chaque itération
        } 
        
        else {
            clearInterval(interval);
            cursor.classList.add('animation-blink');

            setTimeout(() => {
                removeLetter(phraseIndex);
            }, 2000);
        }
    }, 100);
}

//fonction retirant la lettre au texte de la page
function removeLetter(phraseIndex) {
    let texte = getPhrase(phraseIndex);
    let i = texte.length;
    cursor.classList.remove('animation-blink');

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