import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Button from '../Button/Button';
import CharacterItem from '../CharacterItem/CharacterItem';
import Spinner from '../Spinner/Spinner';
import './CharacterList.scss';

class CharacterList extends Component {
    state = {
        characters: [],
        error: false,
        loading: true
    }

    #marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharacters();
    }    
    
    updateCharacters() {
        this.#marvelService
            .getAllCharacters()
            .then(this.handleLoaded);
    }
    
    handleLoaded = (characters) => {
        this.setState({characters: characters, loading: false});
    }

    
    render() {
        const {characters, loading} = this.state;

        const items = characters.map((item, index) => {
            return <CharacterItem 
                        key={item.id} 
                        charcater={item}
                        onClick={() => this.props.onCharacterSelected(item.id)}
                        />;
        });

        const list = (<div className="CharacterList-Grid">
                        {items} 
                    </div>);

        const spinner = loading ? <Spinner /> : null;

        const content = !loading ? list : null;

        return (
            <div className="CharacterList">
                    {spinner}
                    {content}
                <div className="CharacterList-Btn">
                    <Button label="Load more" isLong={true}/> 
                </div>        
            </div>
        );
    }
}


export default CharacterList;