/**
* Creare una classe studente che contenga le seguenti informazioni: nome, cognome, età e matricola.
* Aqgiungere un metodo che controlli se lo studente è maggiorenne.
* Aggiungere anche un metodo che restituisca una stringa con tutti i valori degli attributi.
* Istanziare due oggetti delle classe creata e verificare se gli studenti sono maggiorenni o minorenni e stampare i loro dati.
*/

class Studente {
    constructor(nome, cognome, eta, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.matricola = matricola;
        let ritorno = this.checkValues();
        if (ritorno) {
            this.stampa();
        }
    }

    checkValues() {
        var regexNome = /^[a-zA-Z]+$/;
        var regexCognome = /^[A-Za-z\s]+$/;
        var regexMatricola = /^[a-zA-Z0-9]+$/; //lettere, numeri, no spazi, no punteggiatura

        if (!regexNome.test(nome)) {
            console.log(nome);
            console.log("ciao");
            document.getElementById("alert").innerHTML = "Correggere il campo nome!";
            document.getElementById("nome").focus;
            return false;
        }
        else if (!regexCognome.test(cognome)) {
            document.getElementById("alert").innerHTML = "Correggere il campo cognome!";
            document.getElementById("cognome").focus;
            return false;
        }
        else if (!regexMatricola.test(this.matricola)) {
            document.getElementById("alert").innerHTML = "Matricola può contenere solo lettere e numeri";
            document.getElementById("matricola").focus;
            return false;
        } else {
            return true;
        }
    }


    stampa() {
        document.getElementById("stampa").innerHTML = this.nome + " " + this.cognome + ", " + this.eta + ", " + this.matricola;
    }
}

function load() {
    let nome = document.modulo.nome.value;
    let cognome = document.modulo.cognome.value;
    let eta = document.modulo.eta.value;
    let matricola = document.modulo.matricola.value;
    
    let studente = new Studente(nome, cognome, eta, matricola);
}