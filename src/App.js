import React, {useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import Spinner from 'react-bootstrap/Spinner'
import './App.css';
import Axios from 'axios';

function App() {
   
  const APP_ID = "7b7698c1"
  const APP_KEY = "6a6dc82d152418d25667420cddce16c8"

  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ submit, setSubmit ] = useState('Chicken Biryani');
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line
  },[submit])

  const getRecipe = () => {
    setLoading(true)
    Axios.get(`https://api.edamam.com/search?q=${submit}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then( response => {
        setRecipes(response.data.hits)
        setLoading(false)
    })
    .catch( error => {
      console.log(error)
    })
  }

  const getSearch = e => {
      setSearch(e.target.value)
  }

  const getSubmit = e => {
    e.preventDefault()
    setSubmit(search)
    setSearch('')
  }

  return (
    <div className="App">
    <ul>
      <div className="header">A Recipe App made with React.</div>
    </ul>
    <form className="form" onSubmit={getSubmit}>
      <input type="text" placeholder="Search as 'Chicken' " className="bar" value={search} onChange={getSearch} />
      <button type="submit" className="button" >Search</button>
    </form>
    {loading ? <Spinner animation="grow" variant="warning" style={{margin: "20% 0% 0% 50%"}} /> : 
    <div className="recipes">
    {recipes.map((recipe, index) => (
      <RecipeList
      key={index} 
      title={recipe.recipe.label} image={recipe.recipe.image} ingredient={recipe.recipe.ingredients} />
      ))}
    </div>
    }
     </div>
  );
}

export default App;
