import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContainer } from "./components/CartContainer";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("name"));
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <h2>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </h2>
  );
}
export default App;
