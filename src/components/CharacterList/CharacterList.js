import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef} from 'react';
import MarvelService from '../../services/MarvelService';
import Button from '../Button/Button';
import CharacterItem from '../CharacterItem/CharacterItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import './CharacterList.scss';

const CharacterList = (props) => {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [ended, setEnded] = useState(false);
    const [offset, setOffset] = useState(210);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateCharacters();       
    }, []);   


    const updateCharacters = (offset) => {

        handleLoading();

        marvelService.getAllCharacters(9, offset)
            .then(handleLoaded)
            .catch(handleError);
    }
    
    const handleLoading = () => {
        setNewItemLoading(true);
    }

    const handleLoaded = (characters) => {
        
        const ended = characters.length < 9 ? true : false;

        setCharacters(oldCharacters => [...oldCharacters, ...characters]);
        setLoading(false);
        setNewItemLoading(false);
        setEnded(ended);
        setOffset(offset => offset + 9);
    }

    const handleLoadMore = () => {
        updateCharacters(offset);
    }
    
    const handleError = () => {
        setError(true);
        setLoading(false);
    }

    const characterRefs = useRef([]);

    const focusOnItem = (id) => {
        characterRefs.current.forEach(item => {
            item.classList.remove('CharacterItem-Selected')
        });
        characterRefs.current[id].classList.add('CharacterItem-Selected');
        characterRefs.current[id].focus();
    }

    const items = characters.map((item, index) => {
        return <CharacterItem 
                    tabIndex={0}
                    key={item.id} 
                    charcater={item}
                    onClick={() => {
                        props.onCharacterSelected(item);
                        focusOnItem(index);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            props.onCharacterSelected(item.id);
                            focusOnItem(index);
                        }
                    }}
                    refChar={el => {characterRefs.current[index] = el}}
                    />;
    });

    const list = (<div className="CharacterList-Grid">
                    {items} 
                </div>);

    const spinner = loading ? <Spinner /> : null;

    const content = !loading ? list : null;
    const errorMessage = error ? <ErrorMessage /> : null;

    return (
        <div className="CharacterList">
                {content}
                {spinner}
                {errorMessage}
            <div className="CharacterList-Btn">
                <Button 
                    label="Load more" 
                    isLong={true} 
                    onClick={handleLoadMore}
                    disabled={newItemLoading}
                    style={{display: ended ? 'none' : 'block'}}
                /> 
            </div>        
        </div>
    );
    
}

CharacterList.propTypes = {
    onCharacterSelected: PropTypes.func
}

export default CharacterList;