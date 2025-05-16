import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCode,
    FaPaintBrush,
    FaBullhorn,
    FaSearch,
    FaWrench,
    FaSitemap,
    FaEnvelope,
    FaList,
    FaCheckCircle,
    FaChartPie,
    FaClipboardList,
    FaTimes,
    FaCheck,
    FaSave,
    FaInfoCircle,
    FaMoon,
    FaSun
} from "react-icons/fa";
import {
    Card,
    FlexContainer,
    CategoriesContainer,
    CategoryButton,
    ServicesContainer,
    SectionTitle,
    ServicesGrid,
    ServiceItem,
    ServiceCheckbox,
    ServiceLabel,
    SelectedServicesSection,
    EmptyState,
    EmptyStateText,
    SelectedServiceItem,
    ServiceHeader,
    ServiceTitle,
    RemoveServiceButton,
    ServiceParams,
    ParamGroup,
    ParamLabel,
    ParamInput,
    ServicePriceTag,
    PricingSection,
    SummaryCard,
    SummaryTable,
    TableHead,
    TableBody,
    TableFoot,
    GrandTotal,
    ActionsContainer,
    PrimaryButton,
    OutlineButton,
    Notification,
} from "../styles/StyledComponents";

// Theme configurations
const themes = {
    dark: {
        name: 'dark',
        background: '#1a2233',
        cardBackground: '#212d45',
        inputBackground: '#2a3751',
        headerBackground: '#2a3751',
        activeBackground: '#3a4f77',
        summaryBackground: '#3a4f77',
        border: '#34405c',
        divider: '#2c3548',
        primaryText: '#e9edf7',
        secondaryText: '#b8c2d8',
        mutedText: '#a4b1d7',
        accent: '#4a7dff',
        buttonBackground: '#4a7dff',
        removeBackground: '#bf4c4c',
        highlightBackground: '#2e4170'
    },
    light: {
        name: 'light',
        background: '#f5f7fa',
        cardBackground: '#ffffff',
        inputBackground: '#f0f2f5',
        headerBackground: '#ebeef5',
        activeBackground: '#e1e7f5',
        summaryBackground: '#e8ecf8',
        border: '#d1d9e6',
        divider: '#e5e9f0',
        primaryText: '#2c3e50',
        secondaryText: '#5c6b7a',
        mutedText: '#8896a6',
        accent: '#3275eb',
        buttonBackground: '#3275eb',
        removeBackground: '#e74c3c',
        highlightBackground: '#dce4f7'
    }
};

// Sample service data (in a real app, this would come from API)
const serviceCategories = {
    development: {
        name: "Development & Integration",
        icon: <FaCode />,
        services: [
            {
                id: "service1",
                name: "API Integration (ERP/CRM Systems)",
                minHours: 10,
                maxHours: 20,
                markup: 100,
                hourlyRate: 120,
            },
            { id: "service2", name: "API Creation", minHours: 8, maxHours: 16, markup: 90, hourlyRate: 110 },
            { id: "service3", name: "Custom App Development", minHours: 15, maxHours: 30, markup: 120, hourlyRate: 130 },
            { id: "service4", name: "Third-Party App Integration", minHours: 5, maxHours: 12, markup: 80, hourlyRate: 100 },
            { id: "service5", name: "Custom Feature Development", minHours: 10, maxHours: 25, markup: 110, hourlyRate: 115 },
            { id: "service6", name: "Custom Theme Development", minHours: 12, maxHours: 24, markup: 100, hourlyRate: 105 },
        ],
    },
    design: {
        name: "Design & UX",
        icon: <FaPaintBrush />,
        services: [
            { id: "design1", name: "Branding & Logo Design", minHours: 5, maxHours: 15, markup: 100, hourlyRate: 85 },
            { id: "design2", name: "Custom Theme Design (UI/UX)", minHours: 10, maxHours: 20, markup: 90, hourlyRate: 95 },
            { id: "design3", name: "Landing Page Design", minHours: 8, maxHours: 16, markup: 85, hourlyRate: 90 },
            { id: "design4", name: "Theme Customization", minHours: 3, maxHours: 8, markup: 70, hourlyRate: 80 },
            { id: "design5", name: "UX Audit & Improvements", minHours: 6, maxHours: 12, markup: 80, hourlyRate: 100 },
        ],
    },
    marketing: {
        name: "Marketing & Content",
        icon: <FaBullhorn />,
        services: [
            {
                id: "marketing1",
                name: "Content Marketing & Copywriting",
                minHours: 5,
                maxHours: 15,
                markup: 75,
                hourlyRate: 70,
            },
            { id: "marketing2", name: "Email Marketing Campaigns", minHours: 8, maxHours: 20, markup: 85, hourlyRate: 80 },
            { id: "marketing3", name: "PPC Campaign Management", minHours: 10, maxHours: 25, markup: 90, hourlyRate: 90 },
            { id: "marketing4", name: "Social Media Marketing", minHours: 6, maxHours: 18, markup: 80, hourlyRate: 65 },
        ],
    },
    seo: {
        name: "SEO & Optimization",
        icon: <FaSearch />,
        services: [
            { id: "seo1", name: "Backlink Building & Outreach", minHours: 8, maxHours: 20, markup: 85, hourlyRate: 75 },
            { id: "seo2", name: "Content SEO Optimization", minHours: 6, maxHours: 15, markup: 80, hourlyRate: 85 },
            { id: "seo3", name: "On-Page SEO Optimization", minHours: 5, maxHours: 12, markup: 75, hourlyRate: 80 },
            { id: "seo4", name: "SEO Audit & Strategy", minHours: 8, maxHours: 16, markup: 90, hourlyRate: 95 },
            { id: "seo5", name: "Technical SEO Enhancements", minHours: 10, maxHours: 24, markup: 95, hourlyRate: 105 },
        ],
    },
    setup: {
        name: "Setup & Support",
        icon: <FaWrench />,
        services: [
            { id: "setup1", name: "Project Onboarding & Launch", minHours: 12, maxHours: 25, markup: 100, hourlyRate: 120 },
            { id: "setup2", name: "Project Setup & Configuration", minHours: 8, maxHours: 18, markup: 85, hourlyRate: 95 },
            { id: "setup3", name: "Content & Catalog Management", minHours: 5, maxHours: 15, markup: 70, hourlyRate: 70 },
            { id: "setup4", name: "Ongoing Maintenance & Support", minHours: 3, maxHours: 10, markup: 75, hourlyRate: 85 },
        ],
    },
    website: {
        name: "Website Structure",
        icon: <FaSitemap />,
        services: [
            { id: "website1", name: "Website Structure Planning", minHours: 4, maxHours: 10, markup: 75, hourlyRate: 85 },
            { id: "website2", name: "Information Architecture", minHours: 6, maxHours: 15, markup: 80, hourlyRate: 90 },
            { id: "website3", name: "Navigation Design", minHours: 3, maxHours: 8, markup: 70, hourlyRate: 80 },
        ],
    },
    contact: {
        name: "Contact & Engagement",
        icon: <FaEnvelope />,
        services: [
            { id: "contact1", name: "Contact Form Implementation", minHours: 2, maxHours: 6, markup: 70, hourlyRate: 75 },
            { id: "contact2", name: "Live Chat Integration", minHours: 3, maxHours: 8, markup: 75, hourlyRate: 85 },
            { id: "contact3", name: "Customer Support System Setup", minHours: 5, maxHours: 12, markup: 80, hourlyRate: 90 },
        ],
    },
};

const ServiceSelection = () => {
    const [activeCategory, setActiveCategory] = useState("development");
    const [selectedServices, setSelectedServices] = useState({});
    const [showNotification, setShowNotification] = useState(false);
    const [projectId, setProjectId] = useState("");
    const [projectName, setProjectName] = useState("");
    const [clientName, setClientName] = useState("");
    const [showInvoice, setShowInvoice] = useState(false);
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
        setTheme(theme.name === 'dark' ? themes.light : themes.dark);
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleServiceToggle = (service) => {
        if (selectedServices[service.id]) {
            // Remove service if already selected
            const newSelectedServices = { ...selectedServices };
            delete newSelectedServices[service.id];
            setSelectedServices(newSelectedServices);
        } else {
            // Add service if not selected
            setSelectedServices({
                ...selectedServices,
                [service.id]: { 
                    ...service,
                    maturity: 0
                },
            });
        }
    };

    const handleServiceParamChange = (serviceId, param, value) => {
        setSelectedServices({
            ...selectedServices,
            [serviceId]: {
                ...selectedServices[serviceId],
                [param]: Number(value),
            },
        });
    };

    const handleRemoveService = (serviceId) => {
        const newSelectedServices = { ...selectedServices };
        delete newSelectedServices[serviceId];
        setSelectedServices(newSelectedServices);
    };

    const calculateServicePrice = (service) => {
        const markupMultiplier = 1 + service.markup / 100;
        const minPrice = service.minHours * service.hourlyRate * markupMultiplier;
        const maxPrice = service.maxHours * service.hourlyRate * markupMultiplier;
        return { min: minPrice, max: maxPrice };
    };

    const calculateTotals = () => {
        const services = Object.values(selectedServices);
        let totalMinHours = 0;
        let totalMaxHours = 0;
        let totalMinPrice = 0;
        let totalMaxPrice = 0;
        let totalMaturity = 0;

        services.forEach((service) => {
            const price = calculateServicePrice(service);
            totalMinHours += service.minHours;
            totalMaxHours += service.maxHours;
            totalMinPrice += price.min;
            totalMaxPrice += price.max;
            totalMaturity += service.maturity || 0;
        });

        return {
            minHours: totalMinHours,
            maxHours: totalMaxHours,
            minPrice: totalMinPrice.toFixed(2),
            maxPrice: totalMaxPrice.toFixed(2),
            maturity: services.length > 0 ? (totalMaturity / services.length).toFixed(1) : 0
        };
    };

    const totals = calculateTotals();

    const handleSaveProject = () => {
        if (!projectName.trim()) {
            alert("Please enter a project name");
            return;
        }

        const newProjectId =
            "PRJ-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(Math.random() * 1000)
                .toString()
                .padStart(3, "0");

        const projectData = {
            projectId: newProjectId,
            projectName,
            clientName,
            date: new Date().toISOString(),
            services: selectedServices,
            totals,
        };

        console.log("Project Data:", projectData);
        setProjectId(newProjectId);
        setShowNotification(true);
        setShowInvoice(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    const cardStyle = {
        background: theme.background,
        borderRadius: '12px',
        border: `1px solid ${theme.border}`,
        marginBottom: '1.5rem',
        padding: '1.5rem',
        color: theme.primaryText
    };

    const sectionTitleStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: theme.primaryText,
        fontWeight: 600,
        fontSize: '1.25rem',
        marginBottom: '1.25rem'
    };

    const dividerStyle = {
        height: '1px',
        background: theme.divider,
        margin: '1.5rem 0'
    };

    return (
        <>
            <div style={{ padding: '0.5rem', background: theme.background, minHeight: '100vh' }}>
                {/* Theme Toggle */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                    <motion.button 
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: theme.accent,
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                        }}
                    >
                        {theme.name === 'dark' ? <FaSun /> : <FaMoon />}
                    </motion.button>
                </div>

                {/* Project Details Section */}
                <div style={cardStyle}>
                    <div style={sectionTitleStyle}>
                        <FaInfoCircle /> Project Details
                    </div>
                    <div style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        marginBottom: '1rem',
                        padding: '1.5rem',
                        background: theme.cardBackground,
                        borderRadius: '8px',
                        border: `1px solid ${theme.border}`
                    }}>
                        <div style={{ flex: 1 }}>
                            <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.6rem', display: 'block' }}>Project Name *</ParamLabel>
                            <ParamInput
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                placeholder="Enter project name"
                                style={{ 
                                    width: '100%', 
                                    background: theme.inputBackground, 
                                    border: `1px solid ${theme.border}`, 
                                    color: theme.primaryText,
                                    padding: '10px 15px',
                                    borderRadius: '6px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.6rem', display: 'block' }}>Client Name</ParamLabel>
                            <ParamInput
                                type="text"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                placeholder="Enter client name"
                                style={{ 
                                    width: '100%', 
                                    background: theme.inputBackground, 
                                    border: `1px solid ${theme.border}`, 
                                    color: theme.primaryText,
                                    padding: '10px 15px',
                                    borderRadius: '6px',
                                    fontSize: '1rem'
                                }}
                            />
                        </div>
                    </div>

                    <div style={dividerStyle}></div>

                    <FlexContainer>
                        <CategoriesContainer style={{ background: theme.cardBackground, borderRadius: '8px', padding: '10px' }}>
                            {Object.entries(serviceCategories).map(([key, category]) => (
                                <CategoryButton key={key} active={activeCategory === key} onClick={() => handleCategoryChange(key)}
                                    style={{ 
                                        color: activeCategory === key ? theme.primaryText : theme.secondaryText,
                                        background: activeCategory === key ? theme.activeBackground : 'transparent',
                                        padding: '12px 16px',
                                        margin: '4px 0',
                                        borderRadius: '6px',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {category.icon} {category.name}
                                </CategoryButton>
                            ))}
                        </CategoriesContainer>

                        <ServicesContainer>
                            <div style={sectionTitleStyle}>
                                <FaList /> Select Services
                            </div>

                            <AnimatePresence mode="wait">
                                <ServicesGrid
                                    key={activeCategory}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{ gap: '12px' }}
                                >
                                    {serviceCategories[activeCategory].services.map((service) => (
                                        <ServiceItem
                                            key={service.id}
                                            variants={itemVariants}
                                            selected={!!selectedServices[service.id]}
                                            whileHover={{ y: -5 }}
                                            style={{ 
                                                background: selectedServices[service.id] ? theme.activeBackground : theme.cardBackground,
                                                color: theme.primaryText,
                                                border: `1px solid ${theme.border}`,
                                                borderRadius: '8px',
                                                padding: '12px 16px'
                                            }}
                                        >
                                            <ServiceCheckbox
                                                type="checkbox"
                                                id={service.id}
                                                checked={!!selectedServices[service.id]}
                                                onChange={() => handleServiceToggle(service)}
                                            />
                                            <ServiceLabel htmlFor={service.id} style={{ color: theme.primaryText }}>{service.name}</ServiceLabel>
                                        </ServiceItem>
                                    ))}
                                </ServicesGrid>
                            </AnimatePresence>
                        </ServicesContainer>
                    </FlexContainer>
                </div>

                {/* Selected Services Section */}
                <div style={cardStyle}>
                    <div style={sectionTitleStyle}>
                        <FaCheckCircle /> Selected Services
                    </div>

                    {Object.keys(selectedServices).length === 0 ? (
                        <EmptyState style={{ background: theme.cardBackground, color: theme.secondaryText, padding: '3rem' }}>
                            <FaClipboardList style={{ fontSize: '2rem', marginBottom: '1rem' }}/>
                            <EmptyStateText style={{ fontSize: '1.1rem' }}>No services selected yet</EmptyStateText>
                            <EmptyStateText style={{ opacity: 0.7 }}>Check the services you need from the categories above</EmptyStateText>
                        </EmptyState>
                    ) : (
                        <AnimatePresence>
                            {Object.values(selectedServices).map((service) => {
                                const price = calculateServicePrice(service);

                                return (
                                    <SelectedServiceItem
                                        key={service.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{ 
                                            background: theme.cardBackground, 
                                            border: `1px solid ${theme.border}`,
                                            borderRadius: '10px',
                                            marginBottom: '1rem',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <ServiceHeader style={{ 
                                            padding: '12px 16px',
                                            background: theme.headerBackground,
                                            borderBottom: `1px solid ${theme.border}`
                                        }}>
                                            <ServiceTitle style={{ color: theme.primaryText, fontWeight: 600 }}>
                                                <FaInfoCircle /> {service.name}
                                            </ServiceTitle>
                                        </ServiceHeader>

                                        <div style={{ padding: '1rem' }}>
                                            <ServiceParams style={{ 
                                                display: 'grid', 
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                                gap: '1rem' 
                                            }}>
                                                <ParamGroup>
                                                    <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.5rem', display: 'block' }}>Min Hours</ParamLabel>
                                                    <ParamInput
                                                        type="number"
                                                        value={service.minHours}
                                                        onChange={(e) =>
                                                            handleServiceParamChange(service.id, "minHours", e.target.value)
                                                        }
                                                        style={{ 
                                                            background: theme.inputBackground, 
                                                            border: `1px solid ${theme.border}`, 
                                                            color: theme.primaryText,
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '6px'
                                                        }}
                                                    />
                                                </ParamGroup>
                                                <ParamGroup>
                                                    <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.5rem', display: 'block' }}>Max Hours</ParamLabel>
                                                    <ParamInput
                                                        type="number"
                                                        value={service.maxHours}
                                                        onChange={(e) =>
                                                            handleServiceParamChange(service.id, "maxHours", e.target.value)
                                                        }
                                                        style={{ 
                                                            background: theme.inputBackground, 
                                                            border: `1px solid ${theme.border}`, 
                                                            color: theme.primaryText,
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '6px'
                                                        }}
                                                    />
                                                </ParamGroup>
                                                <ParamGroup>
                                                    <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.5rem', display: 'block' }}>Maturity (%)</ParamLabel>
                                                    <ParamInput
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={service.maturity || 0}
                                                        onChange={(e) =>
                                                            handleServiceParamChange(service.id, "maturity", e.target.value)
                                                        }
                                                        style={{ 
                                                            background: theme.inputBackground, 
                                                            border: `1px solid ${theme.border}`, 
                                                            color: theme.primaryText,
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '6px'
                                                        }}
                                                    />
                                                </ParamGroup>
                                                <ParamGroup>
                                                    <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.5rem', display: 'block' }}>Markup (%)</ParamLabel>
                                                    <ParamInput
                                                        type="number"
                                                        value={service.markup}
                                                        onChange={(e) =>
                                                            handleServiceParamChange(service.id, "markup", e.target.value)
                                                        }
                                                        style={{ 
                                                            background: theme.inputBackground, 
                                                            border: `1px solid ${theme.border}`, 
                                                            color: theme.primaryText,
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '6px'
                                                        }}
                                                    />
                                                </ParamGroup>
                                                <ParamGroup>
                                                    <ParamLabel style={{ color: theme.secondaryText, marginBottom: '0.5rem', display: 'block' }}>Rate/Hour ($)</ParamLabel>
                                                    <ParamInput
                                                        type="number"
                                                        value={service.hourlyRate}
                                                        onChange={(e) =>
                                                            handleServiceParamChange(service.id, "hourlyRate", e.target.value)
                                                        }
                                                        style={{ 
                                                            background: theme.inputBackground, 
                                                            border: `1px solid ${theme.border}`, 
                                                            color: theme.primaryText,
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '6px'
                                                        }}
                                                    />
                                                </ParamGroup>
                                            </ServiceParams>

                                            <div style={{ 
                                                display: 'flex', 
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginTop: '1rem',
                                                paddingTop: '1rem',
                                                borderTop: `1px solid ${theme.border}`
                                            }}>
                                                <div style={{ 
                                                    color: theme.primaryText,
                                                    fontWeight: 600
                                                }}>
                                                    Price: {price.min.toFixed(2)} - {price.max.toFixed(2)} $
                                                </div>

                                                <RemoveServiceButton
                                                    onClick={() => handleRemoveService(service.id)}
                                                    whileHover={{ rotate: 90 }}
                                                    style={{ 
                                                        background: theme.removeBackground, 
                                                        color: '#ffffff',
                                                        width: '36px',
                                                        height: '36px',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                        border: 'none'
                                                    }}
                                                >
                                                    <FaTimes />
                                                </RemoveServiceButton>
                                            </div>
                                        </div>
                                    </SelectedServiceItem>
                                );
                            })}
                        </AnimatePresence>
                    )}
                </div>

                {/* Project Summary Section */}
                <div style={cardStyle}>
                    <div style={sectionTitleStyle}>
                        <FaChartPie /> Project Summary
                    </div>

                    <SummaryCard style={{ background: theme.cardBackground, border: `1px solid ${theme.border}`, color: theme.primaryText, borderRadius: '8px', padding: '1rem' }}>
                        {Object.keys(selectedServices).length > 0 ? (
                            <>
                                <SummaryTable style={{ color: theme.primaryText, width: '100%', borderCollapse: 'collapse' }}>
                                    <TableHead>
                                        <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                                            <th style={{ textAlign: 'left', padding: '12px', backgroundColor: theme.headerBackground }}>Service</th>
                                            <th style={{ textAlign: 'center', padding: '12px', backgroundColor: theme.headerBackground }}>Min Hours</th>
                                            <th style={{ textAlign: 'center', padding: '12px', backgroundColor: theme.headerBackground }}>Max Hours</th>
                                            <th style={{ textAlign: 'center', padding: '12px', backgroundColor: theme.headerBackground }}>Maturity</th>
                                            <th style={{ textAlign: 'center', padding: '12px', backgroundColor: theme.headerBackground }}>Markup (%)</th>
                                            <th style={{ textAlign: 'center', padding: '12px', backgroundColor: theme.headerBackground }}>Rate/Hour</th>
                                            <th style={{ textAlign: 'right', padding: '12px', backgroundColor: theme.headerBackground }}>Min Price</th>
                                            <th style={{ textAlign: 'right', padding: '12px', backgroundColor: theme.headerBackground }}>Max Price</th>
                                        </tr>
                                    </TableHead>

                                    <TableBody>
                                        {Object.values(selectedServices).map((service, index) => {
                                            const price = calculateServicePrice(service);
                                            return (
                                                <tr key={service.id} style={{ 
                                                    backgroundColor: index % 2 === 0 ? theme.headerBackground : theme.cardBackground,
                                                    borderBottom: `1px solid ${theme.border}`
                                                }}>
                                                    <td style={{ padding: '10px 12px' }}>{service.name}</td>
                                                    <td style={{ textAlign: 'center', padding: '10px 12px' }}>{service.minHours}</td>
                                                    <td style={{ textAlign: 'center', padding: '10px 12px' }}>{service.maxHours}</td>
                                                    <td style={{ textAlign: 'center', padding: '10px 12px' }}>{service.maturity || 0}%</td>
                                                    <td style={{ textAlign: 'center', padding: '10px 12px' }}>{service.markup}%</td>
                                                    <td style={{ textAlign: 'center', padding: '10px 12px' }}>{service.hourlyRate} $</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 12px' }}>{price.min.toFixed(2)} $</td>
                                                    <td style={{ textAlign: 'right', padding: '10px 12px' }}>{price.max.toFixed(2)} $</td>
                                                </tr>
                                            );
                                        })}
                                    </TableBody>

                                    <TableFoot>
                                        <tr style={{ backgroundColor: theme.summaryBackground }}>
                                            <td style={{ padding: '12px', fontWeight: 'bold' }}>TOTAL</td>
                                            <td style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>{totals.minHours}</td>
                                            <td style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>{totals.maxHours}</td>
                                            <td style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>{totals.maturity}%</td>
                                            <td style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>-</td>
                                            <td style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>-</td>
                                            <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>{totals.minPrice} $</td>
                                            <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>{totals.maxPrice} $</td>
                                        </tr>
                                    </TableFoot>
                                </SummaryTable>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'flex-end', 
                                    marginTop: '1rem',
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    color: theme.primaryText
                                }}>
                                    Grand Total: {totals.minPrice} - {totals.maxPrice} $
                                </div>
                            </>
                        ) : (
                            <EmptyState style={{ background: theme.cardBackground, color: theme.secondaryText, padding: '3rem' }}>
                                <FaChartPie style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                                <EmptyStateText style={{ fontSize: '1.1rem' }}>No services selected yet</EmptyStateText>
                                <EmptyStateText style={{ opacity: 0.7 }}>Select services to see the project summary</EmptyStateText>
                            </EmptyState>
                        )}
                    </SummaryCard>
                </div>

                {/* Invoice Section */}
                {showInvoice && (
                    <div style={cardStyle}>
                        <div style={sectionTitleStyle}>
                            <FaClipboardList /> Invoice
                        </div>
                        
                        <div style={{ background: theme.cardBackground, padding: '2rem', borderRadius: '8px', border: `1px solid ${theme.border}` }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <div>
                                    <h2 style={{ color: theme.primaryText, marginBottom: '0.5rem' }}>INVOICE</h2>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>Invoice #: {projectId}</p>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>Date: {new Date().toLocaleDateString()}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <h3 style={{ color: theme.primaryText, marginBottom: '0.5rem' }}>Power Commerce</h3>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>123 Business Street</p>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>Business City, BC 12345</p>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>contact@powercommerce.com</p>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <div>
                                    <h4 style={{ color: theme.primaryText, marginBottom: '0.5rem' }}>Bill To:</h4>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>{clientName || 'Client Name'}</p>
                                    <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>Project: {projectName}</p>
                                </div>
                                <div style={{ 
                                    background: theme.highlightBackground, 
                                    padding: '1rem', 
                                    borderRadius: '8px',
                                    minWidth: '200px',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ color: theme.primaryText, marginBottom: '0.5rem' }}>Total Due</h3>
                                    <p style={{ color: theme.primaryText, fontSize: '1.5rem', fontWeight: 'bold' }}>
                                        {totals.minPrice} - {totals.maxPrice} $
                                    </p>
                                </div>
                            </div>
                            
                            <table style={{ 
                                width: '100%', 
                                borderCollapse: 'collapse', 
                                marginBottom: '2rem',
                                color: theme.primaryText
                            }}>
                                <thead>
                                    <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                                        <th style={{ textAlign: 'left', padding: '0.75rem', backgroundColor: theme.headerBackground }}>Service</th>
                                        <th style={{ textAlign: 'center', padding: '0.75rem', backgroundColor: theme.headerBackground }}>Hours Range</th>
                                        <th style={{ textAlign: 'center', padding: '0.75rem', backgroundColor: theme.headerBackground }}>Rate</th>
                                        <th style={{ textAlign: 'center', padding: '0.75rem', backgroundColor: theme.headerBackground }}>Markup</th>
                                        <th style={{ textAlign: 'right', padding: '0.75rem', backgroundColor: theme.headerBackground }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.values(selectedServices).map((service, index) => {
                                        const price = calculateServicePrice(service);
                                        return (
                                            <tr key={service.id} style={{ 
                                                backgroundColor: index % 2 === 0 ? theme.headerBackground : theme.cardBackground,
                                                borderBottom: `1px solid ${theme.border}`
                                            }}>
                                                <td style={{ padding: '0.75rem' }}>{service.name}</td>
                                                <td style={{ textAlign: 'center', padding: '0.75rem' }}>
                                                    {service.minHours} - {service.maxHours}
                                                </td>
                                                <td style={{ textAlign: 'center', padding: '0.75rem' }}>{service.hourlyRate} $</td>
                                                <td style={{ textAlign: 'center', padding: '0.75rem' }}>{service.markup}%</td>
                                                <td style={{ textAlign: 'right', padding: '0.75rem' }}>
                                                    {price.min.toFixed(2)} - {price.max.toFixed(2)} $
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr style={{ backgroundColor: theme.summaryBackground }}>
                                        <td colSpan="4" style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 'bold' }}>
                                            Grand Total:
                                        </td>
                                        <td style={{ textAlign: 'right', padding: '0.75rem', fontWeight: 'bold' }}>
                                            {totals.minPrice} - {totals.maxPrice} $
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            
                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ color: theme.primaryText, marginBottom: '0.5rem' }}>Notes:</h4>
                                <p style={{ color: theme.secondaryText, margin: '0.25rem 0' }}>
                                    Thank you for your business. Payment is due within 30 days of invoice date.
                                </p>
                            </div>
                            
                            <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: `1px solid ${theme.border}`, paddingTop: '1rem' }}>
                                <p style={{ color: theme.secondaryText }}>Power Commerce © {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </div>
                )}

                <ActionsContainer>
                    <OutlineButton style={{ 
                        background: 'transparent', 
                        borderColor: theme.accent, 
                        color: theme.primaryText 
                    }}>
                        <FaSave /> Save Draft
                    </OutlineButton>
                    <PrimaryButton onClick={handleSaveProject} style={{ 
                        background: theme.buttonBackground, 
                        color: '#ffffff',
                        borderColor: theme.buttonBackground
                    }}>
                        <FaCheck /> Save Project
                    </PrimaryButton>
                </ActionsContainer>
            </div>

            <AnimatePresence>
                {showNotification && (
                    <Notification 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 50 }}
                        style={{ background: theme.highlightBackground, color: theme.primaryText, border: `1px solid ${theme.border}` }}
                    >
                        <FaCheckCircle style={{ color: theme.accent }} />
                        <div>
                            <div style={{ fontWeight: 600 }}>Project Saved!</div>
                            <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>Project ID: {projectId}</div>
                        </div>
                    </Notification>
                )}
            </AnimatePresence>
        </>
    );
};

export default ServiceSelection;
