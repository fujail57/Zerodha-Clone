import { useState } from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";

// Different Components
const Home = () => (
  <div className="p-4 bg-blue-100 rounded">🏠 Welcome to the Home Page!</div>
);
const About = () => (
  <div className="p-4 bg-green-100 rounded">ℹ️ This is the About Page.</div>
);
const Contact = () => (
  <div className="p-4 bg-yellow-100 rounded">
    📞 Get in touch with us on the Contact Page.
  </div>
);

export default function ComponentSwitcher() {
  const [SelectedComponent, setSelectedComponent] = useState(() => Home);

  const components = {
    home: Home,
    about: About,
    contact: Contact,
    brokerage: Hero,
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-2">
        <button onClick={() => setSelectedComponent(() => components.home)}>
          Show Home
        </button>
        <button onClick={() => setSelectedComponent(() => components.about)}>
          Show About
        </button>
        <button onClick={() => setSelectedComponent(() => components.contact)}>
          Show Contact
        </button>
        <button
          onClick={() => setSelectedComponent(() => components.brokerage)}
        >
          Brokerage
        </button>
      </div>

      {/* Render the selected component */}
      {/* {SelectedComponent ? <SelectedComponent /> : null} */}
      {SelectedComponent && <SelectedComponent />}
    </div>
  );
}

//  ::::::::: Only for docs ::::::::::::::: 

// import { useState } from "react";

// export default function ParagraphSwitcher() {
//   const [selectedParagraph, setSelectedParagraph] = useState("");

//   const paragraphs = {
//     para1: "This is the first paragraph. Click another button to change it.",
//     para2: "This is the second paragraph. Each button shows different text.",
//     para3: "This is the third paragraph. React state makes this possible!",
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <div className="flex gap-2">
//         <button
//           className="px-4 py-2 bg-blue-500  rounded"
//           onClick={() => setSelectedParagraph("para1")}
//         >
//           Show Paragraph 1
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500  rounded"
//           onClick={() => setSelectedParagraph("para2")}
//         >
//           Show Paragraph 2
//         </button>
//         <button
//           className="px-4 py-2 bg-red-500 rounded"
//           onClick={() => setSelectedParagraph("para3")}
//         >
//           Show Paragraph 3
//         </button>
//       </div>
//       <p className="text-lg font-semibold">{paragraphs[selectedParagraph]}</p>
//     </div>
//   );
// }

//  /// ////

// import React, { useState } from "react";

// const Para1 = () => {
//   <div>
//     <h2>Para 1</h2>
//     <p>This is the first paragraph. Click another button to change it.</p>
//   </div>;
// };

// const Para2 = () => {
//   <div>
//     <h2>Para 2</h2>
//     <p>This is the second paragraph. Each button shows different text.</p>
//   </div>;
// };
// const Para3 = () => {
//   <div>
//     <h2>Para 2</h2>
//     <p>This is the third paragraph. React state makes this possible!</p>
//   </div>;
// };

// const Paragraph = () => {
//   const [SelectedParagraph, setSelectedParagraph] = useState(null);
//   const paragraphs = {
//     // para1: "This is the first paragraph. Click another button to change it.",
//     // para2: "This is the second paragraph. Each button shows different text.",
//     // para3: "This is the third paragraph. React state makes this possible!",
//     para1: Para1,
//     para2: Para2,
//     para3: Para3,
//   };

//   return (
//     <div>
//       <button onClick={() => setSelectedParagraph(paragraphs.para1)}>para1</button>
//       <button onClick={() => setSelectedParagraph(paragraphs.para2)}>para2</button>
//       <button onClick={() => setSelectedParagraph(paragraphs.para3)}>para3</button>
//       {/* <p>{paragraphs[selectedParagraph]}</p> */}
//       <div>
//         {SelectedParagraph && <SelectedParagraph/> }
//       </div>
//     </div>
//   );
// };

// export default Paragraph;

//  /// /// //

// import { useState } from "react";

// export default function ParagraphSwitcher() {
//   const [selectedParagraph, setSelectedParagraph] = useState("");

//   const paragraphs = {
//     para1: "This is the first paragraph. Click another button to change it.",
//     para2: "This is the second paragraph. Each button shows different text.",
//     para3: "This is the third paragraph. React state makes this possible!",
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <div className="flex gap-2">
//         <button
//           className="px-4 py-2 bg-blue-500  rounded"
//           onClick={() => setSelectedParagraph("para1")}
//         >
//           Show Paragraph 1
//         </button>
//         <button
//           className="px-4 py-2 bg-green-500  rounded"
//           onClick={() => setSelectedParagraph("para2")}
//         >
//           Show Paragraph 2
//         </button>
//         <button
//           className="px-4 py-2 bg-red-500 rounded"
//           onClick={() => setSelectedParagraph("para3")}
//         >
//           Show Paragraph 3
//         </button>
//       </div>
//       <p className="text-lg font-semibold">{paragraphs[selectedParagraph]}</p>
//     </div>
//   );
// }

// /////////////
