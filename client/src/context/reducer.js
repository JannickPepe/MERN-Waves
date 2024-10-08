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
  CREATE_FAQ_BEGIN, CREATE_FAQ_SUCCESS, CREATE_FAQ_ERROR, GET_FAQS_BEGIN, GET_FAQS_SUCCESS, SET_EDIT_FAQ, DELETE_FAQ_BEGIN, DELETE_FAQ_ERROR, EDIT_FAQ_BEGIN, 
  EDIT_FAQ_SUCCESS, EDIT_FAQ_ERROR, GET_CLIENT_FAQS_BEGIN, GET_CLIENT_FAQS_SUCCESS, CLEAR_FAQ_VALUES,
  // FAQ
  CREATE_TOPQUOTE_BEGIN, CREATE_TOPQUOTE_SUCCESS, CREATE_TOPQUOTE_ERROR, GET_TOPQUOTES_BEGIN, GET_TOPQUOTES_SUCCESS, SET_EDIT_TOPQUOTE, DELETE_TOPQUOTE_BEGIN, 
  DELETE_TOPQUOTE_ERROR, EDIT_TOPQUOTE_BEGIN, EDIT_TOPQUOTE_SUCCESS, EDIT_TOPQUOTE_ERROR, GET_CLIENT_TOPQUOTES_BEGIN, GET_CLIENT_TOPQUOTES_SUCCESS, CLEAR_TOPQUOTE_VALUES,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {

// TOP QUOTES START

if (action.type === CLEAR_TOPQUOTE_VALUES) {
  const initialState = {
      isEditing: false,
      editTopQuotesId: '',
      topquotestitle: '',
      topquotestext: '',
      topquotesauthor: '',
  };
  return {
      ...state,
      ...initialState,
  };
}

if (action.type === CREATE_TOPQUOTE_BEGIN) {
  return { ...state, isLoading: true };
}

if (action.type === CREATE_TOPQUOTE_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Top Quotes Created!',
  };
}

if (action.type === CREATE_TOPQUOTE_ERROR) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
  };
}

if (action.type === GET_TOPQUOTES_BEGIN) {
  return { ...state, isLoading: true, showAlert: false };
}

if (action.type === GET_TOPQUOTES_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      topquotes: action.payload.topquotes,
      totalTopQuotes: action.payload.totalTopQuotes,
      numOfPages: action.payload.numOfPages,
  };
}

if (action.type === GET_CLIENT_TOPQUOTES_BEGIN) {
  return { ...state, isLoading: true, showAlert: false };
}

if (action.type === GET_CLIENT_TOPQUOTES_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      clientTopQuotess: action.payload.clientTopQuotes,
      totalTopQuotes: action.payload.totalTopQuotes,
      numOfPages: action.payload.numOfPages,
  };
}

if (action.type === SET_EDIT_TOPQUOTE) {
  const topquotes = state.topquotes.find((topquotes) => topquotes._id === action.payload.id);
  const { _id, topquotestitle, topquotestext, topquotesauthor } = topquotes;
  
  return {
      ...state,
      isEditing: true,
      editTopQuotesId: _id,
      topquotestitle, topquotestext, topquotesauthor,
  };
}

if (action.type === DELETE_TOPQUOTE_BEGIN) {
  return { ...state, isLoading: true };
}

if (action.type === DELETE_TOPQUOTE_ERROR) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
  };
}

if (action.type === EDIT_TOPQUOTE_BEGIN) {
  return { ...state, isLoading: true };
}

if (action.type === EDIT_TOPQUOTE_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'TopQuotes Updated!',
  };
}

if (action.type === EDIT_TOPQUOTE_ERROR) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
  };
}

// TOP QUOTES ENDS

// FAQ START
if (action.type === CLEAR_FAQ_VALUES) {
  const initialState = {
      isEditing: false,
      editFaqId: '',
      faqtitle: '',
      faqtext: '',
  };
  return {
      ...state,
      ...initialState,
  };
}

if (action.type === CREATE_FAQ_BEGIN) {
  return { ...state, isLoading: true };
}

if (action.type === CREATE_FAQ_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New FAQ Created!',
  };
}

if (action.type === CREATE_FAQ_ERROR) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
  };
}

if (action.type === GET_FAQS_BEGIN) {
  return { ...state, isLoading: true, showAlert: false };
}

if (action.type === GET_FAQS_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      faqs: action.payload.faqs,
      totalFaqs: action.payload.totalFaqs,
      numOfPages: action.payload.numOfPages,
  };
}

if (action.type === GET_CLIENT_FAQS_BEGIN) {
  return { ...state, isLoading: true, showAlert: false };
}

if (action.type === GET_CLIENT_FAQS_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      clientFaqs: action.payload.clientFaqs,
      totalFaqs: action.payload.totalFaqs,
      numOfPages: action.payload.numOfPages,
  };
}


if (action.type === SET_EDIT_FAQ) {
  const faq = state.faqs.find((faq) => faq._id === action.payload.id);
  const { _id, faqtitle, faqtext } = faq;

  return {
      ...state,
      isEditing: true,
      editFaqId: _id,
      faqtitle, faqtext
  };
}

if (action.type === DELETE_FAQ_BEGIN) {
  return { ...state, isLoading: true };
}

if (action.type === DELETE_FAQ_ERROR) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
  };
}

if (action.type === EDIT_FAQ_BEGIN) {
  return { ...state, isLoading: true };
}

if (action.type === EDIT_FAQ_SUCCESS) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'FAQ Updated!',
  };
}

if (action.type === EDIT_FAQ_ERROR) {
  return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
  };
}

// FAQ ENDS

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      userLoading: false,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: '',
      position: '',
      company: '',
      jobLocation: state.userLocation,
      jobType: 'full-time',
      status: 'pending',
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created!',
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === DELETE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Job Updated!',
    };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest',
    };
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }
  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, userLoading: true, showAlert: false };
  }
  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      userLoading: false,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
    };
  }
  throw new Error(`no such action : ${action.type}`);

  
};

export default reducer;
