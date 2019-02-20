import React, { Component } from 'react';
import { Row, Input, Col, Button } from 'react-materialize';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
};

class IngredientsForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            nIngredients: 0
        }

        this.addIngredient = this.addIngredient.bind(this)
        this.removeIngredient = this.removeIngredient.bind(this)
    }

    addIngredient(){
        this.setState(state => ({ nIngredients: state.nIngredients + 1 }))
    }

    removeIngredient(){
        this.setState(state => ({ nIngredients: state.nIngredients - 1}))
    }

    render(){
        return (
            <div>
                <div>
                    Ingredients {' '}
                    <Button 
                        floating 
                        className='red' 
                        waves='light' 
                        onClick={this.addIngredient}
                        icon='add' />
                </div>
                
                {
                    range(this.state.nIngredients).map( (rowIngredient, index) => {
                        return (
                            <Row className="centerhv" key={index}>
                                <Col s={10}>
                                    <Input s={12} l={6} label="Ingredient" />
                                    <Input s={12} l={6} 
                                        type='select' 
                                        label="Variant" 
                                        defaultValue='2' 
                                        onChange={e => console.log('')}>
                                            <option value='1'>mg</option>
                                            <option value='2'>ml</option>
                                            <option value='3'>cm</option>
                                    </Input>
                                </Col>
                                <Col s={2}>
                                    <Button 
                                        floating 
                                        className='red' 
                                        waves='light' 
                                        icon='remove' 
                                        onClick={this.removeIngredient}
                                        />
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
        )
    }
}

export default IngredientsForm;