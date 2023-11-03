import { useState } from "react"

const useDisclose = () => {
  const [IsOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return { IsOpen, onOpen, onClose }
}
export default useDisclose
