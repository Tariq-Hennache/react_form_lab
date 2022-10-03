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

    const updatedCakes = [...cakes,NewRecipe]

    return(
        <>
        <RecipeList cakes = {cakes} />
        </>
    )
        
}

export default RecipeContainer;