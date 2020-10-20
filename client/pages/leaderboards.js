import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import MainTemplate from "../src/templates/MainTemplate";
import { DataGrid } from "@material-ui/data-grid";
import { AOE2NET_URL, testInfo } from "../src/constants";
import SearchField from "../src/navigation/SearchField";
import { Alert } from "@material-ui/lab";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
  },
  dataCard: {
    height: "100vh",
    width: "100%",
  },
  alert: {
    boxShadow: theme.shadows[1],
  },
}));

const columns = [
  { field: "id", headerName: "rank", width: 70 },
  { field: "rating", headerName: "rating", width: 130 },
  { field: "known_name", headerName: "player", width: 130 },
  { field: "num_games", headerName: "games", width: 130 },
  { field: "num_wins", headerName: "wins", width: 130 },
  { field: "win_percent", headerName: "win %", width: 130 },
];

const rowsPerPage = 20;

const Leaderboards = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const { total, start, count, leaderboard } = props;
  const {
    query: { page, leaderboard_id },
  } = router;

  const handleChangePage = (e) => {
    router.push(`/leaderboards?start=${start + 20}`);
  };

  const handleChangeRowsPerPage = () => {
    console.log("change page rows");
  };

  return (
    <MainTemplate>
      <Head>
        <title>Leaderboards</title>

        <meta name="keywords" content="Leaderboards, Statistics" />

        <meta
          name="description"
          content="Age of Empires 2 Leaderboards and Statistics."
        />
      </Head>

      <Container maxWidth="xl">
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} md={8} />
          <Grid item xs={12} md={4}>
            <SearchField label="Search users ..." />
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>rank</TableCell>
                <TableCell>name</TableCell>
                <TableCell>games</TableCell>
                <TableCell>streak</TableCell>
                <TableCell>wins</TableCell>
                <TableCell>losses</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboard.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.rank}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.games}</TableCell>
                  <TableCell>
                    {row.streak > 0 ? `+${row.streak}` : row.streak}
                  </TableCell>
                  <TableCell>{row.wins}</TableCell>
                  <TableCell>{row.losses}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Container>
    </MainTemplate>
  );
};

export async function getServerSideProps({ query }) {
  const { start, leaderboard_id } = query;

  const startRank = start ? start : 1;
  const leaderboardId = leaderboard_id ? leaderboard_id : 1;

  const res = await fetch(
    `${AOE2NET_URL}leaderboard?game=aoe2de&leaderboard_id=${leaderboardId}&start=${startRank}&count=${rowsPerPage}`
  );
  const data = await res.json();

  return {
    props: data, // will be passed to the page component as props
  };
}

export default Leaderboards;
