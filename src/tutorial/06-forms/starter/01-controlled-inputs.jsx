import { useState } from "react"

const ControlledInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // this is where you do something to the values collected in the controlled inputs
    console.log(name, email)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  )
}
export default ControlledInputs
