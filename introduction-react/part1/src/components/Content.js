import React from 'react'
import Part from './Part';

const Content = (props) =>
{

    // loop through object in js
    const listPart = Object.entries(props.data).map(([ key, value ]) =>
        <Part part={key} excercise={value} />
    );


    return (
        <>
            <div> {listPart} </div>
        </>
    )
}

export default Content