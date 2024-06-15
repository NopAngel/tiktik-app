import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

export default function Navbar() {
  return (
    <header className="border-[1px] border-neutral-300/55 p-2">
      <nav>
        <ul className="flex justify-around items-center p-2">
          <section>
            <li>
              <a href="/">
                <img
                  src="/logo.png"
                  className="w-[180px]"
                  alt="Logo | Tiktik"
                />
              </a>
            </li>
          </section>
          <section>
            <SignedOut>
              <li>
                <a
                  className="flex items-center justify-between gap-2 border-[1px] border-neutral-300 p-2 w-fit rounded-lg"
                  href="/sign-in"
                >
                  <img
                    src="/google.svg"
                    className="w-[30px]"
                    alt="Logo Google | Tiktik"
                  />
                  <span>Iniciar sesión.</span>
                </a>
              </li>
            </SignedOut>
            <SignedIn>
              <li>
                <UserButton />
              </li>
            </SignedIn>
          </section>
        </ul>
      </nav>
    </header>
  );
}
