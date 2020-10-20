import { Card, CardContent, Container, Typography } from "@material-ui/core";
import Head from "next/head";
import MainTemplate from "../src/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <Head>
        <title>Age of Empires 2 Dashboard</title>

        <link rel="icon" type="image/svg+xml" href="/img/Civs.svg" />

        <meta
          name="keywords"
          content="Age of Empires, DE, 2, AOE2, dashboard"
        />

        <meta
          name="description"
          content="Age of Empires 2 Dashboard. Civilization, Units, Techs, Build Orders and Matches."
        />
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
