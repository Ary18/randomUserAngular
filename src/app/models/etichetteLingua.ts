export class EtichettaLingua {
    public scegliUnaLingua: string;
    public italiano: string;
    public inglese: string;
    public francese: string;
    public nome: string;
    public cognome: string;
    public dataNascita: string;
    public indirizzo: string;
    public foto: string;
    public telefono: string;
    public email: string;
    public dettagli: string;
    public ritornoAllaTabella: string;

    constructor(_nome: string,
                _cognome: string,
                _dataNascita: string,
                _indirizzo: string,
                _foto: string,
                _telefono: string,
                _email: string,
                _dettagli: string,
                _ritornaAllaTabella: string,
                _scegliUnaLingua: string,
                _italiano: string,
                _francese: string,
                _inglese: string) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.dataNascita = _dataNascita;
        this.indirizzo = _indirizzo;
        this.foto = _foto;
        this.telefono = _telefono;
        this.email = _email;
        this.dettagli = _dettagli;
        this.ritornoAllaTabella = _ritornaAllaTabella;
        this.scegliUnaLingua = _scegliUnaLingua;
        this.italiano = _italiano;
        this.inglese = _inglese;
        this.francese = _francese;
    }
}
