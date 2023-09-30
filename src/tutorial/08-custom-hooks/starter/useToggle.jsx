import { useState } from "react"

const useToggle = (defaultValue) => {
  // state value
  const [show, setShow] = useState(defaultValue)

  // toggle function
  const toggle = () => {
    setShow(!show)
  }

  // returning state value(show) and toggle function(toggle)
  return { show, toggle }
}
export default useToggle
