import {GithubOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import { ContactT } from '../types/contact';


export const contactsItems:ContactT[] = [
    {
        id:1,
        href:'067 71 64 955',
        text:'067 71 64 955',
        type:'phone',
        icon:<PhoneOutlined/>
    },
    {
        id:2,
        href:'https://github.com/Den-St',
        text:'https://github.com/Den-St',
        type:'link',
        icon:<GithubOutlined/>
    },
    {
        id:3,
        href:'mailto:stuenkden@gmail.com',
        text:'stuenkden@gmail.com',
        type:'mail',
        icon:<MailOutlined/>
    },
];