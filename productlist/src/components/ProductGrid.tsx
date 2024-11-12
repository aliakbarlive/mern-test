/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "./ProductCard";
import { Container, Stack } from "@mui/material";

function ProductGrid({ products }: any) {
  return (
    <>
      <Container>
        <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
          {products.length > 0 &&
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Stack>
      </Container>
    </>
  );
}

export default ProductGrid;
