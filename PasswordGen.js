// Password Generator Function - http://www.net-comber/charset.html
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

var el = document.getElementById('generateBtn');
console.log(el)
  el.addEventListener('click', generatePassword);
    

    
    
    //Generate Function
    function generatePassword() {
        //Password Var
        //Filter unchecked types
        //Loop Length
        //add final PW
        const passwordLength = lengthEl.value;
        const lower = lowercaseEl.checked;
        const upper = uppercaseEl.checked;
        const number = numberEl.checked;
        const symbol = symbolEl.checked;
        let generatePassword = '';

        const typesCount = lower + upper + number + symbol;

        console.log('typesCount: ', typesCount);

        const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
        (
            item => Object.values(item)[0]
        );

        console.log('typesArr ', typesArr);

        if(typesCount == 0) {
            return '';
        }
        for(let i = 0; i < passwordLength; i += typesCount) {
         typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
        console.log('funcName ', funcName);

        generatePassword += randomFunc[funcName] ();
    });
}
    const finalPassword = generatePassword.slice(0, passwordLength);

    

    resultEl.innerText = finalPassword;

}


function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber(){ 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
    const symbol = '!@#$%^&*(){}[]=<>/,.';
    return symbol[Math.floor (Math.random() * symbol.length)];
}

console.log(getRandomSymbol());