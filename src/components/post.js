import { catString } from "../functions/catString";

export default function Post(props) {
  console.log(props.data);
  return (
    <>
      <div className="post">
        <p id={catString(props.data.name, "-")} className="header">
          {props.data.name}
        </p>
        {props.data.repo ? (
          <a href={props.data.repo} target="_blank" rel="noreferrer">
            <button>repo</button>
          </a>
        ) : (
          <></>
        )}
        {props.data.url ? (
          <a href={props.data.url} target="_blank" rel="noreferrer">
            <button href={props.data.url}>site</button>
          </a>
        ) : (
          <></>
        )}
        <br />
        {props.data.screenshot ? (
          <img src={props.data.screenshot} width="512px" />
        ) : (
          <></>
        )}
        {props.data.info ? (
          <div dangerouslySetInnerHTML={{__html: props.data.info}}>
            </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
