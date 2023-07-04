import React, {useState} from "react";
import {spawn} from "child_process";


type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")
    const [value, setValue]=useState(0)

    return (
        <div>
            {/*<Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>*/}
            {/*<Star selected={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>*/}
            {/*<Star selected={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>*/}
            {/*<Star selected={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>*/}
            {/*<Star selected={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>*/}
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    );
}


type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue:(value: number)=> void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={()=>{props.setValue(props.value)}}>
                    {props.selected ? <b> star </b>: "star"}
            </span>


}