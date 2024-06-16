import React from 'react';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { useStyles } from './styles';


interface LinearLoaderProps {
  visible?: boolean;
  loading?: boolean;
  value?: number;
  color?: 'primary' | 'secondary';
  className?: string | null;
}

const LinearLoader: React.FC<LinearLoaderProps> = (props) => {
  const classes = useStyles();
  const { visible = false, loading = true, value, color = 'primary', className = null } = props;

  if (!visible) {
    return null;
  }

  const otherProps: Partial<LinearProgressProps> = {};
  if (!loading) {
    otherProps.value = value === 0 ? 0 : 100;
    otherProps.variant = 'determinate';
  }

  return (
    <div className={classes.root}>
      <LinearProgress
        color={color}
        classes={{ root: [classes.linearProgress, className].join(' ') }}
        {...otherProps}
      />
    </div>
  );
};

export default LinearLoader;
