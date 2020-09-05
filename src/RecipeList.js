import React from 'react';


function RecipeList(props) {
    return (
        <div className="container-fluid">
            <div className="card">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <img src={props.image} alt="" />
                    </div>
               <div className="col-8">
               <h2><b>{props.title}</b></h2>
                <h4>Ingredients</h4> 
                <ol>
                {props.ingredient.map( process => (
                    <li key={"I dont have a key"}>{process.text}</li>
                ))}
            </ol>
               </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default RecipeList;