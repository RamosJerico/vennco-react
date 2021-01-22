import React from 'react';
import './Card.css';

function Card({title, header, imageFile, body, list1, list2, list3}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageFile} alt='' />
                <h1>{header}</h1>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                    <li className='card-item'>{list1}</li>
                    <li className='card-item'>{list2}</li>
                    <li className='card-item'>{list3}</li>
                </div>
            </div>
        </div>
    )
}
export default Card;
