"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "../../ui/button";
import { Download, SidebarOpen } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { Heading4, Para } from "../../ui/Typography";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constant";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavbarMobile() {
  const pathname = usePathname();
  const [icon, setIcon] = useState<string>("Icon.svg");
  useEffect(() => {
    if (pathname === "/") {
      setIcon("Icon.svg");
    } else {
      const split = pathname.split("/");
      setIcon(`icons/${split[1]}.svg`);
    }
  }, [pathname]);
  return (
    <Sheet>
      <SheetTrigger asChild className="h-fit p-0">
        <div className="flex w-full items-center justify-between rounded-tr-md bg-primary-foreground">
          <Button
            variant={"ghost"}
            size={"lg"}
            className="h-fit w-fit justify-end rounded-none rounded-br-md bg-secondary py-4 align-baseline text-muted-foreground"
          >
            <SidebarOpen className="h-6 w-6" />
          </Button>
          <Image
            src={`/${icon}`}
            width={30}
            height={30}
            alt="Logo"
            className="mr-4 h-auto"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex w-full flex-col justify-between p-4 py-10 sm:w-[540px]"
      >
        <SheetHeader className="flex flex-row items-stretch gap-4 text-left">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/images/profile-pic.svg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <SheetTitle>
            <Para className="text-left">
              <span className="font-semibold">Muzammil Loya</span>
              <br />
              Software enginner
            </Para>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex h-full flex-col justify-evenly">
          <div className="inline-flex flex-col items-start justify-start gap-2 text-muted-foreground">
            {NAV_LINKS.map((nav) => (
              <SheetClose asChild key={nav.title}>
                <Link
                  href={nav.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "xl" }),
                    "flex w-full items-center justify-start gap-2.5 pl-4",
                    { "text-accent-foreground": nav.link === pathname },
                  )}
                >
                  <nav.icon className="h-5 w-5" />
                  <Para>{nav.title}</Para>
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-2 text-muted-foreground">
            <Para bold className="text-2xl text-primary">
              Socials
            </Para>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.title}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "flex w-full items-center justify-start gap-2.5",
                )}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <social.icon className="h-5 w-5" />
                <Para>{social.title}</Para>
              </a>
            ))}
          </div>
        </SheetDescription>
        <SheetFooter id="foot">
          <Button size={"xl"} asChild>
            <a
              rel="nocrawal, nofollow"
              href={"/MuzammilLoya.pdf"}
              target="_blank"
              type="application/pdf"
              download
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default NavbarMobile;
