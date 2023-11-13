"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

import { motion, spring } from "framer-motion";
import { defaultAni, slideIn } from "@/utils/motion";

const Hero = () => {
    return (
        <section className="flex flex-col items-left justify-left gap-4">
            <div className="h-[65vh] flex flex-row content-center items-start inset-0 flex-wrap">
                <div className="backdrop-blur bg-[url('/hero.png')] z-1 max-w-full flex flex-row ">
                    <div className="flex flex-col justify-center items-center mt-5 translate-y-0 mr-1 ">
                        <div className="w-5 h-5 rounded-full bg-[#FF1CF7] inline-block "></div>
                        <div className="w-1 sm:h-60 h-72 bg-hero-slider inline-block"></div>
                    </div>
                    <div className="inline-block text-left justify-left z-2 relative">
                        <h1 className={title()}>Code</h1>
                        <h1 className={title({ color: "violet" })}>Spector</h1>
                        <br />
                        <br />
                        <h1 className={subtitle({ class: "mt-3 font-bold" })}>
                            Helping Bussinesses Established On The Internet
                        </h1>
                        <p
                            className={subtitle({
                                class: "pr-0 md:pr-40 sm:pr-64",
                            })}
                        >
                            In this digital world, it is more important than
                            ever for businesses to have a strong online
                            presence. We are a team of experienced web
                            developers and designers who can help you create a
                            website that is both visually appealing and easy to
                            use. We will also help you optimize your website for
                            search engines so that potential customers can
                            easily find you online.
                        </p>
                        <br />
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
            </div>
            <br id="more" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mb-6"
            >
                <div className="cnt p-5 flex flex-col text-right mb-32 ml-0 md:ml-[20%] lg:ml-[30%]">
                    <span>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            Why
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                color: "violet",
                                class: "font-bold",
                            })}
                        >
                            Utilize
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            Internet
                        </h1>
                    </span>
                    <p
                        className={subtitle({
                            class: "pl-0",
                        })}
                    >
                        A well-designed website and active social media presence
                        can help businesses be found by potential customers and
                        build relationships with them. This can lead to repeat
                        business and referrals. Additionally, businesses can use
                        their online presence to promote their products and
                        services, and even sell them directly online.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mb-6"
            >
                <div className="cnt p-5 flex flex-col text-left mb-32 mr-0 md:mr-[20%] lg:mr-[30%]">
                    <span>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            Who
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                color: "violet",
                                class: "font-bold",
                            })}
                        >
                            Are
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            We
                        </h1>
                    </span>
                    <p
                        className={subtitle({
                            class: "pr-0",
                        })}
                    >
                        We are a team of experienced web developers and
                        designers who can help you create a website that is both
                        visually appealing and easy to use. We will also help
                        you optimize your website for search engines so that
                        potential customers can easily find you online.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-7xl mb-6"
            >
                <div className="cnt p-5 flex flex-col text-right mb-32 ml-0 md:ml-[20%] lg:ml-[30%]">
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
                    <p
                        className={subtitle({
                            class: "pl-0",
                        })}
                    >
                        We are a team of experienced web developers and
                        designers who can help you create a website that is both
                        visually appealing and easy to use. We will also help
                        you optimize your website for search engines so that
                        potential customers can easily find you online.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mb-6 items-center content-center text-center flex ml-[10%] mr-[10%] md:ml-[20%] md:mr-[20%] lg:ml-[30%] lg:mr-[30%]"
            >
                <div className="cnt p-5 flex flex-col mb-32">
                    <span className="mb-8">
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
                            AreYou
                        </h1>
                        <h1
                            className={title({
                                size: "sm",
                                class: "font-bold",
                            })}
                        >
                            WatingFor
                        </h1>
                    </span>
                    <p
                        className={subtitle({
                            class: "text-center",
                        })}
                    >
                        Make your Bussinesses online presence today with our services
                        and watch more growth flowing in.
                    </p>

                    <Link
                        as={NextLink}
                        href="/services"
                        color="primary"
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                            class: "max-w-sm items-center content-center text-center flex mr-[20%] ml-[20%]"
                        })}
                    >
                        Get Started Now
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
