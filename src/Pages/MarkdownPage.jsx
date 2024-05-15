// import React, { useState } from "react";
// import Markdown from "markdown-to-jsx";
// import { saveAs } from "file-saver";

// const MarkdownEditor = () => {
//   const [markdown, setMarkdown] = useState("");

//   const handleMarkdownChange = (event) => {
//     setMarkdown(event.target.value);
//   };

//   const handleGenerateReadme = () => {
//     const blob = new Blob([markdown], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "README.md");
//   };

//   return (
//     <div className="container mx-auto my-8">
//       <div className="flex">
//         <div className="w-1/2 pr-4">
//           <h1 className="text-3xl font-bold mb-4">Markdown Editor</h1>
//           <textarea
//             value={markdown}
//             onChange={handleMarkdownChange}
//             placeholder="Enter Markdown text here..."
//             className="w-full h-full p-4 border border-gray-300 rounded"
//             style={{ minHeight: "200px" }}
//           />
//         </div>
//         <div className="w-1/2 pl-4">
//           <h2 className="text-3xl font-bold mb-4">Preview:</h2>
//           <div className="border h-full border-gray-300 rounded p-4">
//             <Markdown>{markdown}</Markdown>
//           </div>
//         </div>
//       </div>
//       <button
//         className="mt-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleGenerateReadme}
//       >
//         Generate README.md
//       </button>
//     </div>
//   );
// };

// export default MarkdownEditor;
