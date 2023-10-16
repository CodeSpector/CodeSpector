import { title } from "@/components/primitives";

const StaticPagesService = () => {
    return (
        <section>
            <h1 className={title({ class: "text-center" })}>
                <span className={title({ color: "violet" })}>
                    Static
                </span>
                Pages
            </h1>
        </section>
    );
};

export default StaticPagesService;
