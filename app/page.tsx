/* eslint-disable @next/next/no-img-element */
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
    return (
        <section className="flex flex-col items-left justify-left gap-4 py-8 md:py-10 ">
            <div className="h-screen sm:translate-y-[16%] translate-y-0 flex flex-row items-start inset-0">
                <div className="flex flex-col justify-center items-center mt-5 translate-y-0 mr-1">
                    <div className="w-5 h-5 rounded-full bg-[#FF1CF7] inline-block "></div>
                    <div className="w-1 sm:h-40 h-20 bg-hero-slider inline-block"></div>
                </div>
                <div className="inline-block text-left justify-left z-2 relative">
                    <h1 className={title()}>Code</h1>
                    <h1 className={title({ color: "violet" })}>Spector</h1>
                    <br />
                    <br />
                    <h1 className={subtitle({ class: "mt-3 font-bold" })}>
                        Helping Bussinesses Established On The Internet
                    </h1>
                    <p className={subtitle({})}>
                        In this digital world, it is more important than ever
                        for businesses to have a strong online presence. We are
                        a team of experienced web developers and designers who
                        can help you create a website that is both visually
                        appealing and easy to use. We will also help you
                        optimize your website for search engines so that
                        potential customers can easily find you online.
                    </p>
                    <div className="flex gap-3 relative">
                        <Link
                            as={NextLink}
                            href="/services"
                            className={buttonStyles({
                                color: "primary",
                                radius: "full",
                                variant: "shadow",
                            })}
                        >
                            Get Started Now
                        </Link>
                        <Link
                            as={NextLink}
                            className={buttonStyles({
                                variant: "bordered",
                                radius: "full",
                            })}
                            href="/#more"
                        >
                            Learn More
                        </Link>
                    </div>{" "}
                </div>
            </div>
            {/* <div className="gradient"></div> */}
            <br id="more" />
            <div className="flex flex-row items-right justify-right ">
                <div>
                    <img
                        src="/web-design.png"
                        alt="web design"
                        className="width-[0.1rem] height-[0.1rem] invert"
                    />
                </div>
                <div className="flex flex-col text-right">
                    <span>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            What
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                color: "violet",
                                class: "font-bold",
                            })}
                        >
                            We
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            Do
                        </h1>
                    </span>
                    <p className={subtitle({})}>
                        We are a team of experienced web developers and
                        designers who can help you create a website that is both
                        visually appealing and easy to use. We will also help
                        you optimize your website for search engines so that
                        potential customers can easily find you online.
                    </p>
                </div>
            </div>
        </section>
    );
}
