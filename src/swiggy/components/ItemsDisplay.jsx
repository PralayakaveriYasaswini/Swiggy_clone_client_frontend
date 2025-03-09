import React, { useState } from 'react';
import { itemData } from '../data';

const ItemsDisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData);

    return (
        <div className="itemSection">
            <marquee behavior="scroll" direction="left" scrollamount="15" loop="infinite">
                {displayItem.map((item, index) => (
                    <span key={index} style={{ marginRight: '20px' }}>
                        <img src={item.item_img} alt={item.item_img} style={{ width: '150px', height: '150px' }} />
                    </span>
                ))}
            </marquee>
        </div>
    );
};

export default ItemsDisplay;