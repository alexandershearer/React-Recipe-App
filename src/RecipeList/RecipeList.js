import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import './RecipeList.css'

class RecipeList extends Component {

    getListItems() {
        return this.props.recipes.map((recipe) =>
            <li key={recipe.idMeal}>
                <h1 className="recipeTitle">{recipe.strMeal}</h1>
                <img className='image' src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p className='instructions'>{recipe.strInstructions}</p>
                <h2 className="ingredientTitle">Ingredients</h2>
                <ul className='ingredientList'>
                    {this.getIngredientsList(recipe)}
                </ul>
            </li>
        );
    }

    getIngredientsList(recipe) {
        let output = [];

        for (var i = 1; i <= 20; i++) {
            const ingredientIdentifier = 'strIngredient' + i;
            const amountIdentifier = 'strMeasure' + i;

            if (recipe[ingredientIdentifier] !== '' && recipe[ingredientIdentifier] !== null) {
                output.push(<li key={i}>{recipe[ingredientIdentifier]}:   {recipe[amountIdentifier]}</li>);
            }
        }

        return output;
    }

    render() {
        if (this.props.recipes.length > 0) {
            return (
                <ul className='recipeListMain'>{this.getListItems()}</ul>
            )
        } else {
            return (
                <h1 className="error">No recipes found. Please try again</h1>
            );
        }
    }
}

export default RecipeList;