import React, {ChangeEvent, useState} from "react";
import {ItemType, Select} from "./Select";
import exp from "constants";
import {NativeSelect} from "@mui/material";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select",
    component: Select
}



export const WithValue = ()=>{
    const [value, setValue]= useState('2');
    return(
    <Select value={value} onChange={setValue} items={[{title: "Minsk", value: "1"},
                                                     {title: "Moscow", value:"2"},
                                                     {title: "Kazan", value: "3"}]}/>
    )
    }

export const WithoutValue = ()=> {
    const [value, setValue]= useState(null);
    return(
    <Select onChange={setValue}  value={value} items={[{title: "Minsk", value: "1"},
                                        {title: "Moscow", value:"2"},
                                        {title: "Kazan", value: "3"}]}/>
    )
}

// export const SelectChangingMode=()=>{
//     const [selectValue, setSelectValue] = useState<string | undefined>("2")
//     // const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     //     setSelectValue(e.currentTarget.value)
//     // }
//     let items= [    {title: "one", value: 1},
//                     {title: "two", value: 2},
//                     {title: "three", value: 3},
//                     {title: "four", value: 4}]
//
//     return (
//     <Select value={selectValue}
//             onChange={(value)=> {setSelectValue(value)}} items={items}
//             // items={[ {title: "one", value: 1},
//             //          {title: "two", value: 2},
//             //          {title: "three", value: 3},
//             //          {title: "four", value: 4}]}
//     />
//     )
// }