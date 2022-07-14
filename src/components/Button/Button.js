import './Button.scss';

export default function Button({label, isGrey, isLong, href}) {

    let className = 'Button';
    className += isGrey ? ' Grey' : '';
    className += isLong ? ' Long' : '';

    
    return (
        <a href={href} className={className}>
            <div   className="Button-Inner" >
                {label}
            </div>
        </a>
    );
}