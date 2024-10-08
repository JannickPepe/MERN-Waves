import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms, FaQuestionCircle } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { BsChatQuote } from "react-icons/bs";

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add job', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'faq', path: 'faqadmin', icon: <FaQuestionCircle />, },
  { id: 5, text: 'top quotes', path: 'topquotesadmin', icon: <BsChatQuote />, },
  { id: 6, text: 'profile', path: 'profile', icon: <ImProfile /> },
]

export default links
