const BASEUri =
// "http://auction.apipicker.ir";
  process.env.NODE_ENV === "production"
    ? "http://api.mozamona.com"
    : "http://localhost:3003";
export const BASE = BASEUri;
export const ClintUri =  process.env.NODE_ENV === "production"
? "http://mozamona.com"
: "http://localhost:7701";
export const BASEApi = `${BASEUri}/api`;
export const MESSAGE = "/message";
export const MESSAGESHOW = "/message/user/";
export const CATEGORY = "/category";
export const NEW_CATEGORY = "/category";
export const PLAN = "/plan";
export const PRODUCT = "/product";
export const LOCATION = "/location";
export const PRODUCTSHOW = "/product/user/";
export const TRANSACTION = "/transaction";
export const TRANSACTIONSHOW = "/transaction/user/";
export const USER = "/users";
export const TAG = "/tags";
export const ADMIN = "/users/admin";
export const ME = "/users/me";
export const SETTING = "/setting";
export const ABOUT = "/setting/about";
export const RULE = "/setting/rule";
export const NEW_PLAN = "/plan";
export const PHOTO = `${BASEUri}/api/photo/icons`;
export const IMAGE = `${BASEUri}/`;
export const UPLOADER = `${BASEUri}/api/photo/icons`;
export const ATTACH = `${BASEUri}/api/photo/product`;
