import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home, Category, Cart } from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
