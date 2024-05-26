import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';


// Estilos
const useStyles = makeStyles((theme: Theme) => ({
  labeledLoaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  progress: (props: { color: 'primary' | 'secondary' | 'white' }) => ({
    color:
      props.color === 'white'
        ? '#FFFFFF'
        : theme.palette[props.color].main,
  }),
  label: {
    marginTop: theme.spacing(2),
  },
}));

interface CircularLoaderProps {
  color?: 'primary' | 'secondary' | 'white';
  size?: number;
  label?: string;
  marginTop?: number;
  style?: React.CSSProperties;
  className?: string;
}

const CircularLoader: React.FC<CircularLoaderProps> = (props) => {
  const {
    color = 'primary',
    size = 40,
    marginTop = 30,
    style = {},
    className,
    ...otherProps
  } = props;

  const classes = useStyles({ color });

  return (
    <div className={classes.labeledLoaderContainer}>
      <CircularProgress
        size={size}
        className={[classes.progress, className].join(' ')}
        style={{
          ...style,
          marginTop,
        }}
        variant="indeterminate"
        {...otherProps}
      />
    </div>
  );
};

export default CircularLoader;
