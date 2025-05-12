import { FC } from "react";
import Flowers from "./flowers";
import Header from "./header";
import { parseDate } from "@/utils";

interface DateSectionProps {
  families: string;
  paragraph: string;
  date: string;
}

const DateSection: FC<DateSectionProps> = ({
  families,
  paragraph,
  date,
}): JSX.Element => {
  const { year, month, day, hour, minute } = parseDate(date);
  return (
    <div className="relative mt-52">
      <Flowers />
      <Header text="Assalomu alaykum" paragraph={paragraph} p={families} />

      <div className="my-7 w-3/6 mx-auto flex items-center" data-aos="fade-up">
        <span className="w-2 h-2 rounded-full border-1 border-[#a9a05c]"></span>
        <div className="w-full h-px bg-[#a9a05c]"></div>
        <span className="w-2 h-2 rounded-full border-1 border-[#a9a05c]"></span>
      </div>

      <h3
        className="text-center text-3xl text-[#a9a05c] font-serif"
        data-aos="zoom-in"
      >
        <div>
          {day} <span className="mx-1">{month}</span> {year}
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>{hour}</span>
          <span className="w-1 h-1 rounded-full bg-[#a9a05c]"></span>
          <span>{minute > 9 ? minute : `0${minute}`}</span>
        </div>
      </h3>
    </div>
  );
};

export default DateSection;
