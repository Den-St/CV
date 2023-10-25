import { ProjectT } from "../types/project";

export const projects:ProjectT[] = [
    {
        id:1,
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
        id:2,
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
    {
        id:3,
        name:'GreatDeal',
        links:[
            {
                name:'client',
                href:'https://den-st.github.io/GreatDeal-client/'
            },
        ],
        description:'Веб-застосунок для пошуку роботи за допомогою мапи.',
        technologies:{
            client:['React', 'Redux ToolKit', 'NextJs', 'Styled-Components', 'Axios', 'Ant-design'],
            server:['NestJs', 'Postgres']
        }
    },
    ];