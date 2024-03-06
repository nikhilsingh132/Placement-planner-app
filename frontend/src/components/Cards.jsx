import React from 'react';
import "../styles/Cardcss.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";

const Cards = (props) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleClick = (link) => {
        if(isAuthenticated)
        {
            // console.log("hello");
            navigate(link);
        }
        else
        {
            alert("SignUp or Login first");
        }
    };

    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt="Error" className="card__image" />
                <h2 className="card__title font-bold text-2xl">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn" onClick={() => handleClick(props.link)}>
                Click to view
            </button>
        </div>
    );
};

export default Cards;
