import React, { Component } from 'react';
import '../../css/Recipes.scss';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import { createSelector, createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

class Recipes extends Component {

    render(){

        const { recipes } = this.props;

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
}

const recipesSelector = createSelector(
    state => state.recipes.items,
    recipes => recipes
);

const mapStateToProps = createStructuredSelector({
    recipes: recipesSelector
});

export default connect(mapStateToProps)(Recipes)