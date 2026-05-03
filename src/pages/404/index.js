import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
export default function App() {
  let history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="متأسفیم ، صفحه‌ای که بازدید کردید وجود ندارد."
      extra={<Button onClick={()=> history.push("/") } type="primary">برگشت به خانه</Button>}
    />
  );
}
