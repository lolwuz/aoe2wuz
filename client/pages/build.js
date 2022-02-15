import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MainTemplate from "../src/templates/MainTemplate";
import { Avatar, Chip, Container, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  count: {
    width: 40,
    height: 40,
  },
}));

export default function build() {
  const classes = useStyles();

  const steps = [
    {
      id: 0,
      count: "3",
      content: [
        {
          title: "Queue up Villagers",
          description:
            "Queue up as many Villagers as you can in your Town Center",
        },
      ],
      build: [
        {
          title: "2 Houses",
          description: "Two Villagers build one, one Villager builds the other",
        },
      ],
    },
    {
      id: 1,
      count: "4-6",
      content: [
        {
          title: "Sheeps",
          description: "Send your new Villagers to Sheep",
        },
      ],
      build: [],
    },
    {
      id: 2,
      count: "7",
      content: [],
      build: [
        {
          title: "Lumber Camp",
          description: "Send your new Villager to build a Lumber Camp",
        },
      ],
    },
    {
      id: 3,
      count: "8-10",
      content: [
        {
          title: "Wood",
          description: "Send your new Villagers to Wood",
        },
      ],
      build: [],
    },
    {
      id: 4,
      count: "22",
      content: [
        {
          title: "Wood",
          description: "Send new villagers to wood",
        },
        {
          title: "Feudal Age",
          description: "Advance to feudal age",
        },
        {
          from: "Sheep",
          title: "Wood",
          description: "Send 2 villagers to wood",
        },
        {
          from: "Sheep",
          title: "Gold",
          description: "Send 3 villagers to gold",
        },
      ],
      build: [
        {
          title: "Baracks",
          description: "Build a Barracks",
        },
      ],
    },
  ];

  return (
    <MainTemplate>
      <Container>
        <Timeline>
          {steps.map((step) => {
            const { id, count, content, build } = step;

            return (
              <TimelineItem key={id}>
                <TimelineOppositeContent>
                  {content.map((con) => (
                    <>
                      <Paper elevation={3} className={classes.paper}>
                        {con.from && <Chip label={`from ${con.from}`} />}
                        <Typography variant="h6" component="h1">
                          {con.title}
                        </Typography>
                        <Typography>{con.description}</Typography>
                      </Paper>
                      <Divider />
                    </>
                  ))}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="grey">
                    <Avatar className={classes.count}>{count}</Avatar>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  {build.map((con) => (
                    <Paper elevation={3} className={classes.paper}>
                      {con.from && <Chip label={`from ${con.from}`} />}
                      <Typography variant="h6" component="h1">
                        {con.title}
                      </Typography>
                      <Typography>{con.description}</Typography>
                    </Paper>
                  ))}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </MainTemplate>
  );
}
