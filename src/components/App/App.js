import { Component } from 'react';
import CharacterContent from '../CharacterContent/CharacterContent';
import Header from '../Header/Header';
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import './App.scss';
import vision from '../../resources/img/vision.png';
import Banner from '../Banner/Banner';
import ComicsList from '../ComicsList/ComicsList';
import SingleComics from '../SingleComics/SingleComics';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                   <div className="characters">
                        <ErrorBoundary>
                            <RandomCharacter /> 
                        </ErrorBoundary>
                        <CharacterContent />
                        {/* <img src={vision} alt="Vision" className="App-Decor" /> */}
                   </div>
                   {/* <div className="comics">
                        <Banner />
                        <ComicsList />
                   </div> */}
                   {/* <div className="single-comics">
                        <Banner />
                        <SingleComics />
                   </div> */}
                </main>
            </div>
        );
    }
}