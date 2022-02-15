import {
  Avatar,
  Card,
  CardContent,
  Container,
  Divider,
  FormHelperText,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { getSession, useSession } from "next-auth/client";
import React from "react";
import TechtreeLayout from "../../src/templates/TechtreeLayout";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(12),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  explainText: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

export default function info() {
  const classes = useStyles();
  const [session, loading] = useSession();

  const { name, email } = session.user;

  return (
    <TechtreeLayout>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" />
              </ListItemAvatar>
              <ListItemText primary={`Logged in as ${name}`} />
            </ListItem>
          </List>

          <Divider />

          <CardContent>
            <Typography variant="h4" className={classes.title}>
              Welcome to aoe2dash.com!
            </Typography>

            <Typography variant="body1" className={classes.explainText}>
              What should people call you?
            </Typography>

            <TextField
              margin="normal"
              variant="outlined"
              label="username"
              fullWidth
              value={email}
            />

            <Typography variant="body1" className={classes.explainText}>
              To find your matches and leadboards you can provide a Steam ID
              and/or a Microsoft ID.
            </Typography>

            <TextField
              margin="normal"
              variant="outlined"
              label="Steam ID"
              fullWidth
            />

            <FormHelperText>Where can I find my Steam ID?</FormHelperText>

            <TextField
              margin="normal"
              variant="outlined"
              label="Microsoft ID"
              fullWidth
            />

            <FormHelperText>Where can I find my Microsoft ID?</FormHelperText>
          </CardContent>
        </Card>
      </Container>
    </TechtreeLayout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
