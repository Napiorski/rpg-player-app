import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { Inter } from "@next/font/google";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Divider,
  List,
  ListItem,
  Heading,
  Textarea,
  Checkbox,
  Flex,
  VStack,
  HStack,
  Select,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { InputStatCard } from "../../components/input-stat-card";
import { InputLabelCard } from "../../components/input-label-card";
import { CheckboxGroupCard } from "../../components/checkbox-group-card";
import { attackTypes } from "../../data/attack-types";
import { languages } from "../../data/languages";
import { equippedItems } from "../../data/equipped-items";
import { LabelInput } from "../../components/label-input";
import { AppContext } from "context/providers/app-provider";
import { useRouter } from "next/router";

export default function Inventory() {
  // protected route check:
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
        .catch((err) => {
          console.error(err);
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
    <Box p={10}>
      <Heading>Inventory</Heading>
    </Box>
  );
}
