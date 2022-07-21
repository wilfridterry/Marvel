import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

    constructor(props) {
        super(props);

        this.characterRefs = React.createRef();
        this.characterRefs.current = [];
    }

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

    focusOnItem = (id) => {
        this.characterRefs.current.forEach(item => {
            item.classList.remove('CharacterItem-Selected')
        });
        this.characterRefs.current[id].classList.add('CharacterItem-Selected');
        this.characterRefs.current[id].focus();
    }

    render() {
        const {characters, loading, newItemLoading, error, ended} = this.state;

        const items = characters.map((item, index) => {
            return <CharacterItem 
                        tabIndex={0}
                        key={item.id} 
                        charcater={item}
                        onClick={() => {
                            this.props.onCharacterSelected(item.id);
                            this.focusOnItem(index);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                this.props.onCharacterSelected(item.id);
                                this.focusOnItem(index);
                            }
                        }}
                        refChar={el => {this.characterRefs.current[index] = el}}
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

CharacterList.propTypes = {
    onCharacterSelected: PropTypes.func
}

export default CharacterList;