import { ProjectT } from "../types/project";

export const projects:ProjectT[] = [
    {
        id:1,
        name:'CellRoyale',
        links:[
            {
                name:'deployed site',
                href:'https://den-st.github.io/CellRoyale/ '
            },
            {
                name:'client',
                href:'https://github.com/Den-St/CellRoyale'
            },
        ],
        description:'Web game.',
        technologies:{
            client:['React','Redux-Toolkit','Styled-Components',
                    'Ant design', 'React-hook-form', 'React-router-dom'],
            server:['Firebase Firestore']
        }
    },
    {
        id:2,
        name:'GreatDeal',
        links:[
            {
                name:'deployed site',
                href:'https://den-st.github.io/GreatDeal-client/'
            },
            {
                name:'client',
                href:'https://github.com/Den-St/GreatDeal-client'
            },
        ],
        description:'Web-application for searching for job using map.',
        technologies:{
            client:["React", "Redux-Toolkit","Styled-Components","Ant design",
                    "React-hook-form", "React-router-dom", "Leaflet"],
            server:['Firebase Firestore']
        }
    },
    {
        id:3,
        name:'CollegE-Journal',
        links:[
            {
                name:'deployed site',
                href:'https://den-st.github.io/CollegE-Journal'
            },
            {
                name:'client',
                href:'https://github.com/Den-St/CollegE-Journal'
            },
        ],
        description:'E-Journal for college.',
        technologies:{
            client:['React', 'Zustand','React-hook-form',
                    'React-router-dom', 'Ant-design'],
        }
    },
    {
        id:4,
        name:'Online-store',
        links:[
            {
                name:'client',
                href:'https://github.com/Den-St/Online-store-client'
            },
            {
                name:'server',
                href:'https://github.com/Den-St/Online-store-server'
            },
        ],
        description:'For this project i wrote both client and server sides.',
        technologies:{
            client:['React', 'Recoil', 'Styled-Components', 'GraphQL', 'Ant-design'],
            server:['NestJs', 'GraphQL', 'Postgres']
        }
    },
    {
        id:5,
        name:'Forum',
        links:[
            {
                name:'client',
                href:'https://github.com/Den-St/Questy-client'
            },
            {
                name:'server',
                href:'https://github.com/Den-St/Questy-server'
            },
        ],
        description:'For this project i wrote both client and server sides.',
        technologies:{
            client:['React', 'Redux ToolKit', 'NextJs', 'Styled-Components', 'Axios', 'Ant-design'],
            server:['NestJs', 'Postgres']
        }
    },
];