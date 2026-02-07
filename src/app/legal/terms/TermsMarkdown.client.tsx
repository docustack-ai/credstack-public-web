"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, px } from "@mantine/core";

interface TermsMarkdownProps {
    markdown: string;
}

export default function TermsMarkdown({ markdown }: TermsMarkdownProps) {
    return (
        <Container size={px(750)} p="xl">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Container>
    );
}
