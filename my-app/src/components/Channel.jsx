// // import React from "react";

// // // function Channel() {
// // //   return (
// // //     <div>Channel</div>
// // //   )
// // // }

// // class Channel extends React.Component {
// //   constructor() {
// //     super();
// //     this.state={
// //         msg: "Can You Learn React"

// //     }

// //   }

// //   ChangeValue() {
// //     this.setState({
// //       msg: "Yes Sure......",
// //     });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h1>{this.state.msg}</h1>
// //         <button>
// //           <a
// //             onClick={() => {
// //               this.ChangeValue();
// //             }}
// //           >
// //             Change State
// //           </a>
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// // export default Channel;

// import React, { useState } from "react";

// function Channel(props) {
//   function textAnalysis() {
//     const newtext=text.toUpperCase();
//     Settext(newtext)

//     console.log("length");
//   }

//   const TextHandler = (event) => {
//     console.log("onChange");
//     Settext(event.target.value);
//   };

//   const [text, Settext] = useState("Enter The Text");
//   const [result,Setresult]=useState("Result Will Show Here")

//   return (
//     <div className="flex items-center justify-center flex-col h-screen">
//       <h1 className="text-3xl font-bold">{props.title}</h1>

//       <textarea
//         className="border bg-slate-400 text-white w-1/2 p-4 m-4"
//         value={text}
//         rows={8}
//         onChange={TextHandler}
//       ></textarea>

//       <button onClick={textAnalysis}>Submit</button>

//       <p>{result}</p>
//     </div>
//   );
// }

// export default Channel;

import React, { useState } from "react";

function Channel() {
  function ChangeText(event) {
    const value = event.target.value;
    const newvalue = value.toUpperCase();
    event.target.value = newvalue;
  }

  function Checkword(value) {
    console.log(value);
  }
  const [placeholder, setplaceholder] = useState("");
  const [wordcount, Setwordcount] = useState("");
  return (
    <div>
      <h1>{wordcount}</h1>
      <textarea
        className="border bg-slate-400 text-white w-1/2 p-4 m-4"
        rows={8}
        onChange={ChangeText}
      ></textarea>

      <button onClick={Checkword}>Submit</button>
    </div>
  );
}

export default Channel;
