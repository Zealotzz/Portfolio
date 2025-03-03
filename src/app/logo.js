export default function Logo({ size, logoColor="black" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style={{color: logoColor, width: size, height: size}}>
      <path d="M0 0L48 0L48 42" fill="currentColor" />
      <path d="M12 16L64 64L12 64" fill="currentColor" />
    </svg>
  );
} 