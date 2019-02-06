import React from 'react';
import { Row, Input } from 'react-materialize';
import IngredientsForm from './IngredientsForm';

const FormRecipe = (props) => {
    return (
        <div>
            <Row>
                <Input s={12} l={6} 
                        label="title" 
                        name="title"
                        value={props.title}
                        onChange={props.handleInput}
                />
                <Input s={12} l={6} 
                    type='select' 
                    name='category'
                    label="Select Category" 
                    value={props.category} 
                    onChange={props.handleInput}>
                        <option value='1'>Category 1</option>
                        <option value='2'>Category 2</option>
                        <option value='3'>Category 3</option>
                </Input>
                <Input s={12} l={6} 
                    type='select' 
                    label="Select chef" 
                    name='chef'
                    value={props.chef} 
                    onChange={props.handleInput}>
                        <option value='1'>Category 1</option>
                        <option value='2'>Category 2</option>
                        <option value='3'>Category 3</option>
                </Input>
            </Row>
            <IngredientsForm />
            
        </div>
    )
}

export default FormRecipe;
