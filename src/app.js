//import './utils.js';
//import subtract, { square, add } from './utils'

// with default exports naming is not important as with naming exports, we can call subtract anithingWe Want and as long as we call the function like that, it is going to work
// console.log(square(4))

// console.log(add(5,6))

// console.log(subtract(8,2))
// console.log('app.js is running');


// exports - default exports - named exports


//import * as person from './person.js'
//import isSenior, { isAdult, canDrink } from './person'

// console.log(isAdult(18))

// console.log(canDrink(20))

// console.log(isSenior(65))

//import validator from 'validator';


//console.log(validator.isEmail('test@gmail.com'))

// const template = <p>THIS IS JSX FROM WEBPACK</p>

// ReactDOM.render(template, document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import { setTextFilter } from './actions/filters'
import css from './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'normalize.css'


const store = configureStore();


store.dispatch(addExpense({description:'Water bill', amount: 4500}))
store.dispatch(addExpense({description:'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description:'Rent', amount: 109500}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));



// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi, My Name is ${this.name}`
//     }
// }

// const oldSyntax = new OldSyntax();
// //console.log(oldSyntax.getGreeting()) -> it is working this way and we don't need to bind the method
// // but if we create the variable it's going to broke the this binding key word, we can fix that with binding in constructor
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting())

// class NewSyntax {
//     name = 'Koko';
//     getGreeting = () => {
//         return `Hi, My Name is ${this.name}`
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting())
// console.log(newSyntax)



// class Header extends React.Component {
//     render() {
//         //console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component {
//      render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What Should I do
//                 </button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOption}>Remove All</button>
//                 {this.props.options.map(cur => <Option key={cur} optionText={cur}/>)}
//             </div>
//         )
//     }
// }


// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }


