import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell, FaSignOutAlt, FaCog, FaUser } from "react-icons/fa";
import { 
    Header, 
    HeaderTitle, 
    HeaderActions, 
    Badge, 
    UserInfo, 
    UserAvatar, 
    NotificationBadge,
    UserDropdown,
    UserDropdownItem,
    HeaderSearch,
    SearchInput,
    IconButton
} from "../styles/StyledComponents";

const HeaderComponent = ({ userName = "PM", userImage = null }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const renderUserAvatar = () => {
        if (userImage) {
            return (
                <UserAvatar 
                    onClick={toggleDropdown}
                    as={motion.div}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ 
                        backgroundImage: `url(${userImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            );
        }
        
        // If no image, use initials
        return (
            <UserAvatar 
                onClick={toggleDropdown}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {userName.slice(0, 2)}
            </UserAvatar>
        );
    };

    return (
        <Header>
            <HeaderTitle>Service Selection Tool</HeaderTitle>
            
            <HeaderActions>
                <HeaderSearch>
                    <SearchInput placeholder="Search..." />
                </HeaderSearch>
                
                <IconButton>
                    <FaBell />
                    <NotificationBadge>3</NotificationBadge>
                </IconButton>
                
                <Badge variant="success">Active Project</Badge>
                
                <UserInfo>
                    {renderUserAvatar()}
                    
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <UserDropdown
                                as={motion.div}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <UserDropdownItem>
                                    <FaUser />
                                    <span>Profile</span>
                                </UserDropdownItem>
                                <UserDropdownItem>
                                    <FaCog />
                                    <span>Settings</span>
                                </UserDropdownItem>
                                <UserDropdownItem className="logout">
                                    <FaSignOutAlt />
                                    <span>Logout</span>
                                </UserDropdownItem>
                            </UserDropdown>
                        )}
                    </AnimatePresence>
                </UserInfo>
            </HeaderActions>
        </Header>
    );
};

export default HeaderComponent;
