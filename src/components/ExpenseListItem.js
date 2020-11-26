// Export a stateless functional component
// description, amount, createdAt

import React from 'react';

// const ExpenseListItem = (props) => (
//     <div>
//         <p>{props.expenses.map(expense => {
//                 return expense.description
//         })}</p>
//         <p>{props.expenses.map(expense => {
//             return expense.amount
//     })}</p>
//     </div>
// )

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// }

// export default connect(mapStateToProps)(ExpenseListItem)

import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;