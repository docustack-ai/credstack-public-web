"use client";
import { useEffect, useState } from "react";
import { Box, Title, Text, Card, Group, Button, Container } from "@mantine/core";

import classes from "./CareersListPage.module.css";
import StyledContainer from "../../components/StyledContainer";

type Job = {
    id: string;
    title: string;
    location: string;
    type: string;
    description: string;
    applyUrl: string;
    status: "active" | "closed";
    lastUpdated: string;
};

export default function CareersPage() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        fetch("/jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <StyledContainer>
            <div className={classes.listContainer}>
                <h1 className={classes.title}>Careers</h1>
                <div className={classes.grid}>
                    {jobs.length === 0 ? (
                        <Text >
                            No open positions at the moment.
                        </Text>
                    ) : (

                        jobs.map((job) => (
                            <Card key={job.id} radius="sm" p={24} ml={30} mr={30} shadow="sm" style={{ position: 'relative' }}>
                                <Group justify="space-between" mb={8}>
                                    <Title order={3}>{job.title}</Title>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        <Text component="span" size="sm" style={{
                                            background: "rgba(0,0,0,0.04)",
                                            padding: "6px 10px",
                                            borderRadius: 9999,
                                        }}>
                                            {job.location}
                                        </Text>
                                        <Text component="span" size="sm" style={{
                                            background: "rgba(0,112,243,0.08)",
                                            color: "#0070f3",
                                            padding: "6px 10px",
                                            borderRadius: 9999,
                                        }}>
                                            {job.type}
                                        </Text>
                                    </div>
                                </Group>
                                <Text mb={16}>{job.description}</Text>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    {job.status === "active" ? (
                                        <Button variant="light" radius="sm" size="sm" component="a" href={job.applyUrl} target="_blank" rel="noopener noreferrer" style={{ width: 'auto' }}>
                                            Apply Now
                                        </Button>
                                    ) : (
                                        <Button variant="light" radius="sm" size="sm" disabled style={{ width: 'auto', background: '#eee', color: '#888' }}>
                                            Closed
                                        </Button>
                                    )}
                                    <Text size="xs" color="dimmed" style={{ position: 'absolute', bottom: 12, right: 24 }}>
                                        Last updated: {job.lastUpdated}
                                    </Text>
                                </div>

                            </Card>
                        ))
                    )}
                </div>
            </div>
        </StyledContainer>
    );
}
