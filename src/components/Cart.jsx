import { useDispatch, useSelector } from "react-redux";

import {
  addQTY,
  clearCart,
  removeProductFromCart,
  removeQTY,
} from "../store/feature/CartSlice";

function Cart() {
  const { cart } = useSelector((state) => state.product);

  let totalPrice = 0;
  cart?.forEach((product) => {   //optional chaining
      totalPrice += product.price * product.quantity;
  });

  const dispatch = useDispatch();

  if (cart.length === 0)
    return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <>
      <section className="py-4 mx-auto max-w-screen-xl ">
      <div className="flex flex-column justify-center">
        <div className="col-span-12">
          <h5>Cart total Items:</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.thumbnail}
                        style={{ heigth: "6rem", width: "10rem" }}
                        alt=""
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={() => dispatch(removeQTY(item))}
                      >
                        -
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={() => dispatch(addQTY(item))}
                      >
                        +
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white  py-2 px-4 rounded ms-2"
                        onClick={() => dispatch(removeProductFromCart(item))}
                      >
                        Remove Items
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ml-auto">
          <h2>Total price: $ {totalPrice}</h2>
        </div>
        <div className="ml-auto">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-2"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          
        </div>
      </div>
    </section>

    
    </>
  );
}


export default Cart;