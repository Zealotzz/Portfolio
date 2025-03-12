export default function Tab({ imgSrc, text }) {
  if (imgSrc == null || imgSrc === "") {
    return;
  }

  return (
    <>
      <div className="">
        <img src={imgSrc} loading="lazy"/>
        <p className="mt-4 text-center">{text}</p>
      </div>
    </>
  );
}