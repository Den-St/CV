export type ContactT = {
    id:number,
    type:'phone' | 'mail' | 'link',
    text:string,
    href:string,
    icon:React.ReactNode
};