import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";


export default function Home() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        <TableColumn>Name</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Gun That's Big</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
