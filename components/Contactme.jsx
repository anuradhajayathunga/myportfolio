import { Button } from "./ui/button"
import Link from "next/link"
const Contactme = () => {
  return (
    <section className="-mb-6 -mt-6">
      <div className="container p-10 flex flex-col items-center bg-light-text  bg-blur-lg hover:shadow-hover rounded-sm dark:bg-dark-text z-50">
        <h2 className="text-4xl font-bold text-dark-text dark:text-light-text max-w-[700px] text-center mb-4">
          Prepared to turn your ideas into reality? I'm here to help you.
        </h2>
        <Link href="/contact">
              <Button className="">
                Contact Me
              </Button>
          </Link>
      </div>
      
    </section>
  )
}

export default Contactme
