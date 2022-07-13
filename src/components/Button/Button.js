import './Button.scss';

export default function Button({label, isGrey, isLong}) {

    let className = 'Button';
    className += isGrey ? ' Grey' : '';
    className += isLong ? ' Long' : '';

    return (
        <button className={className}>
            <div className="Button-Inner Grey">{label}</div>
        </button>
    );
}