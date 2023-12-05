import { useState } from "react";
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function AddBird ({birds, setBirds }) {
    const navigate = useNavigate
    const initialState = {
        name: '',
        genus: '',
        image: '', 
        homepage: '',
        conservationStatus: '',
    };
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({
            ...formState, 
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBirds(previousBirds => [...previousBirds, formState])
        setFormState(initialState);
        navigate('/', {birds, setBirds})
    };

    return (
        <div className="birdForm">
            <h2>Add a New Bird</h2>
            <Form onSubmit ={handleSubmit}>
                <Form.Field>
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input type="text" id="name" name="name" required 
                    onChange={handleChange}
                    value={formState.name}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="genus">Genus:</label>
                    <br></br>
                    <input type="text" id="genus" name="genus" required
                    onChange={handleChange}
                    value={formState.genus}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="image">Image:</label>
                    <br></br>
                    <input type="text" id="image" name="image" required
                    onChange={handleChange}
                    value={formState.image}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="homepage">Homepage:</label>
                    <br></br>
                    <input type="text" id="homepage" name="homepage" required
                    onChange={handleChange}
                    value={formState.homepage}></input>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="conservationStatus">Conservation Status:</label>
                    <br></br>
                    <textarea  cols="38" rows="10" id="conservationStatus" name="conservationStatus" required
                    onChange={handleChange}
                    value={formState.conservationStatus}></textarea>
                    </Form.Field>
                <Button type='submit'>SUBMIT</Button>
                </Form> 
            </div>
        )
    }

export default AddBird