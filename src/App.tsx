import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";





function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    let [switchOn, setSwitchOn]=useState(false)

    return (
        <div className={"App"}>
            <UncontrolledRating />
            <Accordion titleValue={"Menu"} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} collapsed={accordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}

        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
