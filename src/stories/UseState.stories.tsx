import React, {useMemo} from "react";
import {useState} from "react";

export default {
    title: "useState demo"
}

function generateData() {
    let i = 0;
    for (let j = 0; j < 100; j++) {
        i++
    }
    console.log('generateData')
    return i
}


export const Example1 = () => {
    console.log('Example1')
   // const initValue = useMemo(generateData,[])
    const [counter, setCounter] = useState(generateData)
    const changer = (state:number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {/*<button onClick={() => setCounter(state => state + 1)}>+</button>*/}
        {counter}
    </>
}