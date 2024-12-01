import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const careers = {
    "cybersecurity": {
        title: "Cybersecurity",
        description: "Protect digital assets and information systems from threats.",
        content: `
      Cybersecurity professionals are the guardians of the digital world. They protect organizations
      from cyber threats, ensure data privacy, and maintain the integrity of information systems.
      
      Key areas of focus:
      - Network Security
      - Application Security
      - Information Security
      - Cloud Security
      - Incident Response
      - Security Architecture
      
      Required skills:
      - Programming fundamentals
      - Network protocols
      - Security tools and frameworks
      - Risk assessment
      - Problem-solving
      - Continuous learning
    `
    },
    "computer-science": {
        title: "Computer Science",
        description: "Develop software and solve complex computational problems.",
        content: `
      Computer Science is the foundation of modern technology. It encompasses the study of computation,
      algorithms, data structures, and software development.
      
      Key areas of focus:
      - Software Engineering
      - Algorithms and Data Structures
      - Database Systems
      - Operating Systems
      - Artificial Intelligence
      - Computer Networks
      
      Required skills:
      - Programming languages
      - System design
      - Problem-solving
      - Mathematics
      - Logical thinking
      - Software development methodologies
    `
    },
    "robotics": {
        title: "Robotics",
        description: "Design, build, and program robots for various applications.",
        content: `
      Robotics combines mechanical engineering, electrical engineering, and computer science to create
      intelligent machines that can perform tasks autonomously or semi-autonomously.
      
      Key areas of focus:
      - Robot Design and Construction
      - Control Systems
      - Computer Vision
      - Artificial Intelligence
      - Human-Robot Interaction
      - Sensor Integration
      
      Required skills:
      - Programming (C++, Python, ROS)
      - Mechanical design
      - Electronics
      - Control theory
      - Machine learning
      - Problem-solving
    `
    },
    "data-science": {
        title: "Data Science",
        description: "Analyze and interpret complex data to inform decision-making.",
        content: `
      Data Scientists extract insights from large datasets using statistical analysis, machine learning,
      and data visualization techniques to solve complex business problems.
      
      Key areas of focus:
      - Statistical Analysis
      - Machine Learning
      - Data Visualization
      - Big Data Technologies
      - Predictive Modeling
      - Data Mining
      
      Required skills:
      - Programming (Python, R)
      - Statistical analysis
      - Machine learning algorithms
      - Data visualization tools
      - SQL and NoSQL databases
      - Communication and storytelling
    `
    },
    "artificial-intelligence": {
        title: "Artificial Intelligence",
        description: "Create intelligent machines that work and react like humans.",
        content: `
      Artificial Intelligence professionals develop systems that can perform tasks that typically
      require human intelligence, such as visual perception, speech recognition, and decision-making.
      
      Key areas of focus:
      - Machine Learning
      - Natural Language Processing
      - Computer Vision
      - Robotics
      - Expert Systems
      - Neural Networks
      
      Required skills:
      - Programming (Python, Java, C++)
      - Mathematics and statistics
      - Machine learning algorithms
      - Deep learning frameworks
      - Problem-solving
      - Research and experimentation
    `
    },
    "web-development": {
        title: "Web Development",
        description: "Build and maintain websites and web applications.",
        content: `
      Web Developers create and maintain websites and web applications, ensuring they are functional,
      user-friendly, and visually appealing across different devices and browsers.
      
      Key areas of focus:
      - Front-end Development
      - Back-end Development
      - Full-stack Development
      - Web Design
      - Web Security
      - Performance Optimization
      
      Required skills:
      - HTML, CSS, JavaScript
      - Front-end frameworks (React, Vue, Angular)
      - Back-end languages (Node.js, Python, Ruby)
      - Databases (SQL, NoSQL)
      - Version control (Git)
      - Responsive design
    `
    },
    "machine-learning": {
        title: "Machine Learning",
        description: "Develop algorithms and statistical models for computer systems to improve their performance.",
        content: `
      Machine Learning engineers create algorithms and models that allow computer systems to improve
      their performance on a specific task through experience and data.
      
      Key areas of focus:
      - Supervised Learning
      - Unsupervised Learning
      - Reinforcement Learning
      - Deep Learning
      - Natural Language Processing
      - Computer Vision
      
      Required skills:
      - Programming (Python, R)
      - Mathematics and statistics
      - Machine learning algorithms
      - Deep learning frameworks (TensorFlow, PyTorch)
      - Data preprocessing
      - Model evaluation and deployment
    `
    },
    "cloud-computing": {
        title: "Cloud Computing",
        description: "Design, implement, and manage cloud-based systems and services.",
        content: `
      Cloud Computing professionals design, implement, and manage scalable and flexible computing
      resources delivered over the internet, enabling businesses to reduce costs and increase efficiency.
      
      Key areas of focus:
      - Cloud Architecture
      - Cloud Security
      - Cloud Migration
      - Serverless Computing
      - Containerization
      - Cloud-native Development
      
      Required skills:
      - Cloud platforms (AWS, Azure, GCP)
      - Virtualization technologies
      - Networking
      - Security best practices
      - Scripting and automation
      - Containerization (Docker, Kubernetes)
    `
    },
    "devops": {
        title: "DevOps",
        description: "Combine software development and IT operations to shorten the development lifecycle.",
        content: `
      DevOps engineers bridge the gap between software development and IT operations, implementing
      practices that automate and integrate the processes between software development and IT teams.
      
      Key areas of focus:
      - Continuous Integration/Continuous Deployment (CI/CD)
      - Infrastructure as Code
      - Configuration Management
      - Monitoring and Logging
      - Containerization and Orchestration
      - Cloud Computing
      
      Required skills:
      - Programming and scripting
      - Version control systems
      - CI/CD tools (Jenkins, GitLab CI)
      - Configuration management tools (Ansible, Puppet)
      - Containerization (Docker, Kubernetes)
      - Cloud platforms (AWS, Azure, GCP)
    `
    }
}

export default function CareerPage({ params }: { params: { slug: string } }) {
    const career = careers[params.slug as keyof typeof careers]

    if (!career) {
        notFound()
    }

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-24">
                <article className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{career.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8">{career.description}</p>
                    <div className="prose dark:prose-invert max-w-none mb-12">
                        {career.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 text-foreground">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <Button asChild variant="outline">
                            <Link href="/careers">
                                Back to Careers
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/opportunities">
                                Explore Opportunities
                            </Link>
                        </Button>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
