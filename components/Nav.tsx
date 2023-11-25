"use client";

import { NavLink } from '@utils/SiteConfig';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar';
import Link from 'next/link';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className='flex self-center justify-center'>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">CodeSpector</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="end">
      {NavLink.map((link) => {
        return (
          <NavbarItem key={link.name}>
            <Link color="foreground" href={link.path}>
              {link.name}
            </Link>
          </NavbarItem>
        );
      })}
    </NavbarContent>
    <NavbarMenu>
      {NavLink.map((link) => (
        <NavbarMenuItem key={`${link}`}>
          <Link
            color="foreground"
            className="w-full"
            href={link.path}
          >
            {link.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  );
}

export default Nav;