import React, { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
}
const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  return <div>Products here</div>
}

export default ProductPage
