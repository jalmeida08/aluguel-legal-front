export class TipoTelefone{
    public id: number;
    public descricao: string;

    constructor(
        id: number,
        descricao: string
    ){
        this.id = id;
        this.descricao = descricao;
    }
}