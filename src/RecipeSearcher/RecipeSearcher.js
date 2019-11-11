import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    constructor(props) {
        super(props);
        this.state = {recipe: [] ,};
      }

    getRandomRecipe = () => {
        axios({
            /* We can configure evyerthing we need to about the HTTP request in here */
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    getRecipeByName = (name) => {
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
            params: {
                s: name
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    getRecipeByLetter = (letter) => {
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?',
            params: {
                f: letter
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        this.getRecipeByName('Chicken');
        return (
            <div>

            </div>
        );
    }
}

export default RecipeSearcher;