import { WrapWithLink } from '../../hoc';
import { LogoIcon } from './icons';

interface Props {
  classes?: string;
  color?: string;
  link?: string;
  size?: number;
  width?: number;
  variation?: string;
}

const Brand = (props: Props) => {
  const { classes, color, link, size, width, variation } = props;

  return (
    <div className={classes}>
      {link ? (
        <WrapWithLink link={link}>
          <LogoIcon
            style={{
              fill: color,
              width: width,
              fontSize: size,
            }}
            variant={variation}
          />
        </WrapWithLink>
      ) : (
        <LogoIcon
          style={{
            fill: color,
            width: width,
            fontSize: size,
          }}
          variant={variation}
        />
      )}
    </div>
  );
};

export default Brand;
