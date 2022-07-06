import {useEffect, useState} from 'react';

const ListItem = ({data}) => {

    const [getEditMode, setEditMode] = useState(false);
    const [getItemFields, setItemFields] = useState(null);
    const [getItemData, setItemData] = useState(null);

    const setupFormFields = () => {
        const keys = Object.keys(data);
      
        const fields = keys.map( (f, index) => {
            return (
                <div className="mb-3" key={`${data[f]}-${index}`}>
                    <label className="form-label">{f}</label>
                    <input type="text" 
                        className="form-control" 
                        value={getItemData[f]} 
                        disabled={!getEditMode} 
                        onChange={ (e)=> setItemData( getItemData => ({
                                ...getItemData,
                                [f]: e.target.value
                            }))
                        }
                    />
                </div>
            )
        } );

        setItemFields(fields);
        
    }

    const updateSpecial = () => {
        //push updated getItemData to server
    }

    useEffect( ()=> {
        setItemData(data);
    }, [])

    useEffect( ()=> { 
        if(getItemData){
            setupFormFields();  
        }      
    }, [getEditMode, getItemData])



    return (
        <div>
            <h3>Special</h3>
            {getItemFields}
            <div className="buttons">
                <button 
                    className="btn btn-primary"
                    onClick={ ()=> setEditMode(!getEditMode)}
                    >
                    Edit Mode
                </button>
                {getEditMode &&
                    <button
                        className="btn btn-primary ms-3"
                        onClick={ updateSpecial() }>
                        Save Changes
                    </button>
                }
            </div>
        </div>
    )
}

export default ListItem;