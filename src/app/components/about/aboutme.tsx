import Image from "next/image";

export function Aboutme() {
  return (
    <div className="flex justify-center items-center h-auto ">
      {" "}
      <div className="bg-[#1f8278] p-4 rounded-lg w-full max-w-4xl">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
          About Andrew
        </h2>
        <div className="bg-black p-4 rounded-lg mb-4">
          <p className="text-sm sm:text-base text-white">
            Andrew Slayton is an adventurist and an up and coming software
            engineer. He has a love for exploration that spans back to his
            childhood. He discovered his love for tinkering when he took apart
            his XBOX 360 in 6th grade(and broke it). Once he discovered his
            passion for tinkering with electronics, he was set on computer
            science. Ever since then, he has been on a journey to simply learn
            and tinker more.
          </p>
        </div>
        <p className="text-sm sm:text-base bg-black p-4 rounded-lg text-white mb-4">
          As previously stated, Andrew loves to adventure. He has been across
          the United States, including hiking in Arizona, snowboarding in
          Colorado, and climbing in the Badlands. He plans to backpack across
          Europe and live in the mountains of Colorado in the future. Sources
          say he is a big lifter and prioritizes his health.
        </p>
        <div className="flex justify-center rounded-lg mb-4">
          <div className =" bg-black p-4 rounded-lg ">
          <Image
            src="/andrewcave.png"
            width={300}
            height={150}
            alt="Andrew Slayton in a cave"
            className="object-cover rounded-lg"
          />
        </div>
        </div>
        <p className="text-center text-white text-sm sm:text-base mt-4">
          View more images on the{" "}
          <a className="underline">
            blog page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
