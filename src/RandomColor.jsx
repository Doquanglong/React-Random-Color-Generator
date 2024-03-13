import {useState,useEffect} from 'react';
//React hook
// useState check the type and the function is to change the value of the type
// useEffect will do sth if the TypeofColor is change (inside the []) 

export default function RandomColor(){
    //default value 
    const [typeOfColor,setTypeOfColor]=useState("hex");
    const [color,setColor]=useState('#000000')

    function CreateRandomHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D",'E',"F"];
        let hexColor="#";
        for(let i=0;i<6;i++){
            // random value from 0 to 16
            hexColor+=hex[Math.floor(Math.random() * 16)]
        }
        setColor(hexColor);
    }
    // if the type of Color is changed it will trigger this useEffect
    useEffect(()=>{
        if(typeOfColor==="RGB")
            CreateRandomRGBColor();
        else 
            CreateRandomHexColor();
    },[typeOfColor])

    function CreateRandomRGBColor(){
        const r=Math.floor(Math.random() * 256);
        const g=Math.floor(Math.random() * 256);
        const b=Math.floor(Math.random() * 256);
        setColor(`rgb (${r} ,${g} ,${b})`);

    }

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color
        }}>
            <button onClick={typeOfColor==='hex' ? CreateRandomHexColor : CreateRandomRGBColor }> Generate Random Color</button>
            <button onClick={()=> setTypeOfColor("hex")}> Generate Hex Color</button>
            <button onClick={()=> setTypeOfColor("RGB")}> Generate RGB Color</button>
            <div style={{
                fontSize: "70px",
                marginTop: "75px" 
            }}>
                <h3>{typeOfColor==='hex'?'HEX Color':'RBG Color' }</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}