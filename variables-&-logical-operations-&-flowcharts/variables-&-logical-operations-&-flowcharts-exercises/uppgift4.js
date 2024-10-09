/*
Skapa ett program som frågar användaren efter höjd och bredd. Med inmatningsvärden skall programmet räkna ut arean och visa svaret i consolen.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/

// Funktion för att beräkna area
function beraknaArea() {
    // Fråga användaren efter höjd
    let hojd = prompt("Ange höjd:");
    // Fråga användaren efter bredd
    let bredd = prompt("Ange bredd:");

    // Konvertera inmatningarna till tal
    hojd = parseFloat(hojd);
    bredd = parseFloat(bredd);

    // Beräkna arean
    let area = hojd * bredd;

    // Visa arean i konsolen
    console.log("Arean är: " + area);
}

// Anropa funktionen
beraknaArea();
