import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";

function createColorPicker(date: any) {
  const [startDate, setStartDate] = date;

  return React.forwardRef(() => (
    <div>
      <DayPickerInput
        value={startDate}
        onDayChange={(date) => setStartDate(date)}
        style={{ lineHeight: 1.25 }}
      />
    </div>
  ));
}

export default createColorPicker;
