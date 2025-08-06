const Footer = () => {
    return (
      <footer className="w-full h-[191px] bg-[#1F2937] px-[352px] pt-[80px] pb-[48px] overflow-hidden">
        <div className="flex flex-col items-center">
          {/* Thin white line */}
          <div className="w-[1216px] h-px bg-white" />
  
          {/* Footer text */}
          <div className="w-[1216px] h-[24px] pt-[33px]">
            <p className="text-center text-[#9CA3AF] text-[16px] leading-[24px] font-normal">
              © 2025 A2SV. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;