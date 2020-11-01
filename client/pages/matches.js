import React from "react";
import PropTypes from "prop-types";
import MainTemplate from "../src/templates/MainTemplate";
import { AOE2NET_URL } from "../src/constants";
import { Container, Grid } from "@material-ui/core";
import MatchCard from "../src/components/matches/MatchCard";
import Head from "next/head";
import { useSession, getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Auth from "../src/utils/Auth";

const matches = ({ matches }) => {
  const router = useRouter();
  const [session, loading] = useSession();

  // check if server sided render
  if (typeof window !== "undefined" && loading) return null;

  if (!session) return <Auth />;

  return (
    <MainTemplate>
      <Head>
        <title>Matches</title>

        <meta name="keywords" content="Matches, Games, My Games" />

        <meta name="description" content="Age of Empires 2 Matches" />
      </Head>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {matches.map((match) => (
            <Grid item xs={12} sm={12} lg={6} key={match.match_id}>
              <MatchCard match={match} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainTemplate>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `${AOE2NET_URL}/player/matches?game=aoe2de&steam_id=76561198041482392&count=12`
  );
  const matches = await res.json();

  return {
    props: { matches }, // will be passed to the page component as props
  };
}

export default matches;
