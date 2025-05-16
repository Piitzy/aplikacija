import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaHashtag, FaEnvelope, FaGlobe, FaChartLine, FaNetworkWired } from "react-icons/fa";
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
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ServiceHeader = styled.div`
    padding: 3rem 2rem;
    background: ${(props) => props.bg || "linear-gradient(135deg, var(--primary-light), var(--primary))"};
    color: white;
    text-align: center;
`;

const ServiceIcon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const ServiceBody = styled.div`
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ServiceDescription = styled.p`
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const ServiceFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    flex: 1;

    li {
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border);
        color: var(--text);
        display: flex;
        align-items: center;

        &:last-child {
            border-bottom: none;
        }

        &::before {
            content: "✓";
            color: var(--primary);
            margin-right: 0.75rem;
            font-weight: bold;
        }
    }
`;

const ServiceFooter = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: center;
`;

const PricingTag = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1.5rem;
    text-align: center;

    span {
        font-size: 0.9rem;
        font-weight: normal;
        color: var(--text-light);
    }
`;

const Testimonial = styled(motion.div)`
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;

    &::before {
        content: '"';
        position: absolute;
        top: 1rem;
        left: 2rem;
        font-size: 4rem;
        font-family: Georgia, serif;
        color: var(--border);
        line-height: 1;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TestimonialContent = styled.div`
    flex: 1;
    padding-left: 3rem;

    p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text);
        font-style: italic;
        margin-bottom: 1.5rem;
    }

    footer {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const ClientAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
`;

const ClientInfo = styled.div`
    flex: 1;

    h4 {
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text);
    }

    p {
        font-size: 0.9rem;
        color: var(--text-light);
        margin: 0;
        font-style: normal;
    }
`;

const TestimonialLogo = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    img {
        max-width: 100%;
        max-height: 60px;
    }

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;

const Marketing = () => {
    const marketingServices = [
        {
            id: 1,
            title: "Social Media Marketing",
            description: "Grow your brand presence and engagement through strategic social media marketing.",
            icon: <FaHashtag />,
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            features: [
                "Social media strategy development",
                "Content creation and curation",
                "Community management",
                "Paid social campaigns",
                "Performance analytics",
            ],
            price: "$1,500",
            period: "monthly",
        },
        {
            id: 2,
            title: "Email Marketing",
            description: "Connect with your audience through personalized email campaigns that convert.",
            icon: <FaEnvelope />,
            background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
            features: [
                "Email strategy development",
                "Campaign design and copywriting",
                "Audience segmentation",
                "Automated email sequences",
                "A/B testing and optimization",
            ],
            price: "$1,200",
            period: "monthly",
        },
        {
            id: 3,
            title: "Content Marketing",
            description: "Engage your audience with valuable content that builds trust and drives conversions.",
            icon: <FaGlobe />,
            background: "linear-gradient(135deg, #10b981, #059669)",
            features: [
                "Content strategy development",
                "Blog and article writing",
                "Whitepaper and ebook creation",
                "Infographics and visual content",
                "Content distribution",
            ],
            price: "$2,000",
            period: "monthly",
        },
        {
            id: 4,
            title: "Marketing Analytics",
            description: "Make data-driven decisions with comprehensive marketing analytics and reporting.",
            icon: <FaChartLine />,
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            features: [
                "Custom analytics dashboard",
                "Performance tracking",
                "Conversion optimization",
                "Customer journey analysis",
                "ROI reporting",
            ],
            price: "$1,800",
            period: "monthly",
        },
        {
            id: 5,
            title: "Digital Advertising",
            description: "Reach your target audience with strategic paid advertising campaigns across platforms.",
            icon: <FaBullhorn />,
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
            features: [
                "PPC campaign management",
                "Display advertising",
                "Retargeting campaigns",
                "Ad creative development",
                "Budget optimization",
            ],
            price: "$2,500",
            period: "monthly",
        },
        {
            id: 6,
            title: "Influencer Marketing",
            description: "Leverage the power of influencers to expand reach and build brand credibility.",
            icon: <FaNetworkWired />,
            background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
            features: [
                "Influencer identification and outreach",
                "Campaign strategy development",
                "Content collaboration",
                "Performance tracking",
                "Relationship management",
            ],
            price: "$3,000",
            period: "monthly",
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
                    <PageTitle>Marketing Services</PageTitle>
                    <SubTitle>Strategic marketing solutions to grow your business</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>View Case Studies</Button>
                    <PrimaryButton>Get a Proposal</PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <Testimonial as={motion.div} variants={itemVariants}>
                <TestimonialLogo>
                    <img src="https://via.placeholder.com/150x50?text=Client+Logo" alt="Client" />
                </TestimonialLogo>
                <TestimonialContent>
                    <p>
                        "The marketing team delivered exceptional results for our brand. Our social media engagement increased
                        by 120% and we saw a 45% growth in qualified leads within just three months of working together."
                    </p>
                    <footer>
                        <ClientAvatar>JD</ClientAvatar>
                        <ClientInfo>
                            <h4>Jane Doe</h4>
                            <p>Marketing Director at TechCorp</p>
                        </ClientInfo>
                    </footer>
                </TestimonialContent>
            </Testimonial>

            <Grid columns={3} as={motion.div} variants={itemVariants}>
                {marketingServices.map((service) => (
                    <ServiceCard key={service.id} variants={itemVariants} whileHover={{ y: -10 }}>
                        <ServiceHeader bg={service.background}>
                            <ServiceIcon>{service.icon}</ServiceIcon>
                            <ServiceTitle>{service.title}</ServiceTitle>
                        </ServiceHeader>
                        <ServiceBody>
                            <ServiceDescription>{service.description}</ServiceDescription>
                            <ServiceFeatures>
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ServiceFeatures>
                            <PricingTag>
                                {service.price} <span>/ {service.period}</span>
                            </PricingTag>
                            <ServiceFooter>
                                <Button>Learn More</Button>
                            </ServiceFooter>
                        </ServiceBody>
                    </ServiceCard>
                ))}
            </Grid>
        </motion.div>
    );
};

export default Marketing;
