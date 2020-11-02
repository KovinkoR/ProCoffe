import React from 'react';
import { useSelector } from 'react-redux';

import Item from '../Item';
import WishTitle from '../WishTitle';

function CoffeeList() {

  const user = useSelector((state) => state.auth.id.wishlist);
  console.log(user);

  return (
    <>
      <WishTitle />
      {user ? user.map((el) => <Item key={el._id} id={el._id} />) : null}

    </>

  );
}

export default CoffeeList;
