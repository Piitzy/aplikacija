import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaFolder, FaFilter, FaTrash, FaEdit, FaEye } from "react-icons/fa";
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
    ProjectStatus,
    Tag,
    TagList,
} from "../styles/StyledComponents";
import styled from "styled-components";

// Additional styled components specific to this page
const ProjectsGrid = styled.div`
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const ProjectRow = styled(motion.div)`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr auto;
    align-items: center;
    padding: 1rem;
    background: var(--card-bg);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    transition: all 0.2s;
    gap: 1rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
`;

const ProjectCell = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &:before {
            content: attr(data-label);
            font-weight: 600;
            font-size: 0.75rem;
            color: var(--text-light);
        }
    }
`;

const ProjectName = styled.div`
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.25rem;
`;

const ProjectDesc = styled.div`
    font-size: 0.85rem;
    color: var(--text-light);
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const ActionButton = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--card-bg);
    border: 1px solid var(--border);
    color: var(--text-light);
    transition: all 0.2s;

    &:hover {
        background: var(--background);
        color: var(--primary);
        transform: translateY(-2px);
    }
`;

const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr auto;
    padding: 0.75rem 1rem;
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--text-light);
    border-bottom: 1px solid var(--border);

    @media (max-width: 768px) {
        display: none;
    }
`;

const FilterBar = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SearchInput = styled.input`
    flex: 1;
    min-width: 200px;
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--card-bg);

    &:focus {
        outline: none;
        border-color: var(--primary-light);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
`;

const FilterGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background: var(--card-bg);
    border-radius: var(--radius);
    text-align: center;
    color: var(--text-light);

    svg {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--border);
    }
`;

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Website Redesign",
            description: "Complete overhaul of the corporate website with new branding",
            status: "active",
            client: "Acme Corp",
            dueDate: "2023-08-15",
            tags: ["UI/UX", "Frontend", "Branding"],
        },
        {
            id: 2,
            name: "E-commerce Integration",
            description: "Integrate payment gateways and inventory management system",
            status: "planning",
            client: "Global Shop",
            dueDate: "2023-09-30",
            tags: ["Backend", "API", "E-commerce"],
        },
        {
            id: 3,
            name: "Mobile App Development",
            description: "Develop iOS and Android apps for the existing platform",
            status: "completed",
            client: "TechStart Inc",
            dueDate: "2023-06-01",
            tags: ["Mobile", "iOS", "Android"],
        },
        {
            id: 4,
            name: "SEO Optimization",
            description: "Improve search rankings and organic traffic",
            status: "active",
            client: "Marketing Pro",
            dueDate: "2023-07-25",
            tags: ["SEO", "Content", "Analytics"],
        },
        {
            id: 5,
            name: "CRM Integration",
            description: "Connect customer database with marketing automation tools",
            status: "planning",
            client: "Sales Force",
            dueDate: "2023-10-10",
            tags: ["CRM", "API", "Automation"],
        },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredProjects = projects.filter((project) => {
        // Filter by search term
        const matchesSearch =
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.client.toLowerCase().includes(searchTerm.toLowerCase());

        // Filter by status
        const matchesStatus = statusFilter === "all" || project.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

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
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <PageHeader variants={itemVariants}>
                <TitleArea>
                    <PageTitle>Projects</PageTitle>
                    <SubTitle>Manage and track your projects</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>
                        <FaFilter size={12} style={{ marginRight: "6px" }} />
                        Filters
                    </Button>
                    <PrimaryButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <FaPlus size={12} style={{ marginRight: "6px" }} />
                        New Project
                    </PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <FilterBar as={motion.div} variants={itemVariants}>
                <SearchInput
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FilterGroup>
                    <Button
                        onClick={() => setStatusFilter("all")}
                        style={{
                            background: statusFilter === "all" ? "var(--primary)" : "var(--card-bg)",
                            color: statusFilter === "all" ? "white" : "var(--text)",
                        }}
                    >
                        All
                    </Button>
                    <Button
                        onClick={() => setStatusFilter("active")}
                        style={{
                            background: statusFilter === "active" ? "var(--success)" : "var(--card-bg)",
                            color: statusFilter === "active" ? "white" : "var(--text)",
                        }}
                    >
                        Active
                    </Button>
                    <Button
                        onClick={() => setStatusFilter("planning")}
                        style={{
                            background: statusFilter === "planning" ? "var(--warning)" : "var(--card-bg)",
                            color: statusFilter === "planning" ? "white" : "var(--text)",
                        }}
                    >
                        Planning
                    </Button>
                    <Button
                        onClick={() => setStatusFilter("completed")}
                        style={{
                            background: statusFilter === "completed" ? "var(--primary)" : "var(--card-bg)",
                            color: statusFilter === "completed" ? "white" : "var(--text)",
                        }}
                    >
                        Completed
                    </Button>
                </FilterGroup>
            </FilterBar>

            <ProjectsGrid as={motion.div} variants={itemVariants}>
                <HeaderRow>
                    <div>Project</div>
                    <div>Client</div>
                    <div>Status</div>
                    <div>Due Date</div>
                    <div>Actions</div>
                </HeaderRow>

                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectRow key={project.id} variants={itemVariants}>
                            <ProjectCell data-label="Project">
                                <ProjectName>{project.name}</ProjectName>
                                <ProjectDesc>{project.description}</ProjectDesc>
                                <TagList style={{ marginTop: "0.5rem" }}>
                                    {project.tags.map((tag, index) => (
                                        <Tag key={index}>{tag}</Tag>
                                    ))}
                                </TagList>
                            </ProjectCell>
                            <ProjectCell data-label="Client">{project.client}</ProjectCell>
                            <ProjectCell data-label="Status">
                                <ProjectStatus status={project.status}>
                                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                </ProjectStatus>
                            </ProjectCell>
                            <ProjectCell data-label="Due Date">{new Date(project.dueDate).toLocaleDateString()}</ProjectCell>
                            <ProjectCell>
                                <ActionButtons>
                                    <ActionButton title="View Details">
                                        <FaEye />
                                    </ActionButton>
                                    <ActionButton title="Edit Project">
                                        <FaEdit />
                                    </ActionButton>
                                    <ActionButton title="Delete Project">
                                        <FaTrash />
                                    </ActionButton>
                                </ActionButtons>
                            </ProjectCell>
                        </ProjectRow>
                    ))
                ) : (
                    <EmptyState>
                        <FaFolder size={48} />
                        <h3>No projects found</h3>
                        <p>Try adjusting your search or filters, or create a new project.</p>
                    </EmptyState>
                )}
            </ProjectsGrid>
        </motion.div>
    );
};

export default Projects;
