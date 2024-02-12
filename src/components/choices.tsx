"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import NoButton from "./no-button";
import Image from "next/image";
import ConfettiComponent from "./confetti";

type ContentProps = {
  phrase: string;
  imgSrc: string;
};

const content: ContentProps[] = [
  {
    phrase: "Will you please be my valentine?😁",
    imgSrc: "/cat_begging.gif",
  },
  {
    phrase: "Oh my god, are you really?😳",
    imgSrc: "/cat_shock.gif",
  },
  {
    phrase: "Like for real, for real?🫨",
    imgSrc: "/cat_smirk.jpeg",
  },
  {
    phrase: "OMGGG, say it for the last time🙆‍♂️",
    imgSrc: "/chipi_chapa.gif",
  },
];

const Choices = () => {
  const [yesCount, setYesCount] = useState<number>(0);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const yesButtonSize: number = yesCount * 0.7 + 1;

  const currentContent = content[currentContentIndex];

  const handleYesClick = () => {
    setYesCount(yesCount + 1);
    if (yesCount < content.length - 1) {
      setCurrentContentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex w-full  flex-col justify-center items-center gap-12 ">
      {yesCount === content.length ? <ConfettiComponent /> : null}
      {yesCount < content.length ? (
        <>
          <Image
            src={currentContent.imgSrc}
            alt="cat"
            width={200}
            height={200}
            className="rounded-sm"
          />
          <h1 className="sm:text-base md:text-xl lg:text-2xl font-semibold tracking-wide">
            {currentContent.phrase}
          </h1>
          <div className="flex flex-row justify-center items-center gap-5">
            <Button
              className="bg-green-500 hover:bg-green-200 hover:text-slate-600"
              style={{
                transform: `scale(${yesButtonSize})`,
                transition: "transform 0.1s ease",
              }}
              onClick={handleYesClick}
            >
              YASSSSS
            </Button>
            <div>
              <NoButton />
            </div>
          </div>
        </>
      ) : (
        <>
          <Image src="/hug.gif" alt="bears hugging" width={250} height={250} />
          <h1 className="sm:text-base md:text-xl lg:text-2xl font-semibold tracking-wide">
            YAyyyyyYYyyYYYY
          </h1>
        </>
      )}
    </div>
  );
};
export default Choices;
