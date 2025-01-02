import type { Action } from "svelte/action";

export const tap: Action<HTMLElement, void, { ontap: () => void }> = (node) => {
  $effect(() => {
    // let disabled = false;
    const ontapstart = () => {
      // if (disabled) {
      //   return;
      // }

      // disabled = true;
      node.dispatchEvent(new CustomEvent("tap"));
    };

    // const ontapend = () => {
    //   disabled = false;
    // };

    node.addEventListener("click", ontapstart);
    // node.addEventListener("touchstart", ontapstart);
    // node.addEventListener("mouseup", ontapend);
    // node.addEventListener("touchend", ontapend);

    return () => {
      node.removeEventListener("click", ontapstart);
      // node.removeEventListener("touchstart", ontapstart);
      // node.removeEventListener("mouseup", ontapend);
      // node.removeEventListener("touchend", ontapend);
    };
  });
};
