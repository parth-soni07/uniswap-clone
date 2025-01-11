"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

// INTERNAL IMPORTS
import Style from "./Token.module.css";
import images from "../../assets/index";
import { Toggle } from "../../index";
export default function Token({ setOpenSetting }) {
  return (
    <div className={Style.Token}>
      <div className={Style.Token_box}>
        <div className={Style.Token_box_heading}>
          <h1>Settings</h1>
          <Image
            src={images.close}
            width={50}
            height={50}
            alt="close"
            onClick={() => {
              setOpenSetting(false);
            }}
          />
        </div>
        <p className={Style.Token_box_para}>
          Slippage Tolerance{""}
          <Image src={images.lock} alt="img" width={20} height={20} />
        </p>
        <div className={Style.Token_box_input}>
          <button>Auto</button>
          <input placeholder="0.10%" type="text"></input>
        </div>
        <p className={Style.Token_box_para}>
          Slippage Tolerance{""}
          <Image src={images.lock} alt="img" width={20} height={20} />
        </p>
        <div className={Style.Token_box_input}>
          <input placeholder="0.10%" type="text"></input>
          <button>minutes</button>
        </div>
        <h2>Interface Setting</h2>
        <div className={Style.Token_box_toggle}>
          <p className={Style.Token_box_para}>Transaction Deadline</p>
          <Toggle label="No"/>
        </div>
      </div>
    </div>
  );
}
