export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "CodeSpector | Helping Establish On Internet",
	description: "CodeSpector is a startup based in Inda that aims to help buissnesses to establish their identity on the wilderness of the web",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Exprience",
      href: "/experience",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    }
	],
	navMenuItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Services",
      href: "/Services",
    },
    {
      label: "Exprience",
      href: "/experience",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    }
	],
	links: {
		github: "https://github.com/CodeSpector",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
