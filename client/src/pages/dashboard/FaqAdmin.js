
import React from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import FaqsContainer from '../../components/FaqsContainer'
import TextAreaRow from '../../components/TextAreaRow'



const FaqAdmin = () => {
    const { isLoading, isEditing, showAlert, displayAlert, faqtitle, faqtext, handleChange, clearFaqValues, createFaq, editFaq } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!faqtitle || !faqtext ) {
            displayAlert()
            return
        }
        if (isEditing) {
            editFaq()
            return
        }
        createFaq();
    }

    const handleFaqInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })
    }


    return (
        <Wrapper>
            <form className='form'>
                <h3>{isEditing ? 'edit faq' : 'add faq'}</h3>
                {showAlert && <Alert />}
                <div className='form-center'>
                    {/* title */}
                    <FormRow
                        placeholder='FAQ title'
                        type='text'
                        name='faqtitle'
                        value={faqtitle}
                        handleChange={handleFaqInput}
                    />
                    {/* subtitle */}
                    <TextAreaRow
                        placeholder='FAQ text'
                        type='text'
                        name='faqtext'
                        value={faqtext}
                        handleChange={handleFaqInput}
                    />
                    {/* btn container */}
                    <div className='btn-container'>
                        <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading} >
                            submit
                        </button>
                        <button className='btn btn-block clear-btn' onClick={(e) => {
                            e.preventDefault() 
                            clearFaqValues()
                            }} 
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>

            {/* False for backend display */}
            <FaqsContainer isFaqPage={false} />
        </Wrapper>


    )
}

export default FaqAdmin;