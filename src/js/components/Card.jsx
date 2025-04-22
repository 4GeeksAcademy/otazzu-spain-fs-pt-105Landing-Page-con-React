import React from "react";
import '../../styles/card.css'

export const Card = () => {

    return (
        <div className="card text-center">
            <img src="https://picsum.photos/200" className="card-img-top" alt="photo"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="border-top pt-4 pb-4 w-100">
                    <a href="#" className="btn btn-primary">Click for more!</a>
            </div>
        </div>
    );
}