export default function Input({ type, name, placeholder = "", title }) {
  return (
    <>
      <label>{title}</label>
      <input type={type} name={name} className="u-full-width" placeholder={placeholder} />
    </>
  )
}
