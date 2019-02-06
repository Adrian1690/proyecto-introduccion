import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import FormRecipe from './FormRecipe';

const ActionsModal = () => {
    return (
        <div> 
            <Button flat modal="close" waves="light">
                Close
            </Button> 
            <Button modal="close" waves="light" className="red" onClick={ e => console.log('add') } >
                Save
            </Button>
        </div> 
    )
}

class AddRecipe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            chef: '',
            category:''
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput({target}){
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <Modal
                header='Modal Recipe'
                actions={<ActionsModal />}
                trigger={<Button 
                    floating 
                    large className='red' 
                    waves='light' 
                    icon='add' />}
            >
                <FormRecipe 
                    {...this.state} 
                    handleInput={this.handleInput}
                />
            </Modal>
        )
    }
}

export default AddRecipe