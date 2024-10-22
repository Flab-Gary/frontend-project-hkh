import { FC } from 'react';
import classnames from 'classnames';

import { TypographyType, TypographySize, TypographyColor } from '@/constant';
interface TypographyProps {
  text: string;
  type: TypographyType;
  size?: TypographySize;
  isTitle?: boolean;
  color?: TypographyColor;
}

const Typography: FC<TypographyProps> = ({
  text,
  type,
  size = TypographySize.MEDIUM,
  isTitle = true,
  color = TypographyColor.BLACK,
}) => {
  const className = classnames(type, size, color);

  if (isTitle) {
    return <h1 className={className}>{text}</h1>;
  }

  return <p className={className}>{text}</p>;
};

export default Typography;
