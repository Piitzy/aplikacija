import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobile, FaCloud, FaDesktop } from "react-icons/fa";
import {
    PageTitle,
    SubTitle,
    PageHeader,
    TitleArea,
    ButtonGroup,
    Button,
    PrimaryButton,
    Card,
    Grid,
} from "../styles/StyledComponents";
import styled from "styled-components";

const ServiceCard = styled(motion.div)`
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: var(--card-bg);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-lg);
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: ${(props) => props.accentColor || "var(--primary)"};
    }
`;

const ServiceIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: ${(props) => `${props.accentColor}20` || "rgba(79, 70, 229, 0.1)"};
    color: ${(props) => props.accentColor || "var(--primary)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
`;

const ServiceFeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    color: var(--text);
    font-size: 0.9rem;

    li {
        padding: 0.35rem 0;
        display: flex;
        align-items: center;

        &::before {
            content: "•";
            color: ${(props) => props.accentColor || "var(--primary)"};
            font-weight: bold;
            margin-right: 0.75rem;
        }
    }
`;

const ServiceFooter = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ServicePrice = styled.div`
    font-weight: 600;
    color: var(--text);
    font-size: 1.1rem;

    span {
        font-size: 0.85rem;
        font-weight: normal;
        color: var(--text-light);
    }
`;

const Development = () => {
    const services = [
        {
            id: 1,
            title: "Web Application Development",
            description:
                "Custom web application development tailored to your business needs with modern frontend and backend technologies.",
            icon: <FaCode />,
            accentColor: "var(--primary)",
            features: [
                "React/Vue/Angular frontend development",
                "Node.js/Python backend services",
                "RESTful API design and implementation",
                "Database design and optimization",
                "Authentication and authorization systems",
            ],
            priceFrom: 5000,
        },
        {
            id: 2,
            title: "Mobile App Development",
            description:
                "Cross-platform and native mobile applications for iOS and Android devices with seamless user experiences.",
            icon: <FaMobile />,
            accentColor: "var(--secondary)",
            features: [
                "React Native for cross-platform apps",
                "Native iOS (Swift) development",
                "Native Android (Kotlin) development",
                "Mobile UI/UX implementation",
                "App Store and Play Store deployment",
            ],
            priceFrom: 8000,
        },
        {
            id: 3,
            title: "API Development & Integration",
            description: "Develop and integrate APIs to connect your systems, services, and third-party platforms efficiently.",
            icon: <FaServer />,
            accentColor: "var(--success)",
            features: [
                "Custom API development",
                "Third-party API integration",
                "API documentation and testing",
                "GraphQL implementation",
                "API performance optimization",
            ],
            priceFrom: 4000,
        },
        {
            id: 4,
            title: "Database Design & Management",
            description: "Design, implementation, and management of efficient database systems for your business data needs.",
            icon: <FaDatabase />,
            accentColor: "var(--warning)",
            features: [
                "SQL database design (MySQL, PostgreSQL)",
                "NoSQL database implementation (MongoDB)",
                "Database migration and optimization",
                "Data modeling and architecture",
                "Performance tuning and scaling",
            ],
            priceFrom: 3500,
        },
        {
            id: 5,
            title: "Cloud Infrastructure",
            description: "Setup and management of scalable cloud infrastructure on AWS, Google Cloud, or Azure platforms.",
            icon: <FaCloud />,
            accentColor: "#0ea5e9",
            features: [
                "Cloud migration strategy",
                "Infrastructure as Code (IaC)",
                "Containerization (Docker, Kubernetes)",
                "CI/CD pipeline setup",
                "Monitoring and alerting systems",
            ],
            priceFrom: 6000,
        },
        {
            id: 6,
            title: "Desktop Application Development",
            description: "Cross-platform desktop applications with modern frameworks that work on Windows, macOS, and Linux.",
            icon: <FaDesktop />,
            accentColor: "#8b5cf6",
            features: [
                "Electron.js development",
                "Cross-platform compatibility",
                "System integration",
                "Native feature access",
                "Offline functionality",
            ],
            priceFrom: 7500,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <PageHeader variants={itemVariants}>
                <TitleArea>
                    <PageTitle>Development Services</PageTitle>
                    <SubTitle>Custom software development solutions for your business needs</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>Compare Services</Button>
                    <PrimaryButton>Request Custom Quote</PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <Grid columns={3} as={motion.div} variants={itemVariants}>
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        accentColor={service.accentColor}
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                    >
                        <ServiceIcon accentColor={service.accentColor}>{service.icon}</ServiceIcon>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>
                        <ServiceFeatureList accentColor={service.accentColor}>
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ServiceFeatureList>
                        <ServiceFooter>
                            <ServicePrice>
                                From ${service.priceFrom} <span>/ project</span>
                            </ServicePrice>
                            <Button>Learn More</Button>
                        </ServiceFooter>
                    </ServiceCard>
                ))}
            </Grid>
        </motion.div>
    );
};

export default Development;
