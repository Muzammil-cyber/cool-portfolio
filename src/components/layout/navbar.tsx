"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { Download, SidebarOpen } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Heading4, Para } from "../ui/Typography";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constant";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="p-0 h-fit">
        <div className="w-full flex justify-between bg-primary-foreground rounded-tr-md items-center">
          <Button
            variant={"ghost"}
            size={"lg"}
            className="text-muted-foreground justify-end align-baseline w-fit h-fit py-4 bg-secondary rounded-none rounded-br-md"
          >
            <SidebarOpen className="w-6 h-6" />
          </Button>
          <Image
            src={"/icon.svg"}
            width={30}
            height={30}
            alt="Logo"
            className="mr-4 "
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-full sm:w-[540px] flex flex-col p-4 py-10 justify-between"
      >
        <SheetHeader className="flex flex-row gap-4 items-stretch text-left">
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
        <SheetDescription className="flex flex-col h-full justify-evenly">
          <div className="text-muted-foreground flex-col justify-start items-start gap-2 inline-flex">
            {NAV_LINKS.map((nav) => (
              <Link
                href={nav.link}
                key={nav.title}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "xl" }),
                  "flex gap-2.5 items-center w-full justify-start pl-4"
                )}
              >
                <nav.icon className="w-5 h-5" />
                <Para>{nav.title}</Para>
              </Link>
            ))}
          </div>
          <div className="text-muted-foreground flex-col justify-start items-start gap-2 inline-flex">
            <Para bold className="text-primary text-2xl">
              Socials
            </Para>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.title}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "flex gap-2.5 items-center w-full justify-start"
                )}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <social.icon className="w-5 h-5" />
                <Para>{social.title}</Para>
              </a>
            ))}
          </div>
        </SheetDescription>
        <SheetFooter id="foot">
          <Button size={"xl"}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default Navbar;
