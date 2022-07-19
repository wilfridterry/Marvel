import './Button.scss';

export default function Button(props) {

    const {
        label, 
        isGrey, 
        isLong, 
        href,
        onClick,
        disabled,
        style
    } = props;

    let className = 'Button';
    className += isGrey ? ' Grey' : '';
    className += isLong ? ' Long' : '';
    className += disabled ? ' Disabled' : '';


    const handleClick = onClick ? {onClick: onClick} : null
    
    return (
        <a href={href} 
            className={className} 
            {...handleClick}
            style={style}
        >
            <div   className="Button-Inner" >
                {label}
            </div>
        </a>
    );
}