import { LucideProps } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;
export type IconType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

export type NextImageProps = Partial<typeof Image>

