import { Card, Group, Text, Button, Container } from '@mantine/core';
import classes from './DownloadCTA.module.css';
import StyledContainer from './StyledContainer';


interface DownloadCTAProps {
  title: string;
  description: string;
  fileUrl: string;
  buttonLabel?: string;
}

/**
 * DownloadCTA - Common component for file download call-to-action
 */
export function DownloadCTA({ title, description, fileUrl, buttonLabel = 'Download' }: DownloadCTAProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <StyledContainer>


      <Card radius="md" pl={30} className={classes.card} >
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Text c="dimmed" mb="md" className={classes.description}>
            {description}
          </Text>
          <Group>
            <Button onClick={handleDownload}>{buttonLabel}</Button>
          </Group>
        </div>
      </Card>

    </StyledContainer>
  );
}
