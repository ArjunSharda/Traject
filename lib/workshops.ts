import { addDays } from 'date-fns';

export interface Workshop {
    id: string;
    title: string;
    instructor: string;
    location: string;
    description: string;
    link: string;
    tags: string[];
    date: Date;
    addedDate: string;
    deadline: string;
}

const today = new Date();

export const workshops: Workshop[] = [
    {
        id: '1',
        title: 'Advanced React Patterns',
        instructor: 'Jane Doe',
        location: 'Online',
        description: 'Learn advanced React patterns and best practices for building scalable applications.',
        link: 'https://example.com/react-workshop',
        tags: ['react', 'javascript', 'web development'],
        date: addDays(today, 45),
        addedDate: '2024-05-23',
        deadline: '2024-07-25',
    },
    {
        id: '2',
        title: 'Cybersecurity Fundamentals',
        instructor: 'John Smith',
        location: 'New York, NY',
        description: 'Gain essential knowledge and skills in cybersecurity to protect digital assets.',
        link: 'https://example.com/cybersecurity-workshop',
        tags: ['cybersecurity', 'network security', 'ethical hacking'],
        date: addDays(today, 60),
        addedDate: '2024-05-25',
        deadline: '2024-08-10',
    },
    {
        id: '3',
        title: 'Machine Learning with Python',
        instructor: 'Alice Johnson',
        location: 'San Francisco, CA',
        description: 'Dive into machine learning algorithms and their implementation using Python.',
        link: 'https://example.com/ml-workshop',
        tags: ['machine learning', 'python', 'data science'],
        date: addDays(today, 30),
        addedDate: '2024-05-28',
        deadline: '2024-07-15',
    },
    // Add more workshops as needed
];
