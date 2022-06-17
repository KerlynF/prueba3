import React from "react";
import "../StyleSheets/Button.css";

function Button({text, isButtonClick})
{
    return (
        <button className={isButtonClick ? 'button-click' : 'restart-button'}>
            {text}
        </button>
    );
}
export default Button;