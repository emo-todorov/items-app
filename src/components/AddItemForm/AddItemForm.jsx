import React, { useState } from 'react'

const AddItemForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const nameChangeHandler = (event) => setName(event.target.value);
    const priceChangeHandler = (event) => setPrice(event.target.value);

    return (
        <form onSubmit={submitHandler}>
            <div className="input-wrapper">
                <div className="label-wrapper">
                    <label htmlFor="item-name">Item name</label>
                </div>
                <input
                    value={name}
                    type="text" id="item-name"
                    onChange={nameChangeHandler}
                />
            </div>
            <div className="input-wrapper">
                <div className="label-wrapper">
                    <label htmlFor="item-price">Price</label>
                </div>
                <input
                    value={price}
                    type="text"
                    id="item-price"
                    onChange={priceChangeHandler}
                />
            </div>
            <button>Add Item</button>
        </form>
    );
};

export default AddItemForm;