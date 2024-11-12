/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductGrid from "./components/ProductGrid";
import { Header } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('https://dummyjson.com/products?limit=10');
              setProducts(response.data.products);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };
      fetchProducts();
  }, []);

  const filteredProducts =()=>{
   const filteredProducts = products&&products.filter((product:any) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);

  }

  return (
    <>
      <BrowserRouter>
         <Header filteredProducts={filteredProducts} searcText={searchTerm} setSearchTerm={setSearchTerm}/>
          <Routes>
            <Route path="/" element={<ProductGrid products={products}/>} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
