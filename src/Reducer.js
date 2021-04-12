export const getBasketTotal = (basket) => {
    return basket?.reduce((amout, item) => item.price + amout, 0);
}

export const initialState = {
    basket: [

    ],
    user: null
    //this an empty array
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            //here we clone the basket
            let newBasket = [...state.basket];
            // we cheak to see if product id is present 
            const index = state.basket.findIndex((basketitem) => basketitem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);

            }
            else {
                console.warn(`Cant remove  product {id:${action.id} as its in cart`)
            }
            return { ...state, basket: newBasket };

        default:
            return state;
    }

}
export default reducer;
/*
*/