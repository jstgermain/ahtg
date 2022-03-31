import { Link } from 'react-router-dom';
import { Link as ExternalLink } from '@mui/material';

// Wrap something in a link with react router "to" or external links with an "href" by setting internal as false
export const WrapWithLink = ({
  color,
  link,
  internal = true,
  className = null,
  target = '_blank',
  children,
  underline = 'none',
}: any) =>
  link
    ? buildLink(color, internal, className, link, children, target, underline)
    : children;

const buildLink = (
  color: string,
  internal: any,
  className: any,
  link: any,
  children: any,
  target: any,
  underline: any
) => {
  const external =
    internal === false ? (
      <ExternalLink
        color={color}
        className={className}
        href={link}
        target={target}
        underline={underline}
      >
        {children}
      </ExternalLink>
    ) : (
      children
    );

  return internal === true ? (
    <ExternalLink
      color={color}
      component={Link}
      className={className}
      to={link}
      underline={underline}
    >
      {children}
    </ExternalLink>
  ) : (
    external
  );
};
