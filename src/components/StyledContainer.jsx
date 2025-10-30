import React from 'react';
import { Container, useMantineTheme } from '@mantine/core';

function StyledContainer({ children, innerStyle = {} }) {
  const theme = useMantineTheme();

  return (
    <Container
      fluid
      style={{
        border: `1px solid ${theme.other.userDefinedColors.border}`,
        backgroundColor: theme.other.userDefinedColors.background,
      }}
    >
      <Container
        fluid
        p={0}
        style={{
          borderRight: `1px solid ${theme.other.userDefinedColors.border}`,
          borderLeft: `1px solid ${theme.other.userDefinedColors.border}`,
          maxWidth: '1200px',
          backgroundColor: 'white',
          ...innerStyle,
        }}
      >
        {children}
      </Container>
    </Container>
  );
}

export default StyledContainer;