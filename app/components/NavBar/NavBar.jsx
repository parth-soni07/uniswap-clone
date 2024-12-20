"use client";

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Internal Imports
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from '../../index';
const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/swap",
    },
    {
      name: "Tokens",
      link: "/tokens",
    },
    {
      name: "Pools",
      link: "/pools",
    },
  ];
  //USESTATE
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [connectWallet, setConnectWallet] = useState("");
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_Box}>
        <div className={Style.NavBar_Box_left}>
          <div className={Style.NavBar_Box_left_image}>
            <Image src={images.uniswap} alt="Logo" width={50} height={50} />
          </div>
          <div className={Style.NavBar_Box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.NavBar_Box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className={Style.NavBar_Box_middle}>
          <div className={Style.NavBar_Box_middle_search}>
            <div className={Style.NavBar_Box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        <div className={Style.NavBar_Box_right}>
          <div className={Style.NavBar_Box_right_box}>
            <div className={Style.NavBar_Box_right_box_img}>
              <Image src={images.ether} alt='network' height={30} width={30}/>
            </div>
            <p>
              Network Name
            </p>
          </div>
          <button onClick={() => setOpenModel(true)}>
            Address
          </button>
          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>
      {openTokenBox && (
        <TokenList tokenDate="Hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
}

export default NavBar;