"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//Internal Imports
import Style from "./SearchToken.module.css";
import images from "../../assets/index";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  const [active, setActive] = useState(1);
  const coin = [
    { img: images.ether, name: "ETH" },
    { img: images.ether, name: "DAI" },
    { img: images.ether, name: "DOG" },
    { img: images.ether, name: "FUN" },
    { img: images.ether, name: "WETH9" },
    { img: images.ether, name: "UNI" },
    { img: images.ether, name: "TIME" },
    { img: images.ether, name: "LOO" },
    { img: images.ether, name: "OOO" },
    { img: images.ether, name: "HEY" },
  ];
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h2>Select a token</h2>
          <Image
            src={images.close}
            alt="close"
            width={50}
            height={50}
            onClick={() => openToken(false)}
          />
        </div>
        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt="search" height={20} width={20} />
          </div>
          <input type="text" placeholder="Search name & paste the address" />
        </div>
        <div className={Style.SearchToken_box_tokens}>
          {coin.map((el, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? `${Style.active}` : ""}
              onClick={() => (
                setActive(i + 1), tokens({ name: el.name, img: el.img })
              )}
            >
              <Image src={el.img || images.ether} alt="image" width={30} height={30} />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
