import React from "react";
import { notification } from "antd";
import http from "../common/http";
class Auth {
  static login(username, password,history) {
    return (
      http
        .post("auth/login", { username, password })
        .then((res) => {
          localStorage.setItem("auth", JSON.stringify(res.data));
          notification.success({
            message: "ورود با موفقت انجام شد",
          });
         window.location.href=window.location.origin+"/panel";
         history.push("/panel");
         window.location.reload();
        })
        .catch((err) =>
          notification.error({
            message: "نام کاربری یا مز عبور صحیح نمی باشد",
          })
        )
    );
  }
}

export default Auth;
