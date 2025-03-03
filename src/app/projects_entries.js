export const Tag = Object.freeze({
  NONE: Symbol("None"),
  GAME: Symbol("Games"),
  WEB: Symbol("Website"),
});

const path = `${process.env.BASE_PATH}/images/projects/`;
export const projects = [
  {
    name: "Bullet.Hell",
    img: `${path}/Bullet.Hell/b.h3.jpg`,
  }
]