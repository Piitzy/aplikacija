import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCog, FaBell, FaUserShield, FaDesktop, FaFileAlt, FaDatabase, FaSave } from "react-icons/fa";
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

const SettingsNav = styled.div`
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border);
    display: flex;
    overflow-x: auto;
    padding-bottom: 0.25rem;

    @media (max-width: 768px) {
        flex-wrap: nowrap;
    }
`;

const NavItem = styled.button`
    padding: 1rem 1.5rem;
    color: ${(props) => (props.active ? "var(--primary)" : "var(--text-light)")};
    font-weight: ${(props) => (props.active ? "600" : "normal")};
    background: transparent;
    border: none;
    border-bottom: 2px solid ${(props) => (props.active ? "var(--primary)" : "transparent")};
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;

    svg {
        font-size: 1rem;
    }

    &:hover {
        color: var(--primary);
    }
`;

const SettingSection = styled.div`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        color: var(--primary);
    }
`;

const SettingRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border);

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
`;

const SettingInfo = styled.div`
    flex: 1;
`;

const SettingTitle = styled.div`
    font-weight: 500;
    color: var(--text);
    margin-bottom: 0.25rem;
`;

const SettingDescription = styled.div`
    font-size: 0.85rem;
    color: var(--text-light);
`;

const ToggleSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 52px;
    height: 26px;

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
        border-radius: 26px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
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

const SelectInput = styled.select`
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background-color: var(--card-bg);
    color: var(--text);
    font-size: 0.9rem;
    min-width: 200px;

    &:focus {
        outline: none;
        border-color: var(--primary-light);
        box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
    }
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const FormLabel = styled.label`
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--text);
`;

const FormInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background-color: var(--card-bg);
    color: var(--text);
    font-size: 0.9rem;

    &:focus {
        outline: none;
        border-color: var(--primary-light);
        box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
    }
`;

const FormActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
`;

const Settings = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [settings, setSettings] = useState({
        general: {
            darkMode: false,
            compactMode: true,
            language: "en",
            timezone: "UTC",
            currency: "USD",
        },
        notifications: {
            emailNotifications: true,
            smsNotifications: false,
            projectUpdates: true,
            marketingEmails: false,
            taskAssignments: true,
            taskComments: true,
        },
        privacy: {
            twoFactorAuth: false,
            passwordExpiry: "90days",
            saveLoginHistory: true,
            allowDataCollection: true,
        },
        appearance: {
            theme: "light",
            sidebarPosition: "left",
            accentColor: "#4f46e5",
            fontFamily: "Inter",
        },
        integrations: {
            googleWorkspace: true,
            slack: false,
            github: true,
            dropbox: false,
            zapier: true,
        },
    });

    const handleToggle = (section, setting) => {
        setSettings({
            ...settings,
            [section]: {
                ...settings[section],
                [setting]: !settings[section][setting],
            },
        });
    };

    const handleSelectChange = (section, setting, value) => {
        setSettings({
            ...settings,
            [section]: {
                ...settings[section],
                [setting]: value,
            },
        });
    };

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

    const renderTabContent = () => {
        switch (activeTab) {
            case "general":
                return (
                    <>
                        <SettingSection>
                            <SectionTitle>
                                <FaCog />
                                General Settings
                            </SectionTitle>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Dark Mode</SettingTitle>
                                    <SettingDescription>
                                        Enable dark mode for the entire application interface
                                    </SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.general.darkMode}
                                        onChange={() => handleToggle("general", "darkMode")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Compact Mode</SettingTitle>
                                    <SettingDescription>
                                        Reduce padding and spacing for a more compact interface
                                    </SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.general.compactMode}
                                        onChange={() => handleToggle("general", "compactMode")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Language</SettingTitle>
                                    <SettingDescription>Select your preferred language for the application</SettingDescription>
                                </SettingInfo>
                                <SelectInput
                                    value={settings.general.language}
                                    onChange={(e) => handleSelectChange("general", "language", e.target.value)}
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="ja">Japanese</option>
                                </SelectInput>
                            </SettingRow>
                        </SettingSection>
                    </>
                );
            case "notifications":
                return (
                    <>
                        <SettingSection>
                            <SectionTitle>
                                <FaBell />
                                Notification Settings
                            </SectionTitle>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Email Notifications</SettingTitle>
                                    <SettingDescription>Receive notifications via email</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.emailNotifications}
                                        onChange={() => handleToggle("notifications", "emailNotifications")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>SMS Notifications</SettingTitle>
                                    <SettingDescription>Receive notifications via SMS</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.smsNotifications}
                                        onChange={() => handleToggle("notifications", "smsNotifications")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Project Updates</SettingTitle>
                                    <SettingDescription>Notifications for project status changes</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.projectUpdates}
                                        onChange={() => handleToggle("notifications", "projectUpdates")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Task Assignments</SettingTitle>
                                    <SettingDescription>Notifications when tasks are assigned to you</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications.taskAssignments}
                                        onChange={() => handleToggle("notifications", "taskAssignments")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                        </SettingSection>
                    </>
                );
            case "privacy":
                return (
                    <>
                        <SettingSection>
                            <SectionTitle>
                                <FaUserShield />
                                Privacy & Security
                            </SectionTitle>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Two-Factor Authentication</SettingTitle>
                                    <SettingDescription>Add an extra layer of security to your account</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.privacy.twoFactorAuth}
                                        onChange={() => handleToggle("privacy", "twoFactorAuth")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Password Expiry</SettingTitle>
                                    <SettingDescription>How often you need to change your password</SettingDescription>
                                </SettingInfo>
                                <SelectInput
                                    value={settings.privacy.passwordExpiry}
                                    onChange={(e) => handleSelectChange("privacy", "passwordExpiry", e.target.value)}
                                >
                                    <option value="never">Never</option>
                                    <option value="30days">30 days</option>
                                    <option value="60days">60 days</option>
                                    <option value="90days">90 days</option>
                                </SelectInput>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Save Login History</SettingTitle>
                                    <SettingDescription>Track and store your login activities</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.privacy.saveLoginHistory}
                                        onChange={() => handleToggle("privacy", "saveLoginHistory")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                        </SettingSection>
                    </>
                );
            case "appearance":
                return (
                    <>
                        <Grid columns={2}>
                            <Card>
                                <SectionTitle>
                                    <FaDesktop />
                                    Interface Settings
                                </SectionTitle>
                                <FormGroup>
                                    <FormLabel>Theme</FormLabel>
                                    <SelectInput
                                        value={settings.appearance.theme}
                                        onChange={(e) => handleSelectChange("appearance", "theme", e.target.value)}
                                    >
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="system">System Default</option>
                                    </SelectInput>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Sidebar Position</FormLabel>
                                    <SelectInput
                                        value={settings.appearance.sidebarPosition}
                                        onChange={(e) => handleSelectChange("appearance", "sidebarPosition", e.target.value)}
                                    >
                                        <option value="left">Left</option>
                                        <option value="right">Right</option>
                                    </SelectInput>
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Font Family</FormLabel>
                                    <SelectInput
                                        value={settings.appearance.fontFamily}
                                        onChange={(e) => handleSelectChange("appearance", "fontFamily", e.target.value)}
                                    >
                                        <option value="Inter">Inter</option>
                                        <option value="Roboto">Roboto</option>
                                        <option value="SF Pro">SF Pro</option>
                                        <option value="Open Sans">Open Sans</option>
                                    </SelectInput>
                                </FormGroup>
                            </Card>
                            <Card>
                                <SectionTitle>
                                    <FaPaintBrush />
                                    Theme Customization
                                </SectionTitle>
                                <FormGroup>
                                    <FormLabel>Accent Color</FormLabel>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <div
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor: settings.appearance.accentColor,
                                                borderRadius: "4px",
                                                border: "1px solid var(--border)",
                                            }}
                                        />
                                        <FormInput
                                            type="text"
                                            value={settings.appearance.accentColor}
                                            onChange={(e) => handleSelectChange("appearance", "accentColor", e.target.value)}
                                        />
                                    </div>
                                </FormGroup>
                            </Card>
                        </Grid>
                    </>
                );
            case "integrations":
                return (
                    <>
                        <SettingSection>
                            <SectionTitle>
                                <FaDatabase />
                                Connected Services
                            </SectionTitle>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Google Workspace</SettingTitle>
                                    <SettingDescription>
                                        Connect your Google account for seamless integration
                                    </SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.integrations.googleWorkspace}
                                        onChange={() => handleToggle("integrations", "googleWorkspace")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Slack</SettingTitle>
                                    <SettingDescription>Connect to your Slack workspace for notifications</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.integrations.slack}
                                        onChange={() => handleToggle("integrations", "slack")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>GitHub</SettingTitle>
                                    <SettingDescription>Connect to GitHub for version control integration</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.integrations.github}
                                        onChange={() => handleToggle("integrations", "github")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                            <SettingRow>
                                <SettingInfo>
                                    <SettingTitle>Dropbox</SettingTitle>
                                    <SettingDescription>Connect to Dropbox for file sharing</SettingDescription>
                                </SettingInfo>
                                <ToggleSwitch>
                                    <input
                                        type="checkbox"
                                        checked={settings.integrations.dropbox}
                                        onChange={() => handleToggle("integrations", "dropbox")}
                                    />
                                    <span className="slider"></span>
                                </ToggleSwitch>
                            </SettingRow>
                        </SettingSection>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <PageHeader variants={itemVariants}>
                <TitleArea>
                    <PageTitle>Settings</PageTitle>
                    <SubTitle>Customize your application preferences</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <PrimaryButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <FaSave size={14} style={{ marginRight: "0.5rem" }} />
                        Save Changes
                    </PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <Card as={motion.div} variants={itemVariants}>
                <SettingsNav>
                    <NavItem active={activeTab === "general"} onClick={() => setActiveTab("general")}>
                        <FaCog /> General
                    </NavItem>
                    <NavItem active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")}>
                        <FaBell /> Notifications
                    </NavItem>
                    <NavItem active={activeTab === "privacy"} onClick={() => setActiveTab("privacy")}>
                        <FaUserShield /> Privacy & Security
                    </NavItem>
                    <NavItem active={activeTab === "appearance"} onClick={() => setActiveTab("appearance")}>
                        <FaDesktop /> Appearance
                    </NavItem>
                    <NavItem active={activeTab === "integrations"} onClick={() => setActiveTab("integrations")}>
                        <FaDatabase /> Integrations
                    </NavItem>
                </SettingsNav>

                {renderTabContent()}

                <FormActions>
                    <Button>Reset to Default</Button>
                    <PrimaryButton>Save Changes</PrimaryButton>
                </FormActions>
            </Card>
        </motion.div>
    );
};

const FaPaintBrush = ({ size = 16, ...props }) => {
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
            <path d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path>
        </svg>
    );
};

export default Settings;
