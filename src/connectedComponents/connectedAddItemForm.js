import { addItemAction, removeItemAction } from "../actions/itemActions"
import { connect } from 'react-redux';
import AddItemForm from "../components/AddItemForm/AddItemForm";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addItem: (item) => dispatch(addItemAction(item)),
    };
};

const ConnectedAddItemForm = connect(
    null,
    mapDispatchToProps,
)(AddItemForm);

export default ConnectedAddItemForm;