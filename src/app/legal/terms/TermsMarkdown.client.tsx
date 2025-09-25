"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "@mantine/core";

interface TermsMarkdownProps {
    markdown: string;
}

export default function TermsMarkdown({ markdown }: TermsMarkdownProps) {
    return (
        <Container size="md" py="xl">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Container>
    );
}
