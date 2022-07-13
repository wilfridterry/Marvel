import './Button.scss';

export default function Button({label, isGrey}) {

    let className = 'Button';
    className += isGrey ? ' Grey' : '';

    return (
        <button className={className}>
            <div className="Button-Inner Grey">{label}</div>
        </button>
    );
}