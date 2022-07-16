import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Button from '../Button/Button';
import CharacterItem from '../CharacterItem/CharacterItem';
import './CharacterList.scss';

class CharacterList extends Component {
    state = {
        characters: [],
        error: false
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
        this.setState({characters});
    }

    
    render() {
        const items = this.state.characters.map((item, index) => {
            return <CharacterItem key={item.id} charcater={item}/>;
        });

        return (
            <div className="CharacterList">
                <div className="CharacterList-Grid">
                    {items} 
                </div>
                <div className="CharacterList-Btn">
                    <Button label="Load more" isLong={true}/> 
                </div>        
            </div>
        );
    }
}


export default CharacterList;