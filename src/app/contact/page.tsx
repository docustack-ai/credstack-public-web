'use client';

import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import classes from './ContactUs.module.css';

export default function ContactUs() {
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
    <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
      <Title
        order={4}
        size="h2"
        className={classes.title}
        fw={600}
        ta="center"
      >
        Get in touch
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
  );
}
