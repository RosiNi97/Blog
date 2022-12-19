import { getBlogCollections } from "../../../firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../../styles/Blog.module.css";
import { DocumentData, QuerySnapshot } from "firebase/firestore";

export default function BlogCollection() {
  const [blogs, setBlogs] = useState<DocumentData[]>([]);

  useEffect(() => {
    getBlogCollections()
      .then((result) => {
        result.forEach((d) => {
          setBlogs([...blogs, d.data()]);
          console.log(d.data());
        });
      })
      .catch((error) => error);
  }, []);

  return (
    <div>
      {blogs
        ? blogs.map((b) => (
            <div key={b.id}>
              <h3>Title : {b.title}</h3>
              <p>{b.contents}</p>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${b.videoID}`}
                frameBorder="1"
                allow="accelerometer;autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={b.title}
              />
            </div>
          ))
        : null}
    </div>
  );
}
