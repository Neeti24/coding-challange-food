import React from 'react';
import data from '../data/feeds.json';

const FoodItem = () => (
    data.map((data) => {
        return (
            <div className="foodItem">
                <div key={data.name}>
                    <div><img src={data.image} /></div>
                   <div className="itemDetails">
                   <div>{data.name}</div>
                    <div>{data.price}</div>
                   </div>
                   <div className="button">
                    <button className="plus">+1</button>
                    <button className="minus">-1</button>
                   </div>
                </div>
            </div>
        )
    })
)

export default FoodItem;

// {
//     props.options.map((option, index) => (
//       <Option
//         key={option}
//         optionText={option}
//         count={index + 1}
//         handleDeleteOption={props.handleDeleteOption}
//       />
//     ))
//   }