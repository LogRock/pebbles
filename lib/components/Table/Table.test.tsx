import React from "react";
import { render } from "../../utils/test-utils";
import Table, {
  OrderingEnum,
  TableBody,
  TableDatum,
  TableHead,
  TableHeader,
  TableRow,
} from "./";

describe("Table", () => {
  it("renders with some content", () => {
    expect(
      render(
        <Table>
          <TableHead>
            <TableRow addEmptyTDAtEnd>
              <TableHeader>Header A</TableHeader>
              <TableHeader showOrdering>Header A</TableHeader>
              <TableHeader showOrdering currentOrder={OrderingEnum.ASC}>
                Header B
              </TableHeader>
              <TableHeader showOrdering currentOrder={OrderingEnum.DESC}>
                Header C
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow addEmptyTDAtEnd>
              <TableDatum>Content A1</TableDatum>
              <TableDatum>Content B1</TableDatum>
              <TableDatum>Content C1</TableDatum>
            </TableRow>

            <TableRow isNew>
              <TableDatum>Content A1</TableDatum>
              <TableDatum>Content B1</TableDatum>
              <TableDatum>Content C1</TableDatum>
            </TableRow>
          </TableBody>
        </Table>
      ).container.firstChild
    ).toMatchSnapshot();
  });

  it("renders selected rows", () => {
    expect(
      render(
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Header A</TableHeader>
              <TableHeader>Header B</TableHeader>
              <TableHeader>Header C</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableDatum>Content A1</TableDatum>
              <TableDatum>Content B1</TableDatum>
              <TableDatum>Content C1</TableDatum>
            </TableRow>

            <TableRow isSelected>
              <TableDatum>Content A2</TableDatum>
              <TableDatum>Content B2</TableDatum>
              <TableDatum>Content C2</TableDatum>
            </TableRow>

            <TableRow>
              <TableDatum>Content A3</TableDatum>
              <TableDatum>Content B3</TableDatum>
              <TableDatum>Content C3</TableDatum>
            </TableRow>
          </TableBody>
        </Table>
      ).container.firstChild
    ).toMatchSnapshot();
  });
});
