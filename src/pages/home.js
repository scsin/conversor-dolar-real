import React from 'react';

import Input from '../components/input';
import Button from '../components/button';
import Select from '../components/select';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dolarValue:"",
            stateRate: "",
            paymentType: "",
        }
    }

    handleChange = (e, element) => {
        const newState = this.state;
        if(e.target.value == 'on') {
            newState[element] = e.target.id;
        } else {
            newState[element] = e.target.value;
        }
        this.setState(newState)
    }

    handleClick = () => {
        const infos = {
            dolarValue: this.state.dolarValue,
            stateRate: this.state.stateRate,
            paymentType: this.state.paymentType,
        }
        this.calculate();
    }

    calculate = () => {
        console.log(parseInt(this.state.dolarValue))
    }

    render() {
        return (
            <div className="homepage">
                <Input getValue={(e) => this.handleChange((e), 'dolarValue')} typet="text" one="Valor em Dólar" />
                <Input getValue={(e) => this.handleChange((e), 'stateRate')} typet="text" one="Taxa do Estado" />
                <Select id="dinheiro" title="Dinheiro" getType={(e) => this.handleChange((e), 'paymentType')} name="paymentType" checked={this.state.paymentType === 'dinheiro'} />
                <Select id="cartao" title="Cartão" getType={(e) => this.handleChange((e), 'paymentType')} name="paymentType" checked={this.state.paymentType === 'cartao'} />
                <Button style={{backgroundColor: "#69306D", fontWeight: 500}} onClick={this.handleClick} one="CALCULAR" />
            </div>
        )
    }
}

export default Home;
