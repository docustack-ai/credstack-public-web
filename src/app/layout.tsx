import "@mantine/core/styles.css";
import styles from "./layout.module.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  Box,
} from "@mantine/core";
import { theme } from "../theme";
import HeaderMegaMenu from "../components/HeaderMegaMenu";
import FooterLinks from "../components/FooterLinks";

export const metadata = {
  title: "CredStack.ai",
  description: "CredStack - Your trusted partner in document automation and AI solutions",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="icon" type="image/png" href="/favicon-light.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href="/favicon-dark.png" media="(prefers-color-scheme: dark)" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={styles["body-margin"]}>
        <MantineProvider theme={theme}>
          <Box className={styles["layout-root"]}>
            <HeaderMegaMenu />
            <Box className={styles["layout-content"]}>
              {children}
            </Box>
            <FooterLinks />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
