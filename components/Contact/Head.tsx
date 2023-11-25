"use client";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import { textVariant } from "@/utils/motion";

const ContactHead = () => {
    return (
        <motion.div variants={textVariant()}>
            <h1 className={title()}><span className={title({ color: "blue" })}>Contact</span>Us</h1>
            <p className={subtitle()}>Contact us to learn more or have a chat about how things work around here!</p>
        </motion.div>     
    );
};

export default ContactHead;