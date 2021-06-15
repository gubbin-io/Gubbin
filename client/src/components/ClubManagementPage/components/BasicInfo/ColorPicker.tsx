import React from "react";
import { BlockPicker } from "react-color";

function createColorPicker(values: any, classes: any, setFieldValue: any) {
  return React.forwardRef(() => (
    <div className={classes.pickerBox}>
      <BlockPicker
        triangle="hide"
        color={values.themeColor}
        colors={[
          "#e03131",
          "#c2255c",
          "#9c36b5",
          "#6741d9",
          "#3b5bdb",
          "#1971c2",
          "#0c8599",
          "#099268",
          "#2f9e44",
          "#66a80f",
          "#f08c00",
          "#e8590c",
        ]}
        width="100%"
        onChange={(color) => {
          setFieldValue("themeColor", color.hex);
        }}
      />
    </div>
  ));
}

export default createColorPicker;
