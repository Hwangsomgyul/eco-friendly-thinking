// Star.jsx
import React, { useState } from 'react';

const StarRating = ({ filled, onClick }) => {
    return (
        <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? 'gold' : 'grey', fontSize: '24px' }}>
            ★
        </span>
    );
};

const Star = ({ totalStars = 5, onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        const newRating = index + 1;
        setRating(newRating);
        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <StarRating
                    key={index}
                    filled={index < rating}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Star;
