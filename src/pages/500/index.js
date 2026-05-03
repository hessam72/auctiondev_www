import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
export default function App() {
  let history = useHistory();
  return (
    <Result
      status="500"
      title="500"
      subTitle="ببخشید ، مشکلی پیش آمد."
      extra={<Button onClick={()=> history.push("/") }  type="primary">برگشت به خانه</Button>}
    />
  );
}
