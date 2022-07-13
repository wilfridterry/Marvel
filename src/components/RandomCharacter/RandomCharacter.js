import thor from '../../resources/img/thor.jpeg';
import './RandomCharacter.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Button from '../Button/Button';

export default function RandomCharacter() {
    return (
        <div className="RandomCharacter">
            <div className="RandomCharacter-Block">
                <img src={thor} alt="Thor" className="RandomCharacter-Image" />
                <div className="RandomCharacter-Info">
                    <div className="RandomCharacter-Name">Thor</div>
                    <div className="RandomCharacter-Descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Alias eligendi, quae doloremque accusamus possimus ducimus, dignissimos fugiat, 
                        quibusdam delectus sunt officia numquam dolore soluta...</div>
                    <div className="RandomCharacter-Btns">
                        <Button label="Homepage"/>
                        <Button label="Wiki" isGrey={true}/> 
                    </div>
                </div> 
            </div>
            <div className="RandomCharacter-Static">
                <div className="RandomCharacter-Title">
                    Random character for today! <br/>
                    Do you want to get to know him better?
                </div>
                <div className="RandomCharacter-Title RandomCharacter-Subtitle">
                    Or choose another one
                </div>
                <div className="RandomCharacter-Btn">
                    <Button label="Try it"/>
                </div>
                <img className="RandomCharacter-Decor" src={mjolnir} alt="Mjolnir" />
            </div>
        </div>
    );
}