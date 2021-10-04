import { Header } from "../../components/Header";
import { Container } from "../../styles/common";
import { Section } from "../../components/Section";

const heroesMookie = [
    {
        uid: "omiranhaUid1",
        title: "Homem AranhaA",
        excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat natus debitis rem inventore quis sapiente quod.",
        image: "oMiranhaImage",
        rates: 3.2
    },
    {
        uid: "omiranhaUid2",
        title: "Homem AranhaAA",
        excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat natus debitis rem inventore quis sapiente quod.",
        image: "oMiranhaImage",
        rates: 4.3
    },
    {
        uid: "omiranhaUid3",
        title: "Homem AranhaAAA",
        excerpt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat natus debitis rem inventore quis sapiente quod.",
        image: "oMiranhaImage",
        rates: 5.4
    },
];

export function Characteres() {
    return (
        <>
            <Header />

            <Container>
                <Section sections={ heroesMookie } />
            </Container>
        </>
    );
}