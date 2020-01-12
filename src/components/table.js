import React from 'react';

function Table(props) {
    return(
        <div>
            <table className="striped Table"> {/*  #00897b teal darken-3 */}
                <tbody>
                    <tr><td>Cotação Dólar</td><td>R$ {props.valueDolar}</td></tr>
                    <tr><td>IOF</td><td>{props.valueIOF}</td></tr>
                    <tr><td>Total em dólar sem imposto</td><td>U$ {props.valueDolarSI}</td></tr>
                    <tr><td>Total em dólar com imposto</td><td>U$ {props.valueDolarCI}</td></tr>
                    <tr><td>Total em real sem imposto</td><td>R$ {props.valueRealSI}</td></tr>
                    <tr><td>Total em real com imposto</td><td>R$ {props.valueRealCI}</td></tr>   
                </tbody>
            </table>
        </div>
    )
}

export default Table;
