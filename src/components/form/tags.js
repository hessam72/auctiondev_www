import React, { useEffect, useState } from "react";
import { Select, Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import http, { Uri } from "../../common/http";

const { Option } = Select;

let index = 0;
const Tags = ({ name, value, onChange }) => {
  const [items, setItems] = useState([]);
  const [isName, setIsName] = useState("");
  const [loading, setLoading] = useState(true);
  console.log('value',value);
  useEffect(() => {
    http.get(Uri.TAG).then((res) => {
      setItems(res.data.map((i) => i.title));
    });
  }, [name, value]);

  const onNameChange = (event) => {
    setIsName(event.target.value);
  };

  const addItem = async () => {
    console.log("addItem");
    await http.post(Uri.TAG, { title: isName });
    setItems([...items, isName || `New item ${index++}`]);
    setIsName("");
  };
  return (
    <Select
      onChange={onChange}
      mode="multiple"
      defaultValue={value}
      value={value}
      // style={{ width: 240 }}
      placeholder="تگ مورد نظر را انتخاب کنید"
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
            <Input
              style={{ flex: "auto" }}
              value={isName}
              onChange={onNameChange}
            />
            <a
              style={{
                flex: "none",
                padding: "8px",
                display: "block",
                cursor: "pointer",
              }}
              onClick={addItem}
            >
              <PlusOutlined /> افزودن
            </a>
          </div>
        </div>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  );
};
// class Tags extends React.Component {
//   state = {
//     items: [],
//     name: "",
//   };
//   constructor(props) {
//     super(props);
//     http.get(Uri.TAG).then((res) => {
//       this.state= {
//         items: res.data,
//         name: "",
//       };
//     });
//   }

//   onNameChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   addItem = async () => {
//     console.log("addItem");
//     const { items, name } = this.state;
//     await http.post(Uri.TAG, { title: name });
//     this.setState({
//       items: [...items, name || `New item ${index++}`],
//       name: "",
//     });
//   };

//   render() {
//     const { items, name } = this.state;
//     return (
//       <Select
//         onChange={this.props.onChange}
//         mode="multiple"
//         // style={{ width: 240 }}
//         placeholder="تگ مورد نظر را انتخاب کنید"
//         dropdownRender={(menu) => (
//           <div>
//             {menu}
//             <Divider style={{ margin: "4px 0" }} />
//             <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
//               <Input
//                 style={{ flex: "auto" }}
//                 value={name}
//                 onChange={this.onNameChange}
//               />
//               <a
//                 style={{
//                   flex: "none",
//                   padding: "8px",
//                   display: "block",
//                   cursor: "pointer",
//                 }}
//                 onClick={this.addItem}
//               >
//                 <PlusOutlined /> افزودن
//               </a>
//             </div>
//           </div>
//         )}
//       >
//         {items.map((item) => (
//           <Option key={item}>{item}</Option>
//         ))}
//       </Select>
//     );
//   }
// }

export default Tags;
