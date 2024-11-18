import { connect } from 'react-redux';
import Summary from '../components/Summary';

const mapStateToProps = (state) => {
    const total = state.items.reduce((total, { price, quantity }) => {
        return ((price * quantity) + total);
    }, 0);

    return {
        total
    };
};

const ConnectedSummary = connect(
    mapStateToProps
)(Summary);

export default ConnectedSummary;