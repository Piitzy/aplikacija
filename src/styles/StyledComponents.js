import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Layout components
export const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: 100vh;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

export const MainContent = styled.main`
    padding: 1.5rem 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

// Sidebar components
export const Sidebar = styled.aside`
    background: var(--sidebar-bg);
    border-right: 1px solid var(--border);
    padding: 1.5rem;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 10;
    box-shadow: var(--shadow-lg);

    @media (max-width: 992px) {
        display: none;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const MenuSection = styled.div`
    margin-bottom: 1.5rem;
`;

export const MenuTitle = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
    padding-left: 0.5rem;
`;

export const MenuItem = styled.a`
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    color: ${(props) => (props.active ? "#fff" : "var(--sidebar-text)")};
    background: ${(props) => (props.active ? "var(--sidebar-active)" : "transparent")};
    font-weight: 500;
    margin-bottom: 0.35rem;
    transition: var(--transition);

    &:hover {
        background-color: ${(props) => (props.active ? "var(--sidebar-active)" : "rgba(255, 255, 255, 0.08)")};
        color: white;
        transform: translateX(4px);
    }

    svg {
        margin-right: 0.75rem;
        font-size: 1.1rem;
        min-width: 1.5rem;
        color: ${(props) => (props.active ? "#fff" : "rgba(255, 255, 255, 0.7)")};
    }
`;

// Header Components
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
`;

export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
`;

export const HeaderActions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const HeaderSearch = styled.div`
    position: relative;
    width: 240px;
    margin-right: 8px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    padding-left: 2.5rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background-color: var(--card-bg);
    color: var(--text);
    font-size: 0.875rem;
    transition: all 0.2s;
    
    &:focus {
        outline: none;
        border-color: var(--primary-light);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    &::placeholder {
        color: var(--text-light);
    }
    
    &::before {
        content: "🔍";
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-light);
    }
`;

export const IconButton = styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    background: var(--card-bg);
    border: 1px solid var(--border);
    transition: all 0.2s;
    
    &:hover {
        background: var(--background);
        transform: translateY(-2px);
    }
`;

export const NotificationBadge = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--primary);
    color: white;
    font-size: 0.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--card-bg);
`;

export const UserDropdown = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    width: 200px;
    background: var(--card-bg);
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border);
    z-index: 100;
    padding: 0.5rem 0;
    overflow: hidden;
`;

export const UserDropdownItem = styled.a`
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    color: var(--text);
    font-size: 0.875rem;
    transition: all 0.2s;
    
    svg {
        margin-right: 0.75rem;
        font-size: 1rem;
        color: var(--text-light);
    }
    
    &:hover {
        background: var(--background);
    }
    
    &.logout {
        border-top: 1px solid var(--border);
        color: var(--danger);
        
        svg {
            color: var(--danger);
        }
    }
`;

export const Badge = styled.div`
    display: inline-block;
    padding: 0.3rem 0.7rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    background-color: ${(props) =>
        props.variant === "success"
            ? "rgba(16, 185, 129, 0.1)"
            : props.variant === "warning"
              ? "rgba(245, 158, 11, 0.1)"
              : "rgba(99, 102, 241, 0.1)"};
    color: ${(props) =>
        props.variant === "success" ? "var(--success)" : props.variant === "warning" ? "var(--warning)" : "var(--primary)"};
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Stat Cards
export const StatCardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export const StatCard = styled(motion.div)`
    background: #1e293b;
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    
    &:nth-child(1) {
        background: #1e293b;
        border-top: 4px solid #4f46e5;
    }
    
    &:nth-child(2) {
        background: #1e293b;
        border-top: 4px solid #0ea5e9;
    }
    
    &:nth-child(3) {
        background: #1e293b;
        border-top: 4px solid #8b5cf6;
    }
    
    &:nth-child(4) {
        background: #1e293b;
        border-top: 4px solid #f59e0b;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }
`;

export const StatCardTitle = styled.div`
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-light);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
        color: var(--primary);
        font-size: 1rem;
    }
`;

export const StatCardValue = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.75rem;
`;

export const StatCardFooter = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: ${(props) => (props.positive ? "var(--success)" : "var(--danger)")};
    font-weight: 500;
    
    svg {
        margin-right: 0.4rem;
    }
`;

// Main card and content
export const Card = styled.div`
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    margin-bottom: 2rem;
    border: 1px solid var(--border);
`;

export const FlexContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

// Categories
export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 280px;
    flex-shrink: 0;

    @media (max-width: 992px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const CategoryButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1.25rem;
    border-radius: var(--radius);
    background: ${(props) => (props.active ? "var(--primary)" : "var(--card-bg)")};
    color: ${(props) => (props.active ? "white" : "var(--text)")};
    font-weight: ${(props) => (props.active ? "600" : "500")};
    transition: var(--transition);
    box-shadow: ${(props) => (props.active ? "var(--shadow)" : "none")};
    border: 1px solid ${(props) => (props.active ? "var(--primary)" : "var(--border)")};

    &:hover {
        background: ${(props) => (props.active ? "var(--primary-dark)" : "rgba(79, 70, 229, 0.05)")};
        transform: translateY(-2px);
    }

    svg {
        font-size: 1.1rem;
        color: ${(props) => (props.active ? "white" : "var(--primary)")};
    }

    @media (max-width: 992px) {
        flex: 1;
        min-width: 160px;
    }
`;

// Services
export const ServicesContainer = styled.div`
    flex-grow: 1;
`;

export const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        color: var(--primary);
    }
`;

export const ServicesGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;

export const ServiceItem = styled(motion.div)`
    background: ${(props) => (props.selected ? "linear-gradient(135deg, #EEF2FF, #E0E7FF)" : "var(--card-bg)")};
    padding: 1.25rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 1px solid ${(props) => (props.selected ? "var(--primary-light)" : "var(--border)")};
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        box-shadow: var(--shadow-lg);
        border-color: ${(props) => (props.selected ? "var(--primary)" : "var(--border)")};
    }
`;

export const ServiceCheckbox = styled.input`
    margin-right: 0.75rem;
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: var(--primary);
`;

export const ServiceLabel = styled.label`
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    flex: 1;
`;

// Selected services
export const SelectedServicesSection = styled.div`
    margin: 2rem 0;
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    color: var(--text-light);
    
    svg {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.3;
    }
`;

export const EmptyStateText = styled.div`
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-align: center;
`;

export const SelectedServiceItem = styled(motion.div)`
    background: linear-gradient(135deg, #f8fafc, #ffffff);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    padding: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    box-shadow: var(--shadow);
    transition: var(--transition);
    
    &:hover {
        box-shadow: var(--shadow-lg);
    }
`;

export const ServiceHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const ServiceTitle = styled.div`
    font-weight: 600;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
        color: var(--primary);
    }
`;

export const RemoveServiceButton = styled(motion.button)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(239, 68, 68, 0.05);
    color: var(--danger);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    
    &:hover {
        background: rgba(239, 68, 68, 0.1);
    }
`;

export const ServiceParams = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ParamGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ParamLabel = styled.label`
    font-size: 0.85rem;
    color: var(--text-light);
    font-weight: 500;
`;

export const ParamInput = styled.input`
    padding: 0.75rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: white;
    width: 100%;
    font-size: 0.9rem;
    transition: var(--transition);
    
    &:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
    }
    
    &:hover {
        border-color: var(--primary-light);
    }
`;

export const ServicePriceTag = styled.div`
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, var(--primary-light), var(--primary-light));
    color: var(--primary-dark);
    border-radius: var(--radius);
    font-weight: 600;
    margin-top: 0.5rem;
    font-size: 0.9rem;
`;

// Summary section
export const PricingSection = styled.div`
    margin-top: 2rem;
`;

export const SummaryCard = styled.div`
    background: #f8fafc;
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    overflow-x: auto;
`;

export const SummaryTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    
    th {
        text-align: left;
        padding: 1rem;
        background: rgba(79, 70, 229, 0.05);
        color: var(--text);
        font-weight: 600;
        font-size: 0.9rem;
        
        &:first-child {
            border-top-left-radius: var(--radius);
            border-bottom-left-radius: var(--radius);
        }
        
        &:last-child {
            border-top-right-radius: var(--radius);
            border-bottom-right-radius: var(--radius);
        }
    }
    
    td {
        padding: 1rem;
        border-bottom: 1px solid var(--border);
        color: var(--text);
        font-size: 0.9rem;
    }
    
    tr:last-child td {
        border-bottom: none;
    }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
    tr {
        &:hover {
            background: rgba(79, 70, 229, 0.02);
        }
    }
`;

export const TableFoot = styled.tfoot`
    td {
        font-weight: 600;
        color: var(--text);
        background: rgba(79, 70, 229, 0.05);
    }
`;

export const GrandTotal = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
    text-align: right;
    margin-top: 1.5rem;
    
    span {
        color: var(--primary);
    }
`;

// Action buttons
export const ActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

// export const Button = styled.button`
//     padding: 0.85rem 1.5rem;
//     border-radius: var(--radius);
//     font-size: 0.95rem;
//     font-weight: 600;
//     transition: var(--transition);
//     display: inline-flex;
//     align-items: center;
//     gap: 0.5rem;
//     justify-content: center;
//     min-width: 150px;

//     @media (max-width: 576px) {
//         width: 100%;
//     }

//     svg {
//         font-size: 1rem;
//     }
// `;

// export const PrimaryButton = styled(motion.button)`
//     background: linear-gradient(135deg, var(--primary), var(--primary-dark));
//     color: white;
//     font-weight: 600;
//     padding: 0.75rem 1.5rem;
//     border-radius: var(--radius);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     transition: var(--transition);
//     box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
//     min-width: 130px;

//     &:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 6px 15px rgba(79, 70, 229, 0.3);
//     }

//     svg {
//         font-size: 1rem;
//     }
// `;

export const OutlineButton = styled(motion.button)`
    background: transparent;
    color: var(--primary);
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: var(--transition);
    border: 2px solid var(--primary);
    min-width: 130px;

    &:hover {
        background: rgba(79, 70, 229, 0.05);
        transform: translateY(-2px);
    }

    svg {
        font-size: 1rem;
    }
`;

// Notifications
export const Notification = styled(motion.div)`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3);
    z-index: 1000;

    svg {
        font-size: 1.5rem;
    }
`;

// Page Layout Components
export const PageTitle = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.5rem;
`;

export const SubTitle = styled.p`
    font-size: 0.95rem;
    color: var(--text-light);
    margin-bottom: 1rem;
`;

export const PageHeader = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const TitleArea = styled.div`
    flex: 1;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    
    @media (max-width: 768px) {
        margin-top: 1rem;
        width: 100%;
        justify-content: flex-start;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    font-size: 0.875rem;
    font-weight: 500;
    background-color: var(--card-bg);
    color: var(--text);
    border: 1px solid var(--border);
    transition: all 0.2s;
    box-shadow: var(--shadow);
    cursor: pointer;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }
    
    svg {
        font-size: 0.75rem;
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: var(--primary);
    color: white;
    border: none;
    
    &:hover {
        background-color: var(--primary-dark);
    }
`;

export const LinkButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--primary);
    
    &:hover {
        text-decoration: underline;
    }
    
    svg {
        transition: transform 0.2s;
    }
    
    &:hover svg {
        transform: translateX(3px);
    }
`;

// Grid and Layout
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 1}, 1fr);
    gap: ${(props) => props.gap || "1.5rem"};
    margin-bottom: 2rem;

    @media (max-width: 992px) {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
`;

// Project Cards
export const ProjectCard = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const ProjectTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
`;

export const ProjectDescription = styled.p`
    font-size: 0.875rem;
    color: var(--text-light);
    margin-bottom: 1.25rem;
    line-height: 1.5;
`;

export const ProjectStatus = styled.span`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    background-color: ${(props) => {
        switch (props.status) {
            case "active":
                return "rgba(16, 185, 129, 0.1)";
            case "completed":
                return "rgba(79, 70, 229, 0.1)";
            case "planning":
                return "rgba(245, 158, 11, 0.1)";
            default:
                return "rgba(99, 102, 241, 0.1)";
        }
    }};
    color: ${(props) => {
        switch (props.status) {
            case "active":
                return "var(--success)";
            case "completed":
                return "var(--primary)";
            case "planning":
                return "var(--warning)";
            default:
                return "var(--text-light)";
        }
    }};
`;

export const ProjectFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
`;

export const ProjectMeta = styled.div`
    font-size: 0.75rem;
    color: var(--text-light);
`;

// Progress Components
export const ProgressCard = styled.div`
    padding: 1rem;
    border-radius: var(--radius);
    background-color: var(--card-bg);
    border: 1px solid var(--border);
`;

export const ProgressTitle = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 0.75rem;
`;

export const ProgressBar = styled.div`
    height: 8px;
    background-color: var(--border);
    border-radius: 4px;
    margin-bottom: 0.5rem;
    position: relative;
    overflow: hidden;
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${(props) => props.percentage || 0}%;
        background-color: ${(props) => {
            switch (props.color) {
                case "primary":
                    return "var(--primary)";
                case "secondary":
                    return "var(--secondary)";
                case "success":
                    return "var(--success)";
                case "warning":
                    return "var(--warning)";
                case "danger":
                    return "var(--danger)";
                default:
                    return "var(--primary)";
            }
        }};
        border-radius: 4px;
        transition: width 0.5s ease;
    }
`;

export const ProgressValue = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-light);
    text-align: right;
`;

// Activity List
export const RecentActivityList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ActivityItem = styled.div`
    display: flex;
    align-items: flex-start;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
    
    &:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }
`;

export const ActivityTime = styled.div`
    font-size: 0.75rem;
    color: var(--text-light);
    min-width: 60px;
    padding-top: 0.125rem;
`;

export const ActivityContent = styled.div`
    font-size: 0.875rem;
    color: var(--text);
    flex: 1;
    
    strong {
        font-weight: 600;
    }
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background-color: rgba(99, 102, 241, 0.1);
    color: var(--primary);
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 500;
`;