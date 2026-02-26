import { ScrollArea, Table, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type ComparisonRow = {
  feature: string;
  traditional: string;
  credstack: string;
};

type ComparisonTableProps = {
  columns: [string, string, string];
  rows: ComparisonRow[];
};

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  if (!rows.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center" mb="xl">
          Comparison
        </Title>
        <ScrollArea>
          <Table withTableBorder withColumnBorders striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>{columns[0]}</Table.Th>
                <Table.Th>{columns[1]}</Table.Th>
                <Table.Th>{columns[2]}</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows.map((row) => (
                <Table.Tr key={row.feature}>
                  <Table.Td>{row.feature}</Table.Td>
                  <Table.Td>{row.traditional}</Table.Td>
                  <Table.Td>{row.credstack}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </div>
    </StyledContainer>
  );
}
