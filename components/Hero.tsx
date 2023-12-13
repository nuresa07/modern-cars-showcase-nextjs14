"use client"

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {

  const handleScroll = () => { }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,book, or rent a car — quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking proposes
        </p>

        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image className="object-contain"
            src='/hero.png'
            alt="hero" fill
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero