import './CharacterInfo.scss';

import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../Button/Button';
import Skeleton from '../Skeleton/Skeleton';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import CharacterImage from '../CharacterImage/CharacterImage';

class CharacterInfo extends Component {

    state = {
        character: null,
        loading: false,
        error: false,
    };

    #marvelService = new MarvelService();
    
    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.characterId !== prevProps.characterId) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const {characterId} = this.props;

        if (!characterId) {
            return;
        }

        this.setState({loading: true});

        this.#marvelService
            .getCharacter(characterId)
            .then(this.handleCharLoaded)
            .catch(this.handleError);
    }

    handleCharLoaded = (character) => {
        this.setState({
            character, 
            loading: false
        });
    }

    handleError = () => {
        this.setState({
            loading: false, 
            error: true
        });
    }

    render() {
    
        const {character, loading, error} = this.state;

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
}

const View = ({character}) => {
    const {thumbnail, name, description, homepage, wiki, comics} = character;

    let comicsList = comics.slice(10);
    comicsList = comicsList.map((item, index) => {
        return (<div className="CharacterInfo-ComicsItem" key={item.id}>
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
                {description === null ? null :  'There is no description'}
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

export default CharacterInfo;