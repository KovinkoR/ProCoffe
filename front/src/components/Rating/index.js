import React, { useState, memo } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeStatus } from '../../redux/actions/allItemsActions';

function Raiting({ id }) {
  const dispatch = useDispatch();
  const [rating, setRaiting] = useState('');
  let able = false;
  const [input] = useState({ id, rating });

  const user = useSelector((state) => state.auth);
  const myconst = useSelector((state) => state.top && state.top.top.find((x) => x._id === id));

  if (user && myconst) {
    myconst.raiting.map((el) => {
      if (el.userID === user.id.id) {
        able = !able;
      }
    });
  }

  async function handleRaiting(e) {
    setRaiting(e.target.value);
    const response = await fetch('/raiting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        rate: e.target.value,
      }),
    });
    const rate = await response.json();
    console.log(rate);
    dispatch(setChangeStatus(rate));
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const raitingValue = i + 1;
        return (
          <label>
            <input type="radio" name="rating" value={raitingValue} onClick={(e) => { handleRaiting(e); }} disabled={able} />
            <FaStar style={{ marginLeft: '10px' }} className="star" color={raitingValue <= rating ? 'gray' : 'darkgray'} />
          </label>
        );
      })}

    </div>
  );
}

export default memo(Raiting);
