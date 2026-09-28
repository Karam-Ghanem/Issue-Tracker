import { PropsWithChildren } from "react"

const ErrorMessage = ({children}:PropsWithChildren) => {
    if(!children) return null
  return (
    <p className="text-red-700">{children}</p>
  )
}

export default ErrorMessage
