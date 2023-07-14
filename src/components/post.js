import DOMpurify from "dompurify";

import { catString } from "../functions/catString";
import { genRand } from "../functions/random";
import { skillsMapper } from "../functions/skillsMapper";

export default function Post(props) {
  const postText = DOMpurify.sanitize(props.data.info);
  function info() {
    return (
      <>
        <div className="info" id="info">
          {props.data.info ? (
            <div
              style={{ textAlign: "justify" }}
              dangerouslySetInnerHTML={{ __html: postText }}
            ></div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
  function images() {
    if (!props.data.screenshot) {
      return console.log("there is no screenshot data");
    }
    if (typeof props.data.screenshot === "string") {
      return (
        <>
          <img
            src={props.data.screenshot}
            className="previewImg"
            alt={`${props.data.name.toLowerCase()} preview screenshot`}
            title={`${props.data.name.toLowerCase()} screenshot preview`}
            onClick={() => {
              props.setModalImage(props.data.screenshot);
              document.getElementById(props.modalID).showModal();
            }}
          />
        </>
      );
    } else if (Array.isArray(props.data.screenshot) === true) {
      return (
        <div>
          {props.data.screenshot.map((image) => {
            return (
              <img
                src={image}
                key={genRand(4)}
                className="previewImg previewGrid"
                alt={`${image.toLowerCase()} preview screenshot`}
                title={`${image.toLowerCase()} screenshot preview`}
                onClick={() => {
                  props.setModalImage(image);
                  document.getElementById(props.modalID).showModal();
                }}
              />
            );
          })}
        </div>
      );
    }
  }
  function alternatingMapper() {
    return props.index % 2 === 0 ? (
      <>
        {info()}
        {images()}
      </>
    ) : (
      <>
        {images()}
        {info()}
      </>
    );
  }

  return (
    <>
      <div className="post">
        <div className="titleBar spacer">
          <div id="name+links" className="titleBar">
            <span id={catString(props.data.name, "-")} className="postTitle">
              {props.data.name}
            </span>
            {props.data.url ? (
              <a
                href={props.data.url}
                className="linkBold"
                target="_blank"
                rel="noreferrer"
              >
                <button className="linkBold postButton">Site</button>
              </a>
            ) : (
              <></>
            )}
            {props.data.repo ? (
              <a href={props.data.repo} target="_blank" rel="noreferrer">
                <button className="linkBold postButton">Github repo</button>
              </a>
            ) : (
              <></>
            )}
          </div>
          {props.data.skills ? (
            <>
              <div id="skills">{skillsMapper(props.data.skills)}</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <hr />
        <div className="bulk">{alternatingMapper()}</div>
      </div>
    </>
  );
}
