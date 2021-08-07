// 
import "../App.css"
import React, { useState } from "react";
// import IMG1 from "./IMG1.png";
// import IMG2 from "./IMG2.png";
// import IMG3 from "./IMG3.png";

export default function Background() {
  const [color, setColor] = useState("");

  return (
    <div className={color}>
      <button onClick={() => setColor("img1")}> change background-image to default img1 </button>
      <button onClick={() => setColor("img2")}> change background-image to img2 </button>
      <button onClick={() => setColor("img3")}> change background-image to img3 </button>
    </div>
  );
}

// Dynamically Change Styling Example
// https://codesandbox.io/s/dynamically-change-styling-react-sfojl

// class Background extends Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         bgColor: ""
//       }
//     }
  
//     boxClick = (e) => {
//       this.setState({
//         bgColor: "red"
//       })
//     }
  
//     render() {
//       return (
//         <div className="App" style={{backgroundColor: this.state.bgColor}}
//         onClick={this.boxClick}>
//             Click Me!
//         </div>
//       );
//     }
//   }

// export default Background;



// const Background = (props) => {

//     function changeBackground() {
//         document.body.style.background = 'url(meme.jpg) no-repeat';
//     }

//     return (
//         <div className="App"
//         style={{
//             backgroundImage: `url(${props.Image})`
//         }}>
//         </div>
//     );
// }






///////////////////////

// import React, { useState } from "react";
// import { css } from "@emotion/react";
// import Image from "./blur1.png";

// const Background = () => {

//     const [background, setBackground] = useState("#424246");

//     const setStyle = (background) => {
//         setBackground(background);
//     };

//     const blackButton = css`
//         background-image: url(${background});
//     `;

//     return (
//         <div>
//             <button 
//                 onClick={() => setStyle("#424246")}
//                 class={blackButton}
//             >
//             Green Theme
//             </button>
//         </div>
//     );

// };

// export default Background;