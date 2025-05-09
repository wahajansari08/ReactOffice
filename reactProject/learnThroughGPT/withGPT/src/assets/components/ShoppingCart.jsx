import { useState } from "react"

const products = [
    {id:1, name:"laptop", price:"25000"},
    {id:1, name:"Mobile", price:"35000"},
    {id:1, name:"HeadPhone", price:"2000"},
    {id:1, name:"Speaker", price:"2500"}
]

function ShoppingCart(){
    const [cart, setCart] = useState([])
    const addToCart = (product)=>{
        setCart = (prevCart)=>{
            const existProduct = prevCart.find(item => item.id === product.id)
            if(existProduct){
                return(
                    prevCart.map(item=>
                        item.id === product.id
                        ? {...item, quantity : item.quantity +1}:item
                    )
                )
            }else{
                return[...prevCart, {...product, quantity:1}]
            }
        }
    }
    const removeFromCart = (productsId)=>{
        setCart((prevCart)=>prevCart.filter(item=>item.id!==productsId))
    }
    const getTotalPrice = ()=>{
        return cart.reduce((total,item)=>total + item.price* item.quantity, 0)}
    return(<>
    <div className="app">
        <h1>Shop Now</h1>
        <div className="product-list">
            {
                products.map((product)=>(
                    <div key={product.key} className="product-cart">
                        <h3>{product.name}</h3>
                        <p>Price Rs. {product.price}</p>
                        <button className="add-to-cart-btn" onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
        <div className="cart">
            <h2>Cart</h2>
            {
                cart.length === 0 ? (<p>Cart is empty</p>):(
                    <ul>{
                        cart.map((item)=>(
                            <li className="cart-item">
                                {item.name} - Rs. {item.price} X {item.quantity}
                                <button className="remove-btn" onClick={()=>removeFromCart}>Remove</button>    
                            </li>
                            
                        ))
                        }
                        <h3>Total Price: {getTotalPrice()}</h3>
                    </ul>
                )
            }
        </div>
    </div>
    </>)
}

export default ShoppingCart