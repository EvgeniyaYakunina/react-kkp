import React, {useMemo, useState} from 'react'

export default {
    title: 'useState demo'
}

function generateData(){
    // difficult counting
    console.log('generateData')
    return 86864776892312
}

export  const Example1 = ()=>{
    console.log("Example1")

    // const initValue = useMemo(generateData, [])
    const [counter, setCounter]= useState(generateData); //[86864776892312, function(newValue){}]

    return <>
        <button onClick={()=> setCounter(counter +1)}>+</button>
        {counter}
        </>
}

export  const Example2 = ()=>{
    console.log("Example2")

    // const initValue = useMemo(generateData, [])
    const [counter, setCounter]= useState(generateData); //[86864776892312, function(newValue){}]

    const changer = (state: number)=> {
        return state + 1
    }

    return <>
        <button onClick={()=> setCounter(changer)}>+</button>
        {/*<button onClick={()=> setCounter(state =>state + 1)}>+</button>*/} //short variant
        {counter}
    </>
}