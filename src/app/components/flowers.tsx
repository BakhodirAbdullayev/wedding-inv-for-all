import Image from "next/image";
import { FC } from "react";

const Flowers: FC = (): JSX.Element => {
  return (
    <>
      <Image
        src="/hydrangea.png"
        alt="hydrangea"
        width={250}
        height={500}
        className="drop-shadow-[0px_20px_20px_#3b164258] absolute -top-1/2 -right-24 rotate-[-20deg]"
        data-aos="fade-left"
      />
      <Image
        src="/hydra.png"
        alt="hydrangea"
        width={250}
        height={500}
        className="drop-shadow-[0px_20px_20px_#3b164271] absolute -bottom-1/2 -left-24 rotate-[20deg]"
        data-aos="fade-right"
      />
    </>
  );
};

export default Flowers;
