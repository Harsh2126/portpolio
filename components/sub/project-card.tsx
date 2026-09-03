import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#ffffff15] bg-[#000000] hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)]"
    >
      {/* image */}
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-orange-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">{description}</p>

        <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-purple-400 font-medium">
          <FaGithub className="h-4 w-4 text-orange-400" />
          <span className="text-orange-400">View on GitHub</span>
          <span className="ml-auto text-gray-600 group-hover:text-orange-300 transition-colors duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};
