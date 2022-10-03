import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import NewRecipe from "./newRecipe";
import StateToggleExample from "./StateToggleExample";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList />
        <Search />
        <CakeForm />
        <NewRecipe />
        <StateToggleExample />
      </main>
    </>
  );
}

export default App;
