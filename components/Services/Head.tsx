"use client";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import { textVariant } from "@/utils/motion";

const ServicesHead = () => {
    return (
        <section>
            <motion.div variants={textVariant()} className="mb-16">
                <h1 className={title()}>
                    The
                    <span className={title({ color: "violet" })}>Services</span>
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
                    <h2 className={title({ size: "sm" })}>
                        <span
                            className={title({ color: "violet", size: "sm" })}
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
                            className={title({ size: "xs", color: "violet" })}
                        >
                            Pros:{" "}
                        </span>
                        Simple to create and maintain, fast loading times, good
                        for SEO <br />
                        <span
                            className={title({ size: "xs", color: "violet" })}
                        >
                            Cons:{" "}
                        </span>{" "}
                        Not ideal for frequently updated websites or interactive
                        features
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="services"
                >
                    <h2 className={title({ size: "sm" })}>
                        <span
                            className={title({ color: "violet", size: "sm" })}
                        >
                            Dynamic
                        </span>
                        Pages
                    </h2>
                    <p className={subtitle()}>
                        Dynamic websites are a better choice for businesses with
                        more complex websites that need to be updated regularly,
                        such as news websites, e-commerce websites, and
                        membership websites. They are also a good option for
                        businesses that want to offer users interactive
                        features, such as contact forms, comments, and shopping
                        carts
                    </p>
                    <hr />
                    <p className={subtitle()}>
                        <span
                            className={title({ size: "xs", color: "violet" })}
                        >
                            Pros:{" "}
                        </span>
                        Ideal for frequently updated websites and interactive
                        features, scalable
                        <br />
                        <span
                            className={title({ size: "xs", color: "violet" })}
                        >
                            Cons:{" "}
                        </span>{" "}
                        Can be more complex to create and maintain, slower
                        loading times than static webpages
                    </p>{" "}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="services"
                >
                    <h2 className={title({ size: "sm" })}>
                        <span
                            className={title({ color: "violet", size: "sm" })}
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
                            className={title({ size: "xs", color: "violet" })}
                        >
                            Pros:{" "}
                        </span>
                        Ideal for selling products or services online, can be
                        highly customized
                        <br />
                        <span
                            className={title({ size: "xs", color: "violet" })}
                        >
                            Cons:{" "}
                        </span>{" "}
                        Can be more expensive to create and maintain than other
                        types of websites
                    </p>{" "}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHead;
