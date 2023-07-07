import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import exp from "constants";
import {Accordion, AccordionPropsType} from "./Accordion";
import {OnOff} from "../OnOff/OnOff";
import {Story} from "@storybook/react";


export default  {
    title: 'components/Accordion',
    component: Accordion
};

const callback = action('accordion mode change event fired');
const onclickCallback = action('some item was clicked')

//
// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
// const  callbaksProps={
//     onChange:callback
// }
// export const MenuCollapsedMode = Template.bind({});
// MenuCollapsedMode.args = {
//     ...callbaksProps,
//     titleValue:"Menu",
//     collapsed: true
// }
//
// export const UsersUncollapsedMode = Template.bind({});
// UsersUncollapsedMode.args = {
//     ...callbaksProps,
//     titleValue:"Users",
//     collapsed: true
// }

export  const MenuCollapsedMode = ()=> <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onclickCallback}/>;
export  const UsersUncollapsedMode = ()=> <Accordion titleValue={"Users"}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[{title: "Dimych", value: 1},{title: "Valera", value: 2},{title: "Artem", value: 3},{title: "Victor", value: 4}]}
                                                     onClick={onclickCallback}/>;

export  const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={()=> setValue(!value)}
                      items={[{title: "Dimych", value: 1},{title: "Valera", value: 2},{title: "Artem", value: 3},{title: "Victor", value: 4}]}
                      onClick={(value)=>{alert(`user with ID ${value} should be happy`)}}/>;
}