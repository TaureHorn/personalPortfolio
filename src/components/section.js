export default function Section(props) {
  console.log(props.content);
  return (
    <>
      <div className="centerForced">
        <p>{props.content[1].metadata.explainer}</p>
      </div>
    </>
  );
}
