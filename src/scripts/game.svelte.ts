import { mapW, secretCommand, timeBonus, timelimit } from "@/config";
import { playAudio, stopAudio } from "./audio.svelte";
import { playGameoverEffect } from "./effect.svelte";
import { generateMap, getCell } from "./level";
import { isFruit } from "./object";
import { isSamePosition, movePosition } from "./position";
import { factors } from "./score.svelte";

export const state = $state<GameState>(initialState());

let timer: ReturnType<typeof setInterval> | null = null;
export function initializeState(): void {
  Object.assign(state, initialState());

  timer = setInterval(() => {
    if (state.gameover) {
      return;
    }

    state.timelimit -= 0.5;
    if (state.timelimit <= 0) {
      finishGame("timeup");
    }
  }, 500);
}

function initialState(): GameState {
  return {
    level: 1,
    snakeTouched: false,
    bag: [],
    gameover: null,
    timelimit,
    commands: [],
    casted: false,
    ...generateMap(0),
  };
}

export function move(dir: Direction) {
  if (state.gameover) {
    return;
  }

  state.commands.push(dir);
  if (state.commands.length > mapW) {
    state.commands.shift();
  }
  evaluateCommand();

  const next = movePosition(state.snake, dir);
  if (isSamePosition(state.snake, next)) {
    return;
  }

  state.snake = next;

  const nextCell = getCell(state.map, next);
  if (nextCell.object === "goal") {
    finishFloor();
    return;
  }

  playAudio("move");
  if (isFruit(nextCell.object)) {
    pushFruit(nextCell.object);
    nextCell.object = null;
  }
}

export function popFruit(n: number) {
  if (state.gameover) {
    return;
  }

  if (state.bag[n]) {
    state.bag[n] = undefined;
  }
}

export function touchSnake() {
  if (state.gameover) {
    return;
  }

  if (!state.snakeTouched) {
    factors.snakeTouch++;
    state.snakeTouched = true;
  }
}

function pushFruit(fruit: Fruit) {
  const fruits = [...state.bag];
  for (let i = 0; i < 5; i++) {
    if (!fruits[i]) {
      fruits[i] = fruit;
      break;
    }
  }
  if (fruits.length > 4) {
    fruits.shift();
  }
  state.bag = fruits;
}

function finishFloor() {
  evaluateFruitBag();

  factors.level++;
  state.level++;

  const gameover = state.bag.includes("dragon");
  if (gameover) {
    finishGame("dragon");
  } else {
    playAudio("nextfloor");

    state.casted = false;
    state.snakeTouched = false;
    state.bag = [];

    const { goal, map, snake } = generateMap(state.level);
    state.goal = goal;
    state.map = map;
    state.snake = snake;
  }
}

function evaluateFruitBag() {
  const fruits = state.bag.filter((f) => !!f);
  const dict = new Map<Fruit, number>();

  for (const fruit of fruits) {
    factors[fruit]++;
    dict.set(fruit, (dict.get(fruit) ?? 0) + 1);
  }

  const calcBonus = (base: number) =>
    Math.min(base - Math.floor(state.level / 5), Math.floor(base / 3));

  for (const count of dict.values()) {
    switch (count) {
      case 2:
        factors.double++;
        state.timelimit += calcBonus(timeBonus.double);
        break;
      case 3:
        factors.triple++;
        state.timelimit += calcBonus(timeBonus.triple);
        break;
      case 4:
        factors.filled++;
        state.timelimit += calcBonus(timeBonus.filled);
        break;
      default:
        break;
    }
  }
}

function evaluateCommand() {
  if (state.casted) {
    return;
  }

  for (let w = 0; w < mapW; w++) {
    if (state.commands[w] !== secretCommand[w]) {
      return;
    }
  }

  playAudio("secret");
  state.casted = true;
  state.commands = [];
  factors.secretCommand++;
}

function finishGame(reason: GameoverReason) {
  playGameoverEffect();
  playAudio("gameover");
  stopAudio("bgm");
  state.gameover = reason;
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
