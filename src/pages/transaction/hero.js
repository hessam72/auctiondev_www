import React from "react";
import moment from "moment-jalaali";
import {
  useLocation
} from "react-router-dom";
import { get } from "lodash";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Hero({type}) {
  let query = useQuery();
  console.log('q',query);
  return (
    <section className="bg-parallax bg-secondary py-5 mb-5">
      <div className="bg-parallax-img" data-parallax='{"y" : 100}'>
        <img
          src="/images/hero/hero-bg.png"
          alt="Parallax Background"
        />
      </div>
      <div className="container bg-parallax-content py-5 my-3 text-center">
        <br/>
        <br/>
        <h1 className="pb-4">
          <span className="d-block h3 font-family-body font-weight-light text-muted mb-2">
          { moment().format('H:m jYYYY-jMM-jDD')}
          </span>
          {type=="success" && <span className="success">{"تراکنش با موفقیت انجام شد"}</span>}
          {type=="failed" && <span className="failed">{"تراکنش انجام نشد"}</span>}
          {type=="waiting" && <span className="waiting">{"تراکنش درانتظار پرداخت می باشد"}</span>}
          
         
        </h1>
        <span className="d-block h2 font-weight-normal text-muted mt-3">
            شماره تراکنش :
          {query.get('trans')} 
          </span>
          {query.get('msg') && <span className="d-block h2 font-weight-normal text-muted mt-3">
          {query.get('msg')} 
          </span>}
        <a className="scroll-to btn btn-gradient" href="#services">
        برگشت به اپلیکیشن
        </a>
      </div>
    </section>
  );
}
export default Hero;
