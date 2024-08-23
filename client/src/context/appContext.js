import React, { useReducer, useContext, useEffect } from 'react';

import reducer from './reducer';
import axios from 'axios';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  DELETE_JOB_ERROR,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  // FAQ
  CREATE_FAQ_BEGIN, CREATE_FAQ_SUCCESS, CREATE_FAQ_ERROR, GET_FAQS_BEGIN, GET_FAQS_SUCCESS, SET_EDIT_FAQ, DELETE_FAQ_BEGIN, 
  DELETE_FAQ_ERROR, EDIT_FAQ_BEGIN, EDIT_FAQ_SUCCESS, EDIT_FAQ_ERROR, CLEAR_FAQ_VALUES,
  // Top Quotes
  CREATE_TOPQUOTE_BEGIN, CREATE_TOPQUOTE_SUCCESS, CREATE_TOPQUOTE_ERROR, GET_TOPQUOTES_BEGIN, GET_TOPQUOTES_SUCCESS, SET_EDIT_TOPQUOTE, DELETE_TOPQUOTE_BEGIN, 
  DELETE_TOPQUOTE_ERROR, EDIT_TOPQUOTE_BEGIN, EDIT_TOPQUOTE_SUCCESS, EDIT_TOPQUOTE_ERROR, CLEAR_TOPQUOTE_VALUES,
} from './actions';

const initialState = {
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  userLocation: '',
  showSidebar: false,
  isEditing: false,
  editJobId: '',
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  // FAQ section
  faqs: [],
  totalFaqs: 0,
  faqtitle: '',
  faqtext: '',
  editFaqId: '',
  // Top Quotes section
  topquotes: [],
  totalTopQuotes: 0,
  topquotestitle: '',
  topquotestext: '',
  topquotesauthor: '',
  edittopquotesId: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  });
  // request

  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, location, alertText },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = async () => {
    await authFetch.get('/auth/logout');
    dispatch({ type: LOGOUT_USER });
  };
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);
      const { user, location } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const clearFaqValues = () => {
    dispatch({ type: CLEAR_FAQ_VALUES });
  };

  const clearTopQuoteValues = () => {
    dispatch({ type: CLEAR_FAQ_VALUES });
  };

  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.post('/jobs', {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getJobs = async () => {
    const { page, search, searchStatus, searchType, sort } = state;

    let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    dispatch({ type: GET_JOBS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };
  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN });

    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.patch(`/jobs/${state.editJobId}`, {
        company,
        position,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: EDIT_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const deleteJob = async (jobId) => {
    dispatch({ type: DELETE_JOB_BEGIN });
    try {
      await authFetch.delete(`/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: DELETE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });
    try {
      const { data } = await authFetch('/jobs/stats');
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch('/auth/getCurrentUser');
      const { user, location } = data;

      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { user, location },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  // FAQ CRUD START

  const createFaq = async () => {
    dispatch({ type: CREATE_FAQ_BEGIN });
    try {
        const { faqtitle, faqtext } = state;
        // API backend path
        await authFetch.post('/faq-admin', {
            faqtitle, faqtext
        });

        dispatch({ type: CREATE_FAQ_SUCCESS });
        dispatch({ type: CLEAR_FAQ_VALUES });
    } catch (error) {
        if (error.response.status === 401) return;
        dispatch({
            type: CREATE_FAQ_ERROR,
            payload: { msg: error.response.data.msg },
        });
    }
    clearAlert();
};

const getFaqs = async (isFaqPage) => {
    
    const { search } = state;

    let urlfaq = '';

    if (isFaqPage) {
        urlfaq = `/faq?isLandingFaq=${isFaqPage}`;
    }
    else {
        urlfaq = `/faq-admin?isLandingFaq=${isFaqPage}`;

    }
    if (search) {
        urlfaq = urlfaq + `&search=${search}`;
    }
    dispatch({ type: GET_FAQS_BEGIN });
    try {
        const { data } = await authFetch.get(urlfaq);
        const { faqs, totalFaqs, numOfPages } = data;
        dispatch({
            type: GET_FAQS_SUCCESS,
            payload: {
                faqs,
                totalFaqs,
                numOfPages,
            },
        });
    } catch (error) {
        logoutUser();
    }
    // }

    clearAlert();
};


const setEditFaq = (id) => {
    dispatch({ type: SET_EDIT_FAQ, payload: { id } });
};

const editFaq = async () => {
    dispatch({ type: EDIT_FAQ_BEGIN });

    try {
        const { faqtitle, faqtext } = state;
        console.log("i am in edit faq");
        await authFetch.patch(`/faq-admin/${state.editFaqId}`, {
            faqtitle, faqtext
        });
        getFaqs();
        dispatch({ type: EDIT_FAQ_SUCCESS });
        dispatch({ type: CLEAR_FAQ_VALUES });
    } catch (error) {
        if (error.response.status === 401) return;
        dispatch({
            type: EDIT_FAQ_ERROR,
            payload: { msg: error.response.data.msg },
        });
    }
    clearAlert();
};

const deleteFaq = async (FaqId) => {
    dispatch({ type: DELETE_FAQ_BEGIN });
    try {
        await authFetch.delete(`/faq-admin/${FaqId}`);
        getFaqs();
    } catch (error) {
        if (error.response.status === 401) return;
        dispatch({
            type: DELETE_FAQ_ERROR,
            payload: { msg: error.response.data.msg },
        });
    }
    clearAlert();
};

// FAQ CRUD ENDS



// TOP QUOTES CRUD START
  
const createTopQuote = async () => {

  dispatch({ type: CREATE_TOPQUOTE_BEGIN });

  try {
      const { topquotestitle,  topquotestext, topquotesauthor } = state;
      // API backend path
      await authFetch.post('/top-quotes-admin', {
        topquotestitle,  topquotestext, topquotesauthor
      });

      dispatch({ type: CREATE_TOPQUOTE_SUCCESS });
      dispatch({ type: CLEAR_TOPQUOTE_VALUES });

  } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
          type: CREATE_TOPQUOTE_ERROR,
          payload: { msg: error.response.data.msg },
      });
  }
  clearAlert();
};

const getTopQuotes = async (isTopQuotesPage) => {
  
  const { search } = state;

  let urltopquotes = '';

  if (isTopQuotesPage) {
      urltopquotes = `/top-quotes?isLandingTopQuotes=${isTopQuotesPage}`;
  }
  else {
      urltopquotes= `/top-quotes-admin?isLandingTopQuotes=${isTopQuotesPage}`;

  }
  if (search) {
    urltopquotes = urltopquotes + `&search=${search}`;
  }
  dispatch({ type: GET_TOPQUOTES_BEGIN });
  try {
      const { data } = await authFetch.get(urltopquotes);
      const { topquotes, totalTopQuotes, numOfPages } = data;
      dispatch({
          type: GET_TOPQUOTES_SUCCESS,
          payload: {
              topquotes,
              totalTopQuotes,
              numOfPages,
          },
      });
  } catch (error) {
      logoutUser();
  }
  // }

  clearAlert();
};


const setEditTopQuote = (id) => {
  dispatch({ type: SET_EDIT_TOPQUOTE, payload: { id } });
};

const editTopQuote = async () => {
  dispatch({ type: EDIT_TOPQUOTE_BEGIN });

  try {
      const { topquotestitle,  topquotestext, topquotesauthor } = state;
      console.log("i am in edit Top Quotes");
      await authFetch.patch(`/top-quotes-admin/${state.edittopquotesId}`, {
        topquotestitle,  topquotestext, topquotesauthor
      });
      getTopQuotes();
      dispatch({ type: EDIT_TOPQUOTE_SUCCESS });
      dispatch({ type: CLEAR_TOPQUOTE_VALUES });
  } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
          type: EDIT_TOPQUOTE_ERROR,
          payload: { msg: error.response.data.msg },
      });
  }
  clearAlert();
};

const deleteTopQuote = async (topquotesId) => {
  dispatch({ type: DELETE_TOPQUOTE_BEGIN });

  try {
      await authFetch.delete(`/top-quotes-admin/${topquotesId}`);
      getTopQuotes();
      
  } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
          type: DELETE_TOPQUOTE_ERROR,
          payload: { msg: error.response.data.msg },
      });
  }
  clearAlert();
};
// TOP QUOTES CRUD ENDS

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob,
        showStats,
        clearFilters,
        changePage,
        clearFaqValues,
        createFaq,
        getFaqs,
        setEditFaq,
        deleteFaq,
        editFaq,
        clearTopQuoteValues,
        createTopQuote,
        getTopQuotes,
        setEditTopQuote,
        deleteTopQuote,
        editTopQuote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
