import React, { useState, useEffect } from 'react';
import { RiveEngine, setRiveInputValue } from './RiveEngine';
import { Button } from '../Button/Button';

/** Testing having internal changes in a Rive input's value affect some Stateful value in a parent component */
export function RiveRatingTest(){

    //The star rating
    const [ratingValue, setRatingValue] = useState(0);
    
    /** Used to make the inputs object accessible by any child component of this top-level Tool component */
    const inputs = React.useRef({}); //Just using React.useRef here just so VS Code will whisht about React being unreferenced
    
    /** Used to make changes in a named input affect a Stateful value (by calling its React setter function) */
    const inputToStateLinks = {
        rating: { setter: setRatingValue },
    };
    
    //The name of the main input this top-level component will be working with (storing it here to keep things DRY, since it'll be referenced in a number of places below)
    const inputName = "rating";

    useEffect(() => {
        setRiveInputValue(ratingValue, inputName, inputs, false);
    }, [ratingValue]);


    //Main component elements
    /*  There're 2 examples here of potential approaches for setting a State value AND updating
        the value of the input that should be bidirectionally linked to that state:

        - Approach 1:
            The callback function runs the Stateful value's setter function, and
            then also runs the setRiveInputValue function, so that the React State and
            the Rive Input both end up with the same value.

        - Approach 2:
            Only use the State's setter method. This is tidy, but requires you to set up a
            useEffect (like the one for "ratingValue" above) that watches the Stateful value for changes, and propogates that value change to
            the Rive input by calling setRiveInputValue.
    */
    return (
    <>
        <RiveEngine src="/rive/star-rating.riv" debug={true} ignoreReducedMotion={true} inputToStateLinks={inputToStateLinks} inputs={inputs}/>
        <div><h1>{ratingValue}</h1></div>
        <Button primary clickHandler={() => {setRatingValue(0); setRiveInputValue(0, inputName, inputs); }} >0 stars</Button>
        <Button primary clickHandler={() => setRatingValue(1)} >1 stars</Button>
        <Button primary clickHandler={() => setRatingValue(2)} >2 stars</Button>
        <Button primary clickHandler={() => setRatingValue(3)} >3 stars</Button>
        <Button primary clickHandler={() => setRatingValue(4)} >4 stars</Button>
        <Button primary clickHandler={() => setRatingValue(5)} >5 stars</Button>
        <p>{"React State value <-> Rive Input value test"}</p>
    </>
    );
}