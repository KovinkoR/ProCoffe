import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';
import FavTitle from '../FavTitle';

function CoffeeList() {
  const user = useSelector((state) => state.auth.id.id);
  const userF = useSelector((state) => state.top.top);
  const fav = [];
  userF && userF.map((el) => {
    if (el.userLiked.includes(user)) {
      fav.push(el);
    }
  });

  return (
    <>
      <FavTitle />
      {fav ? fav.map((el) => <Item key={el._id} id={el._id} />) : null}

    </>

  );
}

export default memo(CoffeeList);
