import React from "react";

export const FooterSection = (): JSX.Element => {
  const footerLinks = [
    { text: "Privacy Policy", isLink: true },
    { text: "Terms of Service", isLink: true },
  ];

  return (
    <footer className="w-full bg-transparent py-8">
      <div className="relative w-full h-[336px] bg-[url(/logo-corsox-1.png)] bg-cover bg-center flex items-center justify-center">
        <div className="font-['Inter',Helvetica] font-light text-white text-xl text-center leading-7">
          <span>© 2024 Corsox Web Design and Development</span>
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              <span> | </span>
              {link.isLink ? (
                <span className="underline cursor-pointer">{link.text}</span>
              ) : (
                <span>{link.text}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};
