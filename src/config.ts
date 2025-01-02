export const mapH = 5;
export const mapW = 5;
export const timelimit = 20;
export const timeBonus = {
  double: 1,
  triple: 2,
  filled: 3,
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
