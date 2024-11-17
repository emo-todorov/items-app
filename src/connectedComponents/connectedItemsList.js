import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const ConnectedItemsList = connect(
    mapStateToProps
)(ItemsList);

export default ConnectedItemsList;