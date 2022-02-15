import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
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
import Link from "next/link";
import { providers, signIn } from "next-auth/client";
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

function login({ providers }) {
  const classes = useStyles();

  return (
    <TechtreeLayout>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.tab}>
                <Typography variant="subtitle1">Login</Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Link href="/auth/register">
                <CardActionArea>
                  <div className={classes.tabActive}>
                    <Typography variant="subtitle1">Register</Typography>
                  </div>
                </CardActionArea>
              </Link>
            </Grid>
          </Grid>

          <div className={classes.cardContent}>
            <Typography variant="h4" className={classes.title}>
              Login with your account
            </Typography>

            <Grid container spacing={3}>
              {Object.values(providers).map((provider) => (
                <Grid item xs={6} key={provider.name}>
                  <Button
                    variant="outlined"
                    color="default"
                    size="large"
                    startIcon={<GoogleIcon />}
                    className={classes.socialButton}
                    onClick={() => signIn(provider.id)}
                    fullWidth
                  >
                    {provider.name}
                  </Button>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField variant="outlined" label="email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField variant="outlined" label="password" fullWidth />
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

login.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};

export default login;
