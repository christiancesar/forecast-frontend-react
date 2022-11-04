import { Box, Container, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import api from "../../services/api";
import formatValue from "../../utils/formatValue";
type BudgetItem = {
  id: string;
  itemOrd: number;
  description: string;
  measure: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  discont: number;
  subTotal: number;
  total: number;
  updatedAt: Date;
  createdAt: Date;
}

type Busget = {
  id: string;
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount?: number | null;
  budgetItems?: BudgetItem[];
  updatedAt: Date;
  createdAt: Date;
}

export const Budget: React.FC = () => {
  const [budgets, setBudgets] = useState<Busget[]>([]);

  useEffect(() => {
    api.get("/budgets").then((response: any) => {
      setBudgets(response.data)

    })
  }, [])

  console.log(budgets)

  return (
    <Fragment>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Box>

          {/* <Container maxW='1400px'> */}
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  {/* <Th>id</Th> */}
                  <Th>shortId</Th>
                  <Th>customer</Th>
                  <Th>saller</Th>
                  <Th>total</Th>
                  <Th>discont</Th>
                  <Th>discontPercent</Th>
                  <Th>subTotal</Th>
                  <Th>itemsCount</Th>
                  {/* <Th>budgetItems</Th> */}
                  <Th>updatedAt</Th>
                  <Th>createdAt</Th>
                </Tr>
              </Thead>
              <Tbody>
                {

                  budgets.map((budget: Busget) => (
                    <Tr key={budget.id}>
                      <Td>{budget.shortId}</Td>
                      <Td>{budget.customer}</Td>
                      <Td>{budget.saller}</Td>
                      <Td>{formatValue(budget.total)}</Td>
                      <Td>{formatValue(budget.discont)}</Td>
                      <Td>{`${budget.discontPercent} %`}</Td>
                      <Td>{formatValue(budget.subTotal)}</Td>
                      {
                        budget.itemsCount ? <Td>{budget.itemsCount}</Td> : <Td>0</Td>
                      }
                      <Td>{budget.updatedAt}</Td>
                      <Td>{budget.createdAt}</Td>
                    </Tr>
                  ))

                }

              </Tbody>
            </Table>
          </TableContainer>
          {/* </Container> */}

        </Box>
      </Flex>
    </Fragment >
  )
}