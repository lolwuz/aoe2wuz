import { Card, CardContent, Container, Typography } from "@material-ui/core";
import Head from "next/head";
import MainTemplate from "../src/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <Head>
        <title>Age of Empires 2 Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="xl">
        <Card>
          <CardContent>
            <Typography variant="h6">Welcome</Typography>

            <Typography variant="body1">Navigatie</Typography>
          </CardContent>
        </Card>
      </Container>
    </MainTemplate>
  );
}
