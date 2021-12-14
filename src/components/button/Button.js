import React from 'react';


function Button ({type = "button", onClick, title }) {

    return (
            <button
            type={type}
            onClick={onClick}>
            {title}
            </button>

    );
};

export default Button;