import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { StatCardsGrid, StatCard, StatCardTitle, StatCardValue, StatCardFooter } from "../styles/StyledComponents";

const StatsCards = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut",
            },
        }),
    };

    return (
        <StatCardsGrid>
            <StatCard variants={cardVariants} initial="hidden" animate="visible" custom={0}>
                <StatCardTitle>Total Projects</StatCardTitle>
                <StatCardValue>24</StatCardValue>
                <StatCardFooter positive>
                    <FaArrowUp /> 12% from last month
                </StatCardFooter>
            </StatCard>

            <StatCard variants={cardVariants} initial="hidden" animate="visible" custom={1}>
                <StatCardTitle>Active Services</StatCardTitle>
                <StatCardValue>42</StatCardValue>
                <StatCardFooter positive>
                    <FaArrowUp /> 8% from last month
                </StatCardFooter>
            </StatCard>

            <StatCard variants={cardVariants} initial="hidden" animate="visible" custom={2}>
                <StatCardTitle>Avg. Project Value</StatCardTitle>
                <StatCardValue>$12,450</StatCardValue>
                <StatCardFooter positive>
                    <FaArrowUp /> 5% from last month
                </StatCardFooter>
            </StatCard>

            <StatCard variants={cardVariants} initial="hidden" animate="visible" custom={3}>
                <StatCardTitle>Completion Rate</StatCardTitle>
                <StatCardValue>94%</StatCardValue>
                <StatCardFooter>
                    <FaArrowDown /> 2% from last month
                </StatCardFooter>
            </StatCard>
        </StatCardsGrid>
    );
};

export default StatsCards;
