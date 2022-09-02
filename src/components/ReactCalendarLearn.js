import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendarLearn = () => {
    let [data, setData] = useState("dd/mm/yyyy")
    let [data1, setData1] = useState("dd/mm/yyyy")
    const [value, setValue] = useState(new Date());
    const [value2, setValue2] = useState(new Date());
    // console.log(value)
    // let a = value.getDate()
    // console.log(a)
    // let b = value.toISOString().substring(0, 10)
    // let c = b.split("-").reverse().join("/");
    const f1 = (event) => {
        setValue(event)
        // var a = event.toISOString().substring(0, 10);
        // var c = a.split("-").reverse()
        // let d = c[0]
        // let e = d.split("")
        // let f = parseInt(e[1]) + 1
        // let g = f.toString()
        // let h = e[0].concat(g)
        // c.splice(0, 1, h)
        // let ok = c.join("/");
        // setData(ok)
        var a = event.getDate()
        if (a <= 9) {
            a = "0" + a
        }
        var b = event.getMonth() + 1
        if (b <= 9) {
            b = "0" + b
        }
        var c = event.getFullYear()
        var resultDate = a + "/" + b + "/" + c
        setData(resultDate)


    }
    const [showDate, setShowDate] = useState(false)
    const [showDate2, setShowDate2] = useState(false)
    const f2 = (event) => {
        setValue2(event)
        var a = event.getDate()
        if (a <= 9) {
            a = "0" + a
        }
        var b = event.getMonth() + 1
        if (b <= 9) {
            b = "0" + b
        }
        var c = event.getFullYear()
        var resultDate = a + "/" + b + "/" + c
        setData1(resultDate)
    }
    return (

        <div className=' bg-red-400 h-full'>
            <div className=''>
                <label className=''>Date of Birth:</label>
                <input type="text" value={data}
                    className="py-1 my-1 w-full border-solid border-2 border-indigo-600"
                    onClick={() => {
                        setShowDate(!showDate)
                        setShowDate2(false)
                    }}
                />
                {
                    showDate &&
                    <Calendar onChange={(e) => { f1(e) }} value={value}
                        className="absolute z-20 right-8"
                    />
                }
            </div>
            <div className=' w-full'>
                <label className=''>Date of Birth:</label>
                <input type="text" value={data1}
                    className="py-1 my-1 w-full border-solid border-2 border-indigo-600 "
                    onClick={() => {
                        setShowDate2(!showDate2)
                        setShowDate(false)
                    }}
                />
                {
                    showDate2 &&
                    <Calendar onChange={(e) => { f2(e) }} value={value2}
                        className="absolute z-20 right-8"
                    />
                }
            </div>
        </div>

    )
}

export default ReactCalendarLearn