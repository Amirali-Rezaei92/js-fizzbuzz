
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
    // Controllo se il numero è divisibile sia per 3 che per 5
    if (Numero % 3 === 0 && Numero % 5 === 0) {
        console.log('FIZZBUZZ');}
        // Controllo se il numero è divisibile per 5
        else if (Numero % 5 === 0) {
            console.log('BUZZ')
        } // Controllo se il numero è divisibile per 3
        else if (Numero % 3 === 0) {
            console.log('FIZZ')
        } // Se non è divisibile né per 3 né per 5, stampo il numero
        else {
            console.log(Numero)
        }
    }
