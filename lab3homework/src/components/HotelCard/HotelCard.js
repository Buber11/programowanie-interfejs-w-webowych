import React from 'react';
import '../../Main.css';

function HotelCard({ location, name, description, rating, price }) {
    return (
        <article className="hotel-card">
            <div className="card-image">
                <p className="chip">{location}</p>
            </div>
            <p className="text-middle">{name}</p>
            <p className="text-small">{description}</p>
            <div className="hotel-card-footer">
                <p className="text-middle">★★★★★</p>
                <p className="text-middle">{price}/room</p>
            </div>
        </article>
    );
}

export default HotelCard;
