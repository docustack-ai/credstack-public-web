import { Card, Text, Title } from '@mantine/core';
import classes from './ProblemCard.module.css';
import PropTypes from 'prop-types';
import StyledContainer from '../StyledContainer';

/**
 * @param {Object} props
 * @param {string} props.title - Main title of the card
 * @param {string} props.text - Description or supporting text
 * @param {string} props.impact - Impact statement at the bottom
 * @param {string} [props.sectionLabel] - Optional section label above the card
 */
function ProblemCard({ title, text, impact, sectionLabel }) {
  return (
    <StyledContainer>
    <Card className={classes.problemCard}>
      {sectionLabel && (
        <Text className={classes.problemSectionLabel}>{sectionLabel}</Text>
      )}
      <Title order={2} className={classes.problemTitle}>
        {title}
      </Title>
      <Text className={classes.problemText}>
        {text}
      </Text>
      <Text className={classes.problemImpact}>
        {impact}
      </Text>
    </Card>
    </StyledContainer>
  );
}


ProblemCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  sectionLabel: PropTypes.string,
};

export default ProblemCard;
