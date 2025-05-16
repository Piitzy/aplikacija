import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaEllipsisH, FaTimes, FaRegCalendarAlt, FaRegClock, FaRegCheckCircle, FaRegCommentAlt } from "react-icons/fa";
import {
    PageTitle,
    SubTitle,
    PageHeader,
    TitleArea,
    ButtonGroup,
    Button,
    PrimaryButton,
    Grid,
    Card,
    Tag,
    TagList,
} from "../styles/StyledComponents";
import styled from "styled-components";

// Additional styled components for the kanban board
const KanbanBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const KanbanColumn = styled.div`
    background-color: var(--background);
    border-radius: var(--radius);
    padding: 1rem;
    min-height: 400px;
`;

const ColumnHeader = styled.div`
    padding: 1rem;
    font-weight: 600;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;

const ColumnTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span.count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: ${(props) => {
            switch (props.status) {
                case "todo":
                    return "rgba(99, 102, 241, 0.1)";
                case "in-progress":
                    return "rgba(245, 158, 11, 0.1)";
                case "completed":
                    return "rgba(16, 185, 129, 0.1)";
                default:
                    return "rgba(99, 102, 241, 0.1)";
            }
        }};
        color: ${(props) => {
            switch (props.status) {
                case "todo":
                    return "var(--primary)";
                case "in-progress":
                    return "var(--warning)";
                case "completed":
                    return "var(--success)";
                default:
                    return "var(--primary)";
            }
        }};
        font-size: 0.75rem;
    }
`;

const TaskCard = styled(motion.div)`
    background-color: var(--card-bg);
    border-radius: var(--radius);
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    transition: all 0.2s;
    cursor: grab;

    &:hover {
        box-shadow: var(--shadow-lg);
        transform: translateY(-2px);
    }
`;

const TaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
`;

const TaskTitle = styled.div`
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.5rem;
`;

const TaskDescription = styled.div`
    font-size: 0.85rem;
    color: var(--text-light);
    margin-bottom: 1rem;
`;

const TaskFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
`;

const TaskMetaInfo = styled.div`
    display: flex;
    gap: 0.75rem;
    color: var(--text-light);

    div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
`;

const TaskAssignee = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const AssigneeAvatar = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
`;

const AddTaskButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    width: 100%;
    background-color: var(--card-bg);
    border: 1px dashed var(--border);
    border-radius: var(--radius);
    color: var(--text-light);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: var(--background);
        color: var(--primary);
        border-color: var(--primary-light);
    }
`;

const Tasks = () => {
    const [tasks, setTasks] = useState({
        todo: [
            {
                id: 1,
                title: "Design new landing page",
                description: "Create wireframes and mockups for the upcoming product launch landing page",
                tags: ["Design", "UI/UX"],
                assignee: "JD",
                dueDate: "2023-07-25",
                comments: 3,
            },
            {
                id: 2,
                title: "Implement payment gateway",
                description: "Integrate Stripe payment processing for subscription plans",
                tags: ["Development", "Backend"],
                assignee: "AR",
                dueDate: "2023-08-05",
                comments: 5,
            },
            {
                id: 3,
                title: "Content audit",
                description: "Review and update all product descriptions for the online store",
                tags: ["Content", "Marketing"],
                assignee: "SM",
                dueDate: "2023-07-30",
                comments: 0,
            },
        ],
        "in-progress": [
            {
                id: 4,
                title: "Mobile responsiveness fixes",
                description: "Fix UI issues on the checkout page for mobile devices",
                tags: ["Frontend", "Mobile"],
                assignee: "KL",
                dueDate: "2023-07-22",
                comments: 2,
            },
            {
                id: 5,
                title: "SEO optimization",
                description: "Implement meta tags and schema markup for better search engine visibility",
                tags: ["SEO", "Frontend"],
                assignee: "JD",
                dueDate: "2023-07-28",
                comments: 1,
            },
        ],
        completed: [
            {
                id: 6,
                title: "User authentication",
                description: "Implement login, registration and password reset functionality",
                tags: ["Backend", "Security"],
                assignee: "AR",
                dueDate: "2023-07-15",
                comments: 7,
            },
            {
                id: 7,
                title: "Analytics dashboard",
                description: "Create data visualizations for key performance metrics",
                tags: ["Frontend", "Analytics"],
                assignee: "KL",
                dueDate: "2023-07-10",
                comments: 4,
            },
        ],
    });

    const getColorByTaskStatus = (status) => {
        switch (status) {
            case "todo":
                return "var(--primary)";
            case "in-progress":
                return "var(--warning)";
            case "completed":
                return "var(--success)";
            default:
                return "var(--text-light)";
        }
    };

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
                    <PageTitle>Tasks</PageTitle>
                    <SubTitle>Manage and track project tasks</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>Filter Tasks</Button>
                    <PrimaryButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <FaPlus size={12} style={{ marginRight: "6px" }} />
                        New Task
                    </PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <KanbanBoard as={motion.div} variants={itemVariants}>
                {Object.keys(tasks).map((status) => (
                    <KanbanColumn key={status}>
                        <ColumnHeader>
                            <ColumnTitle status={status}>
                                {status === "todo" ? "To Do" : status === "in-progress" ? "In Progress" : "Completed"}
                                <span className="count">{tasks[status].length}</span>
                            </ColumnTitle>
                            <FaEllipsisH />
                        </ColumnHeader>

                        {tasks[status].map((task) => (
                            <TaskCard key={task.id} variants={itemVariants} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                                <TaskHeader>
                                    <TaskTitle>{task.title}</TaskTitle>
                                    <FaEllipsisH />
                                </TaskHeader>
                                <TaskDescription>{task.description}</TaskDescription>
                                <TagList>
                                    {task.tags.map((tag, index) => (
                                        <Tag key={index}>{tag}</Tag>
                                    ))}
                                </TagList>
                                <TaskFooter>
                                    <TaskMetaInfo>
                                        <div>
                                            <FaRegCalendarAlt />
                                            {new Date(task.dueDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </div>
                                        {task.comments > 0 && (
                                            <div>
                                                <FaRegCommentAlt />
                                                {task.comments}
                                            </div>
                                        )}
                                    </TaskMetaInfo>
                                    <TaskAssignee>
                                        <AssigneeAvatar>{task.assignee}</AssigneeAvatar>
                                    </TaskAssignee>
                                </TaskFooter>
                            </TaskCard>
                        ))}

                        <AddTaskButton>
                            <FaPlus size={12} />
                            Add Task
                        </AddTaskButton>
                    </KanbanColumn>
                ))}
            </KanbanBoard>
        </motion.div>
    );
};

export default Tasks;
