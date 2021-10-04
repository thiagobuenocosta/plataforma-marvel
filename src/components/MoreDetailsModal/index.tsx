import { FiXCircle } from 'react-icons/fi';
import Modal from 'react-modal';

import oMiranhaImage from '../../assets/images/miranha.png';
import { ModalContent } from './styles';

interface MoreDetailsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function MoreDetailsModal({ isOpen, onRequestClose }: MoreDetailsModalProps) {
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <ModalContent>
                <img src={ oMiranhaImage } alt="oMiranhaImage" />

                <div>
                    <h1>Title</h1>

                    <p>Detalhes - 1</p>
                    
                    <h3>disponibilidade</h3>

                    <img src={ oMiranhaImage } alt="oMiranhaImage" />

                    <h2>Avaliação/crpitica</h2>
                    <span>*****</span>
                </div>

                <button 
                    type="button" 
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiXCircle />
                </button>
            </ModalContent>
        </Modal>
    );
}