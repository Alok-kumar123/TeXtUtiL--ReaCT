import React, {useState} from 'react'

export default function Forms(props) {
    
    const handleUpclick = ()=>{
        console.log("upper case was clicke"+ text);
        let newText=text.toUpperCase();
        SetText(newText)
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoclick=()=>{
        let ntext=text.toLowerCase();
        SetText(ntext)
        props.showAlert("converted to Lower Case","success");
    }
    const handleclear=()=>{
        let ntext="";
        SetText(ntext)
        props.showAlert("Space Cleared","success");
    }
    const handlecopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handlerev=()=>{
        let stack = [];
        let s1 = "";

        let i = 0;

        while (i <= text.length) {
            if (text[i] !== ' ' && i < text.length) {
                stack.push(text[i]);
                i++;
            } else if (text[i] === ' ' || i === text.length) {
                i++;
                while (stack.length > 0) {
                    s1 += stack.pop();
                }
                if(i!==text.length+1){
                 s1 += ' ';}
            }
        }
        SetText(s1)
        props.showAlert("Reversal done","success");
    }
    function Vowcons(text){
        let vcnt=0;
        let ccnt=0;
        for(let i=0;i<text.length;i++)
        {
            if(text[i]==='a'||text[i]==='e'||text[i]==='i'||text[i]==='u'||text[i]==='o'||text[i]==='A'||text[i]==='E'||text[i]==='I'||text[i]==='O'||text[i]==='U')
            {
                vcnt++;
            }
            else{
                if(text[i]!==' ')
                {
                    ccnt++;
                }
            }
        }
        return [vcnt," and ",ccnt];
    }
    //Rajex used
    const handlextraSpace=()=>{
        let ntext=text.split(/[ ]+/);
        SetText(ntext.join(" "))
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnchange=(event)=>{
              console.log("On change");
              SetText(event.target.value)
    }
    const [text, SetText]=useState("enter text here");
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary"   onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3"   onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2"   onClick={handleclear}>clear space</button>
        <button className="btn btn-primary mx-2"   onClick={handlerev}>reverse text word by word</button>
        <button className="btn btn-primary mx-2"   onClick={handlecopy}>copy text</button>
        <button className="btn btn-primary mx-2"   onClick={handlextraSpace}>remove extra spaces</button>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>No. of words= {text.length>0?text.split(" ").length:0} and No. of characters= {text.length}</p>
            <p>{0.008*text.split(" ").length} minutes to read entire text</p>
            
            <p> No. of Vowels and consonents are: {Vowcons(text)}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Something to Preview it here"}</p>
        </div>
    </div>
  )
}
