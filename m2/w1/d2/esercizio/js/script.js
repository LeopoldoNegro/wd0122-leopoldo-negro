function startShopping(){

    let budget = 100;
    let compere = 0;

    while (budget > 0) {

        let prezzi = Math.floor(Math.random() * 100);

        if (prezzi <= budget) {
            compere += 1;
            budget -= prezzi;

            document.getElementById('primo').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }
        
        if (budget <= 50) {
            document.getElementById('messaggio1').innerHTML = "HAI FINITO META' BUDGET";
            break;
        }

        if (budget < 10) {
            document.getElementById('messaggio2').innerHTML = 'STAI FINENDO IL BUDGET';
            break;
        }

    }

    document.getElementById('primo').innerHTML += '<p>Hai acquistato: ' + compere + ' oggetti </p>';

}














