import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { MoreDetailsModal } from "../MoreDetailsModal";
import { ButtonOpenModal } from "../MoreDetailsModal/ButtonOpenModal";
import { Article, SectionContainer } from "./styles";

type sectionType = {
    uid: string,
    title: string,
    excerpt: string,
    image: string,
}

interface SectionProps {
    sections: sectionType[];
}

export function Section({ sections }: SectionProps) {
    const [ isMoreDetailsModal, setIsMoreDetailsModal ] = useState<boolean>(false);

    function handleOpenMoreDetailsModal() {
        setIsMoreDetailsModal(true);
    }

    function handleCloseMoreDetailsModal() {
        setIsMoreDetailsModal(false);
    }

    return (
        <>
            <SectionContainer>

                {sections.map(sectionItem => (
                    <section key={ sectionItem.uid }>
                        <Article>
                            <h1>{ sectionItem.title }</h1>
                            
                            <p>{ sectionItem.excerpt }</p>

                            <ButtonOpenModal 
                                onOpenMoreDetailsModal={ handleOpenMoreDetailsModal }
                            />
                        </Article>
                    </section>
                ))}
                <button
                    type="button"
                >
                    <FiArrowRight />
                </button>
            </SectionContainer>
            
            <MoreDetailsModal 
                isOpen={ isMoreDetailsModal }
                onRequestClose={ handleCloseMoreDetailsModal }
            />
        </>
    );
}