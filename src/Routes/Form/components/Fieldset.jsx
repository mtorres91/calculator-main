function Fieldset(props) {

  const { label, subLabel, children } = props;

  return (
    <fieldset>
      <legend className="contents text-lg font-medium text-gray-900">{label}</legend>
      {subLabel && (
        <p className="text-base text-gray pt-3">{subLabel}</p>
      )}
      {children}
    </fieldset>
  )
}

export default Fieldset; 
