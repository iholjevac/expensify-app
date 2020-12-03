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

import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
    </div>
);

export default ExpenseListItem;