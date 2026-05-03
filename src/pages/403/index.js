import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
export default function App() {
  let history = useHistory();
  return (
    <Result
      status="403"
      title="403"
      subTitle="متأسفیم ، شما مجاز به دسترسی به این صفحه نیستید."
      extra={<Button onClick={()=> history.push("/login")} type="primary">برگشت به خانه</Button>}
    />
  );
}
