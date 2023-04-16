const converter = document.querySelect('#Converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const ChangeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const swap= () => {
    if (C.innerHTML ---'&#x2103'){
        C.innerHTML = '&#8457';
        F.innerHTML = '&#x2103';
        converter.placeholder = "Temperature in &#8457";

    }else{
        F.innerHTML = '&#8457';
        C.innerHTML = '&#x2103';
        converter.placeholder = "Temperature in &#x2103";

    };

};
const reset = () => {
    converter.value = '';
    result.innerHTML = '';

}
const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(convert.value)) {
        result.style.color = "black"
        if (C.innerHTML === '&#x2103') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}&#x2103 is equal to ${value.toFixed(2)}&#8457 `;

        }else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}&#8457 is equal to ${value.toFixed(2)}&#x2103`;
        }
    } else if (converter.value == '') {
        result.style.color = "#993300"
        result.innerHTML = 'Enter number';

    } else{
        result.style.color = "#993300"
        result.innerHTML = 'Enter only numbers !!!';
    }
}

ChangeButton.addEventlistener('click',swap);
resetButton.addEventlistener('click',reset);
convertButton.addEventlistener('click',convert);