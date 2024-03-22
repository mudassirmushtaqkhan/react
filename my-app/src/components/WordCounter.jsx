import React, { useState } from "react";

function WordCounter() {

 const[mystyle,setMystyle]=useState({
  display:'none'
 })
  function handleOnClick(event) {
    const value = event.target.value;
    settext(value);
    runonchange();
   
    
  }

  function runonchange() {
    const newtotalwords = text.split(" ").length;
    const newtotalchar = text.length;
    const newreadingTime = newtotalwords / 250;
    settotalwords(newtotalwords);
    settotalchar(newtotalchar);
    setreadingTime(newreadingTime);
    
    
    
  }

  function results(){

    convertUperCase();
    runonchange();
    setMystyle({
      display:'block'
    })
    

  }


  function convertUperCase() {
    const newlowercase = text.toUpperCase();
    settextpreview(newlowercase);
  }

  function convertLowerCase() {
    const newlowercase = text.toLowerCase();
    settextpreview(newlowercase);
    
  }

  const [readingTime, setreadingTime] = useState(" ");
  const [text, settext] = useState("Enter The Text Here ");
  const [textpreview,settextpreview]=useState(" ");
  const [totalwords, settotalwords] = useState("");
  const [totalchar, settotalchar] = useState("");

  return (
    <div>
      <div className="flex justify-center w-full items-start box-border">
        <div className="flex justify-start items-start m-5 flex-col gap-2 w-1/2">
          <h1 className=" text-1xl font-bold">Word Counter</h1>
          <textarea
            className="w-full h-60 border-slate border outline-1 p-2 rounded text-sm"
            value={text}
            onChange={handleOnClick}
          ></textarea>
          <div className="flex gap-2">
            <button
              onClick={results}
              className="bg-black p-2 rounded text-white text-xs "
            >
              Submit
            </button>
            <button
              onClick={convertUperCase}
              className="bg-black p-2 rounded text-white text-xs "
            >
              Convert to UperCase
            </button>
            <button
              onClick={convertLowerCase}
              className="bg-black p-2 rounded text-white text-xs"
            >
              Convert to LowerCase
            </button>
          </div>
        </div>

        <div className="flex justify-start items-start m-5 flex-col gap-2 w-1/5 ">
          <h1 className=" text-1xl font-bold">Restults Counter</h1>

          <div className="border w-full border-slate p-2 rounded h-60">
            <h2 className="text-sm">Char : {totalchar}</h2>
            <h2 className="text-sm">Words : {totalwords}</h2>
            <h2 className="text-sm">Reading Time : {readingTime} minutes</h2>
          </div>
        </div>
      </div>

      {/* preview */}

      <div className="flex justify-center items-center w-full gap-7 hiddenswitch" style={mystyle}>
        <div className="flex justify-center items-center box-border flex-col m-4 w-4/6">
          <h1 className=" text-2xl font-bold mb-2">Preview</h1>
          <div className="">
            <p className=" min-w-72 min-h-60  p-2 text-center">{textpreview}</p>
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default WordCounter;
