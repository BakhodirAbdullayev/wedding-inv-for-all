import Image from "next/image";
import { FC } from "react";

const Line: FC = (): JSX.Element => {
  return (
    <div className="relative mx-auto w-[90%] aspect-[3/1]" data-aos="flip-up">
      <Image src="/line.png" alt="line" fill />
    </div>
  );
};

export default Line;
