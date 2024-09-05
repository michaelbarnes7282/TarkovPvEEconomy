"use client"

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

// Rows will be dynamically fetched from tarkov.dev
const rows = [
  {
    key: "1",
    item: "Big Gun",
    craft_time: "100000",
    profit: "10000",
    req: "That one task"
  },
];

const crafts_columns = [
  {
    key: "item",
    label: "Item",
  },
  {
    key: "craft_time",
    label: "Crafting Time",
  },
  {
    key: "profit",
    label: "Profit/Hour",
  },
  {
    key: "task_req",
    label: "Task Requirement"
  }
];

const resales_columns = [
  {
    key: "item",
    label: "Item"
  },
  {
    key: "limit",
    label: "Limit/Reset"
  },
  {
    key: "profit",
    label: "Profit/Reset"
  },
  {
    key: "task_req",
    label: "Task Requirement"
  }
]

const barters_columns = [
  {
    key: "item",
    label: "Item"
  },
  {
    key: "req_price",
    label: "Requirement Price"
  },
  {
    key: "profit",
    label: "Profit"
  },
  {
    key: "task_req",
    label: "Task Requirement"
  }
]


export default function App() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={crafts_columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
