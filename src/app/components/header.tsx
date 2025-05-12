import { FC } from "react";

interface Props {
  text: string;
  paragraph?: string;
  p?: string;
}

const Header: FC<Props> = ({ text, paragraph, p }): JSX.Element => {
  return (
    <>
      <h2
        className={`font-serif text-4xl text-center text-[#a9a05c] italic`}
        data-aos="flip-up"
      >
        {text}
      </h2>
      <p
        className="px-8 text-center mt-5 text-[#7c7647] font-serif italic"
        data-aos="fade-up"
      >
        {paragraph}
      </p>
      <p
        className="px-8 text-center mt-5 text-[#7c7647] font-serif italic"
        data-aos="fade-up"
      >
        {p}
      </p>
    </>
  );
};

export default Header;
