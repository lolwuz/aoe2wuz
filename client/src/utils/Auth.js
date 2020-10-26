import { Container, LinearProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import MainTemplate from "../templates/MainTemplate";

function auth() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, []);

  return (
    <MainTemplate>
      <Container maxWidth="lg">
        <LinearProgress />
      </Container>
    </MainTemplate>
  );
}

export default auth;
