var numbersArr = [];
var memory = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
'x', 'y', 'z'];

function conceptTwo() {
    document.getElementById('jscript').innerHTML = '';
    document.getElementById('jscript2').innerHTML = '';
    document.getElementById('jscript3').innerHTML = '';
    document.getElementById('jscript4').innerHTML = '';
    document.getElementById('jscript5').innerHTML = '';
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', // goes with the key in order to decrypt 
            'x', 'y', 'z'];

    var numbersArr = [];
    var memory = [];

        for (i = 0; i < alphabet.length; i++) {
            const randomNumberGet = Math.floor(Math.random() * 17576);
            var repeat = numbersArr.indexOf(randomNumberGet);
                if (repeat != -1) {
                    document.getElementById('jscript').innerHTML = "failed";
                    document.getElementById('jscript2').innerHTML = "failed";
                    document.getElementById('jscript3').innerHTML = "failed"; // if there are any repeated numbers then failed will be shown 
                    document.getElementById('jscript4').innerHTML = "failed";
                    document.getElementById('jscript5').innerHTML = "failed";
                }
                else {
            numbersArr[i] = randomNumberGet;
                }

        }
        for (b = 0; b < alphabet.length; b++) {
            memory[b] = alphabet[b];
            alphabet[b] = numbersArr[b]; // switching around what is inside each array 
        
        }
    

    
    document.getElementById('jscript4').innerHTML = "key - " + alphabet; // what will not be known and will be used for decrypting  
    document.getElementById('jscript5').innerHTML = "alphabet/memory - " + memory; // checking that the alphabet hasn't been deleted 

    // a random number is placed in the encryption and the "key" is what placement in the encryption and how many digits the random number is 
    // reverse the process that it was just through 
    return alphabet;

}
var inMemory;
var findIndex;
let Encryption = [];
let alphabetArray = [];
let final = [];
function inputEncrypt() {
    const word = document.getElementById('input').value;
    document.getElementById('jscript').innerHTML = word;
    const wordToArray = Array.from(word);
    console.log(wordToArray);
    alphabetArray = conceptTwo();
    
        for (n = 0; n < wordToArray.length; n++) {
            findIndex = wordToArray[n];
            console.log(findIndex);
            inMemory = memory.indexOf(findIndex);
            Encryption = alphabetArray[inMemory];
            console.log(Encryption);
            final[n] = Encryption; 
        }
    document.getElementById('jscript6').innerHTML = final;
}
