import StaticServiceContent from "@/components/Services/Static/Content";
import { title } from "@/components/primitives";

const StaticPagesService = () => {
    return (
        <section>
            <h1 className={title({ class: "text-center" })}>
                <span className={title({ color: "blue" })}>Static</span>
                Pages
            </h1>
            <p className="text-lg ">
                Static pages are websites with pre-rendered content, which means
                that the content is generated at build time and is then served
                to the client as a static file. These are great for small
                businesses with relatively simple websites that don&apos;t
                require frequent updates. They are also a good option for
                landing pages and one-page websites.
            </p>

            <StaticServiceContent />
        </section>
    );
};

export default StaticPagesService;
