import React, { Component } from 'react'
import Template from './components/template'

export default class Terceiro extends Component {
    state = {
        loaded: false,
        cnpj: "",        
        dados: { atividades_secundarias: [], atividade_principal : []}
    }

    constructor(props) {
        super(props)        
        this.setCnpj = this.setCnpj.bind(this)              
        this.realizarConsulta = this.realizarConsulta.bind(this)              
    }  

    setCnpj(e) {
        this.setState({ cnpj: e.target.value })
    }    

    realizarConsulta() {
        const doc = this.state.cnpj
        if (this.validarCNPJ(doc)){
            const endpoint = 'https://www.receitaws.com.br/v1/cnpj/'
            fetch(endpoint + doc)
                .then(res => res.json())
                .then((data) => {
                    this.setState({ dados: data, loaded: true })
                })
                .catch(console.log)
        }                 
        else{
            alert("O CNPJ digitado é inválido!")
            this.setState({ cnpj: "" })
        }                
    }
    
    render() {
        const { cnpj } = this.state
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Consultar CNPJ</h1>                    
                    <input type="text" placeholder="CNPJ" value={cnpj} onChange={this.setCnpj} />
                        <button className="btn btn-primary btn-sm" onClick={this.realizarConsulta}>Buscar</button>                    
                </div>                                                 
                <hr />
                {this.state.loaded ? (<Template dados={this.state.dados} />) : null}                
            </div>
        )
    }

    // ------------------------------------ //
    
    validarCNPJ(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        var tamanho = cnpj.length - 2
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        var i;
        var resultado;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

    }
}


