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

function NavbarMobile() {
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
            src={"/Icon.svg"}
            width={30}
            height={30}
            alt="Logo"
            className="mr-4"
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
              <Link
                href={nav.link}
                key={nav.title}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "xl" }),
                  "flex w-full items-center justify-start gap-2.5 pl-4",
                )}
              >
                <nav.icon className="h-5 w-5" />
                <Para>{nav.title}</Para>
              </Link>
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
          <Button size={"xl"}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default NavbarMobile;
