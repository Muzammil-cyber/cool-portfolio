import { LucideProps } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { RichTextContent } from "@graphcms/rich-text-types";

export type IconProps = SVGProps<SVGSVGElement>;
export type IconType = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
import { IconType as ReactIconType } from "react-icons";

export type NextImageProps = Partial<typeof Image>


export type ID = string | number;
export interface PageInfoType {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface AggregateType {
    count: number;
}
export interface PostType {
    id: ID;
    title: string;
    topic: string;
    createdAt: string;
    coverImage?: {
        id: ID;
        url: string;
        width: number;
        height: number;
    };
}

export interface PostWithDescriptionType {
    id: ID;
    title: string;
    topic: string;
    createdAt: string;
    coverImage?: {
        id: ID;
        url: string;
        width: number;
        height: number;
    };
    desc: {
        raw?: PostDescriptionType;
        text?: string;
    };

}

export type PostDescriptionType = RichTextContent
export interface PostEdgeType {
    cursor: string;
    node: PostType;
}
export interface PostConnectionType {
    edges: PostEdgeType[];
    pageInfo: PageInfoType;
    aggregate: AggregateType
}

export interface SkillType {
    id: ID;
    title: string;
    Icon: ReactIconType;
    theme: string;
}
export interface ExpType {
    id: ID;
    title: string;
    date: string;
    company: string;
    location: string;
    ifLatest?: boolean;
}
export interface FactType {
    id: ID;
    title: string;
    desc: string;
    Icon: IconType;
}
export interface ProjectType {
    id: ID;
    title: string;
    desc: string;
    tech: string[];
    image?: string
}
export interface ProjectEdgeType {
    node: ProjectType;
}
export interface ProjectConnectionType {
    edges: ProjectEdgeType[];
    pageInfo: PageInfoType;
    aggregate: AggregateType
}
export interface ImageType {
    img: {
        src: string;
        height: number;
        width: number;
    };
    base64: string;
}

export interface PageType {
    searchParams: { [key: string]: string | string[] | undefined };
    params?: { slug: string }
}

// // export type { PostType, SkillType, ExpType, FactType, ProjectType, ImageType, ProjectEdgeType, PageInfoType, ProjectConnectionType }