import React from 'react'
import './AddEdit.scss'
import Input from '../../shared/input/Input'

const AddEdit = ({ property }) => {

    const handleInputChanges = e => {
        const { value } = e.target
        // stubbed out function for later just console logs
        console.log('input changed.  Value:', value)
    }

        return (
            <div className="add-edit">
                <div className="add-edit__form">
                    <div>
                        <Input 
                            id="title"
                            value={ property.title || '' }
                            placeholder="title"
                            handleInputChanges={handleInputChanges}
                        />
                        <Input 
                            id="address"
                            value={ property.address || '' }
                            placeholder="address"
                            handleInputChanges={handleInputChanges}
                        />
                    </div>
                </div>
                <div className="add-edit__image">
                    image
                </div>
            </div>  
        )
    
}

export default AddEdit