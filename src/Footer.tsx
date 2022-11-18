import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-screen pt-2 h-24 bg-gray-800">
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs text-white font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex gap-x-1 items-center -mt-1 ml-3">
              <span>
                <img src="../public/react.png" width="28" title="React" />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="../public/typescript1.png"
                  width="26"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="32"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-white text-xs ">
            Made by{" "}
            <a
              href="mailto:daniel.doody@ymail.com"
              className="text-white font-medium"
            >
              Daniel Doody.
            </a>
            {/* . All rights reserved. */}
          </div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
