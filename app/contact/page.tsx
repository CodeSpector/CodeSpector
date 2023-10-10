import { title, subtitle } from "@/components/primitives";

const Contact = () => {
    return (
        <section>
            <h1 className={title()}><span className={title({ color: "violet" })}>Contact</span>Us.</h1>
            <p className={subtitle()}>Contact us to learn more or have a chat about how things work around here!</p>
        </section>     
    );
};

export default Contact;