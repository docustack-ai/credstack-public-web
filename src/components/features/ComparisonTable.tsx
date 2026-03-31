import { ScrollArea, Table, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';
import classes from './ComparisonTable.module.css';

type ComparisonRow = {
  feature: string;
  values: [string, string, string];
};

type ComparisonTableProps = {
  title?: string;
  columns: [string, string, string, string];
  rows: ComparisonRow[];
};

export function ComparisonTable({ title, columns, rows }: ComparisonTableProps) {
  if (!rows.length) {
    return null;
  }

  return (
    <StyledContainer>
      <section className={classes.section}>
        <Title order={2} ta="center" mb="xl" className={classes.title}>
          {title || 'Comparison'}
        </Title>
        <ScrollArea className={classes.tableWrap}>
          <Table withTableBorder withColumnBorders striped highlightOnHover className={classes.table}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th className={`${classes.headerCell} ${classes.featureHeader}`}>
                  {columns[0]}
                </Table.Th>
                <Table.Th className={`${classes.headerCell} ${classes.perfiosHeader}`}>
                  {columns[1]}
                </Table.Th>
                <Table.Th className={`${classes.headerCell} ${classes.accumnHeader}`}>
                  {columns[2]}
                </Table.Th>
                <Table.Th className={`${classes.headerCell} ${classes.credstackHeader}`}>
                  {columns[3]}
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows.map((row) => (
                <Table.Tr key={row.feature}>
                  <Table.Td className={classes.featureCell}>{row.feature}</Table.Td>
                  {row.values.map((value, index) => (
                    <Table.Td key={`${row.feature}-${index}`} className={index === 2 ? classes.credstackCell : undefined}>
                      {value}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </section>
    </StyledContainer>
  );
}
