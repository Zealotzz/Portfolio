'use client'

export default function PageDot({ n, current, size = 1 }) {
  if (n == null || n === 0) return;

  return (
    <>
      <div className="relative flex gap-2">
        {[...Array(n).keys()].map((id) => {
          return (
            <div
              key={id}
              className={`rounded-full bg-lightGray`}
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
              }}
            />
          );
        })}
        <div
          className={`absolute rounded-full bg-deepBlue transition-transform duration-500`}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
            transform: `translateX(${current * (size + 0.5)}rem)`,
          }}
        />
      </div>
    </>
  );
}