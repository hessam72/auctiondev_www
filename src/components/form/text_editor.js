import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
const controls = [
  "bold",
  "italic",
  "underline",
  "text-color",
  "separator",
  "link",
  "separator",
  "media",
];
export default (props) => (
  <BraftEditor className="my-editor" controls={controls} {...props} />
);

// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// // export default (props) => <>hi</>;
// // export default (props) => <ReactQuill theme="snow" {...props} />;
// export default  function MyComponent() {
//     const [value, setValue] = useState('');

//     return (
//       <ReactQuill theme="snow" value={value} onChange={setValue}/>
//     );
//   }
