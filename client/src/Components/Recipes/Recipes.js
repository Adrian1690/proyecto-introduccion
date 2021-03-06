import React, { Component } from 'react';
import '../../css/Recipes.scss';
import { Row, Col, Collapsible, CollapsibleItem, Button } from 'react-materialize';
import { createSelector, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { loadRecipes } from '../../ActionCreators/RecipesActions';
import WithLoading from '../HOC/WithLoading';
import AddRecipe from './AddRecipe';

const Recipes = ({recipes}) => {
    return (
        <Collapsible accordion /* defaultActiveKey={0} */>
            {
                recipes.map( recipe => {
                    return (
                        <CollapsibleItem key={recipe.id} header={recipe.title} icon='whatshot'>
                            <div className="recipe-description-container">
                                <span>{recipe.description}</span>
                                <span>
                                    <Button floating className='red' waves='light' icon='edit' style={{marginRight:'10px'}}/>
                                    <Button floating className='red' waves='light' icon='clear' />
                                </span>
                            </div>
                        </CollapsibleItem>
                    )
                })
            }
        </Collapsible>
    )
}

const RecipesEnhance = WithLoading(Recipes);

class RecipesContainer extends Component {


    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(loadRecipes())
    }

    render(){

        const { recipes, isFetching } = this.props;

        return (
            <Row className="recipes-wrapper">
                <Col s={12} m={12} l={8} className="recipes-container">
                    
                    <AddRecipe />
                    <RecipesEnhance 
                        isFetching={isFetching} 
                        recipes={recipes} />
                </Col>
            </Row>
        )
    }
}

const isFetchingSelector = createSelector(
    state => state.recipes.isFetching,
    isFetching => isFetching
);

const recipesSelector = createSelector(
    state => state.recipes.items,
    recipes => recipes
);

const mapStateToProps = createStructuredSelector({
    recipes: recipesSelector,
    isFetching: isFetchingSelector
});

export default connect(mapStateToProps)(RecipesContainer)