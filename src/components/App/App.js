import { Component } from 'react';
import CharacterContent from '../CharacterContent/CharacterContent';
import Header from '../Header/Header';
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import './App.scss';
import vision from '../../resources/img/vision.png';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <RandomCharacter />
                    <CharacterContent />
                    {/* <img src={vision} alt="Vision" className="App-Decor" /> */}
                </main>
            </div>
        );
    }
}