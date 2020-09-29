import React, { useState, useEffect } from 'react';

const url = 'https://jsonmock.hackerrank.com/api/articles?page=';

function Articles() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState({
    total_pages: 0, data: []
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(url + page)
      .then(res => res.json())
      .then(res => {
        setArticles(res);
        console.log(res);
      })
      .catch(e => { throw new Error(e) })
      .finally(() => setLoading(false));
  }, [page]);

  function onPageClick(i) {
    if (loading) return;
    setPage(i);
  }

  return (
    <React.Fragment>
      <div className="pagination">
        {
          Array(articles.total_pages).fill().map((_, i) => (
            <button
              data-testid="page-button"
              key={"page-button-" + (i + 1)}
              onClick={() => onPageClick(i + 1)}
            >
              {i + 1}
            </button>
          ))
        }
      </div>
      <ul className="results">
        {
          articles.data.map((v, i) => {
            if (v.title) {
              return (
                <li key={i} data-testid="result-row">
                  {v.title}
                </li>
              )
            }
            return '';
          })
        }
      </ul>
    </React.Fragment>
  );

}

export default Articles;
