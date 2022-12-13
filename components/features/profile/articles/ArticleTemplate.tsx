const ArticleTemplate = (props: any) => {
  const articleList = props.articleList;

  if (articleList !== undefined) {
    return (
      <div>
        {articleList.map((article: any, key: number) => {
          return (
            <div key={key}>
              <h3>Title : {article.title}</h3>
              <p>{article.contents}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No articles to show</div>;
  }
};
export default ArticleTemplate;
