import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaPalette, FaDesktop, FaStore, FaImage, FaFont } from "react-icons/fa";
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

const DesignShowcase = styled.div`
    margin-bottom: 3rem;
`;

const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 250px);
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 200px);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 180px);
    }
`;

const GalleryItem = styled(motion.div)`
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    background-color: var(--card-bg);
    cursor: pointer;

    &:first-child {
        grid-column: span 2;
        grid-row: span 2;

        @media (max-width: 576px) {
            grid-column: span 1;
            grid-row: span 1;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }

    &:hover .overlay {
        opacity: 1;
    }
`;

const GalleryOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const GalleryTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const GalleryCategory = styled.div`
    font-size: 0.85rem;
    opacity: 0.8;
`;

const ServiceCard = styled(motion.div)`
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    background: var(--card-bg);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-10px);
    }
`;

const ServiceIconContainer = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.bgColor || "var(--primary-light)"};
    color: ${(props) => props.iconColor || "var(--primary)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const ServiceTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const ServiceList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;

    li {
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border);
        color: var(--text);
        display: flex;
        align-items: center;

        &:last-child {
            border-bottom: none;
        }

        &:before {
            content: "✓";
            color: ${(props) => props.accentColor || "var(--primary)"};
            margin-right: 1rem;
        }
    }
`;

const ServiceFooter = styled.div`
    margin-top: auto;
`;

const Design = () => {
    // Sample portfolio items
    const portfolioItems = [
        {
            id: 1,
            title: "E-commerce Redesign",
            category: "Web Design",
            image: "https://media.istockphoto.com/id/941302930/vector/online-shopping-smartphone-turned-into-internet-shop-concept-of-mobile-marketing-and-e.jpg?s=612x612&w=0&k=20&c=oEaIaAVRL6w7juxEIVwFPISjW_XkoYbLmK_VRWjNaEk=",
        },
        {
            id: 2,
            title: "Brand Identity",
            category: "Branding",
            image: "https://source.unsplash.com/random/600x400/?branding,logo",
        },
        {
            id: 3,
            title: "Product Packaging",
            category: "Packaging Design",
            image: "https://source.unsplash.com/random/600x400/?packaging,product",
        },
        {
            id: 4,
            title: "Mobile App Interface",
            category: "UI/UX Design",
            image: "https://source.unsplash.com/random/600x400/?mobile,app",
        },
        {
            id: 5,
            title: "Marketing Materials",
            category: "Print Design",
            image: "https://source.unsplash.com/random/600x400/?print,marketing",
        },
    ];

    // Design services
    const designServices = [
        {
            id: 1,
            title: "UI/UX Design",
            description: "Create intuitive, user-friendly interfaces that enhance user experience and engagement.",
            icon: <FaDesktop />,
            bgColor: "rgba(99, 102, 241, 0.1)",
            iconColor: "var(--primary)",
            features: [
                "User research and personas",
                "Wireframing and prototyping",
                "Information architecture",
                "Usability testing",
                "Responsive design",
            ],
        },
        {
            id: 2,
            title: "Brand Identity",
            description: "Develop a cohesive brand identity that communicates your values and connects with your audience.",
            icon: <FaPalette />,
            bgColor: "rgba(14, 165, 233, 0.1)",
            iconColor: "var(--secondary)",
            features: [
                "Logo design and variations",
                "Color palette selection",
                "Typography guidelines",
                "Brand voice and messaging",
                "Brand style guide",
            ],
        },
        {
            id: 3,
            title: "E-commerce Design",
            description: "Design high-converting e-commerce experiences that showcase products and drive sales.",
            icon: <FaStore />,
            bgColor: "rgba(16, 185, 129, 0.1)",
            iconColor: "var(--success)",
            features: [
                "Product page optimization",
                "Checkout flow design",
                "Mobile shopping experience",
                "Product photography guidelines",
                "Sales-focused UX patterns",
            ],
        },
        {
            id: 4,
            title: "Graphic Design",
            description: "Create visually stunning graphics for digital and print media that capture attention.",
            icon: <FaPaintBrush />,
            bgColor: "rgba(245, 158, 11, 0.1)",
            iconColor: "var(--warning)",
            features: [
                "Social media graphics",
                "Marketing materials",
                "Presentation design",
                "Advertising collateral",
                "Infographics and data visualization",
            ],
        },
        {
            id: 5,
            title: "Illustration & Iconography",
            description: "Custom illustrations and icon sets that enhance your visual communication and brand identity.",
            icon: <FaImage />,
            bgColor: "rgba(239, 68, 68, 0.1)",
            iconColor: "var(--danger)",
            features: [
                "Custom illustration style",
                "Icon set creation",
                "Character design",
                "Product illustrations",
                "Technical illustrations",
            ],
        },
        {
            id: 6,
            title: "Typography & Layout",
            description: "Expert typography and layout design for both digital and print applications.",
            icon: <FaFont />,
            bgColor: "rgba(139, 92, 246, 0.1)",
            iconColor: "#8b5cf6",
            features: [
                "Typography hierarchy",
                "Font selection and pairing",
                "Print layout design",
                "Editorial design",
                "Typographic animation",
            ],
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
                    <PageTitle>Design Services</PageTitle>
                    <SubTitle>Creative solutions for brands and digital products</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>View Portfolio</Button>
                    <PrimaryButton>Request Design Project</PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <DesignShowcase as={motion.div} variants={itemVariants}>
                <GalleryGrid>
                    {portfolioItems.map((item) => (
                        <GalleryItem key={item.id} as={motion.div} variants={itemVariants} whileHover={{ y: -5 }}>
                            <img src={item.image} alt={item.title} />
                            <GalleryOverlay className="overlay">
                                <GalleryTitle>{item.title}</GalleryTitle>
                                <GalleryCategory>{item.category}</GalleryCategory>
                            </GalleryOverlay>
                        </GalleryItem>
                    ))}
                </GalleryGrid>
            </DesignShowcase>

            <Grid columns={3} as={motion.div} variants={itemVariants}>
                {designServices.map((service) => (
                    <ServiceCard key={service.id} variants={itemVariants} whileHover={{ y: -8 }}>
                        <ServiceIconContainer bgColor={service.bgColor} iconColor={service.iconColor}>
                            {service.icon}
                        </ServiceIconContainer>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>
                        <ServiceList accentColor={service.iconColor}>
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ServiceList>
                        <ServiceFooter>
                            <Button>Learn More</Button>
                        </ServiceFooter>
                    </ServiceCard>
                ))}
            </Grid>
        </motion.div>
    );
};

export default Design;
