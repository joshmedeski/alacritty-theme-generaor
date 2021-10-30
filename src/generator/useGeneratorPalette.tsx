import { useState } from "react";

const defaultPalette = {
  background_opacity: 0.7,
  colors: {
    primary: {
      background: "#0f1518",
      foreground: "#D8DEE9",
    },
    normal: {
      black: "#0f1518",
      red: "#f86e24",
      green: "#a3be8c",
      yellow: "#fffb83",
      blue: "#defdff",
      magenta: "#e4646f",
      cyan: "#b5c9ce",
      white: "#ffffff",
    },
    bright: {
      black: "#5e7c7a",
      red: "#f86e24",
      green: "#d9edaa",
      yellow: "#fffb83",
      blue: "#81A1C1",
      magenta: "#e4646f",
      cyan: "#b5c9ce",
      white: "#5e7c7a",
    },
  },
};

export interface Palette {
  colors: {
    primary: {
      background: string;
      foreground: string;
    };
    normal: {
      black: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
    };
    bright: {
      black: string;
      red: string;
      green: string;
      yellow: string;
      blue: string;
      magenta: string;
      cyan: string;
      white: string;
    };
  };
}

const useGeneratorPalette = () => {
  const [palette, setPalette] = useState<Palette>(defaultPalette);
  return { palette, setPalette };
};

export default useGeneratorPalette;
