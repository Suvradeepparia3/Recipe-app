import React from 'react';


function RecipeList(props) {
    return (
        <div className="container-fluid">
            <div className="card">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4">
                    <img src={props.image} alt="" />
                    </div>
               <div className="col-8">
                <div className="content-header">
                <h4><b>{props.title}</b></h4>
                </div>
                <ol>
                <h5>Ingredients</h5>
                {props.ingredient.map( (process, index) => (
                    <li key={index}>{process.text}</li>
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