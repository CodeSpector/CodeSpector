import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}><span className={title({ color:"violet" })}>About</span>Us.</h1>
			<p className={subtitle({})}>We are a small team with guys full of ambition. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis at commodi hic non illum animi consequatur assumenda atque corporis sed aspernatur aliquam adipisci, nobis, ex, inventore ullam? Error nisi inventore officiis.</p>
		</div>
	);
}
