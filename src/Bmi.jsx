import React, { useEffect } from 'react';
import './Bmi.css';
import { useState } from 'react';
let Bmi = () =>{
    let [heightValue, setHeightValue] = useState(0);
    let [weightValue, setWeightValue] = useState(0);
    let [result, setResult] = useState(0);

    let updateHeight = (event) =>{
        setHeightValue(event.target.value);
    }

    let updateWeight = (event) =>{

        setWeightValue(event.target.value);
    }

    let performOperation = (isButtonPressed) =>{
        if(heightValue==0 || weightValue==0){
            return;
        }
        let output = weightValue/((heightValue*heightValue)*0.3048 );
        setResult(output.toFixed(2 ));

       if(isButtonPressed){
        setHeightValue(0);
        setWeightValue(0);
       }

    }

    useEffect( ()=>{
        performOperation(false);
        
    }, [heightValue,weightValue]);
    

    return(
        <>
            <h1>BMI CALCULATOR</h1>
            <div className="wrapper">
                <div className="upper">
                    <input type="number"  placeholder="Enter height" value={heightValue} onChange={updateHeight}/>
                    <input type="number"  placeholder="Enter wieght" value={weightValue} onChange ={updateWeight}/>
                    <button onClick={() =>performOperation(true)}>Calculate</button>
                </div>
                <div className="lower">
                    <p>{result}</p>
                </div>
            </div>
        </>

    );
}

export default Bmi;

