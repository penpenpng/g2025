interface GameState {
  level: number;
  map: GameMap;
  snake: Position;
  snakeTouched: boolean;
  bag: (Fruit | undefined)[];
  goal: Position;
  gameover: GameoverReason | null;
  timelimit: number;
  commands: Direction[];
  casted: boolean;
}

type Scene = "title" | "ingame";
type GameoverReason = "timeup" | "dragon";

type ScoreFactor = {
  level: number;
  double: number;
  triple: number;
  filled: number;
  snakeTouch: number;
  secretCommand: number;
} & Record<Fruit, number>;

type GameMap = GameMapCell[][];

interface GameMapCell {
  tile: MapTile;
  object: MapObject;
}

type Direction = "up" | "down" | "right" | "left";
type MapTile = "floor" | "control";
type MapObject = Fruit | Direction | "goal" | null;
type Fruit =
  | "apple"
  | "banana"
  | "cherry"
  | "grapes"
  | "melon"
  | "orange"
  | "peach"
  | "watermelon"
  | "dragon";
type Position = [number, number];
