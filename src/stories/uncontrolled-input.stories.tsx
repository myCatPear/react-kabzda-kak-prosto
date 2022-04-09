import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <input onChange={onChangeHandler}/> {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const saveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={saveHandler}>save</button>
            actual value: {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
    }
    return <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>