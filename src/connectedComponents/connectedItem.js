import { editItemAction, removeItemAction } from "../actions/itemActions";
import Item from "../components/Item";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { price, quantity } = ownProps;
    const total = price * quantity;

    return {
        total
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: () => dispatch(removeItemAction(ownProps.id)),
    onEdit: (newValue, fieldName) => dispatch(editItemAction(ownProps.id, newValue, fieldName))
});

const ConnectedItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);

export default ConnectedItem;