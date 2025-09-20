import "@mantine/core/styles.css";
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
      <body style={{ marginLeft: 30, marginRight: 30 }}>
        <MantineProvider theme={theme}>
          <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <HeaderMegaMenu />
            <Box style={{ flex: 1, width: '100%' }}>
              {children}
            </Box>

            <FooterLinks />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
