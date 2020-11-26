// Higher order component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrrapedComponent) => {
    return (props) => (
        <div>
            { !props.isAdmin && <p>Please log in to see details</p>}
            { props.isAdmin ? <WrrapedComponent {...props}/> : <WrrapedComponent />}
        </div>
    )
}

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAdmin={true} info="There are the details" />, document.getElementById('app'))