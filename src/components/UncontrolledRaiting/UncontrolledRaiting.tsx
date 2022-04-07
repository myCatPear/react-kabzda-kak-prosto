import React, {useState} from "react";

const UncontrolledRating: React.FC = () => {
const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}

type StartPropsType = {
    selected:boolean
    setValue:(value:number) => void
    value:number
}

function Star(props:StartPropsType) {
return (
    <span onClick={() => props.setValue(props.value)}>
       {props.selected ?  <b>star </b> : "star "}
    </span>
)
}

export default UncontrolledRating