import { Component } from 'react';
import Header from '../Header/Header';
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import './App.scss';

export default class App extends Component {

    render() {
        return (
            <div className='App'>
                <Header />
                <main>
                    <RandomCharacter />
                </main>
            </div>
        );
    }
}