import { useState } from 'react';
import RecipeList from './components/RecipePage/RecipeList';
import SpecialsPage from './components/SpecialsPage/SpecialsPage';

function App() {

  const [getShowSpecial, setShowSpecial] = useState(false);

  const page = getShowSpecial ? 
    <SpecialsPage switchPage={ ()=> setShowSpecial(!getShowSpecial)} /> : 
    <RecipeList switchPage={ ()=> setShowSpecial(!getShowSpecial)} />

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-2">Crescendo Front End Skill Test</h1>
      {page}
    </div>
  );
}

export default App;
