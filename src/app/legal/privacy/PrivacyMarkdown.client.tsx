"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, px } from "@mantine/core";

interface PrivacyMarkdownProps {
    markdown: string;
}

export default function PrivacyMarkdown({ markdown }: PrivacyMarkdownProps) {
    return (
        <Container size={px(750)} py="xl">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Container>
    );
}
