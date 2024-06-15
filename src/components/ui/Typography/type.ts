import { DetailedHTMLProps, HTMLAttributes } from "react";

export type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
export type ParaProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & { bold?: boolean, muted?: boolean };
export type QouteProps = DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement> & { cite?: string }
export type HTMLAttribute = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
export type PreProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>