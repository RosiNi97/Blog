import { getBlogCollections } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../../styles/blog.module.css";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

export default function BlogCollection() {
  const [blogs, setBlogs] = useState<DocumentData[]>([]);

  useEffect(() => {
    getBlogCollections()
      .then((result) => {
        const blogList: DocumentData[] = [];
        result.forEach((d) => {
          blogList.push(d.data());
        });
        setBlogs(blogList);
      })
      .catch((error) => error);
  }, []);

  return (
    <div>
      {blogs
        ? blogs.map((b) => (
          <div key={b.title}>
            <h1>{b.title}</h1>
            <div>{b.video}</div>
            <div key={b.id}>
              <h3>Title : {b.title}</h3>
              <p>{b.contents}</p>
                <section>
                  <img src="https://t3.ftcdn.net/jpg/02/51/30/52/360_F_251305284_M7NOdeDXcXx44WkUWkHQijztn3yneroq.jpg" alt="working" />
                </section>
                <aside >
                  <details>
                    <summary>More</summary>
                    <p></p>
                  </details>
                  <details>
                    <summary>Social media</summary>
                  </details>
                </aside>
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${b.videoID}`}
                  allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={b.title}/>
              </div>
            </div>
            ))
        : null}
          </div>
        );
}
