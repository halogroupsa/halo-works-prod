import { useState } from "react";

/** Keep the visible image in place while a new scene loads. */
export function useSceneSelection(initial: number) {
  const [scene, setScene] = useState({
    requested: initial,
    visible: initial,
    mounted: [initial],
    loaded: [initial],
  });

  function select(index: number) {
    setScene((current) => {
      if (current.requested === index) return current;
      return {
        ...current,
        requested: index,
        visible: current.loaded.includes(index) ? index : current.visible,
        mounted: current.mounted.includes(index)
          ? current.mounted
          : [...current.mounted, index],
      };
    });
  }

  function load(index: number) {
    setScene((current) => {
      if (current.loaded.includes(index)) return current;
      return {
        ...current,
        visible: current.requested === index ? index : current.visible,
        loaded: [...current.loaded, index],
      };
    });
  }

  function fail(index: number) {
    setScene((current) => {
      if (index === current.visible) return current;
      return {
        ...current,
        requested:
          current.requested === index ? current.visible : current.requested,
        mounted: current.mounted.filter((item) => item !== index),
        loaded: current.loaded.filter((item) => item !== index),
      };
    });
  }

  return { ...scene, select, load, fail };
}
