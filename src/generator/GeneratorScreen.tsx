import { FC } from "react";
import useGeneratorPalette from "./useGeneratorPalette";
import { SketchPicker } from "react-color";

const Color: FC<{ color: string }> = ({ color }) => {
  return <div className="w-12 h-12" style={{ backgroundColor: color }} />;
};

const GeneratorScreen: FC = () => {
  const { palette, setPalette } = useGeneratorPalette();

  function handleChange() {
    console.log("color: ", color);
    console.log("event: ", event);
  }

  return (
    <div>
      <h1 className="text-lg text-gray-800 font-bold">Generator</h1>

      <SketchPicker onChangeComplete={handleChange} />

      <div className="">
        <div className="flex">
          <Color color={palette.colors.normal.black} />
          <Color color={palette.colors.normal.red} />
          <Color color={palette.colors.normal.green} />
          <Color color={palette.colors.normal.yellow} />
          <Color color={palette.colors.normal.blue} />
          <Color color={palette.colors.normal.magenta} />
          <Color color={palette.colors.normal.cyan} />
          <Color color={palette.colors.normal.white} />
        </div>

        <div className="flex">
          <Color color={palette.colors.bright.black} />
          <Color color={palette.colors.bright.red} />
          <Color color={palette.colors.bright.green} />
          <Color color={palette.colors.bright.yellow} />
          <Color color={palette.colors.bright.blue} />
          <Color color={palette.colors.bright.magenta} />
          <Color color={palette.colors.bright.cyan} />
          <Color color={palette.colors.bright.white} />
        </div>
        <div className="grid grid-cols-8"></div>
      </div>
    </div>
  );
};

export default GeneratorScreen;
