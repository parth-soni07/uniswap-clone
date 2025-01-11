"use client";

import React from 'react'
import Image from "next/image";

//INTERNAL IMPORTS
import Style from "./Toggle.module.css";
import image from "../../assets/index";
import Loadable from 'next/dist/shared/lib/loadable.shared-runtime';
import { ST } from 'next/dist/shared/lib/utils';
const Toggle = (label) => {
  return (
    <div className={Style.Toggle}>
      <div className={Style.Toggle_switch_box}>
        <input
          type="checkbox"
          className={Style.Toggle_checkbox}
          name={label}
          id={label}
        />
        <label className={Style.Toggle_label} htmlFor={label}>
          <span className={Style.Toggle_inner}></span>
          <span className={Style.Toggle_switch}></span>
        </label>
      </div>
    </div>
  );
}

export default Toggle
