import { Button } from "./styles";

interface ButtonOpenModalProps {
    onOpenMoreDetailsModal: () => void,
}

export function ButtonOpenModal({ onOpenMoreDetailsModal }: ButtonOpenModalProps) {
    return (
        <Button onClick={ onOpenMoreDetailsModal }>
            ver detalhes
        </Button>
    );
}