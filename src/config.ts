export const mapH = 5;
export const mapW = 5;
export const timelimit = 30;
export const timeBonus = {
  double: 5,
  triple: 10,
  filled: 15,
};

const arrangement = ["lrlud", "drdlu", "lruud", "rudlr", "ldrlu"];
const controls: Record<Direction, Position[]> = {
  up: [],
  down: [],
  left: [],
  right: [],
};
const toDir = (c: string): Direction => {
  switch (c) {
    case "l":
      return "left";
    case "r":
      return "right";
    case "u":
      return "up";
    case "d":
      return "down";
    default:
      throw new Error();
  }
};

for (let h = 0; h < mapH; h++) {
  for (let w = 0; w < mapW; w++) {
    const pos: Position = [h, w];
    controls[toDir(arrangement[h][w])].push(pos);
  }
}

export { controls };
export const secretCommand = [...arrangement[1]].map(toDir);
