/**
 * Reducer
 * @param {*} state 
 */
export default function products(state = []) {
    return state;
}

/**
 * Selectors
 * @param {*} state 
 * @param {*} props 
 */
export function getProducts(state, props) {
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
