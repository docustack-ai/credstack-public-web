'use client';

import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
import FeaturesCards from '../../components/FeaturesCards';
import classes from './FeaturesPage.module.css';

export default function FeaturesPage() {
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetch('/features.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        if (json.products && json.products.length > 0) {
          setActiveTab(json.products[0].name);
        }
      });
  }, []);

  if (!data) return <Container>Loading...</Container>;
  if (!activeTab) return null;

  const selectedProduct = data.products.find((p: any) => p.name === activeTab);

  return (
    <Container size="md" className={classes.root}>
      {selectedProduct && (
        <>
          <FeaturesCards featuresData={selectedProduct.featuresCards} productName={selectedProduct.name} />
        </>
      )}
    </Container>
  );
}
