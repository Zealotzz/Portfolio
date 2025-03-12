export const Tag = Object.freeze({
  NONE: Symbol("None"),
  GAME: Symbol("Games"),
  WEB: Symbol("Website"),
});

const path = `${process.env.BASE_PATH}/images/projects/`;
export const projects = [
  {
    name: "Bullet.Hell",
    tag: Tag.GAME,
    src: `${path}/Bullet.Hell/b.h3.jpg`,
    page: ""
  },
  {
    name: "Lumenous",
    tag: Tag.GAME,
    src: `${path}/Lumenous/lum6.jpg`,
    page: ""
  },
  {
    name: "Infini-Tactics",
    tag: Tag.GAME,
    src: `${path}/InfiniTactics/InfiniTactics_Thumbnail.jpg`,
    page: ""
  },
]