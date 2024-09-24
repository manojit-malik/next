import { notFound } from 'next/navigation';
import React from 'react';

export default function ReviewDetails( {params} ) {
  if(parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>Review : {params.reviewId}, Product : {params.productId}</div>
  )
}