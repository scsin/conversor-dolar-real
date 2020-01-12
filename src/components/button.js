import React from 'react';

function Button(props) {
    return (
        <div>
            <button className="waves-effect waves-light btn #00897b teal darken-3" onClick={props.onClick}>{props.one}</button>
        </div>
    )
}

export default Button;
