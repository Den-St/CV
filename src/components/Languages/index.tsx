import { Language, LanguageContainer, LanguageRating } from "./styles"

export const Languages = () => {
    return <>
        <LanguageContainer>
            <Language>English</Language>
            <LanguageRating>B2</LanguageRating>
        </LanguageContainer>
        <LanguageContainer>
            <Language>Ukrainian</Language>
            <LanguageRating>C2</LanguageRating>
        </LanguageContainer>
    </>
}