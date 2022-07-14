import thor from '../../resources/img/thor.jpeg';
import './RandomCharacter.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Button from '../Button/Button';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

export default class RandomCharacter extends Component {
     
    state = {
        character: {}
    };

    #marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onCharLoaded = (character) => {
        this.setState({character})
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        this.#marvelService
            .getCharacter(id)
            .then(this.onCharLoaded);
    }

    render() {
        const {
            character: {
                name, 
                description, 
                thumbnail, 
                homepage, 
                wiki 
            }
        } = this.state;

        return (
            <div className="RandomCharacter">
                <div className="RandomCharacter-Block">
                    <img src={thumbnail} alt={name} className="RandomCharacter-Image" />
                    <div className="RandomCharacter-Info">
                        <div className="RandomCharacter-Name">{name}</div>
                        <div className="RandomCharacter-Descr">{description}</div>
                        <div className="RandomCharacter-Btns">
                            <Button label="Homepage" href={homepage}/>
                            <Button label="Wiki" isGrey={true} href={wiki}/> 
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
}