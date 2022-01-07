export const getCart =()=>{
    //fetching the data from localStorage
    //Using Promises so that the ahead functioanlity is procedded only when we get the cart items.
    return new Promise((resolve, reject) => {
        const cart =  window.localStorage.getItem('cart');
        resolve(cart);
    });
}

export const storeCart =(cart)=>{
    window.localStorage.setItem('cart',cart);
}