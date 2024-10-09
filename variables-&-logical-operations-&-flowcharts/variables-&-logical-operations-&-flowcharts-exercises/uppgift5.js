/*
Skapa ett program som konverterar celcius till farenheit. 
Användaren ska ge input (numeriska värden) i celcius som programmet 
sedan ska konvertera till farenheit och skriva ut det som en popup.

Börja med att göra en flowchart och översätt denna sedan till pseudokod. Parprogrammering 
uppmuntras för att bolla tankar.
*/
// Funktion för att konvertera Celsius till Fahrenheit
function konverteraCelsiusTillFahrenheit() {
    // Fråga användaren efter temperatur i Celsius
    let celsius = prompt("Ange temperatur i Celsius:");
    
    // Konvertera inmatningen till ett flyttal
    celsius = parseFloat(celsius);

    // Beräkna Fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32;

    // Visa resultatet i en popup
    alert("Temperaturen i Fahrenheit är: " + fahrenheit);
}

// Anropa funktionen
konverteraCelsiusTillFahrenheit();
