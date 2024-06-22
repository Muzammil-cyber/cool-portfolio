import {
  CodeBlock,
  Heading2,
  Heading3,
  Heading4,
  InlineCode,
  Para,
} from "@/components/ui/Typography";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";
import Link from "next/link";

const RawToHtml = ({ raw }: { raw: RichTextContent }) => {
  return (
    <RichText
      content={raw}
      renderers={{
        bold: ({ children }: any) => (
          <strong className="font-semibold">{children}</strong>
        ),
        italic: ({ children }: any) => <em className="italic">{children}</em>,
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href?.match(/^https?:\/\/|^\/\//i)) {
            return (
              <a
                href={href}
                target={openInNewTab ? "_blank" : "_self"}
                rel={rel || "external"}
                className="link text-lg"
                {...rest}
              >
                {children}
              </a>
            );
          }

          return (
            <Link href={href ?? ""} {...rest} className="link">
              {children}
            </Link>
          );
        },
        p: ({ children }: any) => <Para>{children}</Para>,
        li: ({ children }: any) => <li className="font-normal">{children}</li>,
        h1: ({ children }: any) => (
          <Heading2 className="text-4xl">{children}</Heading2>
        ),
        h2: ({ children }: any) => <Heading2>{children}</Heading2>,
        h3: ({ children }: any) => <Heading3>{children}</Heading3>,
        h4: ({ children }: any) => <Heading4>{children}</Heading4>,
        h5: ({ children }) => (
          <h5 className="scroll-m-12 text-xl font-semibold tracking-tight">
            {children}
          </h5>
        ),
        code_block: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
        code: ({ children }: any) => (
          <InlineCode className="text-md rounded p-1 font-mono">
            {children}
          </InlineCode>
        ),
      }}
    />
  );
};
export default RawToHtml;
