import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import ServiceSelection from "../components/ServiceSelection";
import { useNavigate } from "react-router-dom";
import {
    PageTitle,
    PageHeader,
    TitleArea,
    SubTitle,
    ButtonGroup,
    Button,
} from "../styles/StyledComponents";

const CreateProject = () => {
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
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <PageHeader variants={itemVariants}>
                <TitleArea>
                    <PageTitle>Create New Project</PageTitle>
                    <SubTitle>Select services and configure project parameters</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button onClick={() => navigate('/')}>
                        <FaArrowLeft size={12} /> Back to Dashboard
                    </Button>
                </ButtonGroup>
            </PageHeader>

            <ServiceSelection />
        </motion.div>
    );
};

export default CreateProject; 