import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import MainTemplate from "../../src/templates/MainTemplate";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "@material-ui/icons/GTranslate";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Link from "next/link";
import TechtreeLayout from "../../src/templates/TechtreeLayout";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  card: {
    marginTop: theme.spacing(12),
  },
  cardContent: {
    padding: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  socialButton: {
    marginBottom: theme.spacing(3),
  },
  tab: {
    padding: theme.spacing(1),
    textAlign: "center",
    borderBottom: `solid 4px ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary[100],
  },
  tabActive: {
    padding: theme.spacing(1),
    textAlign: "center",
    borderBottom: `solid 4px ${theme.palette.primary[50]}`,
  },
}));

function login() {
  const classes = useStyles();

  return (
    <TechtreeLayout>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={6}>
              <Link href="/auth/login">
                <CardActionArea>
                  <div className={classes.tabActive}>
                    <Typography variant="subtitle1">Login</Typography>
                  </div>
                </CardActionArea>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.tab}>
                <Typography variant="subtitle1">Register</Typography>
              </div>
            </Grid>
          </Grid>

          <div className={classes.cardContent}>
            <Typography variant="h4" className={classes.title}>
              Register a new account
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="default"
                  size="large"
                  startIcon={<GoogleIcon />}
                  className={classes.socialButton}
                  fullWidth
                >
                  Google
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="default"
                  size="large"
                  startIcon={<FacebookIcon />}
                  className={classes.socialButton}
                  fullWidth
                >
                  Facebook
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Username"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Email"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Password"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Confirm your password"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              className={classes.button}
            >
              login
            </Button>
          </div>
        </Card>
      </Container>
    </TechtreeLayout>
  );
}

export default login;
