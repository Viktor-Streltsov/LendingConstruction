'use client'

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import classNames from 'classnames';
import styles from './Navigation.module.scss';

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({navLinks}: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link)=> {
        const isActive = pathname === link.href;

        return (
          <Link key={link.label} href={link.href} className={classNames([styles.active], isActive)}>
            {link.label}
          </Link>
        )
      })}
    </>
  );
};

export default Navigation;