import { Box, Table, TableContainer, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';

export interface RententionTableProps {}

export const RententionTable = (props: RententionTableProps) => {
  return (
    <Box maxW={['90vw', '90vw', 'auto']} w="full" overflowX="auto">
      <TableContainer w="full" border="1px solid #EEEEEE" rounded="lg">
        <Table variant="simple">
          <Thead bg="rgba(238, 238, 238, 0.2);">
            <Tr>
              {['Month after sign up', '1-month retention', '2-month retention', '6-month rentention'].map(
                (title, i) => (
                  <Th
                    key={title}
                    textTransform="initial"
                    fontSize="md"
                    color="landing.almostBlack.500"
                    letterSpacing="normal"
                    fontWeight="normal"
                    py="6"
                  >
                    <Text>{title}</Text>
                  </Th>
                ),
              )}
            </Tr>
          </Thead>
          <Tbody>
            {/* {rows.map((row) => {
              const isSampleSizeRow = row.key === 'sampleSize';
              return (
                <Tr key={row.key}>
                  <Td fontSize="md" color="landing.almostBlack.500" py="6">
                    {row.title}
                  </Td>
                  {row.entries.map((entry) => {
                    const isActive = entry.key === props.activeColumn;
                    function renderTd() {
                      return (
                        <Td
                          key={entry.key}
                          fontSize="md"
                          fontWeight={isActive ? 'semibold' : 'normal'}
                          color={isActive ? 'primary' : 'landing.almostBlack.500'}
                          py="6"
                        >
                          {entry.value}
                          {row.suffix}
                        </Td>
                      );
                    }
                    return renderTd();
                  })}
                </Tr>
              );
            })} */}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
