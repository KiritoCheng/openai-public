import React, { useEffect, useState } from "react";
import "./index.css";

export const Evoil = () => {
  return (
    <div className="headband">
      <div className="eevee">
        <div className="body">
          <div className="head">
            <div className="ears">
              <div className="ear">
                <div className="lobe"></div>
              </div>
              <div className="ear">
                <div className="lobe"></div>
              </div>
            </div>
            <div className="face">
              <div className="eyes">
                <div className="eye">
                  <div className="eyelid"></div>
                </div>
                <div className="eye">
                  <div className="eyelid"></div>
                </div>
              </div>
              <div className="nose"></div>
              <div className="mouth"></div>
            </div>
          </div>
          <div className="chest">
            <div className="fur">
              <div className="patch"></div>
            </div>
            <div className="fur">
              <div className="patch"></div>
            </div>
            <div className="fur">
              <div className="patch"></div>
            </div>
          </div>
          <div className="legs">
            <div className="leg">
              <div className="inner-leg"></div>
            </div>
            <div className="leg">
              <div className="inner-leg"></div>
            </div>
            <div className="leg">
              <div className="inner-leg"></div>
            </div>
            <div className="leg">
              <div className="inner-leg"></div>
            </div>
          </div>
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail -end"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
