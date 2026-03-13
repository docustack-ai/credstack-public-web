import type { Metadata } from "next";
import Script from "next/script";
import { Box, Container, Stack, Text, Title } from "@mantine/core";

export const metadata: Metadata = {
  title: "Unsubscribe | CredStack.ai",
  description: "Manage your CredStack email subscription preferences.",
  alternates: {
    canonical: "/unsubscribe",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="md">
        <Title order={1}>Unsubscribe</Title>
        <Text c="dimmed">
          If you opened this page from an email unsubscribe link, your
          preferences will load automatically.
        </Text>
        <Box id="unsubscribe-root" />
      </Stack>
      <Script id="U2NyaXB0" strategy="afterInteractive">
        {`!function(){
  var v = window, z = 1;
  while (true) {
    var e = v.location.hash;
    if (e) {
      e = e.replace('#', '');
      var t = document.createElement('script');
      t.setAttribute('src', 'https://crm.zoho.in/UnsubscribeLink?rid=' + e);
      document.body.append(t);
      var c = document.createElement('div');
      c.setAttribute('id', 'RGl2RWxl');
      var s = document.getElementById('U2NyaXB0');
      s.parentElement.insertBefore(c, s.nextElementSibling);
      break;
    }
    v = v.parent;
    z = z + 1;
    if (z > 10) {
      break;
    }
  }
}();`}
      </Script>
    </Container>
  );
}
