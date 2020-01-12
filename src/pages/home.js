import React from 'react';
import '../App.css';

import Input from '../components/input';
import Button from '../components/button';
import Select from '../components/select';
import Table from '../components/table';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dolarValue: "",
            stateRate: "",
            paymentType: "",
            valueIOF: "",
            valueDolarSI: "",
            valueDolarCI: "",
            valueRealSI: "",
            valueRealCI: "",
            price: this.GetApiData(),
        }
    }

    handleChange = (e, element) => {
        const newState = this.state;
        if (e.target.value == 'on') {
            newState[element] = e.target.id;
        } else {
            newState[element] = e.target.value;
        }
        this.setState(newState);
    }

    handleClick = () => {
        const infos = {
            dolarValue: this.state.dolarValue,
            stateRate: this.state.stateRate,
            paymentType: this.state.paymentType,
        }
        this.SetValueIOF();
    }

    SetValueIOF = () => {
        if (this.state.paymentType == 'Dinheiro') {
            this.state.valueIOF = '0.011';
        } else {
            this.state.valueIOF = '0.064';
        }
        this.calculate();
    }

    async GetApiData() {
        const axios = require('axios');
        const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
        const price = response.data['USD']['bid'];
        this.setState({ 'price': price });
    }

    calculate = () => {
        const valueDolarSI = parseFloat(this.state.dolarValue);
        const valueDolarCI = (parseFloat(this.state.dolarValue)) + ((parseFloat(this.state.dolarValue)) * (parseFloat(this.state.stateRate)));
        const valueRealSI = parseFloat(this.state.dolarValue) * parseFloat(this.state.price);
        const valueRealCI = (parseFloat(this.state.dolarValue) + parseFloat(this.state.stateRate)) * (parseFloat(this.state.price) + parseFloat(this.state.valueIOF));
        
        this.setState({ 'valueDolarSI': valueDolarSI });
        this.setState({ 'valueDolarCI': valueDolarCI });
        this.setState({ 'valueRealSI': valueRealSI });
        this.setState({ 'valueRealCI': valueRealCI });
    }
    // const x = (parseInt(this.state.dolarValue) + parseInt(this.state.stateRate) + parseInt(this.state.valueIOF)) * parseInt(this.state.price)

    render() {
        return (
            <div className="homepage">
                <h4 className="Title" >CONVERSOR DÓLAR - REAL</h4>

                <Input getValue={(e) => this.handleChange((e), 'dolarValue')} typet="text" one="Valor em Dólar" />
                <Input getValue={(e) => this.handleChange((e), 'stateRate')} typet="text" one="Taxa do Estado" />

                <Select id="Dinheiro" description="Dinheiro" title="Dinheiro" getType={(e) => this.handleChange((e), 'paymentType')} name="paymentType" checked={this.state.paymentType === 'Dinheiro'} />
                <Select id="Cartão" description="Cartão" title="Cartão" getType={(e) => this.handleChange((e), 'paymentType')} name="paymentType" checked={this.state.paymentType === 'Cartão'} />

                <Button onClick={this.handleClick} one="CALCULAR" />

                <Table valueDolar={String(this.state.price)} valueIOF={this.state.valueIOF} valueDolarSI={this.state.valueDolarSI} valueDolarCI={this.state.valueDolarCI} valueRealSI={this.state.valueRealSI} valueRealCI={this.state.valueRealCI} />
            </div>
        )
    }
}

export default Home;
