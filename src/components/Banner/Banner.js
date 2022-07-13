import './Banner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

export default function Banner() {
    return (
        <div className="Banner">
            <img src={avengers} alt="Avengers" />
            <div className="Banner-Text">
                New comics every week! <br />
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="Avengers logo" />
        </div>
    );
}