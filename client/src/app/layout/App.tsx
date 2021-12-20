import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";


function App() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  function addProduct() {
    setProduct(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      description: 'some description',
      pictureUrl: 'https://picsum.photos',
      brand: 'some brand'
    }])
  }

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </div>
  );
}

export default App;
