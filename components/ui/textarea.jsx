import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    ( <textarea 
    className={`w-full px-4 py-3 bg-transparent  border-2 border-zinc-200 dark:border-zinc-600 rounded-lg text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none ${className}`} 
    rows={5}
    {...props} 
  />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
