import { LucideProps } from "lucide-react";
import Image from "next/image";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { RichTextContent } from "@graphcms/rich-text-types";

export type IconProps = SVGProps<SVGSVGElement>;
export type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;
import { IconType as ReactIconType } from "react-icons";

export type NextImageProps = Partial<typeof Image>;

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
    raw: DescriptionType;
    text?: string;
  };
}

export type DescriptionType = RichTextContent;
export interface PostEdgeType {
  cursor: string;
  node: PostType;
}
export interface PostConnectionType {
  edges: PostEdgeType[];
  pageInfo: PageInfoType;
  aggregate: AggregateType;
}

export interface SkillType {
  id: ID;
  title: string;
  Icon: ReactIconType;
  theme: string;
  color: string;
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
  image?: ImageType;
}

export interface ProjectWithDescriptionType {
  id: ID;
  title: string;
  description: {
    raw: DescriptionType;
  };
  tech: string[];
  image?: ImageType;
  webUrl?: string;
  gitUrl: string;
  createdAt: string;
}
export interface ProjectEdgeType {
  node: ProjectType;
}
export interface ProjectConnectionType {
  edges: ProjectEdgeType[];
  pageInfo: PageInfoType;
  aggregate: AggregateType;
}
export interface ImageType {
  url: string;
  height: number;
  width: number;
}

export interface PageType {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ id: string }>;
}

// // export type { PostType, SkillType, ExpType, FactType, ProjectType, ImageType, ProjectEdgeType, PageInfoType, ProjectConnectionType }
