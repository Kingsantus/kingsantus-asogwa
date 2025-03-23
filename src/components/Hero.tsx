import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";

export default function Hero() {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319]">
                <div
                    className={cn(
                        "absolute -inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_0.3px,transparent_0.5px),linear-gradient(to_bottom,#e4e4e7_0.3px,transparent_0.5px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_0.3px,transparent_0.5px),linear-gradient(to_bottom,#262626_0.3px,transparent_0.5px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
               <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-2-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Bringing Ideas to Life
                    </h2>
                        <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Code. Create. Innovate. I build awesome web apps to grow your business." />
                        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                            Hi, I&apos;m Kingsantus, A Full Stack Developer based in Nigeria.
                        </p>
                        <a href="/about">
                            <MagicButton title="show my work" icon={<FaLocationArrow />} position="right" />
                        </a>
                </div>
               </div>
            </div>
        </div>
    )
}