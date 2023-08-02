import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = ()=>{
    const [fake, setFake]= useState(1)
    const [counter, setCounter]= useState(1)
    console.log("SimpleExample");

    useEffect(()=>{
      console.log("useEffect");
        document.title = counter.toString();
         //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = "User";
    }, [counter])

    useEffect(()=> {
        console.log("useEffect every render");
        document.title = counter.toString();
    })
    useEffect(()=> {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])
    useEffect(()=> {
        console.log("useEffect first render every counting change");
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello,{counter} {fake}
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setFake(fake+1)}>+</button>
    </>
}

export const SetTimeoutExample = ()=>{
    const [fake, setFake]= useState(1)
    const [counter, setCounter]= useState(1)

    console.log("SetTimeoutExample");

    useEffect(()=> {
        setTimeout(()=>{
            console.log("setTimeout")
            document.title = counter.toString();
        }, 1000)
    },[counter])

    return <>
        Hello,{counter} {fake}
        <button onClick={()=>setCounter(counter+1)}>counter+</button>
        <button onClick={()=>setFake(fake+1)}>fake+</button>
    </>
}

export const SetIntervalExample = ()=>{
    const [fake, setFake]= useState(1)
    const [counter, setCounter]= useState(1)

    console.log("SetIntervalExample");

    useEffect(()=> {
        setInterval(()=>{
            setCounter((state)=> state + 1);
        }, 1000)
    },[])

    return <>
        Hello,counter: {counter} - fake: {fake}
        {/*<button onClick={()=>setCounter(counter+1)}>counter+</button>*/}
        {/*<button onClick={()=>setFake(fake+1)}>fake+</button>*/}
    </>
}