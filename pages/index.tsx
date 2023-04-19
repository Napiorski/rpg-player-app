import * as React from "react";
import { Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storageToken = localStorage.getItem("accessToken");

    // This should be a check for a valid access token when the component first mounts
    if (storageToken && !accessToken) {
      setAccessToken(storageToken);
    } else if (!accessToken) {
      router.push("/login");
    } else {
      // Call the /profile endpoint with the access token to check if it is stale
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            // Access token is stale, redirect to login page
            localStorage.removeItem("accessToken");
            router.push("/login");
          } else if (response.ok) {
            // Access token is valid, continue rendering the page
            return response.json();
          }
        })
        .catch((error) => {
          // Access token is stale, redirect to login page
          localStorage.removeItem("accessToken");
          router.push("/login");
        });
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return null;
  }

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
