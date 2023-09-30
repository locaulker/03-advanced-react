import useToggle from "./useToggle"

const ToggleExample = () => {
  const { show, toggle } = useToggle(false)

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>Some Stuff</h4>}
    </div>
  )
}
export default ToggleExample
