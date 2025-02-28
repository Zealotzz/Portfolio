import nextConfig from "../../next.config.mjs";

export const Tag = Object.freeze({
  NONE: Symbol("None"),
  GAME: Symbol("Games"),
  WEB: Symbol("Website"),
});

const path = `${nextConfig.basePath}/images/projects/`;
export const projects = [
  {
    name: "Bullet.Hell",
    img: `${path}/Bullet.Hell/b.h3.jpg`,
  }
]