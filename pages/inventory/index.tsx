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
