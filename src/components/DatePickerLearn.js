import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerLearn = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className=' w-full bg-red-600 h-screen'>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="py-1 my-4 mx-4"
            />
        </div>
    )
}

export default DatePickerLearn