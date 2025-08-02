import Link from "next/link"
import Image from "next/image"
const Logo = () => {
  return (
    <Link href='/'>     
        {/* <Image src='/logo.svg' alt='' width={50} height={50} priority/> */}
        <span className="text-2xl md:text-4xl font-bold text-foreground dark:text-white font-poppins">
            anu<span className="text-3xl md:text-5xl text-light-primary dark:text-dark-primary">.</span>
          </span>
    </Link>
  )
}

export default Logo
