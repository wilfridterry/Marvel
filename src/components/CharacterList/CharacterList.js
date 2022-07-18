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
    
    updateCharacters(offset = 0) {

        this.setState({loading: true});

        this.#marvelService
            .getAllCharacters(9, offset)
            .then(this.handleLoaded);
    }
    
    handleLoaded = (characters) => {
        console.log(characters);
        this.setState(state => {
            const newCharacters = state.characters.slice();

            return {
                characters: newCharacters.concat(characters), 
                loading: false
            };
        });
    }

    handleLoadMore = () => {
        this.updateCharacters(this.state.characters.length)
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
                    {content}
                    {spinner}
                <div className="CharacterList-Btn">
                    <Button 
                        label="Load more" 
                        isLong={true} 
                        onClick={this.handleLoadMore}
                    /> 
                </div>        
            </div>
        );
    }
}


export default CharacterList;