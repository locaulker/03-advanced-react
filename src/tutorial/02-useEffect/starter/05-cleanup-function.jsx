import { useEffect, useState } from "react"

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    console.log("Hmm, That's Interesting!")
  }, [])

  return <h1>hello there!</h1>
}

export default CleanupFunction
