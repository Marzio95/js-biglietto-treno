let km = prompt('Kilometri da percorrere:');
document.getElementById('KilometriInseriti').innerHTML = km;

let age = prompt('Anni passeggero:');
document.getElementById('anniInseriti').innerHTML = age;

const prezzoKm = 0.21;
document.getElementById('prezzoAlKilometro').innerHTML = prezzoKm;

const scontoGiovani = 20;
document.getElementById('sconto_inferiore18anni').innerHTML = scontoGiovani;

const scontoAnziani = 40;
document.getElementById('sconto_superiore65anni').innerHTML = scontoAnziani

let molt = km * prezzoKm;
document.getElementById('prezzo_nosconto').innerHTML = molt;


if (age < 18) {
    document.getElementById('prezzo_nosconto').innerHTML = molt - (molt / 100 * 20)
} else if (age > 65){
    document.getElementById('prezzo_nosconto').innerHTML = molt - (molt / 100 * 40)
} else {
    document.getElementById('prezzo_nosconto').innerHTML = molt 
}
