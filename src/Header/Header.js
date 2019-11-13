import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { textField : '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.recipeByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: ''});
    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button className="letterButton" onClick={() => this.props.recipeByLetterHandler(letter)}>
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <div className="title">
                <h1>Recipe Finder</h1>
                <h2>Get Random Recipe</h2>
                <button className='generate' onClick={() => this.props.randomRecipeHandler()}>Generate Random</button>
                <h2>Get Recipe By Keyword</h2>
                <form onSubmit={this.handleSubmit} className='keywordInput'>
                    <input className='textBox' type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                    <input className='submitBox' type='submit' value='Submit'/>
                </form>
                <h2>Get Recipes By Letter</h2>
                {this.generateLetterButtons()}
            </div>
        );
    }
}

export default Header;