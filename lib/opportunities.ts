import { addDays } from 'date-fns';

export interface Opportunity {
    id: string;
    title: string;
    type: 'full-time' | 'part-time' | 'internship';
    company: string;
    location: string;
    description: string;
    link: string;
    tags: string[];
    date: Date;
    addedDate: string;
    deadline: string;
}

const today = new Date();

export const opportunities: Opportunity[] = [
    {
        id: '1',
        title: 'Software Engineer',
        type: 'full-time',
        company: 'TechCorp',
        location: 'San Francisco, CA',
        description: 'Join our team to build cutting-edge web applications.',
        link: 'https://example.com/techcorp-job',
        tags: ['javascript', 'react', 'node.js'],
        date: addDays(today, 15),
        addedDate: '2024-05-23',
        deadline: '2024-06-30',
    },
    {
        id: '2',
        title: 'UX Designer',
        type: 'part-time',
        company: 'DesignStudio',
        location: 'Remote',
        description: 'Help create beautiful and intuitive user interfaces.',
        link: 'https://example.com/designstudio-job',
        tags: ['ui/ux', 'figma', 'user research'],
        date: addDays(today, 20),
        addedDate: '2024-05-25',
        deadline: '2024-07-15',
    },
    {
        id: '3',
        title: 'Data Science Intern',
        type: 'internship',
        company: 'DataCo',
        location: 'New York, NY',
        description: 'Learn and apply data science techniques in a real-world setting.',
        link: 'https://example.com/dataco-internship',
        tags: ['python', 'machine learning', 'data analysis'],
        date: addDays(today, 30),
        addedDate: '2024-10-28',
        deadline: '2024-07-31',
    },
    {
        id: '4',
        title: 'Frontend Developer',
        type: 'full-time',
        company: 'WebWizards',
        location: 'Austin, TX',
        description: 'Create responsive and performant web applications using modern frontend technologies.',
        link: 'https://example.com/webwizards-job',
        tags: ['react', 'typescript', 'css'],
        date: addDays(today, 10),
        addedDate: '2024-05-20',
        deadline: '2024-06-25',
    },
    {
        id: '5',
        title: 'DevOps Engineer',
        type: 'full-time',
        company: 'CloudMasters',
        location: 'Seattle, WA',
        description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
        link: 'https://example.com/cloudmasters-job',
        tags: ['aws', 'kubernetes', 'ci/cd'],
        date: addDays(today, 25),
        addedDate: '2024-05-28',
        deadline: '2024-07-10',
    },
    {
        id: '6',
        title: 'Mobile App Developer Intern',
        type: 'internship',
        company: 'AppGenius',
        location: 'Chicago, IL',
        description: 'Gain hands-on experience in mobile app development for iOS and Android platforms.',
        link: 'https://example.com/appgenius-internship',
        tags: ['swift', 'kotlin', 'mobile development'],
        date: addDays(today, 35),
        addedDate: '2024-06-01',
        deadline: '2024-07-20',
    },
];
