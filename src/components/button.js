import React from 'react';

function Button(props) {
    return (
        <div>
            <button style={props.style} className="waves-effect waves-light btn #e64a19 deep-orange darken-2" onClick={props.onClick}>{props.one}</button>
        </div>
    )
}

export default Button;
