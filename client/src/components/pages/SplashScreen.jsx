import React from "react";
import { Link } from "react-router-dom";
import SplashImage from "../../assets/birdie.webp";

function SplashScreen() {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="text-4xl font-bold text-[#ca9231]">
                SocialBird<span class="text-amber-300"></span>
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold mb-5">
                  Share your ideas on LinkedIn{" "}
                  <span class="text-[#ca9231]">whenever</span> you want with AI
                </h1>
                <p class="text-xl mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae maiores neque eaque ea odit placeat, tenetur illum
                  distinctio nulla voluptatum a corrupti beatae tempora aperiam
                  quia id aliquam possimus aut.
                </p>
                <Link to="/signup" className="btn btn-primary">
                  <button class="bg-amber-300 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Join
                  </button>
                </Link>
              </div>
            </header>
          </div>
        </div>
        <img
          src={SplashImage}
          alt="comppany icons"
          class="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </>
  );
}

export default SplashScreen;
