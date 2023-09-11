import { useState } from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = id => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
  }

  const clearAllItems = () => {
    setPeople([])
  }

  return (
    <div>
      {people.map(person => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              X
            </button>
          </div>
        )
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        ClearAllItems
      </button>
    </div>
  )
}

export default UseStateArray
