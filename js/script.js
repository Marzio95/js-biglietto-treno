let km = prompt('Kilometri da percorrere:');
let age = prompt('Anni passeggero:');

const prezzoKm = 0.21;

let molt = km * prezzoKm;
document.getElementById('my_output').innerHTML = molt


if (age < 18) {
    molt - (molt / 100 * 20)
} else if (age > 65){
    molt - (molt / 100 * 40)
} else {
    molt 
}
