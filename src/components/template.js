import React from 'react'

const Template = ({ dados }) => {
    return (
        <div>                        
            < div className="table-responsive" >
                <table className="table table-striped table-result">
                    <thead>
                        <tr>
                            <th colSpan="4">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4">{dados.nome}</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>                            
                            <th colSpan="1" className="ten wide">
                                Abertura</th>
                            <th colSpan="1" className="six wide">
                                Email</th>
                            <th colSpan="1" className="six wide">
                                Telefone</th>
                            <th colSpan="1" className="two wide">
                                UF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="1">{dados.abertura}</td>
                            <td colSpan="1">{dados.email}</td>
                            <td colSpan="1">{dados.telefone}</td>
                            <td colSpan="1">{dados.uf}</td>
                            
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th colSpan="4">Atividade Principal</th>
                        </tr>
                        <tr>
                            <th colSpan="1" className="two wide">
                                Código</th>
                            <th colSpan="3">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                                                                                
                            {
                                dados.atividade_principal.map(atividade =>
                                    <tr>
                                        <td colSpan="1">{atividade.code}</td>
                                        <td colSpan="3">{atividade.text}</td>
                                        <hr />
                                    </tr>
                                )
                            }
                        
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th colSpan="4">Atividades Secundarias</th>
                        </tr>
                        <tr>
                            <th colSpan="1" className="two wide">
                                Código</th>
                            <th colSpan="3">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>                        
                            {
                                dados.atividades_secundarias.map(atividade =>
                                    <tr>
                                        <td colSpan="1">{atividade.code}</td>
                                        <td colSpan="3">{atividade.text}</td>
                                        <hr />
                                    </tr>
                                )
                            }                        
                    </tbody>
                    
                </table>                                                                                                     
            </div >
        </div>
    )
};

export default Template    

