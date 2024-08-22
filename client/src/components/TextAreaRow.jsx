


const TextAreaRow = ({ type, name, value, handleChange, labelText, placeholder }) => {

    return (
        <div className='text-area-row'>
            <textarea
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className='text-area-row' 
                as="textarea" 
                rows={4}
            />
        </div>
    )
};

export default TextAreaRow;