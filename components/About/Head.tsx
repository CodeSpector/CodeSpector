"use client";
import { motion } from "framer-motion";

import { subtitle, title } from "@/components/primitives";
import { textVariant, fadeIn } from "@/utils/motion";

const AboutHead = () => {
	return (
		<motion.div variants={fadeIn("up", "spring", 10, 2)}>
			<h1 className={title()}><span className={title({ color:"violet" })}>About</span>Us</h1>
			<p className={subtitle({})}>We are a small team with guys full of ambition. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis at commodi hic non illum animi consequatur assumenda atque corporis sed aspernatur aliquam adipisci, nobis, ex, inventore ullam? Error nisi inventore officiis.</p>
		</motion.div>
	);
}

export default AboutHead;