import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import { STEAM_IMAGE_URL, STEAM_NEWS_URL } from "../src/constants";
import MainTemplate from "../src/templates/MainTemplate";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
  },
  newsMedia: {
    height: 220,
  },
  itemTitle: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Home({ news }) {
  const classes = useStyles();

  const { newsitems } = news.appnews;

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
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            {newsitems.map((item) => {
              const firstWord = item.contents.replace(/ .*/, "");
              const isImage = firstWord.includes("{STEAM_CLAN_IMAGE}");
              const imageUrl = firstWord.replace(
                "{STEAM_CLAN_IMAGE}",
                STEAM_IMAGE_URL
              );

              return (
                <Card key={item.gid} className={classes.card}>
                  <Link href={item.url}>
                    <CardActionArea>
                      {isImage && (
                        <CardMedia
                          className={classes.newsMedia}
                          image={imageUrl}
                        />
                      )}

                      <CardContent>
                        <Typography variant="h6" className={classes.itemTitle}>
                          {item.title}
                        </Typography>

                        <Typography variant="body1">
                          {isImage
                            ? item.contents.replace(firstWord, "")
                            : item.contents}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              );
            })}
          </Grid>
          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Typography variant="h4">aoe2dash.com</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MainTemplate>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(STEAM_NEWS_URL);
  const news = await res.json();

  return {
    props: { news }, // will be passed to the page component as props
  };
}
