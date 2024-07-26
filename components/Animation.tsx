"use client";
import React, { useState, useEffect, useRef } from "react";

type Props = { texts: string; finaltexts: string };

const Animation = ({ texts, finaltexts }: Props) => {
  const [text, setText] = useState("");
  const ref = useRef(0);

  useEffect(() => {
    const cursor = () => {
      setText((prev) => prev + texts[ref.current]);
      ref.current++;
    };
    if (ref.current <= texts.length) {
      const addText = setInterval(cursor, 150);
      return () => clearInterval(addText);
    } else {
      setText(finaltexts);
    }
  }, [text]);

  return (
    <h1 className="whitespace-nowrap text-4xl xl:text-6xl hover:text-orange-500 hover:scale-105 hover:duration-400 hover:transition tracking-wider leading-loose font-extrabold font-poppins">
      {text.length ? text : null}
    </h1>
  );
};

export default Animation;
