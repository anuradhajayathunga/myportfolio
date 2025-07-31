import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiPinterestFill,
  RiBehanceFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '',
    name:<RiLinkedinFill className="text-primary dark:text-white text-3xl" />,
    // Blue-400
  },
  {
    path: '',
    name: <RiGithubFill className="text-primary dark:text-black text-3xl bg-white rounded-full bg-cover p-0" />,
  },
  // {
  //   path: '',
  //   name: <RiTwitterXFill className="text-primary dark:text-white  text-2xl " />,
  // },
  // {
  //   path: '',
  //   name: <RiPinterestFill className="text-red-600 text-2xl" />,
  // },
  // {
  //   path: '',
  //   name: <RiInstagramFill className="text-white text-2xl bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-[.5px]" />,
  // }
   {
     path: '',
     name: <RiBehanceFill className="text-primary dark:text-white text-3xl " />,
   },
  //  bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-[.5px]
]
const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index) => (
        <Link href={icon.path} key={icon.name}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
