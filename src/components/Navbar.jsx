import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.product.cart)

  return (
    <>
      <div className='shadow-md w-full sticky top-0 left-0 z-10 '>
            <div className='md:flex bg-white py-4 md:px-10 px-7 justify-between '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
                <span href='#' className='text-3xl text-indigo-600 mr-1 pt-2'>
                <Link to="/" style={{ textDecoration: "none" }}>
             Ecommerce
           </Link>
                </span>
                </div>
                <button className="btn btn-outline-success ml-80">
                <Link to="/cart" >
                  <div>Cart:{cartItems.length}</div>
                </Link>
              </button>
            </div>
           
        </div>
    </>
  );
};

export default Navbar;