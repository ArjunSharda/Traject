import { addDays } from 'date-fns';

export interface Hackathon {
    id: string;
    title: string;
    organizer: string;
    location: string;
    description: string;
    link: string;
    tags: string[];
    date: Date;
    addedDate: string;
    deadline: string;
}

const today = new Date();

export const hackathons: Hackathon[] = [
    {
        id: '1',
        title: 'brainrot jia.seed hackathon',
        organizer: 'Audrey Chen',
        location: 'Online',
        description: 'make a project and i will see if it is epic or not\n',
        link: 'https://brainrot-jia-seed-hackathon.devpost.com/',
        tags: ['beginner', 'opensource', 'brainrot'],
        date: addDays(today, 30),
        addedDate: '2024-11-30',
        deadline: '2024-12-01',
    },
    {
        id: '2',
        title: 'Green Tech Challenge',
        organizer: 'EcoSolutions',
        location: 'Virtual',
        description: 'Develop innovative solutions for environmental sustainability.',
        link: 'https://example.com/greentech-challenge',
        tags: ['sustainability', 'cleantech', 'AI'],
        date: addDays(today, 45),
        addedDate: '2024-05-25',
        deadline: '2024-07-10',
    },
    {
        id: '3',
        title: 'HealthTech Innovators',
        organizer: 'MedTech Association',
        location: 'Boston, MA',
        description: 'Create cutting-edge solutions for healthcare challenges.',
        link: 'https://example.com/healthtech-innovators',
        tags: ['healthcare', 'AI', 'wearables'],
        date: addDays(today, 60),
        addedDate: '2024-05-28',
        deadline: '2024-07-25',
    },
    // Add more hackathons as needed
];
