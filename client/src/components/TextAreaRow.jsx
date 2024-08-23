


const TextAreaRow = ({ type, name, value, handleChange, labelText, placeholder }) => {

    return (
        <div className=''>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <textarea
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className='resize border border-slate-700 w-3/4 p-2' 
                as="textarea" 
            />
        </div>
    )
};

export default TextAreaRow;