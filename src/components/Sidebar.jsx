import React from "react";
import { Link } from "react-router-dom";
import {
    FaBriefcase,
    FaHome,
    FaFolder,
    FaTasks,
    FaCalendar,
    FaCode,
    FaPaintBrush,
    FaBullhorn,
    FaChartLine,
    FaUser,
    FaCog,
} from "react-icons/fa";
import { Sidebar, LogoArea, Logo, MenuSection, MenuTitle, MenuItem } from "../styles/StyledComponents";

const SidebarComponent = ({ currentPath }) => {
    const isActive = (path) => {
        if (path === '/' && currentPath === '/') {
            return true;
        }
        return path !== '/' && currentPath.startsWith(path);
    };

    return (
        <Sidebar>
            <LogoArea>
                <Logo>
                    <FaBriefcase />
                    <span>PM Tool</span>
                </Logo>
            </LogoArea>

            <MenuSection>
                <MenuTitle>Main</MenuTitle>
                <MenuItem as={Link} to="/" active={isActive('/')} href="#">
                    <FaHome />
                    <span>Dashboard</span>
                </MenuItem>
                <MenuItem as={Link} to="/projects" active={isActive('/projects')} href="#">
                    <FaFolder />
                    <span>Projects</span>
                </MenuItem>
                <MenuItem as={Link} to="/tasks" active={isActive('/tasks')} href="#">
                    <FaTasks />
                    <span>Tasks</span>
                </MenuItem>
                <MenuItem as={Link} to="/calendar" active={isActive('/calendar')} href="#">
                    <FaCalendar />
                    <span>Calendar</span>
                </MenuItem>
            </MenuSection>

            <MenuSection>
                <MenuTitle>Services</MenuTitle>
                <MenuItem as={Link} to="/development" active={isActive('/development')} href="#">
                    <FaCode />
                    <span>Development</span>
                </MenuItem>
                <MenuItem as={Link} to="/design" active={isActive('/design')} href="#">
                    <FaPaintBrush />
                    <span>Design</span>
                </MenuItem>
                <MenuItem as={Link} to="/marketing" active={isActive('/marketing')} href="#">
                    <FaBullhorn />
                    <span>Marketing</span>
                </MenuItem>
                <MenuItem as={Link} to="/seo" active={isActive('/seo')} href="#">
                    <FaChartLine />
                    <span>SEO</span>
                </MenuItem>
            </MenuSection>

            <MenuSection>
                <MenuTitle>Settings</MenuTitle>
                <MenuItem as={Link} to="/profile" active={isActive('/profile')} href="#">
                    <FaUser />
                    <span>Profile</span>
                </MenuItem>
                <MenuItem as={Link} to="/settings" active={isActive('/settings')} href="#">
                    <FaCog />
                    <span>Settings</span>
                </MenuItem>
            </MenuSection>
        </Sidebar>
    );
};

export default SidebarComponent;
