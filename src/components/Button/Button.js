import './Button.scss';

export default function Button(props) {

    const {
        label, 
        isGrey, 
        isLong, 
        href,
        onClick
    } = props;

    let className = 'Button';
    className += isGrey ? ' Grey' : '';
    className += isLong ? ' Long' : '';

    const handleClick = onClick ? {onClick: onClick} : null
    
    return (
        <a href={href} 
            className={className} 
            {...handleClick}
        >
            <div   className="Button-Inner" >
                {label}
            </div>
        </a>
    );
}