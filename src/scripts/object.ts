export function isFruit(obj: MapObject): obj is Fruit {
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
  return (fruits as MapObject[]).includes(obj);
}
