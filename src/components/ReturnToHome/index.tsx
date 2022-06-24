import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

export const ReturnToHome = () => {
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft size={20} />
        Voltar
      </Link>
    </Container>
  );
};
