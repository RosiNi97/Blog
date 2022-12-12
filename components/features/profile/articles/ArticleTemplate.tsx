const ArticleTemplate = (props: any) => {
  const articleList = props.articleList;

  if (articleList !== undefined) {
    articleList.map((article: any, key: number) => {
      return (
        <div key={key}>
          <h3>Title : {article.title}</h3>
          <p>{article.contents}</p>
        </div>
      );
    });
  }
  return <div>No Articles To Show</div>;

  {
    /* {articleList.map((article: any, key: number) => {
        return (
          <div key={key}>
            <h3>Title : {article.title}</h3>
            <p>{article.contents}</p>
          </div>
        );
      })} */
  }
};
export default ArticleTemplate;
