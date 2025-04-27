import React from "react";
import '../../styles/card.css'

export const Card = () => {

    return (
        <div className="card text-center">
            <img src="https://picsum.photos/200" className="card-img-top" alt="photo"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut efficitur ipsum, vel rhoncus nisl. Nulla egestas tristique mauris, at luctus magna.</p>
            </div>
            <div className="border-top pt-4 pb-4 w-100">
                    <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
}