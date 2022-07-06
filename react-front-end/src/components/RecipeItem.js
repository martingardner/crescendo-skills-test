import {useState} from 'react';

import { IMAGE_path } from '../api/recipe';

import '../styles/recipeItem.css';

const RecipeItem = ({data, special}) => {

    const [getExpandedIngredients, setExpandedIngredients] = useState(false);
    const [getExpandedDirections, setExpandedDirections] = useState(false);    

    const viewIText = getExpandedIngredients ? 'close' : 'ingredients';
    const viewDText = getExpandedDirections ? 'close' : 'directions';

    const listGroupItems = data.ingredients.map( (item, index) => {

        const uuid = item.uuid;
        const specialMatch = special.findIndex( s => s.ingredientId === uuid );
        const s = special[specialMatch];

        return (
            <li className="list-group-item" key={`ingredient-list-group-item-${item.name}-${index}`}>
                <div>{item.name} - ({item.amount}) {item.measurement}</div>
                {specialMatch > -1 &&
                    <div className="text-success fw-bold special-text">
                        {s.title} - {s.type} - {s.text}
                    </div>
                }
            </li>
        )
    });

    const directionGroupItems = data.directions.map( (d, index) => {

        const optionalText = d.optional ? `- (optional)` : '';
        return (
            <li className="list-group-item" key={`direction-list-group-item-${d.instructions}-${index}`}>
                <div>
                    {d.instructions}
                    {optionalText}
                </div>
            </li>
        )
    })

    return (
        <article className="col-lg-4 col-md-12 recipe-item">
            <div>               
                <img alt={data.title} aria-hidden="true" src={`${IMAGE_path}${data.images.full}`} />
                <h2 className="text-center">{data.title}</h2>
                
                <div className="button-row">
                    <button 
                        className="btn btn-primary" 
                        onClick={ ()=> setExpandedIngredients( ()=> !getExpandedIngredients)}>
                            {viewIText}
                    </button>
                    <button
                        className="btn btn-primary float-end"
                        onClick={ ()=> setExpandedDirections( ()=> !getExpandedDirections)}>
                            {viewDText}
                    </button>
                </div>
            </div>
            {getExpandedIngredients &&
                <div>                
                    <ul className="list-group">
                        {listGroupItems}
                    </ul>                
                </div>
            }
            {getExpandedDirections &&
                <div>
                    <ul className="list-group">
                        {directionGroupItems}
                    </ul>
                </div>
            }
        </article>
    )
}

export default RecipeItem