import './RandomCharacter.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CharacterImage from '../CharacterImage/CharacterImage';

const RandomCharacter = () => {
    const [character, setCharacter] = useState(null);

    const {error, loading, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, []);


    const handleCharLoaded = (character) => {
        setCharacter(character);
    }

    const updateChar = () => {
        clearError();
        
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        
        getCharacter(id).then(handleCharLoaded);
    }

    const handleClick = () => {
        updateChar();
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = loading || error || !character ? null : <View character={character}/>;
      
    return (
        <div className="RandomCharacter">
            {errorMessage}
            {spiner}
            {content}
            <div className="RandomCharacter-Static">
                <div className="RandomCharacter-Title">
                    Random character for today! <br/>
                    Do you want to get to know him better?
                </div>
                <div className="RandomCharacter-Title RandomCharacter-Subtitle">
                    Or choose another one
                </div>
                <div className="RandomCharacter-Btn">
                    <Button onClick={handleClick} label="Try it"/>
                </div>
                <img 
                    className="RandomCharacter-Decor" 
                    src={mjolnir} 
                    alt="Mjolnir" 
                    />
            </div>
        </div>
    );
    
}

const View = ({character}) => {
    const {
        name, 
        description, 
        thumbnail, 
        homepage, 
        wiki 
    } = character;

    return (
        <div className="RandomCharacter-Block">
            <CharacterImage 
                thumbnail={thumbnail} 
                name={name} 
                className="RandomCharacter-Image"
            />
            <div className="RandomCharacter-Info">
                <div className="RandomCharacter-Name">{name}</div>
                <div className="RandomCharacter-Descr">{description}</div>
                <div className="RandomCharacter-Btns">
                    <Button label="Homepage" href={homepage}/>
                    <Button label="Wiki" isGrey={true} href={wiki}/> 
                </div>
            </div> 
        </div>
    );
}


export default RandomCharacter;