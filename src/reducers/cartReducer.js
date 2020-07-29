import initState from '../items';
import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from '../actions/actionTypes';

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return applyAddToCart(state, action);
        case REMOVE_ITEM: return applyRemoveItem(state, action);
        case ADD_QUANTITY: return applyAddQuantity(state, action);
        case SUB_QUANTITY: return applySubQuantity(state, action);
        default: return state;
    }
}

const applyAddToCart = (state, action) => {
    const addedItemIndex = state.items.findIndex(item => item.id === action.id);
    let addedItem = { ...state.items[addedItemIndex] }
    const existedItem = state.addedItems.filter(item => action.id === item.id);

    if (existedItem.length > 0) {
        return {
            ...state,
            addedItems: state.addedItems.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item;
                }
            }),
            total: state.total + addedItem.price
        }
    } else {
        addedItem.quantity = 1;
        return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total: state.total + addedItem.price
        }
    }
}


const applyRemoveItem = (state, action) => {
    const itemIndex = state.addedItems.findIndex(item => item.id === action.id);
    const sub = state.addedItems[itemIndex].quantity * state.addedItems[itemIndex].price;
    return {
        ...state,
        addedItems: state.addedItems.filter(item => item.id !== action.id),
        total: state.total - sub
    }
}

const applyAddQuantity = (state, action) => {
    const itemIndex = state.addedItems.findIndex(item => item.id === action.id);
    return {
        ...state,
        addedItems: state.addedItems.map(item => {
            if (item.id === action.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item;
            }
        }),
        total: state.total + state.addedItems[itemIndex].price
    }
}
const applySubQuantity = (state, action) => {
    const itemIndex = state.addedItems.findIndex(item => item.id === action.id);
    return {
        ...state,
        addedItems: state.addedItems.map(item => {
            if (item.id === action.id) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            } else {
                return item;
            }
        }),
        total: state.total - state.addedItems[itemIndex].price
    }
}
export default cartReducer;