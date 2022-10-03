import { useState } from "react";

const NewRecipe = ({onSubmit})=> {

    const [cakeName, setCakeName] = useState("");
    const [integredients, setIntegredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
    }

    const handleIntegredientsChange = (event) => {
        setIntegredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        if (cakeName == "" || integredients == "" || rating == 0) {
            return
        }

        const NewRecipe = {
            name: cakeName,
            email: integredients,
            employeeNo: rating
        }

        setCakeName("");
        setIntegredients("");
        setRating(0);
        onSubmit(NewRecipe);
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="cakename">Name:</label>
            <input 
                type="text" 
                id="name"
                onChange={handleCakeNameChange}
                value={cakeName}
            />
            <label htmlFor="integredients">integredients:</label>
            <input 
                type="text"
                id="integredients" 
                onChange={handleIntegredientsChange}
                value={integredients}
            />
            <label htmlFor="rating">Rating:</label>
            <input 
                type="number" 
                id="rating"
                onChange={handleRatingChange}
                value={rating}
            />
            <input type="submit" value="Add Recipe"/>
        </form>
    );
}

export default NewRecipe;