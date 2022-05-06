import "./App.css";
import Header from "./containers/Header"
import {BrowserRouter, Routes,Route } from "react-router-dom"
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <body className="body">
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="" exact element={<ProductListing />}/>
          <Route path="product/:productId" exact element={<ProductDetail/>}/>
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
