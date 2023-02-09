"use client";
// import Image from "next/image";
import { Container, Grid, Paper } from "@mui/material";
import { Inter } from "@next/font/google";
import Image from "next/image";
import laptop from "../img/Screenshot 2023-02-09 at 20.17.14.png";
// import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });
const article = {
  title: "Laptop",
  price: 25.99,
  availability: "available",
  image_link: laptop,
};
export default function Home() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4} style={{ backgroundColor: "green" }}>
        <Image
          width={200}
          height={200}
          src={article.image_link}
          alt="image_link"
        />
      </Grid>
      <Grid item xs={6} style={{ backgroundColor: "blue" }}>
        <p>title: {article.title}</p>
        <p>price: {article.price}</p>
        <p>availability {article.availability}</p>
      </Grid>
    </Grid>
  );
}
