import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaCalendarDay, FaUser, FaMapMarkerAlt, FaTag, FaClock } from "react-icons/fa";
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
    Tag,
    TagList,
} from "../styles/StyledComponents";
import styled from "styled-components";

// Calendar specific styled components
const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const MonthPicker = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const MonthTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    min-width: 200px;
    text-align: center;
`;

const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;
`;

const DayHeader = styled.div`
    font-weight: 600;
    color: var(--text-light);
    text-align: center;
    padding: 0.5rem;
    text-transform: uppercase;
    font-size: 0.75rem;
`;

const DayCell = styled.div`
    aspect-ratio: 1;
    border-radius: var(--radius);
    border: 1px solid ${(props) => (props.isCurrentMonth ? "var(--border)" : "transparent")};
    background-color: ${(props) => {
        if (!props.isCurrentMonth) return "transparent";
        if (props.isToday) return "rgba(99, 102, 241, 0.1)";
        return "var(--card-bg)";
    }};
    color: ${(props) => {
        if (!props.isCurrentMonth) return "var(--text-light)";
        if (props.isToday) return "var(--primary)";
        return "var(--text)";
    }};
    font-weight: ${(props) => (props.isToday ? "600" : "normal")};
    padding: 0.5rem;
    position: relative;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: var(--primary-light);
        transform: translateY(-2px);
    }

    .day-number {
        display: block;
        text-align: right;
        margin-bottom: 0.5rem;
    }

    .has-events {
        display: flex;
        gap: 0.25rem;
        justify-content: flex-end;
        margin-bottom: 0.25rem;
    }

    .event-indicator {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${(props) => props.eventColor || "var(--primary)"};
    }
`;

const EventsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const EventItem = styled(motion.div)`
    padding: 1rem;
    border-radius: var(--radius);
    background-color: var(--card-bg);
    border-left: 4px solid ${(props) => props.color || "var(--primary)"};
    box-shadow: var(--shadow);
    transition: all 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }
`;

const EventHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
`;

const EventTitle = styled.h3`
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.5rem;
`;

const EventTime = styled.div`
    font-size: 0.85rem;
    color: var(--text-light);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: var(--primary);
    }
`;

const EventDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 0.85rem;
    color: var(--text-light);

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
            color: var(--primary);
        }
    }
`;

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Client Meeting - Website Project",
            date: "2023-07-15",
            startTime: "10:00",
            endTime: "11:30",
            location: "Conference Room A",
            description: "Initial meeting to discuss project requirements and timeline",
            attendees: ["John Doe", "Lisa Smith", "Client Team"],
            category: "Meeting",
            color: "var(--primary)",
        },
        {
            id: 2,
            title: "Design Team Sync",
            date: "2023-07-17",
            startTime: "14:00",
            endTime: "15:00",
            location: "Design Studio",
            description: "Weekly sync to review progress on all design projects",
            attendees: ["Design Team"],
            category: "Internal",
            color: "var(--secondary)",
        },
        {
            id: 3,
            title: "Project Deadline - E-commerce App",
            date: "2023-07-21",
            startTime: "18:00",
            endTime: "18:00",
            location: "",
            description: "Final deadline for the e-commerce application project",
            attendees: [],
            category: "Deadline",
            color: "var(--danger)",
        },
        {
            id: 4,
            title: "Marketing Campaign Launch",
            date: "2023-07-18",
            startTime: "09:00",
            endTime: "10:00",
            location: "Marketing Office",
            description: "Launch meeting for the new product marketing campaign",
            attendees: ["Marketing Team", "Sales Representatives"],
            category: "Marketing",
            color: "var(--warning)",
        },
        {
            id: 5,
            title: "Team Building Event",
            date: "2023-07-28",
            startTime: "13:00",
            endTime: "17:00",
            location: "City Park",
            description: "Outdoor team building activities and BBQ",
            attendees: ["All Staff"],
            category: "Social",
            color: "var(--success)",
        },
    ]);

    const getMonthData = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();

        // Get days from previous month to fill the first week
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        const prevMonthDays = Array.from({ length: startDayOfWeek }, (_, i) => ({
            day: prevMonthLastDay - startDayOfWeek + i + 1,
            month: month - 1,
            year: year,
            isCurrentMonth: false,
        }));

        // Current month days
        const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
            day: i + 1,
            month,
            year,
            isCurrentMonth: true,
        }));

        // Combine days and add days from next month if needed
        const calendarDays = [...prevMonthDays, ...currentMonthDays];
        const remainingDays = 42 - calendarDays.length; // 6 rows * 7 columns

        const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => ({
            day: i + 1,
            month: month + 1,
            year,
            isCurrentMonth: false,
        }));

        return [...calendarDays, ...nextMonthDays];
    };

    const today = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const calendarDays = getMonthData(currentYear, currentMonth);

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const isToday = (day, month, year) => {
        return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    };

    const getDayEvents = (day, month, year) => {
        const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return events.filter((event) => event.date === dateString);
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
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
                    <PageTitle>Calendar</PageTitle>
                    <SubTitle>View and manage your events and appointments</SubTitle>
                </TitleArea>
                <ButtonGroup>
                    <Button>Today</Button>
                    <PrimaryButton as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <FaPlus size={12} style={{ marginRight: "6px" }} />
                        New Event
                    </PrimaryButton>
                </ButtonGroup>
            </PageHeader>

            <Card as={motion.div} variants={itemVariants}>
                <CalendarHeader>
                    <MonthPicker>
                        <Button onClick={handlePrevMonth}>&larr;</Button>
                        <MonthTitle>
                            {monthNames[currentMonth]} {currentYear}
                        </MonthTitle>
                        <Button onClick={handleNextMonth}>&rarr;</Button>
                    </MonthPicker>
                    <ButtonGroup>
                        <Button>Month</Button>
                        <Button>Week</Button>
                        <Button>Day</Button>
                    </ButtonGroup>
                </CalendarHeader>

                <CalendarGrid>
                    {dayNames.map((day) => (
                        <DayHeader key={day}>{day}</DayHeader>
                    ))}

                    {calendarDays.map((dayData, index) => {
                        const dayEvents = getDayEvents(dayData.day, dayData.month, dayData.year);
                        const eventsToShow = dayEvents.slice(0, 3);
                        const hasMoreEvents = dayEvents.length > 3;

                        return (
                            <DayCell
                                key={index}
                                isCurrentMonth={dayData.isCurrentMonth}
                                isToday={isToday(dayData.day, dayData.month, dayData.year)}
                            >
                                <span className="day-number">{dayData.day}</span>
                                {eventsToShow.length > 0 && (
                                    <div className="has-events">
                                        {eventsToShow.map((event, i) => (
                                            <span
                                                key={i}
                                                className="event-indicator"
                                                style={{ backgroundColor: event.color }}
                                            ></span>
                                        ))}
                                        {hasMoreEvents && (
                                            <span
                                                className="event-indicator"
                                                style={{ backgroundColor: "var(--text-light)" }}
                                            ></span>
                                        )}
                                    </div>
                                )}
                            </DayCell>
                        );
                    })}
                </CalendarGrid>
            </Card>

            <motion.div variants={itemVariants}>
                <h3 style={{ margin: "2rem 0 1rem" }}>Upcoming Events</h3>
                <EventsList>
                    {events
                        .filter((event) => new Date(event.date) >= new Date(today.setHours(0, 0, 0, 0)))
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .slice(0, 5)
                        .map((event) => (
                            <EventItem
                                key={event.id}
                                color={event.color}
                                as={motion.div}
                                whileHover={{ y: -5 }}
                                variants={itemVariants}
                            >
                                <EventHeader>
                                    <div>
                                        <EventTitle>{event.title}</EventTitle>
                                        <EventTime>
                                            <FaCalendarDay />
                                            {new Date(event.date).toLocaleDateString("en-US", {
                                                weekday: "long",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                            {event.startTime && (
                                                <>
                                                    <FaClock />
                                                    {event.startTime} - {event.endTime}
                                                </>
                                            )}
                                        </EventTime>
                                    </div>
                                    <Tag style={{ backgroundColor: `${event.color}20`, color: event.color }}>
                                        {event.category}
                                    </Tag>
                                </EventHeader>
                                <p>{event.description}</p>
                                <EventDetails>
                                    {event.location && (
                                        <div>
                                            <FaMapMarkerAlt />
                                            {event.location}
                                        </div>
                                    )}
                                    {event.attendees.length > 0 && (
                                        <div>
                                            <FaUser />
                                            {event.attendees.length} attendee{event.attendees.length !== 1 ? "s" : ""}
                                        </div>
                                    )}
                                </EventDetails>
                            </EventItem>
                        ))}
                </EventsList>
            </motion.div>
        </motion.div>
    );
};

export default Calendar;
