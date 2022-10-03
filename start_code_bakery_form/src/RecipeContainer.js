import { userState } from "react";
import RecipeList from "./RecipeList";
import NewRecipe from "./newRecipe";

const RecipeContainer =() => {
    const [cakes, setCakes] = userState(cakes);
    const [applicationOpen, setapplicationOpen] = userState(true);

    if(applicationOpen){
        setCakes(updatedCakes);
        setapplicationOpen(false);
    }
    
    const addNewRecipe = (newRecipe) => {

        const updatedRecipe = [...cakes, newRecipe]
        

        if(applicationOpen) {
            setCakes(updatedRecipe);
            setapplicationOpen(false);
        }
    }



    return(
        <>
        <RecipeList cakes = {cakes} />
        <NewRecipe onSubmit={addNewRecipe} />
        </>
    )
        
}

export default RecipeContainer;