import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

interface Props {
  classes?: string;
  color?: any;
  disableGutters?: boolean;
  disableShrink?: boolean;
  size?: number;
  sx?: () => any;
  thickness?: number;
  value?: number;
  variation?: any;
}

const ContentLoader = (props: Props) => {
  const {
    classes,
    color,
    disableGutters,
    disableShrink,
    size,
    sx,
    thickness,
    value,
    variation,
  } = props;

  const progressProps = {
    className: classes || undefined,
    color: color || ('primary' as string),
    disableShrink: disableShrink || (false as boolean),
    size: size || (40 as number),
    sx: sx || ({} as Object),
    thickness: thickness || (3.6 as number),
    value: value || (0 as number),
    variant: variation || ('indeterminate' as string),
  };

  return (
    <Container maxWidth='lg' disableGutters={disableGutters}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item>
          <CircularProgress {...progressProps} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentLoader;
