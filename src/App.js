import React, {useState} from 'react';
import './App.css';
import letters from './letters.json'
import words from './words.json'

function App() {

    const [word, setWord] = useState(editRandomWord())
    const [letter, setLetter] = useState("_")

    function editLetter(event) {
        setLetter (event.target.value)
    }

    function editWord() {
        setWord (editRandomWord())
    }

    function editRandomWord() {
        //setWord ( words[ Math.floor(Math.random()*(words.length) ) ] )
        return words[ Math.floor(Math.random()*(words.length) ) ]
    }

    function displayButtonLetters() {
        return letters.map( (letter) => <button value={letter} onClick={editLetter}>{letter.toUpperCase()}</button> )
    }


    return (
        <div className="App">
            <button onClick={editWord}>Choisir un nouveau mot</button>
            <div>
                {word}
            </div>
            <div>
                {displayButtonLetters()}
            </div>
        </div>
    )
}
export default App;
