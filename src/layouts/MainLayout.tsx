import { Container, Box } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ width: "100vw" }}>
      <Box style={{ position: "sticky" }}>
        <Nav />
      </Box>
      <Container>{children}</Container>
    </div>
  );
};
