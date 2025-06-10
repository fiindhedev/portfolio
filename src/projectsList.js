import {FaReact} from 'react-icons/fa'
import {FaPhp} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {FaJs} from "react-icons/fa6";
import {FaHtml5} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {PiFileSqlLight} from "react-icons/pi";
import {SiMongodb} from "react-icons/si";
import {SiFlask} from "react-icons/si";

export const Projects =[
    {
        name: 'My Portfolio',
        description:
            'A front-end portfolio built with ReactJS, Html, Css and React Bootstrap. ' +
            'This project is a great showcase of my web development skills specifically front-end.' +
            'It is a great project which I believe can convince recruiters to hire me. ' +
            'The website shows my skills, projects, resume and all important information. ' +
            'There is a big room for improvement',
        languages: [<FaHtml5 />,<FaCss3 />, <FaReact size={30}/>],
        link: 'https://hamseportfolio.com/'

    },
    {
        name: 'University Fee System',
        description:
            'A Full-stack University Fee Management Web App built with HTML, CSS, Bootstrap, PHP and SQL.' +
            'This app was made for specific university but can be used by any university with minor changes.' +
            'The app has every functionality needed. It is a great way to make universities systems efficient.' +
            'You can register students, store fee payments and make fee calculations.',
        languages: [<FaHtml5 />,<FaCss3 />, <FaPhp size={30}/>, <PiFileSqlLight />],
        link: 'https://github.com/fiindhedev/PHP-uni-fee-system',
    },

    {
    name: 'Inventory System'    ,
    description: 'My Java Inventory Management System is a feature-rich desktop application developed using Java ' +
        'and Swing, with JDBC for database integration (MySQL/SQLite). It allows full inventory control including ' +
        'product CRUD operations, real-time stock tracking, supplier and category management, sales and purchase ' +
        'recording, user authentication with roles (Admin/Staff), low-stock alerts, and dynamic search and filter ' +
        'functions. The system also supports report generation and maintains transaction logs for accountability ' +
        'and auditing.'    ,
        languages: [<FaJava/>, <PiFileSqlLight />]
    },

    {
        name: 'Voting System',
        description:'A voting system built with Python, Flask, HTML and CSS. Initially built for Canada Election,' +
        ' but can be used for multiple applications with minor changes. It registers voters, allows voting and ' +
            'counting votes showing real-time results of every party/candidate after every vote. The app displays ' +
            'latest 5 news of Canadian Election by using News API. It uses MongoDB as a database to store voter data, ' +
            'votes and other important data. I am in the process of adding Face Recognition to check voter eligibility ' +
            'and identity before they vote. It also regulates system fairness by not allowing any unregistered person ' +
            'to vote or any voter to vote twice.',
        languages: [<FaHtml5 />,<FaCss3 />, <FaPython size={30}/>, <SiFlask />, <SiMongodb />],
        link: 'https://github.com/fiindhedev/voting/tree/main/Election',
    },
    {
        name: 'Hotel System',
        description:'This is a Hotel Management System built with Java. It is the perfect app for managing hotels. Room' +
            'management, customer registration & payments, employee registration & payments and hotel yearly or monthly profits.' +
            'The app cannot allow an occupied room to be booked by a customer, it doesnt allow employees who already got their' +
            'salary to be paid again, it regulates what customers, assistants and admins can see and manage. For instance, the admin can' +
            'see and manage everything, the assistant(s) can only manage rooms and customers and customers can only see their info and book rooms.' +
            'It is also very easy way to process different payments.',
        languages: [<FaJava size={30}/>, <PiFileSqlLight />],
        link: 'https://github.com/fiindhedev/Java-hotel-System',
    },


]