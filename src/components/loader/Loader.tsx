import { LoaderContainer } from './loader.style';

interface LoaderProps {
  size?: number;
  color?: string;
}

export const Loader = ({
  size = 5,
  color = '#3498db',
}: LoaderProps): JSX.Element => <LoaderContainer size={size} color={color} />;
