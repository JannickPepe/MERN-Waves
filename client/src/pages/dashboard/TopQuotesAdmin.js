
import React from 'react'
import { FormRow, Alert, } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import TextAreaRow from '../../components/TextAreaRow'
import TopQuotesContainer from '../../components/TopQuotes/TopQuotesContainer'



const TopQuotesAdmin = () => {
    const { isLoading, isEditing, showAlert, displayAlert, topquotestitle, topquotestext, topquotesauthor, handleChange, clearTopQuoteValues, createTopQuote, editTopQuote } = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!topquotestitle || !topquotestext || !topquotesauthor) {
            displayAlert()
            return
        }
        if (isEditing) {
            editTopQuote()
            return
        }
        createTopQuote();
    }

    const handleTopQuotesInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })
    }


    return (
        <Wrapper>
            <form className='form'>
                <h3>{isEditing ? 'edit top quote' : 'add top qoute'}</h3>
                {showAlert && <Alert />}

                <div className='form-center'>
                    {/* title */}
                    <FormRow
                        placeholder='Rank of the quote...'
                        type='text'
                        name='topquotestitle'
                        value={topquotestitle}
                        handleChange={handleTopQuotesInput}
                    />
                    {/* subtitle */}
                    <TextAreaRow
                        placeholder='Once upon a time...'
                        type='text'
                        name='topquotestext'
                        value={topquotestext}
                        handleChange={handleTopQuotesInput}
                    />
                    {/* author */}
                    <FormRow
                        placeholder='Sun Tzu...'
                        type='text'
                        name='topquotesauthor'
                        value={topquotesauthor}
                        handleChange={handleTopQuotesInput}
                    />

                    {/* btn container */}
                    <div className='btn-container mb-5 md:mb-10'>
                        <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading} >
                            submit
                        </button>
                        <button className='btn btn-block clear-btn' onClick={(e) => {
                            e.preventDefault() 
                            clearTopQuoteValues()
                            }} 
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>

            {/* False for backend display */}
            <TopQuotesContainer isTopQuotesPage={false} />
        </Wrapper>


    )
}

export default TopQuotesAdmin;