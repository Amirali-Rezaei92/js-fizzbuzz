
//Obiettivo:
//Voliamo stampare i numeri 1 a 100.
//Ogni numero divisibile per 3 deve essere stampato come "FIZZ".
//Ogni numero divisibile per 5 deve essere stampato come "BUZZ".
//se numero è divisibile sia per 3 che per 5, deve essere stampato "FIZZBUZZ".

//=========================================================================
//MAIN
//==========================================================================

//Inizio del ciclo che va da 1 a 100

for (let Numero = 1; Numero <= 100; Numero++) {

    if (Numero % 3 === 0 && Numero % 5 === 0) {
        console.log('FIZZBUZZ');}
        else if (Numero % 5 === 0) {
            console.log('BUZZ')
        }
        else if (Numero % 3 === 0) {
            console.log('FIZZ')
        }
        else {
            console.log(Numero)
        }
    }
