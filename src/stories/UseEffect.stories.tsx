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


