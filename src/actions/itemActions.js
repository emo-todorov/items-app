import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from "../constants/constants";

export const addItemAction = (item = {}) => ({
    type: ADD_ITEM,
    payload: { item },
});

export const removeItemAction = (id) => ({
    type: REMOVE_ITEM,
    payload: { id },
});

export const editItemAction = (id, value, fieldName) => ({
    type: EDIT_ITEM,
    payload: { id, value, fieldName }
})