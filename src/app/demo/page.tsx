'use client';

import { Button, Group, SimpleGrid, Textarea, TextInput, Title, Paper, Image, List, ThemeIcon, Text, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import classes from './Demo.module.css';

export default function ContactUs() {
  // USPs for the left side
  const usps = [
    'Instant access to a demo with an expert',
    'No credit card required',
    'See real document automation in action',
    'Ask questions and get expert support',
  ];

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setStatus('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Paper p={0} radius={20} shadow="xl" style={{ maxWidth: 1100, margin: '40px auto', overflow: 'hidden', background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)' }}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={0}>
        {/* Left: Image & USPs */}
        <div style={{ background: 'linear-gradient(120deg, #e0e7ff 60%, #f8fafc 100%)', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 520 }}>
          <Image src="/assets/facetime-meeting.png" alt="Demo" radius="md" w={260} mb="lg" style={{ boxShadow: '0 4px 32px rgba(254, 254, 254, 0.08)' }} />
          <Title order={2} size="h1" style={{ fontWeight: 900, textAlign: 'center', marginBottom: rem(12) }}>
            Request a Demo
          </Title>
          <Text c="dimmed" ta="center" mb="md" style={{ fontSize: rem(18) }}>
            Experience next-gen document automation and AI-powered workflows in minutes.
          </Text>
          <List spacing="sm" size="md" mt={16} icon={<ThemeIcon color="indigo" size={22} radius="xl"><IconCheck size={14} /></ThemeIcon>}>
            {usps.map((usp, i) => (
              <List.Item key={i} style={{ fontSize: rem(16) }}>{usp}</List.Item>
            ))}
          </List>
        </div>
        {/* Right: Form */}
        <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form} style={{ borderRadius: 0, boxShadow: 'none', background: 'transparent', minHeight: 520, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Title
            order={4}
            size="h2"
            className={classes.title}
            fw={600}
            ta="center"
            mb="md"
          >
            Share your details
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
              {...form.getInputProps('email')}
            />
          </SimpleGrid>
          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps('subject')}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('message')}
          />
          <Group justify="center" mt="xl">
            <Button type="submit" size="md" loading={loading} disabled={loading}>
              Send message
            </Button>
          </Group>
          {status && (
            <div style={{ textAlign: 'center', marginTop: '1rem', color: status.includes('success') ? 'green' : 'red' }}>
              {status}
            </div>
          )}
        </form>
      </SimpleGrid>
    </Paper>
  );
}
