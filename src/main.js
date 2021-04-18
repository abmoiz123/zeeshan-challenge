import React, { Component } from 'react';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            currentbalance: 15000,
            income: 25000,
            expense: -10000,
            transactionhistory: [
                {
                    id: '1',
                    transactiondetail: 'project 1 income',
                    transactionamount: '10000',
                },
                {
                    id: '2',
                    transactiondetail: 'project 2 income',
                    transactionamount: '15000',
                },
                {
                    id: '3',
                    transactiondetail: 'project 1 expense',
                    transactionamount: '-5000',
                },
                {
                    id: '4',
                    transactiondetail: 'project 2 expense',
                    transactionamount: '-5000',
                },
            ],
            newtransactiondetail: '',
            newtransactionamount: '',
        }
    }

    addtransaction = () => {
        let newtransactiondetail = this.state.newtransactiondetail;
        let newtransactionamount = this.state.newtransactionamount;
        if (newtransactiondetail && newtransactionamount !== '') {
            if (newtransactionamount.charAt(0) === '-') {
                this.setState({
                    expense: this.state.expense + Number(newtransactionamount),
                }, () => {
                    var newtransaction = {
                        id: newtransactionamount,
                        transactiondetail: newtransactiondetail,
                        transactionamount: newtransactionamount,
                    }
                    var balance = this.state.income + this.state.expense;
                    this.setState({
                        currentbalance: balance,
                        transactionhistory: [...this.state.transactionhistory, newtransaction],
                        newtransactiondetail: '',
                        newtransactionamount: ''
                    })
                })
            } else {
                this.setState({
                    income: this.state.income + Number(newtransactionamount)
                }, () => {
                    var newtransaction = {
                        id: newtransactionamount,
                        transactiondetail: newtransactiondetail,
                        transactionamount: newtransactionamount,
                    }
                    var balance = this.state.income + this.state.expense;
                    this.setState({
                        currentbalance: balance,
                        transactionhistory: [...this.state.transactionhistory, newtransaction],
                        newtransactiondetail: '',
                        newtransactionamount: ''
                    })
                })
            }
        } else {
            alert('insert detail')
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li><h2>Kb khila rahy ho khaousa :)</h2></li>
                    <li><h2>current balance</h2></li>
                    <li>{this.state.currentbalance}</li>
                    <li><h2>Income</h2></li>
                    <li>{this.state.income}</li>
                    <li><h2>expense</h2></li>
                    <li>{this.state.expense}</li>
                    <li><h2>transaction history</h2></li>
                    <li>{this.state.transactionhistory.map((v, i) => {
                        return (
                            <ul key={i}>
                                <li id={v.id}>
                                    {v.transactiondetail}
                                    {v.transactionamount}
                                </li>
                            </ul>
                        )
                    })}</li>
                    <li><h2>Add transaction</h2></li>
                    <li>Description</li>
                    <li><input onChange={(e) => this.setState({ newtransactiondetail: e.target.value })} value={this.state.newtransactiondetail} /></li>
                    <li>transaction amount</li>
                    <li><input type="number" onChange={(e) => this.setState({ newtransactionamount: e.target.value })} value={this.state.newtransactionamount} /></li>
                </ul>
                <button onClick={this.addtransaction}>add transaction</button>
            </div>
        )
    }
}
export default Main;