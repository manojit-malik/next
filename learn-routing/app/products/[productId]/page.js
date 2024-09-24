import React from 'react'

export default function ProductDetails( {params} ) {
  return (
    <div>Details about Product: {params.productId}</div>
  )
}