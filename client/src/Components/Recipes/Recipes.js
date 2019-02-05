import React, { Component } from 'react';
import '../../css/Recipes.scss';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import { createSelector, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { loadRecipes } from '../../ActionCreators/RecipesActions';
import WithLoading from '../HOC/WithLoading';

const Recipes = ({recipes}) => {
    return (
        <Row className="recipes-wrapper">
            <Col s={12} m={12} l={8} className="recipes-container">
                <Collapsible popout /* defaultActiveKey={0} */>
                    {
                        recipes.map( recipe => {
                            return (
                                <CollapsibleItem key={recipe.id} header={recipe.title} icon='whatshot'>
                                    {recipe.description}
                                </CollapsibleItem>
                            )
                        })
                    }
                </Collapsible>
            </Col>
        </Row>
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
            <RecipesEnhance isFetching={isFetching} recipes={recipes} />
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