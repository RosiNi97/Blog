const ArticleTemplate = (props: any) => {
  const articleList = props.articleList;

  // const showArticles = () => {
  //   if (articleList != undefined) {
  //     articleList.map((article: any, key: number) => {
  //       return (
  //         <div key={key}>
  //           <h3>Title : {article.title}</h3>
  //           <p>{article.contents}</p>
  //         </div>
  //       );
  //     });
  //   } else return <div>No Articles To Show</div>;
  // };

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
