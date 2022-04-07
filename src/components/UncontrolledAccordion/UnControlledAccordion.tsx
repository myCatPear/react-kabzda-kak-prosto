import React, {useState} from "react";


type UnControlledAccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string,
    func: () => void
}


const UnControlledAccordion: React.FC<UnControlledAccordionPropsType> = ({title}) => {
    const [on, setOn] = useState<boolean>(false)

    const onClickHandler = () => {
        if (on) setOn(false)
        else setOn(true)
    }

    return (
        <div>
            <AccordionTitle title={title} func={onClickHandler}/>
            {on && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3 onClick={props.func}> {props.title} </h3>
    </div>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default UnControlledAccordion;