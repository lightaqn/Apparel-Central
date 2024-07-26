"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { setInterval } from "timers";

type Props = {};

const Test = (props: Props) => {
  let movetoHalf: number;

  const scrollToSearch = () => {
    movetoHalf = Math.round(window.innerHeight / 2);
    if (movetoHalf) {
      setTimeout(() => {
        window.scrollTo({
          top: movetoHalf,
          behavior: "smooth",
        });
      }, 500);
    }
  };

  return (
    <div
      className="h-[200vh] w-[100vw] p-10 border-3 border-white "
      // style={{ height: `${movetoY}` + "vh" }}
    >
      <span
        className="text-3xl font-extrabold cursor-pointer"
        onMouseOver={scrollToSearch}
      >
        Scroll
      </span>

      <h1 className="text-xl font-semibold tracking-wider">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum
        natus, quibusdam tempore odit laudantium dolorum delectus, sunt amet
        tenetur commodi asperiores, dignissimos iure a. Tempore repellendus
        architecto mollitia neque? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quia ipsum natus, quibusdam tempore odit laudantium
        dolorum delectus, sunt amet tenetur commodi asperiores, dignissimos iure
        a. Tempore repellendus architecto mollitia neque?Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore
        odit laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum natus,
        quibusdam tempore odit laudantium dolorum delectus, sunt amet tenetur
        commodi asperiores, dignissimos iure a. Tempore repellendus architecto
        mollitia neque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quia ipsum natus, quibusdam tempore odit laudantium dolorum delectus,
        sunt amet tenetur commodi asperiores, dignissimos iure a. Tempore
        repellendus architecto mollitia neque?Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quia ipsum natus, quibusdam tempore odit
        laudantium dolorum delectus, sunt amet tenetur commodi asperiores,
        dignissimos iure a. Tempore repellendus architecto mollitia neque?{" "}
      </h1>
    </div>
  );
};

export default Test;

// refContainer.current.clientX, refContainer.current.clientY, window.innerWidth, window.innerHeight, setInterval(function(), delay), window.scrollTo(), window.scrollBy(),window.focus(), window.blur()
//offsetTop

//  outerWidth, outerHeight,
// if (){
//   const abc = setInterval(() => {}, delay)
// return () => clearInterval(abc)

// }
