import {useEffect, useState} from 'react';

import Loader from './Loader';
import RecipeItem from './RecipeItem';

import { API_recipe , SPECIAL_recipe } from '../api/recipe';

const RecipeList = () => {

    //const [getCallFlush, setCallFlush] = useState(false); //in case need to flush and redo the recipe call
    const [getRecipeData, setRecipeData] = useState([]);
    const [getSpecialData, setSpecialData] = useState([]);

    /*
    using map technique for dynamic api call because to this day in react haven't found the react equivalent
    to vanilla js window[func] to dynamically call a function name as react in the global space operates differently
    */
    const dataCall = async(call) => {
        const api = {
            API_recipe : () => API_recipe(),
            SPECIAL_recipe : () => SPECIAL_recipe()
        }
        const apiState = {
            API_recipe : (response) => setRecipeData(response),
            SPECIAL_recipe : (response) => setSpecialData(response)
        }

       await api[call]()
            .then( (response) => response.json() )
            .then( (response) => {
                if(Array.isArray(response)){                   
                    apiState[call](response)
                } else {
                    //error handling for non array response
                }
            })
            .catch( (err) => console.log('whatever the catch err should be'));
    }

    //make initial recipeDataCall
    useEffect( ()=> {
        const initCalls = ['API_recipe', 'SPECIAL_recipe'];
        initCalls.forEach( call => dataCall(call));
    }, [])

    const getRecipeDataRows = getRecipeData.map( (r, index) => {
        return <RecipeItem key={`recipe-data-row-${index}`} data={r} special={getSpecialData} />     
    });

    return (
        <section className="row">            
            { getRecipeData.length < 1 && <Loader></Loader> }
            { getRecipeData.length > 0 && getRecipeDataRows }     
        </section>
    )
}

export default RecipeList;