import './Button.scss';

export default function Button({label, color}) {
    return (
        <button className='Button Grey'>
            <div className="Button-Inner Grey">{label}</div>
        </button>
    );
}