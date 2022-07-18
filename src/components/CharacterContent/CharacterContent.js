import './CharacterContent.scss';
import CharacterList from '../CharacterList/CharacterList';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import { Component } from 'react';

class CharacterContent  extends Component {
    
    state = {
        selectedCharacter: null
    }

    handleCharacterSelected = (id) => {
        this.setState({
            selectedCharacter: id
        });
    }

    render() {
        return (
            <div className="CharacterContent">
                <CharacterList onCharacterSelected={this.handleCharacterSelected}/>
                <CharacterInfo characterId={this.state.selectedCharacter}/>
            </div>
        );
    }
}

export default CharacterContent;