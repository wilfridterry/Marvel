import './CharacterContent.scss';
import CharacterList from '../CharacterList/CharacterList';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class CharacterContent  extends Component {
    
    state = {
        selectedCharacter: null
    }

    // static getDerivedStateFromError(error) {
    //     return {error: true};
    // }

    handleCharacterSelected = (id) => {
        this.setState({
            selectedCharacter: id
        });
    }

    render() {
        return (
            <div className="CharacterContent">
                <ErrorBoundary>
                    <CharacterList onCharacterSelected={this.handleCharacterSelected}/>
                </ErrorBoundary>

                <ErrorBoundary>
                    <CharacterInfo characterId={this.state.selectedCharacter}/>
                </ErrorBoundary>
            </div>
        );
    }
}


export default CharacterContent;