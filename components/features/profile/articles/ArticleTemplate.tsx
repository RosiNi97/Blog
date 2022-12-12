const ArticleTemplate = (props: any) => {
  const articleList = props.articleList;

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
};
export default ArticleTemplate;
