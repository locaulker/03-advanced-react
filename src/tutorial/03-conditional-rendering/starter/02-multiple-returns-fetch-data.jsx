import { useEffect, useState } from "react"
const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchedUser = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
        }
        const user = await resp.json()
        console.log(user)
        setUser(user)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }
    fetchedUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.login}
      />
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      {user.bio}
    </div>
  )
}
export default MultipleReturnsFetchData
