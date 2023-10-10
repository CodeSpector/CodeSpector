import { title, subtitle } from "@/components/primitives";

const Services = () => {
    return (
        <section>
            <h1 className={title()}>The<span className={title({ color: "violet" })}>Services</span>WeOffer.</h1>
            <h2 className={subtitle()}>We provide many services to help you establish your presence on the web. Some of the services include making a static site and SEO optimiation to full fledged websites that can digitalize your bussiness and help grow your bussiness.</h2>
        </section>
    );
}

export default Services;
