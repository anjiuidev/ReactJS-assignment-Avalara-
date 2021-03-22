import { memo } from "react";

function Button(props) {
    const { type, text, size, onClick, disabled } = props;

    return (
        <button type={type}
            className={`waves-effect waves-light ${size === 'large' ? 'btn-large' : 'btn'} ${type === 'submit' ? '' : 'red darken-2'}`}
            onClick={onClick}
            disabled={disabled}
            data-testid="button"
        >{text}</button>
    );
}

export default memo(Button);
