import Link from "next/link";
import { useState, useEffect } from "react";

export function Dropdown({ closeMenu }) {
  return (
    <div
      className="z-5 fixed top-[64px] flex w-screen flex-col justify-between overflow-hidden bg-black text-left font-bold text-white opacity-90"
      id="Dropdown"
    >
      <div className="mt-6">
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./">
            <a className="mr-8" onClick={closeMenu}>
              HOME
            </a>
          </Link>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <a
            href="/menu.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a className="mr-8" onClick={closeMenu}>
              MENU
            </a>
          </a>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./order">
            <a className="mr-4" onClick={closeMenu}>
              ORDER
            </a>
          </Link>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./about">
            <a className="mr-4" onClick={closeMenu}>
              ABOUT
            </a>
          </Link>
        </div>
        <div className="pb-8 pl-10 lg:pl-6">
          <Link href="./contact">
            <a className="mr-4" onClick={closeMenu}>
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
