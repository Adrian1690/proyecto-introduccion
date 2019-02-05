import React from 'react';
import { Row, Input, Col, Button } from 'react-materialize';

const FormRecipe = () => {
    return (
        <div>
            <Row>
                <Input s={12} l={6} label="title" />
                <Input s={12} l={6} 
                    type='select' 
                    label="Select Category" 
                    defaultValue='2' 
                    onChange={e => console.log('')}>
                        <option value='1'>Category 1</option>
                        <option value='2'>Category 2</option>
                        <option value='3'>Category 3</option>
                </Input>
                <Input s={12} l={6} 
                    type='select' 
                    label="Select chef" 
                    defaultValue='2' 
                    onChange={e => console.log('')}>
                        <option value='1'>Category 1</option>
                        <option value='2'>Category 2</option>
                        <option value='3'>Category 3</option>
                </Input>
            </Row>

            <div>
                Ingredients {' '}
                <Button 
                        floating 
                        className='red' 
                        waves='light' 
                        icon='add' />
            </div>
            <Row className="centerhv">
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
                        icon='remove' />
                </Col>
            </Row>
        </div>
    )
}

export default FormRecipe;
