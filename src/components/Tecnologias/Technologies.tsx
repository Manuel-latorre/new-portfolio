"use client"

import { useLanguage } from "@/context/translate";
import TechnologyBox from "../ui/TechnologyBox";
import HtmlIcon from "../icons/HtmlIcon";
import CSSIcon from "../icons/CSSIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import ReduxIocn from "../icons/ReduxIocn";
import TailwindIcon from "../icons/TailwindIcon";
import NodeIcon from "../icons/NodeIcon";
import ExpressIcon from "../icons/ExpressIcon";
import MongoDbIcon from "../icons/MongoDbIcon";
import SupabaseIcon from "../icons/SupabaseIcon";
import PostgreSQLIcon from "../icons/PostgreSQLIcon";
import SlackIcon from "../icons/SlackIcon";
import TrelloIcon from "../icons/TrelloIcon";
import CanvaIcon from "../icons/CanvaIcon";

const Technologies = () => {

    const { isEnglish } = useLanguage();

  return (
    <div className="w-[90%] mx-auto mt-28 h-full">
        <div className="text-white text-5xl lg:text-7xl font-medium text-center mb-16">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                {isEnglish ? "Technologies and tools" : "Tecnologías y herramientas"}
            </span>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
            <TechnologyBox icon={<HtmlIcon/>} technology="HTML"/>
            <TechnologyBox icon={<CSSIcon/>} technology="CSS"/>
            <TechnologyBox icon={<TailwindIcon/>} technology="Tailwind css"/>
            <TechnologyBox icon={<JavascriptIcon/>} technology="Javascript"/>
            <TechnologyBox icon={<TypescriptIcon/>} technology="Typescript"/>
            <TechnologyBox icon={<ReactIcon/>} technology="React"/>
            <TechnologyBox icon={<NextIcon/>} technology="Next Js"/>
            <TechnologyBox icon={<ReduxIocn/>} technology="Redux"/>
            <TechnologyBox icon={<NodeIcon/>} technology="Node Js"/>
            <TechnologyBox icon={<ExpressIcon/>} technology="Express"/>
            <TechnologyBox icon={<MongoDbIcon/>} technology="Mongo DB"/>
            <TechnologyBox icon={<SupabaseIcon/>} technology="Supabase"/>
            <TechnologyBox icon={<PostgreSQLIcon/>} technology="PostgreSQL"/>
            <TechnologyBox icon={<SlackIcon/>} technology="Slack"/>
            <TechnologyBox icon={<TrelloIcon/>} technology="Trello"/>
            <TechnologyBox icon={<CanvaIcon/>} technology="Canva"/>
        </div>

    </div>
  )
}

export default Technologies