function TextField(props) {

  const { name, placeholder, details, setField, fieldType } = props;

  return (
    <div className="mt-4 flex rounded-md shadow-sm">
      <input
        defaultValue={details[name]}
        type={fieldType}
        name={name}
        id={name}
        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md text-lg border-medGray"
        placeholder={placeholder}
        onChange={(e) => setField(name, e.target.value)}
      />
    </div>
  )
}

export default TextField; 