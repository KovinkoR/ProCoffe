import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item';
import TopTitle from '../TopTitle';

function CoffeeList() {
  const dispatch = useDispatch();

  const top = useSelector((state) => state.top.top);

  useEffect(() => {
    dispatch(startCoffeeItemsSaga());
  }, [dispatch]);

  return (
    <>
      <TopTitle />
      {top ? top.map((el) => <Item key={el._id} id={el._id} />) : null}
    </>

  );
}

export default CoffeeList;
