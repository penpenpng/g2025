import { controls, mapH, mapW } from "@/config";
import { getDistictRandomPositions } from "./position";

export function generateRandomFruit(level: number): Fruit {
  const fruits: Fruit[] = [
    "apple",
    "banana",
    "cherry",
    "dragon",
    "grapes",
    "melon",
    "orange",
    "peach",
    "watermelon",
  ];
  return choose(fruits);
}

export function generateMap(level: number): {
  map: GameMap;
  snake: Position;
  goal: Position;
} {
  const map: GameMap = [];

  const controls = generateControls(level);
  const [snake, goal] = getDistictRandomPositions(2, Object.values(controls));

  for (let h = 0; h < mapH; h++) {
    const row: GameMapCell[] = [];
    for (let w = 0; w < mapW; w++) {
      row.push({
        object: generateRandomFruit(level),
        tile: "floor",
      });
    }
    map.push(row);
  }

  updateCell(map, snake, { object: null });
  updateCell(map, goal, { object: "goal" });
  updateCell(map, controls.up, { tile: "control", object: "up" });
  updateCell(map, controls.down, { tile: "control", object: "down" });
  updateCell(map, controls.left, { tile: "control", object: "left" });
  updateCell(map, controls.right, { tile: "control", object: "right" });

  return {
    map,
    snake,
    goal,
  };
}

function generateControls(level: number) {
  if (level <= 3) {
    return {
      up: [3, 1] as Position,
      down: [4, 1] as Position,
      left: [4, 0] as Position,
      right: [4, 2] as Position,
    };
  } else {
    return {
      up: choose(controls.up),
      down: choose(controls.down),
      left: choose(controls.left),
      right: choose(controls.right),
    };
  }
}

function choose<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function updateCell(
  map: GameMap,
  pos: Position,
  cell: Partial<GameMapCell>
): void {
  map[pos[0]][pos[1]] = { ...map[pos[0]][pos[1]], ...cell };
}

export function getCell(map: GameMap, pos: Position) {
  return map[pos[0]][pos[1]];
}
