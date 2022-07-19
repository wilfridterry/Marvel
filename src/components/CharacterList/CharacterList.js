import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Button from '../Button/Button';
import CharacterItem from '../CharacterItem/CharacterItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import './CharacterList.scss';

class CharacterList extends Component {

    offset = 210;

    state = {
        characters: [],
        error: false,
        loading: true,
        newItemLoading: false,
        ended: false
    }

    #marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharacters();

        // window.addEventListener('scroll', this.handleScroll);        
    }    
    
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }

    // handleScroll = (e) => {
    //     const height = Math.floor(document.documentElement.scrollHeight 
    //             - document.documentElement.clientHeight);
        
    //     if (Math.floor(window.scrollY + 50) > height) {
    //         this.handleLoadMore();
    //     }
    // }

    updateCharacters(offset) {

        this.handleLoading();
        this.#marvelService
            .getAllCharacters(9, offset)
            .then(this.handleLoaded)
            .catch(this.handleError);
    }
    
    handleLoading = () => {
        this.setState({newItemLoading: true});
    }

    handleLoaded = (characters) => {
        
        const ended = characters.length < 9 ? true : false;
        this.setState(state => {
            return {
                characters: [...state.characters, ...characters], 
                loading: false,
                newItemLoading: false,
                ended: ended
            };
        });
    }

    handleLoadMore = () => {
        this.offset += 9;

        this.updateCharacters(this.offset)
    }
    
    handleError = () => {
        this.setState({error: false});
    }

    render() {
        const {characters, loading, newItemLoading, error, ended} = this.state;

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
                        onClick={this.handleLoadMore}
                        disabled={newItemLoading}
                        style={{display: ended ? 'none' : 'block'}}
                    /> 
                </div>        
            </div>
        );
    }
}


export default CharacterList;