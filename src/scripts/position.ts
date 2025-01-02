import { mapH, mapW } from "@/config";

export function getRandomPosition(): Position {
  const h = Math.floor(Math.random() * mapH);
  const w = Math.floor(Math.random() * mapW);
  return [h, w];
}

export function isSamePosition(p: Position, q: Position): boolean {
  return p[0] === q[0] && p[1] === q[1];
}

export function getDistictRandomPositions(
  size: number,
  reserved: Position[] = []
): Position[] {
  if (size > mapH * mapW) {
    throw new Error();
  }

  const res: Position[] = [];

  while (res.length < size) {
    const newpos = getRandomPosition();
    if ([...res, ...reserved].some((pos) => isSamePosition(pos, newpos))) {
      continue;
    }
    res.push(newpos);
  }

  return res;
}

export function movePosition(pos: Position, dir: Direction): Position {
  const [h, w] = pos;

  switch (dir) {
    case "up":
      if (h > 0) {
        return [h - 1, w];
      }
      break;
    case "down":
      if (h < mapH - 1) {
        return [h + 1, w];
      }
      break;
    case "left":
      if (w > 0) {
        return [h, w - 1];
      }
      break;
    case "right":
      if (w < mapW - 1) {
        return [h, w + 1];
      }
      break;
    default:
      break;
  }

  return pos;
}
