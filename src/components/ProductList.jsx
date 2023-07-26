import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";

function ProductList() {
  const { productData } = useSelector((state) => state.product);

  return (
    <>
      <h1 className='mt-10 mb-2 text-center capitalize text-4xl'>PRODUCT LIST</h1>
        <hr className='w-1/5 mx-auto'></hr>

      <section className="py-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="row justify-content-center h-fit">
          {productData?.productData?.map((item, index) => {
            return (
              <ShoppingCart
                id={item.id}
                images={item.images}
                title={item.title}
                price={item.price}
                description={item.description}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
                brand={item.brand}
                category={item.category}
                thumbnail={item.thumbnail}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProductList;