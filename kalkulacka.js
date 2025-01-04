// Přiřazení událostí k tlačítkům

document.getElementById('tlPlus').addEventListener('click', () => provestOperaci('+'));
document.getElementById('tlMinus').addEventListener('click', () => provestOperaci('-'));
document.getElementById('tlKrat').addEventListener('click', () => provestOperaci('*'));
document.getElementById('tlDeleno').addEventListener('click', () => provestOperaci('/'));

// Funkce pro provedení operace
function provestOperaci(operator) {
    const vstup1 = document.getElementById('vstup1').value;
    const vstup2 = document.getElementById('vstup2').value;
    const vysledekDiv = document.getElementById('vysledek');
    const operatorButton = document.getElementById('operator');

    // Ověření, že vstupy jsou čísla
    if (isNaN(vstup1) || isNaN(vstup2) || vstup1.trim() === '' || vstup2.trim() === '') {
        vysledekDiv.textContent = 'Error'; // Zobrazení chyby
        return;
    }

    // Převod vstupů na čísla a provedení operace
    const cislo1 = parseFloat(vstup1);
    const cislo2 = parseFloat(vstup2);
    let vysledek;

    // Provedení výpočtu podle operátoru
    switch (operator) {
        case '+':
            vysledek = cislo1 + cislo2;
            break;
        case '-':
            vysledek = cislo1 - cislo2;
            break;
        case '*':
            vysledek = cislo1 * cislo2;
            break;
        case '/':
            if (cislo2 === 0) {
                vysledekDiv.textContent = 'Error'; // Chyba při dělení nulou
                return;
            }
            vysledek = cislo1 / cislo2;
            break;
        default:
            vysledekDiv.textContent = 'Error'; // Chyba při neznámé operaci
            return;
    }

    // Zobrazení operátoru uprostřed a výsledku nahoře
    operatorButton.textContent = operator;
    vysledekDiv.textContent = vysledek;
}
