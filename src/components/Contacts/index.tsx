import { contactsItems } from "../../consts/contacts"
import { Contact, ContactItemContainer, ContactLink } from "./styles"

export const Contacts = () => {
    return <>
        {contactsItems.map(contact => 
            contact.type === 'phone' ? 
            <ContactItemContainer key={contact.id}>
                {contact.icon} <Contact>{contact.text}</Contact>
            </ContactItemContainer>
            : <ContactItemContainer key={contact.id}>
                {contact.icon} <ContactLink href={contact.href}>{contact.text}</ContactLink>
            </ContactItemContainer>
        )}
    </>
}