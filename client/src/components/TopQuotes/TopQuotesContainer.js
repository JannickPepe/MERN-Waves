
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/appContext';
import Loading from '../Loading';
import Alert from '../Alert';
import PageBtnContainer from '../PageBtnContainer';
import TopQuotes from './TopQuotes';
import axios from 'axios';


const TopQuotesContainer = (props) => {
    const { getTopQuotes, isLoading, page, search, searchStatus, searchType, sort, showAlert } = useAppContext();

    const [topquotess, setTopQuotess] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [totalTopQuotess, setTotalTopQuotess] = useState(0);
    const [numOfPagess, setNumOfPagess] = useState(0);

    useEffect(() => {
        getTopQuotes(props.isTopQuotesPage);
        getTopQuotesApi(props.isTopQuotesPage);
        // eslint-disable-next-line
    }, [page, search, searchStatus, searchType, sort, props.isTopQuotesPage]);
    

    async function getTopQuotesApi(isTopQuotesPage) {
        
        let urltopquotes = '';
        if (isTopQuotesPage) {
            // API frontend
            urltopquotes = `/top-quotes?isLandingTopQuotes=${isTopQuotesPage}`; 

        }
        else {
            // API backend
            urltopquotes = `/top-quotes-admin?isLandingFaq=${isTopQuotesPage}`; 

        }
        try {
            const authFetch = axios.create({
                baseURL: 'api/v1',
            });
            // Response interceptor
            authFetch.interceptors.response.use(
                (response) => {
                    return response;
                },
                (error) => {
                    console.log(error.response);
                    if (error.response.status === 401) {
                    }
                    return Promise.reject(error);
                }
            );

            const { data } = await authFetch.get(urltopquotes);
            const { topquotes, totalTopQuotes, numOfPages } = data;

            setTopQuotess(topquotes);
            setTotalTopQuotess(totalTopQuotes);
            setNumOfPagess(numOfPages);
        } catch (error) {
            console.log(error.message);
        }
    }


    if (isLoading) {
        return <Loading center />;
    }

    if (!topquotess || topquotess.length === 0) {
        return (
            <div className='text-center'>
                <h2>No top quotes to display...</h2>
            </div>
        );
    }

    return (
        <div>
            {showAlert && <Alert />}
            {/*
            <h5>
                We have {totalFaqss} {faqss.length > 1 && 'FAQs'} 
            </h5>
             */}

            <div className='grid grid-cols-4 grid-rows-subgrid gap-4 bg-black py-10 px-8 mx-auto'>
                {topquotess.map((topquotes) => {
                    return <TopQuotes key={topquotes._id} {...topquotes} isTopQuotesPage={props.isTopQuotesPage} />;
                })}
            </div>
            {numOfPagess > 1 && <PageBtnContainer />}
        </div>
    );
};

export default TopQuotesContainer;