import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Card, Grid, GridItem, Heading } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Heading>Your Homepage</Heading>
      <Grid
        gridTemplateColumns="repeat(6, 1fr)"
        gridTemplateRows="20% 20% 20% 20% 20%"
        gap={5}
        margin={5}
      >
        <GridItem colStart={1} colEnd={3} bg="green.100" rowSpan={4}>
          <Card>Player Avatar/Buttons for Character</Card>
        </GridItem>
        <GridItem colStart={4} colEnd={7} w="200" bg="blue.200">
          <Card>Notifications/PatchNotes</Card>
        </GridItem>
        <GridItem colStart={4} colEnd={7} rowSpan={2} w="200" bg="purple.200">
          <Card>Party/DM/Proximity Chat</Card>
        </GridItem>
        <GridItem colStart={3} colEnd={7} bg="red.100" rowSpan={11}>
          <Card>CurrentLocation/TabtoMaps</Card>
        </GridItem>
        <GridItem colStart={1} colEnd={3} bg="yellow.100" rowSpan={15}>
          <Card>CurrentCampaign Information</Card>
        </GridItem>
        <GridItem colStart={4} colEnd={7} bg="orange.100" rowSpan={15}>
          <Card>Creature/Item/Character Database</Card>
        </GridItem>
        <GridItem colStart={1} colEnd={7} rowSpan={10} w="200" bg="grey">
          <Card>FAQ/Website Help, Our Social Media ,Contact Support</Card>
        </GridItem>
      </Grid>
    </>
  );
}
