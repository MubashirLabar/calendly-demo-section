const Hero = () => {
  return (
    <div id="Hero" className="w-full margins flex justify-center">
      <div className="w-full max-w-8xl flex flex-col md:flex-row pb-[48px] lg:pb-[72px] pt-[72px] lg:px-6">
        <div className="w-full max-w-[100%] md:max-w-[50%] lg:max-w-[520px] flex flex-col items-start relative md:pr-[16px] lg:pr-[64px]">
          <div className="font-semiBold uppercase text-primary-700 text-[1rem] leading-[1.2] tracking-[1.25px] mb-[24px] lg:mb-[32px]">
            Calendly for Education
          </div>
          <div className="font-Bold text-[2.36875rem] sm:text-[3.125rem] lg:text-[4.20875rem] leading-[1.4] sm:leading-[1.2] text-service-700 mb-[24px] lg:mb-[32px] w-full max-w-[1170px]">
            Scheduling for students and educators - simplified
          </div>
          <p className="font-regular text-[18px] sm:text-[20px] text-service-500 leading-[1.4] h-[auto] w-full pb-[16px] sm:pb-[32px]">
            Streamline scheduling for everything from advising and tutoring to
            admissions interviews and tours for students, faculty, and staff.
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-0">
            <button className="w-full sm:w-[auto] button-primary sm:my-2">
              Sign up for free
            </button>
            <button className="w-full sm:w-[auto] button-primary-hollow sm:my-2">
              Talk to sales
            </button>
          </div>
        </div>
        <div className="w-full h-full flex items-start sm:p-[26px] md:p-0">
          <img src="/images/calendly-education-lg.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
