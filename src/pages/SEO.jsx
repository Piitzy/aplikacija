import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChartLine, FaLink, FaCode, FaFileAlt, FaSearchPlus } from "react-icons/fa";
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

const SeoCard = styled(motion.div)`
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${(props) => props.accentColor || "var(--primary)"};
    }
`;

const SeoIconWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    background-color: ${(props) => props.bgColor || "rgba(79, 70, 229, 0.1)"};
    color: ${(props) => props.iconColor || "var(--primary)"};
`;

const SeoCardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text);
`;

const SeoCardDescription = styled.p`
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const SeoCardList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;

    li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.75rem;
        color: var(--text);

        svg {
            color: ${(props) => props.accentColor || "var(--primary)"};
            min-width: 20px;
            margin-right: 0.75rem;
            margin-top: 4px;
        }
    }
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const StatCard = styled(motion.div)`
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: var(--shadow);
    text-align: center;
    border: 1px solid var(--border);

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }
`;

const StatValue = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.color || "var(--primary)"};
    margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
    font-size: 0.9rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const ProcessTimeline = styled.div`
    margin: 3rem 0;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 40px;
        left: 45px;
        width: 2px;
        height: calc(100% - 80px);
        background-color: var(--border);

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

const TimelineItem = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TimelineNumber = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: ${(props) => props.bgColor || "rgba(79, 70, 229, 0.1)"};
    color: ${(props) => props.color || "var(--primary)"};
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    z-index: 2;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        margin-right: 0;
    }
`;

const TimelineContent = styled.div`
    flex: 1;

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--text);
    }

    p {
        color: var(--text-light);
    }
`;

const SEO = () => {
    const seoServices = [
        {
            id: 1,
            title: "SEO Audit & Strategy",
            description: "Comprehensive analysis of your website's SEO performance with actionable recommendations.",
            icon: <FaSearch />,
            bgColor: "rgba(79, 70, 229, 0.1)",
            iconColor: "var(--primary)",
            accentColor: "var(--primary)",
            features: [
                "Technical SEO audit",
                "Competitor analysis",
                "Keyword research and strategy",
                "Content gap analysis",
                "Custom SEO roadmap",
            ],
        },
        {
            id: 2,
            title: "On-Page SEO Optimization",
            description: "Optimize your website's on-page elements to improve search engine visibility and ranking.",
            icon: <FaCode />,
            bgColor: "rgba(14, 165, 233, 0.1)",
            iconColor: "var(--secondary)",
            accentColor: "var(--secondary)",
            features: [
                "Meta title and description optimization",
                "Heading structure improvement",
                "Image optimization (alt text, size)",
                "Content structure and readability",
                "Internal linking strategy",
            ],
        },
        {
            id: 3,
            title: "Technical SEO",
            description: "Fix technical issues that are preventing your site from achieving maximum search visibility.",
            icon: <FaSearchPlus />,
            bgColor: "rgba(16, 185, 129, 0.1)",
            iconColor: "var(--success)",
            accentColor: "var(--success)",
            features: [
                "Site speed optimization",
                "Mobile-friendly improvements",
                "Structured data implementation",
                "Indexation issues resolution",
                "XML sitemap optimization",
            ],
        },
        {
            id: 4,
            title: "Content SEO",
            description: "Develop SEO-optimized content that ranks well and engages your target audience.",
            icon: <FaFileAlt />,
            bgColor: "rgba(245, 158, 11, 0.1)",
            iconColor: "var(--warning)",
            accentColor: "var(--warning)",
            features: [
                "Content strategy development",
                "SEO content creation",
                "Existing content optimization",
                "Topic cluster creation",
                "Content performance tracking",
            ],
        },
        {
            id: 5,
            title: "Link Building",
            description: "Build high-quality backlinks to increase your site's authority and improve rankings.",
            icon: <FaLink />,
            bgColor: "rgba(239, 68, 68, 0.1)",
            iconColor: "var(--danger)",
            accentColor: "var(--danger)",
            features: [
                "Competitor backlink analysis",
                "Link building strategy",
                "Outreach campaigns",
                "Guest posting opportunities",
                "Link quality monitoring",
            ],
        },
        {
            id: 6,
            title: "SEO Reporting & Analytics",
            description: "Track SEO performance with comprehensive reports and data-driven insights.",
            icon: <FaChartLine />,
            bgColor: "rgba(139, 92, 246, 0.1)",
            iconColor: "#8b5cf6",
            accentColor: "#8b5cf6",
            features: [
                "Custom SEO dashboards",
                "Keyword ranking tracking",
                "Traffic and conversion analysis",
                "Competitor performance tracking",
                "Monthly SEO progress reports",
            ],
        },
    ];

    const processSteps = [
        {
            number: "01",
            title: "Discovery & Audit",
            description:
                "We conduct a comprehensive SEO audit of your website, analyze your competitors, and identify opportunities for improvement.",
            bgColor: "rgba(79, 70, 229, 0.1)",
            color: "var(--primary)",
        },
        {
            number: "02",
            title: "Strategy Development",
            description:
                "Based on the audit findings, we develop a tailored SEO strategy with clear goals, timelines, and key performance indicators.",
            bgColor: "rgba(14, 165, 233, 0.1)",
            color: "var(--secondary)",
        },
        {
            number: "03",
            title: "On-Page Optimization",
            description:
                "We optimize your website's content, meta tags, internal linking, and other on-page elements to improve search visibility.",
            bgColor: "rgba(16, 185, 129, 0.1)",
            color: "var(--success)",
        },
        {
            number: "04",
            title: "Technical Implementation",
            description:
                "Our team addresses technical issues, improves site speed, implements structured data, and ensures your site is optimized for search engines.",
            bgColor: "rgba(245, 158, 11, 0.1)",
            color: "var(--warning)",
        },
        {
            number: "05",
            title: "Content & Link Building",
            description:
                "We create and optimize content that targets your keywords and build high-quality backlinks to boost your site's authority.",
            bgColor: "rgba(239, 68, 68, 0.1)",
            color: "var(--danger)",
        },
        {
            number: "06",
            title: "Monitoring & Reporting",
            description:
                "We continuously monitor your SEO performance, make adjustments as needed, and provide regular reports on your progress.",
            bgColor: "rgba(139, 92, 246, 0.1)",
            color: "#8b5cf6",
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
                    <PageTitle>SEO Services</PageTitle>
                    <SubTitle>Drive organic traffic and improve search rankings</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>Free SEO Audit</Button>
                    <PrimaryButton>Get Started</PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <StatsGrid as={motion.div} variants={itemVariants}>
                <StatCard variants={itemVariants} whileHover={{ y: -5 }}>
                    <StatValue color="var(--primary)">92%</StatValue>
                    <StatLabel>Traffic Increase</StatLabel>
                </StatCard>
                <StatCard variants={itemVariants} whileHover={{ y: -5 }}>
                    <StatValue color="var(--success)">Top 10</StatValue>
                    <StatLabel>Keyword Rankings</StatLabel>
                </StatCard>
                <StatCard variants={itemVariants} whileHover={{ y: -5 }}>
                    <StatValue color="var(--warning)">3x</StatValue>
                    <StatLabel>Conversion Rate</StatLabel>
                </StatCard>
            </StatsGrid>

            <Card as={motion.div} variants={itemVariants} style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "2rem", fontSize: "1.5rem", fontWeight: "600" }}>Our SEO Process</h2>
                <ProcessTimeline>
                    {processSteps.map((step, index) => (
                        <TimelineItem key={index} variants={itemVariants}>
                            <TimelineNumber bgColor={step.bgColor} color={step.color}>
                                {step.number}
                            </TimelineNumber>
                            <TimelineContent>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </ProcessTimeline>
            </Card>

            <h2 style={{ marginBottom: "2rem", fontSize: "1.5rem", fontWeight: "600" }}>Our SEO Services</h2>
            <Grid columns={3} as={motion.div} variants={itemVariants}>
                {seoServices.map((service) => (
                    <SeoCard key={service.id} accentColor={service.accentColor} variants={itemVariants} whileHover={{ y: -8 }}>
                        <SeoIconWrapper bgColor={service.bgColor} iconColor={service.iconColor}>
                            {service.icon}
                        </SeoIconWrapper>
                        <SeoCardTitle>{service.title}</SeoCardTitle>
                        <SeoCardDescription>{service.description}</SeoCardDescription>
                        <SeoCardList accentColor={service.accentColor}>
                            {service.features.map((feature, index) => (
                                <li key={index}>
                                    <FaCheck size={12} /> <span>{feature}</span>
                                </li>
                            ))}
                        </SeoCardList>
                        <Button style={{ marginTop: "auto" }}>Learn More</Button>
                    </SeoCard>
                ))}
            </Grid>
        </motion.div>
    );
};

const FaCheck = ({ size = 16, ...props }) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height={size}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>
    );
};

export default SEO;
