import React from 'react';

function Select(props) {
    return (
        <div>
            <form action="#">
                <p><label><input id={props.id} name={props.name} checked={props.checked} type="radio" onChange={props.getType} /><span>{props.title}</span></label></p>
            </form>
        </div>
    )
}

export default Select;
