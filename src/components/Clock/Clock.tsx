import React, {useEffect, useState} from 'react';

type ClockPropsType = {}

const get2DigitsStrings = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<ClockPropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const itervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(itervalID)
        }
    },[])

    return (
        <div>
            <span>
                {get2DigitsStrings(date.getHours())}
            </span>
            :
            <span>
            {get2DigitsStrings(date.getMinutes())}
            </span>
            :
            <span>
              {get2DigitsStrings(date.getSeconds())}
            </span>
        </div>
    );
};

