let km = prompt('Kilometri da percorrere:');
let age = prompt('Anni passeggero:');

const prezzoKm = 0.21;

let molt = km * prezzoKm;
document.getElementById('prezzo_nosconto').innerHTML = molt


if (age < 18) {
    document.getElementById('prezzo_nosconto').innerHTML = molt - (molt / 100 * 20)
} else if (age > 65){
    document.getElementById('prezzo_nosconto').innerHTML = molt - (molt / 100 * 40)
} else {
    document.getElementById('prezzo_nosconto').innerHTML = molt 
}
