import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiPinterestFill,
  RiBehanceFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://linkedin.com/in/anuradha-jayathunga-10a832307",
    name: <RiLinkedinFill className="text-3xl text-primary dark:text-white" />,
    // Blue-400
  },
  {
    path: "https://github.com/anuradhajayathunga",
    name: (
      <RiGithubFill className="p-0 text-3xl bg-white bg-cover rounded-full text-primary dark:text-black" />
    ),
  },
  // {
  //   path: '',
  //   name: <RiTwitterXFill className="text-2xl text-primary dark:text-white " />,
  // },
  // {
  //   path: '',
  //   name: <RiPinterestFill className="text-2xl text-red-600" />,
  // },
  // {
  //   path: '',
  //   name: <RiInstagramFill className="text-white text-2xl bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-[.5px]" />,
  // }
  {
    path: "",
    name: <RiBehanceFill className="text-3xl text-primary dark:text-white " />,
  },
  //  bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-[.5px]
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
