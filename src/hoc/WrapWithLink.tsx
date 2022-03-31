import { Link } from 'react-router-dom';
import { Link as ExternalLink } from '@mui/material';

// Wrap something in a link with react router "to" or external links with an "href" by setting internal as false
export const WrapWithLink = ({
  link,
  internal = true,
  className = null,
  target = '_blank',
  children,
}: any) =>
  link ? buildLink(internal, className, link, children, target) : children;

const buildLink = (
  internal: any,
  className: any,
  link: any,
  children: any,
  target: any
) => {
  const external =
    internal === false ? (
      <ExternalLink className={className} href={link} target={target}>
        {children}
      </ExternalLink>
    ) : (
      children
    );

  return internal === true ? (
    <Link className={className} to={link}>
      {children}
    </Link>
  ) : (
    external
  );
};
