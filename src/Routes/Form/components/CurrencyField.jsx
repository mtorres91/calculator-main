function CurrencyField(props) {

  const { name, placeholder, details, setField } = props;

  return (
    <div className="mt-4 flex rounded-md shadow-sm lg:w-3/5">
      <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-medGray text-lg bg-lightGray text-white">$</span>
      <input
        defaultValue={details[name]}
        type="number"
        name={name}
        id={name}
        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md text-lg border-medGray"
        placeholder={placeholder}
        onChange={(e) => setField(name, e.target.value)}
      />
    </div>
  )
}

export default CurrencyField; 