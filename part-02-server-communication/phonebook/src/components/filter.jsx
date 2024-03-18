/* eslint-disable react/prop-types */

function Filter({ value, onChange }) {
  return (
    <div>
      filter shown with <input value={value} onChange={onChange} />
    </div>
  )
}

export default Filter