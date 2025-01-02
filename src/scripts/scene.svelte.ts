let scene = $state<Scene>("title");

export const getScene = () => scene;

export const setScene = (v: Scene) => {
  scene = v;
};
