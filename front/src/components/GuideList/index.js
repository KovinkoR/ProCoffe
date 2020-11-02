import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MediaCard from '../Guides';
import { startArticlesSaga } from '../../redux/actions/articleActions';
import CenteredGrid from '../ArticleTitle';

function GuideList() {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles.articles);

  useEffect(() => {
    dispatch(startArticlesSaga());
  }, [dispatch]);

  return (
    <>
      <CenteredGrid />
      {articles ? articles.map((el) => (
        <Link key={el._id} to={`/guides/${el._id}`}>
          <MediaCard key={el.id} id={el._id} />
          {' '}
        </Link>
      )) : null}
    </>
  );
}

export default GuideList;
