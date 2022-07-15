import img from './error.gif';

function ErrorMessage() {
    return (
        <img 
            src={img} 
            alt="Error404" 
            style={{
                display: 'block',
                width: '250px',
                height: '250px',
                objectFit: 'contain',
                margin: '0 auto'
            }}
        />
    );
}
    
export default ErrorMessage;