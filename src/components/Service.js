import React from "react";
import "./service.css";
import { Data } from "./Servicedata";
import { MdBusinessCenter } from "react-icons/md";
const Service = () => {
  return (
    <>
      <div className="service">
        <div className="service-title">
          <div className="service-left">
            <h1>
              Services.
              <span>
                <MdBusinessCenter />
              </span>
            </h1>
          </div>
          <div className="service-right">
            <p>
              Our talented team specializes in crafting stunning web designs
              that capture the essence of your brand, engaging visitors and
              leaving a lasting impression. With expertise in website
              development, we ensure seamless functionality and user-friendly
              experiences, leveraging the latest technologies to deliver
              exceptional results.
            </p>
          </div>
        </div>

        <div className="service-box-container">
          {Data.map((items) => {
            return (
              <div key={items.id} className="main-box">
                <div className="service-box">
                  <div className="service-name">
                    <span>{items.icon}</span>
                    <h2>{items.title}</h2>
                    <p>{items.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
