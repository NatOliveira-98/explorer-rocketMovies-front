import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

export const ReturnToHome = () => {
  return (
    <Container href="/">
      <FiArrowLeft size={20} />
      Voltar
    </Container>
  );
};
