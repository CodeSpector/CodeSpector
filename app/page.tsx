import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-left justify-left gap-4 py-8 md:py-10 bg-herobg before:blur-2xl before:bg-gradient-readial after:blur-2xl after:bg-gradient-conic">
			<div className={"bg-gradient-to-r from-sky-500 to-indigo-500 h-full z-1"}>

			</div>
			<div className="inline-block text-left justify-left z-2">
				<h1 className={title()}>Code</h1>
				<h1 className={title({ color: "violet" })}>Spector</h1>
				<br /><br />
				<h1 className={subtitle({ class: "mt-3 font-bold" })}>
					Helping Bussinesses Established On The Internet
				</h1>
				<p className={subtitle({})}>
					In today&spos;s digital world, it is more important than ever for businesses to have a strong online presence. We are a team of experienced web developers and designers who can help you create a website that is both visually appealing and easy to use. We will also help you optimize your website for search engines so that potential customers can easily find you online.
				</p>
			</div>

			<div className="flex gap-3">
				<Link
					as={NextLink}
					href="/services"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Get Started Now
				</Link>
				<Link
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href="/contact"
				>
					Contact Us
				</Link>
			</div>

		</section>
	);
}
