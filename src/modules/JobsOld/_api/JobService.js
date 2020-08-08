import API from '../../../api/API'
import { PROJECT_NAME } from '@/utils/constants'

const url = `/job`

const mockJobs = [
  {
    id: 1,
    title: 'Find the right job & get hired',
    stars: 4,
    description:
      'Explore opportunities. Enjoy option ofrandom job alerts! Get notifications of job openings that match your skills and interests. Receive tips for creating resumes and cover letters that are professional, authentic and impactful. Determine your salary eligibilityand your ability to land an interview.',
    url: '/',
    image: 'get_hired.png',
  },
  {
    id: 2,
    title: 'Community insights & industry overview',
    stars: 4,
    description:
      'Access all the information you need to stay ahead of the curve with sector-wise posts on market trends and disruptors. Hear from peers about an organization’s workplace culture,training and development provisions, compensation standards and practices, career advancement opportunities and more via the company’s feedback section.',
    url: '/',
    image: 'industry_overview.png',
  },
  {
    id: 3,
    title: 'Career planning',
    stars: 4,
    description:
      'Set yourself up for a potential professional success. Plan your professional journey and create a growth strategy by understanding whichavenues are open foryou based on factors such as your qualifications, area of expertise,number of years of experience, education-base, current job title,location, and industry outlook.',
    url: '/',
    image: 'career_planning.png',
  },
  {
    id: 4,
    title: 'Recruitment',
    stars: 4,
    description:
      'Find and hire employees that are the right fit for your team. Simplify and improve the efficiency of your recruitment process. Whether it is indefining the job role and requirement, searching for and attracting candidates, or shortlisting, scheduling interviews, selecting and screening team members, onboarding or orientation, succeed in getting every step right with this platform.',
    url: '/',
    image: 'recruitment.png',
  },
]
const mockLandingPage = [
  {
    title: 'Get started right now',
    subtitle: 'Just login and start career of your dream',
    titleFontSize: 50,
    descriptionFontSize: 20,
    button_footer_title: 'LEARN MORE',
    url_button_footer_title: '/home/learnmore',
    descriptions: [
      {
        id: 2,
        title: 'The latest jobs are on Kartmon',
        description:
          'Kartmon is helping enterprises around the world solve their biggest challenges.',
        url: '/',
        image: 'latest-jobs-landing-card.png',
        url_button_first: '/auth/register',
        url_button_next: 'WATCHDEMO',
        button_first: 'GET STARTED',
        button_next: 'WATCH DEMO',
        type: 'left',
      },
      {
        id: 3,
        title: 'Find the right job & get hired',
        description:
          'Explore opportunities. Enjoy option ofrandom job alerts! Get notifications of job openings that match your skills and interests.',
        url: '/',
        image: 'right-job-landing-card.png',
        url_button_first: '/home/findjob',
        url_button_next: '',
        button_first: 'LEARN MORE',
        button_next: '',
        type: 'right',
      },
      {
        id: 4,
        title: 'Community insights & industry overview',
        description:
          'Access all the information you need to stay ahead of the curve with sector-wise posts on market trends and disruptors. ',
        url: '/',
        image: 'community-insights-landing-card.png',
        url_button_first: '/home/community',
        url_button_next: '',
        button_first: 'LEARN MORE',
        button_next: '',
        type: 'left',
      },
      {
        id: 5,
        title: 'Career planning',
        description:
          'Set yourself up for a potential professional success. Plan your professional journey and create a growth strategy by understanding which avenues are open for you.',
        url: '/',
        image: 'career-planning-landing-card-01.png',
        url_button_first: '/home/career',
        url_button_next: '',
        button_first: 'LEARN MORE',
        button_next: '',
        type: 'right',
      },
      {
        id: 6,
        title: 'Recruitment',
        description:
          'Find and hire employees that are the right fit for your team. Simplify and improve the efficiency of your recruitment process.',
        url: '/',
        image: 'recruitment-landing-card-01.png',
        url_button_first: '/home/recruitment',
        url_button_next: '',
        button_first: 'LEARN MORE',
        button_next: '',
        type: 'left',
      },
    ],
  }, //Use filters to browse jobs
  {
    title: 'Premium account',
    subtitle: 'Just login and start career of your dream',
    titleFontSize: 50,
    descriptionFontSize: 20,
    button_footer_title: 'GET STARTED',
    url_button_footer_title: '/auth/register',
    descriptions: [
      {
        id: 2,
        title: 'Use filters to browse jobs',
        description:
          'You can also manually search for jobs that are posted on ' +
          PROJECT_NAME +
          ' by sorting them per industry, functional areas, company, skills, location, internships, job title, etc. Even if you are not looking for a new job currently this feature is great for gaining a perspective on the job market so you can plan the stepping stones of your career better. ',
        url: '/',
        image: 'browse-jobs-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
        imageWidth: '65',
      },
      {
        id: 3,
        title: 'Improve the success rate of your job applications',
        description:
          'This platform instructs you on how to effectively employ your job-specific skills, key qualities, and special achievements in your job application.<br/> <br/>Make a convincing case for why you are the most suitable candidate for a job by using our recommended resume format and writing the cover letter as per the guidelines we share with you.',
        url: '/',
        image: 'job-applications-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'left',
        imageWidth: '70',
      },
      {
        id: 4,
        title: 'Put your best foot forward',
        description:
          'An interview is a gateway to the career of your choice. We understand how important it is for you to get it right, hence, we help you prepare for it by sharing tips, dos & don’ts, and other important advice. <br/> <br/>Whether it is expected interview questions, current salary standards or industry trends, this is your go-to solution for all the valuable information you need to ace that job interview! ',
        url: '/',
        image: 'interview-career-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
        imageWidth: '80',
      },
    ],
  },
  {
    title: 'Premium account',
    subtitle: 'Just login and start career of your dream',
    titleFontSize: 44,
    descriptionFontSize: 20,
    button_footer_title: 'GET STARTED',
    url_button_footer_title: '/auth/login',
    descriptions: [
      {
        id: 2,
        title: 'Determine if an organization is a good match for you',
        description:
          PROJECT_NAME +
          ' is your one-stop source for all the essential details that you need to know about a company. It provides you access to all the information that the company shares on its profile page such as the about us section, company establishment date, number of employees, locations the company has offices in, management hierarchy structure, current job openings, videos, and other posts. <br/><br/>In addition to that, you get the lowdown on what it’s like to work at a particular company through the reviews that present and past employees have shared: employee experiences, leadership team ratings, workplace challenges, average salary as per job title, benefits offered in the compensation package, work environment, etc.',
        url: '/',
        image: 'community-determined-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
        imageWidth: '70',
      },
      {
        id: 3,
        title: 'Keep up with industry news and trends ',
        description:
          'Access reports, analysis, and market forecast posts published on the platform. Develop an understanding of the key characteristics that influence your industry as well as other sectors that interest you. <br/><br/>Stay informed so you can make the most of the opportunities and prepare well for the challenges that crop up in your chosen trade.',
        url: '/',
        image: 'community-trends-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'left',
        imageWidth: '80',
      },
    ],
  },
  {
    title: 'Get started right now',
    subtitle: 'Just login and start career of your dream',
    titleFontSize: 44,
    descriptionFontSize: 20,
    button_footer_title: 'GET STARTED',
    url_button_footer_title: '/auth/register',
    descriptions: [
      {
        id: 2,
        title: 'Career growth and progression assistance',
        description:
          PROJECT_NAME +
          ' offers tools, features, and posts by domain experts that help you plan each step of your professional journey. From getting hired to career development we cover it all on this platform:',
        url: '/',
        image: 'career-growth-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
      },
    ],
  },
  {
    title: 'Get started right now',
    subtitle: 'Just login and start career of your dream',
    titleFontSize: 44,
    descriptionFontSize: 20,
    button_footer_title: 'GET STARTED',
    url_button_footer_title: '/auth/register',
    descriptions: [
      {
        id: 2,
        title: PROJECT_NAME,
        description:
          'On ' +
          PROJECT_NAME +
          ', you improve your prospects of finding suitable team members for your organization as this solution provides you direct access to a large number of skilled and accomplished job seekers. This platform allows you to customize the sequence of your recruitment process so you can achieve optimal results. ',
        url: '/',
        image: 'recruitment-improve-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
      },
    ],
  },
  {
    title: 'Try premium first month for free',
    subtitle: 'Just login and start career of your dream',
    titleFontSize: 44,
    descriptionFontSize: 20,
    button_footer_title: 'GET STARTED',
    url_button_footer_title: '/auth/register',
    descriptions: [
      {
        id: 2,
        title: 'Premium company profile',
        description:
          'Improve the perception of your employer brand. Use this feature to build your reputation as an employer of choice. Add messaging, share positive reviews by existing and former employees, highlight employee success stories, and make everyone aware of the progressive workplace policies at your organization.',
        subtitle: 'Be active',
        url: '/',
        image: 'company-profile-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'left',
      },
      {
        id: 3,
        title: 'Find & hire high-caliber talent',
        description:
          "Boost your talent acquisition function by reaching a larger pool of suitable professionals. With the premium membership, you can screen applications more effectively by accessing each candidate's employment history, skills and qualifications, achievements, preferred location, and all the other relevant information they have shared on their profile page.",
        subtitle: 'Be more informed',
        url: '/',
        image: 'find-talents-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
      },
      {
        id: 4,
        title: 'Optimize your online presence',
        description:
          'Participate in conversations that matter whether it is a trending topic from your industry or a subject matter that is of significance to your company’s core values and beliefs. Respond to reviews, feedback, and comments on your company page. Post tips and news updates. With this excellent feature, you can effectively leverage the platform for promoting your brand.',
        subtitle: 'Be communicative',
        url: '/',
        image: 'online-presence-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'left',
      },
      {
        id: 5,
        title: 'Gain insights',
        description:
          'Strengthen your recruitment, branding, advertising, and content marketing activities on the platform with our reporting layer, business intelligence, filtering, and OOTB (out-of-the-box) reports. These features help you develop a perspective on how to best target your recruitment efforts and communicate your company’s unique EVP (employee value proposition).',
        subtitle: 'Be more productive',
        url: '/',
        image: 'gain-insights-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'right',
      },
      {
        id: 6,
        title: 'Direct messaging',
        description:
          'Send direct messages to any member of the Mekhnat community whether they are on your contacts list or not. This feature allows you to have a one-on-one dialogue with job seekers and stakeholders without first having to establish a relationship with them on the platform.',
        subtitle: 'Be effective',
        url: '/',
        image: 'direct-messaging-landing-card.png',
        url_button_first: '',
        url_button_next: '',
        button_first: '',
        button_next: '',
        type: 'left',
      },
    ],
  },
]

const getJobs = () => {
  return new Promise(resolve => resolve(mockJobs))
}

const getLandingPageFirst = () => {
  return new Promise(resolve => resolve(mockLandingPage))
}

const getJobsData = () => {
  return API.get(`${url}/posting`)
}

const setSelectedJob = job => {
  return API.get(`${url}/posting/${job.id}`)
}

export default {
  getJobs,
  getLandingPageFirst,
  getJobsData,
  setSelectedJob,
}
