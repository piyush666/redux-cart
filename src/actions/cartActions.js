import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING
} from './actionTypes';


export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
    }
}

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id,
})

export const subQuantity = (id) => ({
    type: SUB_QUANTITY,
    id
})

export const addQuantity = (id) => ({
    type: ADD_QUANTITY,
    id
})
