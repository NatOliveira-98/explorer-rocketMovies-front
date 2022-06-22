import Container from './styles';

type TagProps = {
  title: string;
};

export const Tag = ({ title }: TagProps) => {
  return <Container>{title}</Container>;
};
