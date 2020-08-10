import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Components/Rating/Rating"
import OnOff from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/Accordion/UnControlledAccordion";
import UnControlledRating from "./Components/Rating/UnControlledRating";
import Accordion from "./Components/Accordion/Accordion";
import UncontrolledOnOff from "./Components/OnOff/UnControlledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false);


    return <div className="App">
        <PageTitle title={'This is APP component'}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <OnOff on={on} setOn={setOn}/>
        <OnOff on={on} setOn={setOn}/>

        <UnControlledRating/>
        <UnControlledAccordion titleValue={"Menu"}/>
        <UnControlledAccordion titleValue={"Users"}/>
        <UnControlledRating/>
        <UncontrolledOnOff/>
        <UncontrolledOnOff/>
    </div>
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
