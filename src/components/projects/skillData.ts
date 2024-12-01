import { FaCss3, FaDocker, FaGitAlt, FaHtml5, FaNode, FaReact, FaStripe } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiTypescript, SiJavascript, SiMongodb, SiTailwindcss, SiChakraui, SiPostgresql, SiFramer, SiFirebase, SiPayloadcms, SiSvelte, SiGreensock } from "react-icons/si";
import { SkillType } from "@/lib/types";

export const SkillSet: SkillType[] = [
    {
        id: 1,
        title: "HTML",
        Icon: FaHtml5,
        theme: "bg-orange-600",
        color: "text-orange-600"
    },
    {
        id: 2,
        title: 'CSS',
        Icon: FaCss3,
        theme: "bg-blue-400",
        color: "text-blue-400"

    },
    {
        id: 3,
        title: 'Javascript',
        Icon: SiJavascript,
        theme: "bg-yellow-400",
        color: "text-yellow-400"

    },
    {
        id: 4,
        title: 'Typescript',
        Icon: SiTypescript,
        theme: "bg-blue-500",
        color: "text-blue-500"

    },
    {
        id: 5,
        title: 'Reactjs',
        Icon: FaReact,
        theme: "bg-sky-500",
        color: "text-sky-500"

    },
    {
        id: 6,
        title: 'Nextjs',
        Icon: TbBrandNextjs,
        theme: "bg-black !text-3xl",
        color: "text-black dark:text-white"

    },
    {
        id: 21,
        title: 'Svelte',
        Icon: SiSvelte,
        theme: "bg-orange-500",
        color: "text-orange-500"

    },
    {
        id: 7,
        title: 'Nodejs',
        Icon: FaNode,
        theme: "bg-green-400 !text-3xl",
        color: "text-green-400"

    },
    {
        id: 9,
        title: 'MongoDB',
        Icon: SiMongodb,
        theme: "bg-green-500",
        color: "text-green-500"

    },
    {
        id: 19,
        title: 'SQL',
        Icon: SiPostgresql,
        theme: "bg-red-500 !text-2xl bg-cyan-700",
        color: "text-red-500"

    },
    {
        id: 16,
        title: 'Tailwind',
        Icon: SiTailwindcss,
        theme: "bg-cyan-500",
        color: "text-cyan-500"

    },
    {
        id: 17,
        title: 'ChakraUI',
        Icon: SiChakraui,
        theme: "bg-cyan-300",
        color: 'text-cyan-300'

    },
    {
        id: 20,
        title: 'Motion',
        Icon: SiFramer,
        theme: "bg-blue-800",
        color: 'text-yellow-400'

    },
    {
        id: 22,
        title: 'GSAP',
        Icon: SiGreensock,
        theme: "bg-green-500 !text-3xl",
        color: "text-green-500"
    },
    {
        id: 10,
        title: 'Git',
        Icon: FaGitAlt,
        theme: "bg-orange-500 !text-3xl",
        color: "text-orange-500"

    },
    {
        id: 11,
        title: 'React Native',
        Icon: TbBrandReactNative,
        theme: "bg-purple-800 !text-3xl",
        color: "text-purple-800"
    },
    {
        id: 12,
        title: 'Stripe',
        Icon: FaStripe,
        theme: "bg-indigo-500 !text-3xl",
        color: "text-indigo-500"
    },
    {
        id: 13,
        title: 'FireBase',
        Icon: SiFirebase,
        theme: "bg-orange-400 !text-2xl",
        color: "text-orange-400"
    },
    {
        id: 14,
        title: 'CMS',
        Icon: SiPayloadcms,
        theme: "bg-slate-800 !text-2xl",
        color: "text-slate-800"
    },
    {
        id: 15,
        title: 'Docker',
        Icon: FaDocker,
        theme: "bg-blue-500 !text-3xl",
        color: "text-blue-500"
    },

];

export const findSkillByTitle = (title: string) => {
    const lowerCaseTitle = title.toLowerCase(); // Convert search string to lowercase
    const skill = SkillSet.find((skill) => skill.title.toLowerCase() === lowerCaseTitle)


    return skill?.color;
};
