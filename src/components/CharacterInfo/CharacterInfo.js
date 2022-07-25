import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';
import { Component, useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import CharacterImage from '../CharacterImage/CharacterImage';

import './CharacterInfo.scss';

const CharacterInfo = (props) => {

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();
    
    useEffect(() => {
        updateChar()
    }, [props.characterId]);
    

    const updateChar = () => {
        const {characterId} = props;

        if (!characterId) {
            return;
        }

        setLoading(true);

        marvelService
            .getCharacter(characterId)
            .then(handleCharLoaded)
            .catch(handleError);
    }

    const handleCharLoaded = (character) => {
        setCharacter(character);
        setLoading(false);
    }

    const handleError = () => {
        setLoading(false);
        setError(true);
    }

    const skeleton = character || loading || error ? null : <Skeleton/>; 
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !character) ? <View character={character}/> : null;

    return (
        <div>
            <div className="CharacterInfo">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        </div>
    );
}

const View = ({character}) => {
    const {thumbnail, name, description, homepage, wiki, comics} = character;

    let comicsList = comics.slice(10);
    comicsList = comicsList.map((item, index) => {
        return (<div className="CharacterInfo-ComicsItem" key={index}>
                    {item.name}
                </div>);
    });

    return (
        <>
            <div className="CharacterInfo-Header">
                <CharacterImage 
                    thumbnail={thumbnail} 
                    name={name} 
                />
                <div className="CharacterInfo-Details">
                    <div className="CharacterInfo-Name">
                        {name}
                    </div>
                    <div className="CharacterInfo-Btns">
                        <Button label='Homepage' href={homepage}/>
                        <Button label='Wiki' isGrey={true} href={wiki}/>
                    </div>
                </div>
            </div>
            <div className="CharacterInfo-Descr">
                {!description ? 'There is no description' : null}
                {description}
            </div>
            <div className="CharacterInfo-Comics">Comics: </div>
            <div className="CharacterInfo-ComicsList">
                {comicsList.length === 0 ? 'There is no comics.' : null}
                {comicsList}            
            </div>
        </>
    );
} 

CharacterInfo.propTypes = {
    characterId: PropTypes.number
}

export default CharacterInfo;