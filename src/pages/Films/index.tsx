import { FiArrowRight } from "react-icons/fi";
import { CharacteresArticle, CharacteresContent } from "./styles";
import { Header } from "../../components/Header";
import { Container } from "../../styles/common";

export function Films() {
    return (
        <>
            <Header />

            <Container>
                <CharacteresContent >
                    <section>
                        <CharacteresArticle>
                            <h1>Homem Aranha</h1>
                            
                            <p>
                                lorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sitlorem ipsum dolor sit
                            </p>

                            <a
                                href="#"
                            >
                                ver detalhes
                            </a>
                        </CharacteresArticle>
                    </section>

                    <section>
                        <CharacteresArticle>
                            <h1>Homem Aranha</h1>
                            
                            <p>
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                            </p>

                            <a
                                href="#"
                            >
                                ver detalhes
                            </a>
                        </CharacteresArticle>
                    </section>

                    <section>
                        <CharacteresArticle>
                            <h1>Homem Aranha</h1>
                            
                            <p>
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                                lorem ipsum dolor sit
                            </p>

                            <a
                                href="#"
                            >
                                ver detalhes
                            </a>
                        </CharacteresArticle>
                    </section>

                    <button
                        type="button"
                    >
                        <FiArrowRight />
                    </button>
                </CharacteresContent>
            </Container>
        </>
    );
}