
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

function AddToWishlist({ productID }: { productID: string }) {
  
  const [user, setUser] = useState({});

  return (
    <div onClick={() => {"addToWishlist"}}>
      <CiHeart />
      <a href="/">افزودن به علاقه مندی ها</a>
    </div>
  );
}

export default AddToWishlist;
