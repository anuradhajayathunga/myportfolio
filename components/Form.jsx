'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User,MailIcon,ArrowRightIcon,MessageSquare } from "lucide-react"

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* form input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name"/>
        <User className="absolute right-6" size={20}/>
      </div>

      {/* form input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email"/>
        <MailIcon className="absolute right-6" size={20}/>
      </div>

      {/* form input */}
      <div className="relative flex items-center">
        <Textarea type="" id="" placeholder=""/>
        <MessageSquare className="absolute right-6 top-4" size={20}/>
      </div>
      <Button size="" className='flex flex-center max-w-[166px] uppercase '>Send Message</Button>
    </form>
  )
}

export default Form
   