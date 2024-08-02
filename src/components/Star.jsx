import React, { useState } from 'react';

const StarRating = ({ filled, onClick }) => {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? 'gold' : 'grey' }}>
            ★
        </span>
    );
}

const Star = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <StarRating 
                    key={index}
                    filled={index < rating}
                    onClick={() => setRating(index + 1)}
                />
            ))}
        </div>
    );
}

export default Star;
