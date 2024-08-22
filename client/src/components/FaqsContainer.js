
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Alert from './Alert';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';
import Faq from './Faq';
import axios from 'axios';


const FaqsContainer = (props) => {
    const { getFaqs, isLoading, page, search, searchStatus, searchType, sort, showAlert } = useAppContext();

    const [faqss, setFaqss] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [totalFaqss, setTotalFaqss] = useState(0);
    const [numOfPagess, setNumOfPagess] = useState(0);

    useEffect(() => {
        getFaqs(props.isFaqPage);
        getFaqsApi(props.isFaqPage);
        // eslint-disable-next-line
    }, [page, search, searchStatus, searchType, sort, props.isFaqPage]);
    

    async function getFaqsApi(isFaqPage) {
        
        let urlfaq = '';
        if (isFaqPage) {
            // API frontend
            urlfaq = `/faq?isLandingFaq=${isFaqPage}`; 

        }
        else {
            // API backend
            urlfaq = `/faq-admin?isLandingFaq=${isFaqPage}`; 

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

            const { data } = await authFetch.get(urlfaq);
            const { faqs, totalFaqs, numOfPages } = data;

            setFaqss(faqs);
            setTotalFaqss(totalFaqs);
            setNumOfPagess(numOfPages);
        } catch (error) {
            console.log(error.message);
        }
    }


    if (isLoading) {
        return <Loading center />;
    }

    if (!faqss || faqss.length === 0) {
        return (
            <Wrapper>
                <h2>No Faqs to display...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {showAlert && <Alert />}
            {/*
            <h5>
                We have {totalFaqss} {faqss.length > 1 && 'FAQs'} 
            </h5>
             */}

            <div className='faqs'>
                {faqss.map((faq) => {
                    return <Faq key={faq._id} {...faq} isFaqPage={props.isFaqPage} />;
                })}
            </div>
            {numOfPagess > 1 && <PageBtnContainer />}
        </Wrapper>
    );
};

export default FaqsContainer;