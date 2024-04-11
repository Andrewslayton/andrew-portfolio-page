import Image from "next/image";
export function Aboutme() {
   return (
     <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full  ">
       <h1 className="text-lg sm:text-xl font-bold  p-3 text-center ">
         Who Is Andrew Slayton
       </h1>
       <div className="bg-black p-4 rounded-lg">
         <p className="text-sm sm:text-base ">
           Andrew Slayton is an adventurist and an up and coming software
           engineer. He has a love for exploration that spans back to his
           childhood. He discovered his love for tinkering when he took apart
           his XBOX 360 in 6th grade(and broke it). Once he discovered his
           passion for tinkering with electronics he was set on computer
           science. Ever since then he has been on a journey to simply learn and
           tinker more.
         </p>
       </div>
       <h1 className="text-lg sm:text-l font-bold  mb-2 mt-2 text-center">
         Hobbies
       </h1>
       <p className="  text-sm sm:text-base bg-black p-4 rounded-lg">
         As previously stated Andrew loves to adventure. He has been across the
         United States including hiking in Arizona, snowboarding in Colorado,
         and climbing in the Badlands. He plans to backpack across Eruope and
         live in the mountains of Colorado in the future. Sources say hes a big
         lifter and prioritizes his health.
       </p>
       <div className="flex mt-2 grid-cols-1 sm:grid-cols-3 gap-10 justify-center bg-black rounded-lg p-5">
         <Image
           src="/snowboard.png"
           width={200}
           height={200}
           alt="Andrew Slayton snowboarding"
         />
         <Image
           src="/andrewcave.png"
           width={300}
           height={150}
           alt="Andrew Slayton in a cave"
         />
         <Image
           src="/dogchess.png"
           width={200}
           height={200}
           alt="Andrew Slayton versus his toughest opponent in chess, Benji."
         />
       </div>
     </div>
   );
}
