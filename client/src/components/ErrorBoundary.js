import React from 'react';
import { Box, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  errorIcon: {
    fontSize: '4rem',
    color: theme.palette.error.main,
    marginBottom: theme.spacing(2),
  },
  errorTitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.error.main,
    fontWeight: 600,
  },
  errorMessage: {
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    maxWidth: '600px',
  },
  retryButton: {
    marginTop: theme.spacing(2),
  },
}));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onRetry={this.handleRetry} error={this.state.error} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ onRetry, error }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.errorContainer}>
      <ErrorOutlineIcon className={classes.errorIcon} />
      <Typography variant="h4" className={classes.errorTitle}>
        Oops! Something went wrong
      </Typography>
      <Typography variant="body1" className={classes.errorMessage}>
        We're sorry, but something unexpected happened. This could be a temporary issue.
        Please try refreshing the page or contact support if the problem persists.
      </Typography>
      
      {process.env.NODE_ENV === 'development' && error && (
        <Box mt={2} p={2} bgcolor="grey.100" borderRadius={1} maxWidth="100%">
          <Typography variant="caption" color="textSecondary">
            Error Details: {error.toString()}
          </Typography>
        </Box>
      )}
      
      <Button
        variant="contained"
        color="primary"
        startIcon={<RefreshIcon />}
        onClick={onRetry}
        className={classes.retryButton}
      >
        Try Again
      </Button>
      
      <Button
        variant="text"
        color="primary"
        onClick={() => window.location.reload()}
        style={{ marginTop: '8px' }}
      >
        Refresh Page
      </Button>
    </Paper>
  );
};

export default ErrorBoundary;
