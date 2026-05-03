Boolean.isEquil = function (a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
};
String.prototype.like = function (str) {
  return !(this.search(str) === -1);
};

String.auth = () => {
  try {
      return JSON.parse(localStorage.getItem("auth"));
  } catch (e) {
    window.location.href= "/login"
  }

};

String.auth.decode = function (token) {
  try {
    const baseAuth = token.split(".")[1];
    const text = Buffer.from(baseAuth, "base64").toString("ascii");
    return JSON.parse(text);
  } catch (error) {
    return {
      id: "",
      mobile: "",
      username: "",
      role: "user",
      expiredAt: "",
      iat: 0,
    };
  }
};
String.auth.get = () => {
  const storeg = String.auth();
  return String.auth.decode(storeg.token);
};

String.auth.getRole = () => {
  return  String.auth.get().role;
};

export default {};
