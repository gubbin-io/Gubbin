import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function createColorPicker(date: any) {
  const [startDate, setStartDate] = date;
  return React.forwardRef(() => (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  ));
}

export default createColorPicker;
