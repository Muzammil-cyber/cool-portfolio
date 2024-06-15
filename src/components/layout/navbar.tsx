"use client";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constant";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Para } from "../ui/Typography";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpenText,
  Download,
  SidebarClose,
  SidebarOpen,
} from "lucide-react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
  open: boolean;
};

const Navbar = ({ open }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   if (!isOpen) {
  //     animate("p", { opacity: 0 });
  //   } else {
  //     animate("p", { opacity: 1 });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.nav
        layout
        //   initial={{ width: 80 }}
        animate={{ width: isOpen ? 240 : 80 }}
        //   exit={{ width: 80 }}
        transition={{
          // type: "tween",
          delay: 0.05,
        }}
        className={cn("flex h-full w-20 flex-col gap-4", {
          "w-60": isOpen,
        })}
      >
        <motion.button
          className={cn(
            "inline-flex h-fit w-full justify-center p-4 align-baseline text-muted-foreground",
            { "justify-end": isOpen },
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <SidebarClose className="h-6 w-6" />
          ) : (
            <SidebarOpen className="h-6 w-6" />
          )}
        </motion.button>

        <div className="flex h-fit w-full flex-col justify-between gap-4 px-4">
          <header className="flex flex-row items-stretch gap-4 text-left">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/images/profile-pic.svg" alt="@shadcn" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>

            {isOpen && (
              <Para className={cn("text-left")}>
                <span className="font-semibold">Muzammil Loya</span>
                <br />
                Software enginner
              </Para>
            )}
          </header>
          <section className="flex h-full flex-col gap-4">
            <div className="inline-flex flex-col items-start justify-start gap-2 text-muted-foreground">
              {NAV_LINKS.map((nav) => (
                <Link
                  href={nav.link}
                  key={nav.title}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: isOpen ? "lg" : "icon",
                    }),
                    "flex w-full items-center justify-start gap-2.5 pl-4",
                  )}
                >
                  <nav.icon className="h-5 w-5" />
                  {isOpen && <Para>{nav.title}</Para>}
                </Link>
              ))}
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2 text-muted-foreground">
              {isOpen && (
                <Para bold className={cn("text-2xl text-primary")}>
                  Socials
                </Para>
              )}
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.title}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: isOpen ? "default" : "icon",
                    }),
                    "flex w-full items-center justify-start gap-2.5 pl-4",
                  )}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  {isOpen && <Para>{social.title}</Para>}
                </a>
              ))}
            </div>
          </section>
        </div>
        <motion.footer
          className={cn("flex h-fit w-full items-center justify-center px-4", {
            "mb-4 mt-auto": !isOpen,
          })}
        >
          <Button
            size={isOpen ? "lg" : "icon"}
            className="w-full"
            title="Read Resume"
          >
            <BookOpenText className={cn("h-4 w-4", { "mr-2": isOpen })} />
            {isOpen && "Read Resume"}
          </Button>
        </motion.footer>
      </motion.nav>
    </AnimatePresence>
  );
};
export default Navbar;
