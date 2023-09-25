import { useState } from "react"
import { data } from "../../../data"

const UserChallenge = () => {
  const [name, setName] = useState("")
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) return
    const fakeId = Date.now()
    const newUser = { id: fakeId, name: name }
    const updatedUsers = [...users, newUser]

    setUsers(updatedUsers)
    setName("")
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          Submit:
        </button>
      </form>
      {/* render users below */}
      <h2 style={{ color: "orangered" }}>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
