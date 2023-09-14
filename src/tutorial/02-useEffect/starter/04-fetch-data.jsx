import { useEffect, useState } from "react"

const url = "https://api.github.com/users"

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const fetchedData = await response.json()
        setUsers(fetchedData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user
          console.log(user)
          return (
            <li key={user.id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
