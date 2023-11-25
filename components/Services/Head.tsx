<<<<<<< HEAD
=======
"use client";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import { textVariant } from "@/utils/motion";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const ServicesHead = () => {
    return (
        <section>
            <motion.div variants={textVariant()} className="mb-16">
                <h1 className={title()}>
                    The
                    <span className={title({ color: "blue" })}>Services</span>
                    WeOffer
                </h1>
                <h2 className={subtitle()}>
                    We provide many services to help you establish your presence
                    on the web. Some of the services include making a static
                    site and SEO optimiation to full fledged websites that can
                    digitalize your bussiness and help grow your bussiness.
                </h2>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="services"
                >
                    <h2 className={title({ size: "sm", class: "text-center" })}>
                        <span
                            className={title({ color: "blue", size: "sm" })}
                        >
                            Static
                        </span>
                        Pages
                    </h2>
                    <p className={subtitle()}>
                        Static websites are great for small businesses with
                        relatively simple websites that don&apos;t require frequent
                        updates. They are also a good option for landing pages
                        and one-page websites.
                    </p>
                    <hr />
                    <p className={subtitle()}>
                        <span
                            className={title({ size: "xs", color: "blue" })}
                        >
                            Pros:{" "}
                        </span>
                        Simple to create and maintain, fast loading times, good
                        for SEO <br />
                    </p>
                    <Link href="/services/static" as={NextLink} color="primary" isBlock={true}>Get Started</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="services-dynamic"
                >
                    <h2 className={title({ size: "sm", class: "text-center" })}>
                        <span
                            className={title({ color: "blue", size: "sm" })}
                        >
                            Dynamic
                        </span>
                        Pages
                    </h2>
                    <p className={subtitle()}>
                        Dynamic websites are a better choice for businesses with
                        more complex websites that need to be updated regularly,
                        such as news websites, and
                        membership websites. They are also a good option for
                        businesses that want to offer users interactive
                        features, such as contact forms, comments, and shopping
                        carts
                    </p>
                    <hr />
                    <p className={subtitle()}>
                        <span
                            className={title({ size: "xs", color: "blue" })}
                        >
                            Pros:{" "}
                        </span>
                        Ideal for frequently updated websites and interactive
                        features, scalable
                        <br />
                    </p>{" "}
                    <Link href="/services/dynamic" as={NextLink} color="primary" isBlock={true}>Get Started</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="services"
                >
                    <h2 className={title({ size: "sm", class: "text-center" })}>
                        <span
                            className={title({ color: "blue", size: "sm" })}
                        >
                            E-Commerce
                        </span>
                    </h2>
                    <p className={subtitle()}>
                        E-commerce websites are a type of dynamic website that
                        is specifically designed for selling products or
                        services online. They typically include features such as
                        product catalogs, shopping carts, and payment
                        processing.
                    </p>
                    <hr />
                    <p className={subtitle()}>
                        <span
                            className={title({ size: "xs", color: "blue" })}
                        >
                            Pros:{" "}
                        </span>
                        Ideal for selling products or services online, can be
                        highly customized
                        <br />
                    </p>{" "}
                    <Link href="/services/ecommerce" as={NextLink} color="primary" isBlock={true}>Get Started</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHead;
>>>>>>> main
