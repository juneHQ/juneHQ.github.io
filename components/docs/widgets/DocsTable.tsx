import { Table, TableContainer, Tbody, Th, Thead, Tr, Box } from '@chakra-ui/react';

type Header = {
  name: string;
  highlight?: boolean;
};
type Row = string;

type DocsTableProps = { header: Header[]; rows: Row[][] };

export const DocsTable = ({ header, rows }: DocsTableProps) => {
  return (
    <TableContainer my={10}>
      <Table>
        <Thead>
          <Tr>
            {header.map((h) => (
              <Th key={h.name}>
                <Box maxW="200px" whiteSpace="normal" textTransform="none" color="gray.800">
                  {h.name}
                </Box>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={row[0]}>
              {row.map((r, colIndex) => (
                <Th key={`${rowIndex}-${colIndex}`}>
                  {header[colIndex].highlight ? (
                    <Box
                      as="span"
                      display="inline-block"
                      mr={2}
                      px={2}
                      py={1}
                      textTransform="none"
                      bg="purple.50"
                      borderRadius="md"
                      fontSize="xs"
                      color="purple.400"
                    >
                      {r}
                    </Box>
                  ) : (
                    <Box maxW="200px" whiteSpace="normal" textTransform="none" fontWeight={'normal'} color="gray.800">
                      {r}
                    </Box>
                  )}
                </Th>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
