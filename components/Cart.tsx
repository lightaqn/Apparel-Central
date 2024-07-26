import Image from "next/image";
import useCartStore from "@/store/cartStore";

interface CartProps {
  quantity: number;
  total: number;
}

const cartItems = [
  {
    id: 1,
    image: "/1.jpg",
    price: "10",
    caption: "A combed cotton shirt",
  },
  {
    id: 2,
    image: "/2.jpg",
    price: "16",
    caption: "A beautiful gem necklace",
  },
  {
    id: 3,
    image: "/3.jpg",
    price: "22",
    caption: "A running shoe",
  },
];

const CartItemsCard = ({ id, image, price, caption }: any) => {
  //const {removeProduct, addProduct, quantity} = useCartStore()

  return (
    <div
      key={id}
      className="grid grid-cols-3 border-b-2 border-gray-300 space-x-3 items-center justify-start hover:shadow-lg"
    >
      <div className="col-span-1">
        <Image
          src={image}
          className=""
          alt=""
          width={300}
          height={400}
          objectFit="contain"
          layout="responsive"
        />
      </div>

      <div className="col-span-2">
        //lineclamp-1
        <h3 className="font-bold whitespace-nowrap text-xl  text-ellipsis">
          {caption}{" "}
        </h3>
        <div className="flex space-x-6">
          <p className="text-lg font-semibold text-red-500">${price} </p>

          {/* <p className="flex space-x-2 text-md ml-4">
<span onClick={removeProduct} className="p-3 text-black border-2 border-black active:text-red-500 active:border-red-500">-</span>

<span className="px-4 py-2 text-gray-500"> {quantity} <span>

<span onClick={addProduct} className="p-3 text-black border-2 border-black active:text-green-500 active:border-green-500" >+</span>
</p> */}
        </div>
      </div>
    </div>
  );
};

//{quantity, total}
const Cart = (props: CartProps) => {
  //bring products in with zustand
  //const {products, quantity, total} = useCartStore()

  return (
    <div className="absolute z-50 w-screen h-screen rounded-3xl items-center justify-center bg-gray-500/30 backdrop-blur-lg m-10 p-10 flex ">
      <div className="flex flex-col m-20 p-8 bg-white items-center justify-center space-y-6 h-[70vh] w-[70vw]">
        //header
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            //cart svg logo
            {/* <span>{quantity}</span> */}
          </div>
          <div className="flex">
            <p className="text-gray-600 ">
              Total -
              {/* <span className="text-2xl font-semibold text-red-500 uppercase" >{total} </span> */}
            </p>
          </div>
        </div>
        <hr className="w-full h-6 bg-gray-400 mx-6 my-8" />
        //cartItems
        <div className=" flex flex-col space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item: any) => (
              <CartItemsCard
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                caption={item.caption}
              />
            ))
          ) : (
            <div className="flex items-center justify-start">
              <link
                href="/"
                className="hover:text-red-500 hover:scale-105
    "
              >
                <p className="text-3xl text-gray-700 items-center justify-center text-center  whitespace-nowrap">
                  {" "}
                  Return to homepage to select an item
                </p>
              </link>
            </div>
          )}
        </div>
        {/* onClick={() => router.push("/paymentgateway")}  */}
        <button
          type="submit"
          className="w-full h-[40px] text-2xl font-semibold bg-gray-900 hover:bg-gray-700 tracking-wide transform text-white active:text-red-500 hover:transition hover:ease-out active:ease-in hover:duration-300 shadow-md hover:shadow-lg my-6 border-none rounded-xl active:border-2 active:border-double active:border-red-500 active:bg-white text-center whitespace-nowrap"
        >
          {/* <p className={`hidden ${loading && "mx-6 inline-block" } `} >//processing Spinner<p>*/}
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
