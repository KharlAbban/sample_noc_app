import { FaChartPie, FaCog, FaCubes, FaFileMedical, FaTicketAlt } from "react-icons/fa";

export const sideMenuItems = [
        {
            "id": 1,
            "linkTo": "/home",
            "icon": <FaCubes />,
            "linkText": "DASHBOARD"
        },
        {
            "id": 2,
            "linkTo": "/home/tickets",
            "icon": <FaTicketAlt />,
            "linkText": "TICKETS"
        },
        {
            "id": 3,
            "linkTo": "/home/tickets/new",
            "icon": <FaFileMedical />,
            "linkText": "NEW TICKET"
        },
        {
            "id": 4,
            "linkTo": "/home/stats",
            "icon": <FaChartPie />,
            "linkText": "STATISTICS"
        },{
            "id": 5,
            "linkTo": "/home/settings",
            "icon": <FaCog />,
            "linkText": "SETTINGS"
        }
    ]