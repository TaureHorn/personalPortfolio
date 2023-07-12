import { genRand } from "../functions/random";
import Post from "./post";

export default function Section(props) {
  function posts() {
    return props.content.data.map((post) => {
      return <Post key={genRand(4)} data={post} />;
    });
  }
  return (
    <>
      <div className="post">
        <p>{props.content.metadata.explainer}</p>
      </div>
      {posts()}
    </>
  );
}
