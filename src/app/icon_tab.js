export default function Tab({ imgSrc, text }) {
  if (imgSrc == null || imgSrc === "") {
    return;
  }

  return (
    <>
      <div className="select-none">
        <img src={imgSrc} draggable="false" loading="lazy"/>
        <p className="mt-4 text-center">{text}</p>
      </div>
    </>
  );
}