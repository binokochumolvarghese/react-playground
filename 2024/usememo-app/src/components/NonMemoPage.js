import {useState} from 'react';

const slowFunctionNumber = (num) =>{
    for(var i=1; i<1000; i++){
        console.log("slowFunctionNumber called.");
    }
    return  num * 2
}

const NonMemoPage = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDarkTheme] = useState(false);

    const onNumberChangeHandler = (e) => {
        setNumber(e.target.value);
    };

    const onThemeChangeHandler = () => {
        setDarkTheme(prevDark => !prevDark);
    }

    const doubleNumber = slowFunctionNumber(number);

    const styleClass = {
        backgroundColor: dark ? 'white' : 'black',
        color: dark ? 'black' : 'white',
        minHeight: '100px'
    }
      

    return (
        <>
        <input type="text" onChange={onNumberChangeHandler} value={number}></input>
        <br/>
        <button onClick={onThemeChangeHandler}>Click to change theme</button>
        <div style={styleClass}>{doubleNumber}</div>
        </>
    )
}

export default NonMemoPage;