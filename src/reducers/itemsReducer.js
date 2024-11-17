import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from "../constants/constants";

const initialState = [
    {
        id: 1,
        name: 'Book',
        price: 10,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Wooden desk',
        price: 70,
        quantity: 1,
    },
];

export const itemsReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case ADD_ITEM:
            newState = [
                ...state,
                { ...action.payload.item, id: Math.random(), quantity: 1 }
            ];
            break;
        case REMOVE_ITEM:
            newState = state.filter(({ id }) => id !== action.payload.id);
            break;
        case EDIT_ITEM:
            newState = state.map(curItem => {
                if (curItem.id !== action.payload.id) return curItem;

                const { fieldName, value } = action.payload;

                return {
                    ...curItem,
                    [fieldName]: value,
                };
            });
            break;
        default:
            newState = state;
    }

    return newState;
};