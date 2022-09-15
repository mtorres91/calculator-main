function RadioField(props) {

  const { name, options, helpText, details, setField } = props;

  const genVal = (option) => {
    return option.replace(/\s+/g, '-').toLowerCase();
  }

  const genId = (option) => {
    return `${name}-${genVal(option)}`;
  }

  return (
    <div className="mt-4 space-y-4">
      {options.map((option, index) => (
        <div className="flex items-center" key={genVal(option)}>
          <div className="flex items-center h-5">
            <input 
              value={genVal(option)} 
              id={genId(option)} 
              name={name} 
              type="radio" 
              className="focus:ring-primary h-5 w-5 text-primary border-medGray rounded" 
              onChange={e => setField(name, e.target.value)} 
              checked={details[name] == genVal(option)}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor={genId(option)} className="block text-lg font-light text-gray">{option}</label>
            {helpText && (
              <p className="text-gray text-sm">{helpText[index]}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RadioField; 