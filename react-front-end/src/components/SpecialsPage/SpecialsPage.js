import {useState , useEffect} from 'react';

import ListView from './ListView';

import { SPECIAL_recipe } from '../../api/recipe';

const SpecialsPage = ({switchPage}) => {

    const [getSpecialData , setSpecialData] = useState([]);

    const SpecialCall = async() => {
        await SPECIAL_recipe()
            .then( (response) => response.json() )
            .then( (response) => {
                if(Array.isArray(response)){
                    setSpecialData(response);
                } else {
                    //error handling
                }
            })
    }

    useEffect( ()=> {
        SpecialCall()
    }, [])

    return (
        <>
            <section className="row">
                <div className="col-sm-12 col-lg-3 mb-2">                
                    <button
                        className="btn btn-primary "
                        onClick={ ()=> switchPage()}
                    >
                        Switch to Recipe Page
                    </button>
                </div>
            </section>
            <section className="row">
                <h2>Current Specials</h2>
                <p>
                    not able to get json-server to actually save changes in the time alloted.    
                </p>                
                <ListView data={getSpecialData} />
            </section>
        </>
    )
}

export default SpecialsPage