import React from "react";

const logosList = [
  {
    value: 90,
    text: "Automation of student appointments",
    logo: "/images/dartmouth.svg",
  },
  {
    value: 88,
    text: "Improvement in cost, versus another solution",
    logo: "/images/texas.svg",
  },
  {
    value: 98,
    text: "Decrease in time spent scheduling",
    logo: "/images/indiana.svg",
  },
];

function Logos() {
  return (
    <div id="Logos" className="w-full margins flex justify-center">
      <div className="w-full max-w-8xl py-[48px] lg:py-[72px] flex flex-col gap-[96px] md:gap-[128px]">
        <div className="w-full flex flex-col items-center py-6 lg:py-8 relative z-10">
          <div className="logo-grids">
            {logosList.map((item, index) => (
              <>
                <div
                  key={index}
                  className={`w-full flex flex-col justify-center items-center md:justify-start md:items-start px-6 bg-transparent relative border-solid border-border-700 md:mt-6 lg:mt-0 lg:mr-0 ${
                    index === logosList.length - 1
                      ? ""
                      : "md:border-r-0 lg:border-r-2"
                  }`}
                >
                  <div className="font-Bold text-service-700 text-[3.125rem] text-center md:text-start leading-[1.2] lg:leading-[1] mb-4">
                    <span className="text-primary-700">{item.value}</span>%
                  </div>
                  <div className="w-full max-w-full lg:max-w-[270px] font-regular text-[1.5rem] text-center md:text-start text-service-500 leading-[1.4] mb-8">
                    {item.text}
                  </div>
                  <div className="w-max h-max mb-4 inline-block">
                    <img
                      src={item.logo}
                      alt="logo"
                      className="block w-auto h-auto min-h-[28px] max-h-[30px] max-w-[330px]"
                    />
                  </div>
                </div>
                {index !== logosList.length - 1 && (
                  <div className="w-full h-[2px] bg-border-700 flex md:hidden mt-8 mb-12" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
