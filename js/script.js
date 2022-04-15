const convertor = document.querySelector('#convertor');
const img = document.querySelector('img');
const change = document.querySelector('#change');

const imgList = ["./img/dollar.png", "./img/euro.png", "../img/iene.png "];

//images of coins
function changeimage() {
    if (img.attributes.src.nodeValue == imgList[0]) {
        img.setAttribute('src', `${imgList[1]}`);
        change.setAttribute('value', 'Euro');
    } else if (img.attributes.src.nodeValue == imgList[1]) {
        img.setAttribute('src', `${imgList[2]}`);
        change.setAttribute('value', 'Iene');
    } else if (img.attributes.src.nodeValue == imgList[2]) {
        img.setAttribute('src', `${imgList[0]}`);
        change.setAttribute('value', 'Dollar');
    }
}
//values on 04/13/2022
const dollar = 4.69;
const euro = 5.08;
const iene = 0.037;

//conversor on function
convertor.addEventListener('click', () => {
    const real = document.querySelector('#real').value;
    if (img.attributes.src.nodeValue == imgList[0]) {
        const result = parseFloat(real / dollar).toFixed(2);
        alert(`${result} Dolares!`);
    } else if (img.attributes.src.nodeValue == imgList[1]) {
        const result = parseFloat(real / euro).toFixed(2);
        alert(`${result} Euros!`);
    } else if (img.attributes.src.nodeValue == imgList[2]) {
        const result = parseFloat(real / iene).toFixed(2);
        alert(`${result} Ienes!`);
    }
});
