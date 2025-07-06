import React from 'react';
import { CircularProgress, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    padding: theme.spacing(3),
  },
  spinner: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  loadingText: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
}));

const LoadingSpinner = ({ message = "Loading..." }) => {
  const classes = useStyles();

  return (
    <Box className={classes.loadingContainer}>
      <CircularProgress 
        size={50} 
        thickness={4} 
        className={classes.spinner}
      />
      <Typography variant="body1" className={classes.loadingText}>
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
