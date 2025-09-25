"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "@mantine/core";

interface PrivacyMarkdownProps {
    markdown: string;
}

export default function PrivacyMarkdown({ markdown }: PrivacyMarkdownProps) {
    return (
        <Container size="md" py="xl">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Container>
    );
}
