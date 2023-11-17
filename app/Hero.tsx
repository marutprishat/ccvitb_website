import Image from 'next/image'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <section className="mx-10 my-36 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-rocket" />
      <div className="adjusted-hero-astro" />


      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/Images/rocket.png"
          alt="rocket"
          width={50}
          height={50}
          className="absolute left-[-18px] top-[-85px] w-10 lg:w-[130px] "
        />
        <h1 className="bold-52 lg:bold-87" style={{ color: 'rgb(110, 190, 74)' }}>DIVE INTO THE WONDERS OF THE CONNECTICITY</h1>

        <p className="regular-16 mt-6 text-black xl:max-w-[520px]">
          Embark on a tech odyssey at Cisco Community, VIT Bhopal. Explore Networking Wonders, connect with experts, and shape the future. Join us in shaping tomorrow's connectivity!
        </p>

        <div className="my-5 flex flex-wrap gap-3">



        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Browse Community"
            variant="btn_blue"
          />

        </div>
      </div>

      <div className="relative flex flex-1 items-start">

      </div>
    </section>
  )
}

export default Hero