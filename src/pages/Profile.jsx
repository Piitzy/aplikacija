import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSave, FaCamera, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaUser, FaLock } from "react-icons/fa";
import { PageTitle, SubTitle, PageHeader, TitleArea, ButtonGroup, PrimaryButton, Card, Grid } from "../styles/StyledComponents";
import styled from "styled-components";

// Profile specific styled components
const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const ProfileAvatar = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(135deg, var(--primary-light), var(--primary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
    box-shadow: var(--shadow-lg);
    border: 4px solid var(--card-bg);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const AvatarUpload = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid var(--card-bg);

    &:hover {
        transform: scale(1.1);
        background: var(--primary-dark);
    }

    input {
        display: none;
    }
`;

const ProfileInfo = styled.div`
    flex: 1;
`;

const UserName = styled.h2`
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.25rem;
`;

const UserTitle = styled.p`
    color: var(--text-light);
    margin-bottom: 1rem;
`;

const UserDetailsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    color: var(--text-light);

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;

        svg {
            color: var(--primary);
        }
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text);
`;

const FormInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--card-bg);
    font-size: 0.9rem;

    &:focus {
        outline: none;
        border-color: var(--primary-light);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
`;

const FormTextarea = styled.textarea`
    width: 100%;
    padding: 0.75rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--card-bg);
    font-size: 0.9rem;
    resize: vertical;
    min-height: 120px;

    &:focus {
        outline: none;
        border-color: var(--primary-light);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
`;

const CardTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: var(--primary);
    }
`;

const ToggleSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--border);
        transition: 0.4s;
        border-radius: 24px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: var(--primary);
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }
`;

const SettingRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);

    &:last-child {
        border-bottom: none;
    }
`;

const SettingLabel = styled.div`
    font-weight: 500;
    color: var(--text);
`;

const SettingDescription = styled.div`
    font-size: 0.85rem;
    color: var(--text-light);
    margin-top: 0.25rem;
`;

const API_KEY = styled.div`
    font-family: monospace;
    padding: 0.75rem;
    background: var(--background);
    border-radius: var(--radius);
    color: var(--primary);
    margin-top: 0.5rem;
    font-size: 0.85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        title: "Senior Project Manager",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        website: "johndoe.com",
        bio: "Experienced project manager with over 8 years of experience in software development, design and team leadership. Passionate about delivering high-quality products and optimizing workflows.",
        apiKey: "pm_live_zKM8s92n7dJXe4TwqS7h9d45fRe3nGpP",
        settings: {
            emailNotifications: true,
            projectUpdates: true,
            marketingEmails: false,
            twoFactorAuth: true,
            darkMode: false,
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSettingToggle = (setting) => {
        setUser({
            ...user,
            settings: {
                ...user.settings,
                [setting]: !user.settings[setting],
            },
        });
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
                    <PageTitle>Profile</PageTitle>
                    <SubTitle>Manage your account settings and preferences</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <PrimaryButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <FaSave size={12} style={{ marginRight: "6px" }} />
                        Save Changes
                    </PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <Card as={motion.div} variants={itemVariants}>
                <ProfileHeader>
                    <ProfileAvatar>
                        {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        <AvatarUpload>
                            <FaCamera size={14} />
                            <input type="file" accept="image/*" />
                        </AvatarUpload>
                    </ProfileAvatar>
                    <ProfileInfo>
                        <UserName>{user.name}</UserName>
                        <UserTitle>{user.title}</UserTitle>
                        <UserDetailsList>
                            <div>
                                <FaEnvelope />
                                {user.email}
                            </div>
                            <div>
                                <FaPhone />
                                {user.phone}
                            </div>
                            <div>
                                <FaMapMarkerAlt />
                                {user.location}
                            </div>
                            <div>
                                <FaGlobe />
                                {user.website}
                            </div>
                        </UserDetailsList>
                    </ProfileInfo>
                </ProfileHeader>

                <Grid columns={2}>
                    <Card as={motion.div} variants={itemVariants}>
                        <CardTitle>
                            <FaUser />
                            Personal Information
                        </CardTitle>
                        <FormGroup>
                            <FormLabel>Full Name</FormLabel>
                            <FormInput type="text" name="name" value={user.name} onChange={handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Job Title</FormLabel>
                            <FormInput type="text" name="title" value={user.title} onChange={handleInputChange} />
                        </FormGroup>
                        <Grid columns={2}>
                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormInput type="email" name="email" value={user.email} onChange={handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Phone</FormLabel>
                                <FormInput type="tel" name="phone" value={user.phone} onChange={handleInputChange} />
                            </FormGroup>
                        </Grid>
                        <Grid columns={2}>
                            <FormGroup>
                                <FormLabel>Location</FormLabel>
                                <FormInput type="text" name="location" value={user.location} onChange={handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Website</FormLabel>
                                <FormInput type="url" name="website" value={user.website} onChange={handleInputChange} />
                            </FormGroup>
                        </Grid>
                        <FormGroup>
                            <FormLabel>Bio</FormLabel>
                            <FormTextarea name="bio" value={user.bio} onChange={handleInputChange} />
                        </FormGroup>
                    </Card>

                    <div>
                        <Card as={motion.div} variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
                            <CardTitle>
                                <FaLock />
                                Account Settings
                            </CardTitle>
                            <SettingRow>
                                <div>
                                    <SettingLabel>Email Notifications</SettingLabel>
                                    <SettingDescription>
                                        Receive notifications about project updates via email
                                    </SettingDescription>
                                </div>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={user.settings.emailNotifications}
                                        onChange={() => handleSettingToggle("emailNotifications")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <div>
                                    <SettingLabel>Project Updates</SettingLabel>
                                    <SettingDescription>Get alerts when there are changes to your projects</SettingDescription>
                                </div>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={user.settings.projectUpdates}
                                        onChange={() => handleSettingToggle("projectUpdates")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <div>
                                    <SettingLabel>Marketing Emails</SettingLabel>
                                    <SettingDescription>Receive product updates and promotional offers</SettingDescription>
                                </div>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={user.settings.marketingEmails}
                                        onChange={() => handleSettingToggle("marketingEmails")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <div>
                                    <SettingLabel>Two-Factor Authentication</SettingLabel>
                                    <SettingDescription>Add an extra layer of security to your account</SettingDescription>
                                </div>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={user.settings.twoFactorAuth}
                                        onChange={() => handleSettingToggle("twoFactorAuth")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <div>
                                    <SettingLabel>Dark Mode</SettingLabel>
                                    <SettingDescription>Use dark theme for the application interface</SettingDescription>
                                </div>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={user.settings.darkMode}
                                        onChange={() => handleSettingToggle("darkMode")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                        </Card>

                        <Card as={motion.div} variants={itemVariants}>
                            <CardTitle>
                                <FaGlobe />
                                API Access
                            </CardTitle>
                            <SettingDescription>Use this API key to access your account programmatically</SettingDescription>
                            <API_KEY>
                                {user.apiKey}
                                <PrimaryButton size="small">Regenerate</PrimaryButton>
                            </API_KEY>
                        </Card>
                    </div>
                </Grid>
            </Card>
        </motion.div>
    );
};

export default Profile;
