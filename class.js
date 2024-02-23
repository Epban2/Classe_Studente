/**
* Creare una classe studente che contenga le seguenti informazioni: nome, cognome, età e matricola.
* Aqgiungere un metodo che controlli se lo studente è maggiorenne.
* Aggiungere anche un metodo che restituisca una stringa con tutti i valori degli attributi.
* Istanziare due oggetti delle classe creata e verificare se gli studenti sono maggiorenni o minorenni e stampare i loro dati.
*/

//controllo che gli input siano validi con le regex
function load() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var matricola = document.getElementById("matricola").value;
    var eta = document.getElementById("eta").value;

    var regexNome = /^[a-zA-Z]+$/;
    var regexCognome = /^[A-Za-z\s]+$/;
    var regexMatricola = /^[a-zA-Z0-9]+$/; //lettere, numeri, no spazi, no punteggiatura

    if (!regexNome.test(nome)) {
        console.log(nome);
        document.getElementById("alert").innerHTML = "Correggere il campo nome!";
    }
    else if (!regexCognome.test(cognome)) {
        document.getElementById("alert").innerHTML = "Correggere il campo cognome!";
    }
    else if (!regexMatricola.test(matricola)) {
        document.getElementById("alert").innerHTML = "Correggere il campo matricola!";
    } else if (eta < 0 || eta > 99) {
        document.getElementById("alert").innerHTML = "Correggere il campo eta'!";
    }
    else {
        let studente = new Studente(nome, cognome, eta, matricola);
        document.getElementById("alert").innerHTML = "";
    }


}
//classe
class Studente {
    constructor(nome, cognome, eta, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.matricola = matricola;
        this.stampa();

        let str;
        if (this.isMaggiorenne()) {
            str = "maggiorenne"
        } else {
            str = "minorenne"
        }
        document.getElementById("maggiorenne").innerHTML = "Lo studente e' " + str;
    }

    stampa() {
        document.getElementById("stampa").innerHTML = this.nome + " " + this.cognome + ", " + this.eta + ", " + this.matricola;
    }

    isMaggiorenne() {
        return this.eta > 17; //true se maggiorenne, false altrimenti
    }
}