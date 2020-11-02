import React from 'react';
import { useSelector } from 'react-redux';

import Item from '../Item';
import Rtitle from '../rTitle';

function CoffeeList() {
  const user = useSelector((state) => state.auth.id.raited);

  return (
    <>
      <Rtitle />
      {user ? user.map((el) => <Item key={el._id} id={el._id} />) : null}
    </>
  );
}

export default CoffeeList;
