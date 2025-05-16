import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StatsCards from "../components/StatsCards";
import {
    PageTitle,
    Card,
    PageHeader,
    TitleArea,
    SubTitle,
    ButtonGroup,
    Button,
    PrimaryButton,
    Grid,
    FlexContainer,
    ProgressCard,
    ProgressTitle,
    ProgressBar,
    ProgressValue,
    RecentActivityList,
    ActivityItem,
    ActivityTime,
    ActivityContent,
    TagList,
    Tag,
    ProjectCard,
    ProjectHeader,
    ProjectTitle,
    ProjectDescription,
    ProjectFooter,
    ProjectStatus,
    ProjectMeta,
    LinkButton,
} from "../styles/StyledComponents";

const Dashboard = () => {
    const navigate = useNavigate();
    
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
        <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ padding: '0.5rem' }}>
            <PageHeader variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
                <TitleArea>
                    <PageTitle>Dashboard</PageTitle>
                    <SubTitle>Overview of your project metrics and activities</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>
                        View Reports <FaExternalLinkAlt size={12} />
                    </Button>
                    <PrimaryButton onClick={() => navigate('/create-project')}>
                        New Project <FaPlus size={12} />
                    </PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <StatsCards />

            <Grid columns={3} style={{ gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <Card as={motion.div} variants={itemVariants} style={{ padding: '1.25rem' }}>
                    <ProjectCard>
                        <ProjectHeader>
                            <ProjectTitle>Website Redesign</ProjectTitle>
                            <ProjectStatus status="active">Active</ProjectStatus>
                        </ProjectHeader>
                        <ProjectDescription>
                            Complete overhaul of the corporate website with new branding and improved UX.
                        </ProjectDescription>
                        <ProgressTitle>Overall Progress</ProgressTitle>
                        <ProgressBar percentage={65} />
                        <ProjectFooter>
                            <ProjectMeta>Due in 14 days</ProjectMeta>
                            <LinkButton to="/projects/1">
                                View Details <FaArrowRight size={12} />
                            </LinkButton>
                        </ProjectFooter>
                    </ProjectCard>
                </Card>

                <Card as={motion.div} variants={itemVariants} style={{ padding: '1.25rem' }}>
                    <ProjectCard>
                        <ProjectHeader>
                            <ProjectTitle>E-Commerce Integration</ProjectTitle>
                            <ProjectStatus status="planning">Planning</ProjectStatus>
                        </ProjectHeader>
                        <ProjectDescription>
                            Integration of payment gateways and inventory management system with the online store.
                        </ProjectDescription>
                        <ProgressTitle>Overall Progress</ProgressTitle>
                        <ProgressBar percentage={25} />
                        <ProjectFooter>
                            <ProjectMeta>Due in 30 days</ProjectMeta>
                            <LinkButton to="/projects/2">
                                View Details <FaArrowRight size={12} />
                            </LinkButton>
                        </ProjectFooter>
                    </ProjectCard>
                </Card>

                <Card as={motion.div} variants={itemVariants} style={{ padding: '1.25rem' }}>
                    <h3>Recent Activity</h3>
                    <RecentActivityList>
                        <ActivityItem>
                            <ActivityTime>2h ago</ActivityTime>
                            <ActivityContent>
                                <strong>Design Team</strong> completed the wireframes for the homepage redesign
                                <TagList>
                                    <Tag>Design</Tag>
                                    <Tag>Frontend</Tag>
                                </TagList>
                            </ActivityContent>
                        </ActivityItem>
                        <ActivityItem>
                            <ActivityTime>5h ago</ActivityTime>
                            <ActivityContent>
                                <strong>API Integration</strong> phase completed for CRM connection
                                <TagList>
                                    <Tag>Development</Tag>
                                    <Tag>API</Tag>
                                </TagList>
                            </ActivityContent>
                        </ActivityItem>
                        <ActivityItem>
                            <ActivityTime>Yesterday</ActivityTime>
                            <ActivityContent>
                                <strong>Content Team</strong> delivered the updated product descriptions
                                <TagList>
                                    <Tag>Content</Tag>
                                    <Tag>Marketing</Tag>
                                </TagList>
                            </ActivityContent>
                        </ActivityItem>
                        <ActivityItem>
                            <ActivityTime>2 days ago</ActivityTime>
                            <ActivityContent>
                                <strong>SEO audit</strong> completed with 15 action items identified
                                <TagList>
                                    <Tag>SEO</Tag>
                                    <Tag>Marketing</Tag>
                                </TagList>
                            </ActivityContent>
                        </ActivityItem>
                    </RecentActivityList>
                </Card>
            </Grid>

            <FlexContainer as={motion.div} variants={itemVariants} style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <Card style={{ flex: 2, padding: '1.25rem' }}>
                    <h3>Service Performance</h3>
                    <Grid columns={2} gap="1rem">
                        <ProgressCard>
                            <ProgressTitle>Development Services</ProgressTitle>
                            <ProgressBar percentage={78} color="primary" />
                            <ProgressValue>78% Utilization</ProgressValue>
                        </ProgressCard>
                        <ProgressCard>
                            <ProgressTitle>Design Services</ProgressTitle>
                            <ProgressBar percentage={92} color="secondary" />
                            <ProgressValue>92% Utilization</ProgressValue>
                        </ProgressCard>
                        <ProgressCard>
                            <ProgressTitle>Marketing Services</ProgressTitle>
                            <ProgressBar percentage={45} color="warning" />
                            <ProgressValue>45% Utilization</ProgressValue>
                        </ProgressCard>
                        <ProgressCard>
                            <ProgressTitle>SEO Services</ProgressTitle>
                            <ProgressBar percentage={63} color="success" />
                            <ProgressValue>63% Utilization</ProgressValue>
                        </ProgressCard>
                    </Grid>
                </Card>

                <Card style={{ flex: 1, padding: '1.25rem' }}>
                    <h3>Upcoming Tasks</h3>
                    <RecentActivityList>
                        <ActivityItem>
                            <ActivityTime>Today</ActivityTime>
                            <ActivityContent>
                                <strong>Finalize design</strong> for homepage banner
                            </ActivityContent>
                        </ActivityItem>
                        <ActivityItem>
                            <ActivityTime>Tomorrow</ActivityTime>
                            <ActivityContent>
                                <strong>Meeting</strong> with client to review progress
                            </ActivityContent>
                        </ActivityItem>
                        <ActivityItem>
                            <ActivityTime>2 days</ActivityTime>
                            <ActivityContent>
                                <strong>Code review</strong> for checkout process
                            </ActivityContent>
                        </ActivityItem>
                        <ActivityItem>
                            <ActivityTime>2 days</ActivityTime>
                            <ActivityContent>
                                <strong>Optimize</strong> product images for new catalog
                            </ActivityContent>
                        </ActivityItem>
                    </RecentActivityList>
                </Card>
            </FlexContainer>
        </motion.div>
    );
};

export default Dashboard;
