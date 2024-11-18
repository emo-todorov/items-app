import React, { useState } from 'react'

const AddItemForm = ({ addItem }) => {
    const [values, setValues] = useState({
        name: '',
        price: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        price: '',
    });

    const validate = (inputName, value) => {
        const validator = {
            name: () => {
                //TODO validation logic
                return value && value.length < 5
                    ? ''
                    : 'Name error';
            },
            price: () => {
                //TODO validation logic
                return isNaN(value) || !value
                    ? 'Price error'
                    : '';
            },
        };

        return validator[inputName]();
    };



    const submitHandler = (event) => {
        event.preventDefault();

        const newErrors = Object.keys(values).reduce((acc, key) => {
            const errorMessage = validate(key, values[key]);
            if (errorMessage) {
                return {
                    ...acc,
                    [key]: errorMessage,
                };
            }

            return acc;
        }, {});

        const hasError = Object.values(newErrors).some(error => error);

        hasError
            ? setErrors(newErrors)
            : addItem({
                name: values.name,
                price: values.price,
            });
    };

    const onChangeHandler = (event) => {
        const { name: inputName, value } = event.target;

        setValues(prev => {
            return {
                ...prev,
                [inputName]: value,
            };
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="input-wrapper">
                <div className="label-wrapper">
                    <label htmlFor="item-name">Item name</label>
                </div>
                <input
                    name='name'
                    value={values.name}
                    type="text" id="item-name"
                    onChange={onChangeHandler}
                />
                {
                    errors.name && <p className="error">{errors.name}</p>
                }
            </div>
            <div className="input-wrapper">
                <div className="label-wrapper">
                    <label htmlFor="item-price">Price</label>
                </div>
                <input
                    name='price'
                    value={values.price}
                    type="text"
                    id="item-price"
                    onChange={onChangeHandler}
                />
                {
                    errors.price && <p className="error">{errors.price}</p>
                }
            </div>
            <button>Add Item</button>
        </form>
    );
};

export default AddItemForm;