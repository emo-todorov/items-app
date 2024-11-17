const Item = ({
    name,
    price,
    quantity,
    total,
    onRemove = () => { },
    onEdit = () => { }
}) => {
    const editHandler = (event) => {
        const target = event.target;

        onEdit(target.value, target.name);
    };

    return (
        <div className='item'>
            <h3 className='item__heading'>{name}</h3>
            <div className="item__info-box">
                <div className="item__input-wrapper">
                    <label htmlFor="item__price">Price</label>
                    <input type="text" name="price" value={price} onChange={editHandler} />
                </div>
                <div className="item__info-wrapper">
                    <label htmlFor="item__info-label">Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={editHandler} />
                </div>
                <div className="item__info-wrapper">
                    <p className="item__total-label">Total</p>
                    <p className="item__total">${total}</p>
                </div>
            </div>
            <div className="actions">
                <button onClick={onRemove} type='button'>Remove</button>
            </div>
        </div>
    );
};

export default Item;