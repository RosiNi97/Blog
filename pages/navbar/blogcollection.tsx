import { getblogcollections } from "../../firebase/firestore"
import { useEffect, useState } from "react"
import { render } from "react-dom";
import {blogcollection} from "../../styles/blog.modules" ;

export default function BlogCollection() {
  const [blogs, setblogs] = useState<any>();
  useEffect(() => {
    getblogcollections()
      .then(result => Array.from(result.docs))
      .catch(error => Array.from(error))
  }, [])
  return (
    blogs
      ?
      Array.from("").map(() => {
      })
      :
      <div>
        <article>Article</article>

        <aside>Ads/Extra</aside>

        <footer>else</footer>
      </div>

  )
}
