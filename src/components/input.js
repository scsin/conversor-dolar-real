import React from 'react';

function Input(props){
    return(
        <div>
            <form>
                <input className="Input" onChange={props.getValue} type={props.typet} placeholder={props.one}></input>
            </form>
        </div>
    )
}

export default Input;
