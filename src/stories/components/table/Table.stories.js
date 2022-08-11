import React from "react";

import Table, {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableDatum,
  TableFooter,
} from "../../../../lib/components/Table";
import { OrderingEnum } from "../../../../lib/components/Table/Table.types";

export default {
  title: "Components/Table",
  component: Table,
};

export const SimpleTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader>Number</TableHeader>
        <TableHeader>Letter</TableHeader>
        <TableHeader>Orderable</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDatum>1</TableDatum>
        <TableDatum>A</TableDatum>
        <TableDatum>Some Guy</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>2</TableDatum>
        <TableDatum>B</TableDatum>
        <TableDatum>Some Girl</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>3</TableDatum>
        <TableDatum>C</TableDatum>
        <TableDatum>Some Non-Binary Individual</TableDatum>
      </TableRow>
      <TableRow isSelected>
        <TableDatum>4</TableDatum>
        <TableDatum>D</TableDatum>
        <TableDatum>Not sure Who</TableDatum>
      </TableRow>
      <TableRow isNew>
        <TableDatum>5</TableDatum>
        <TableDatum>E</TableDatum>
        <TableDatum>Someone I Knew</TableDatum>
      </TableRow>
    </TableBody>
  </Table>
);

export const OrderableTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader showOrdering currentOrder={OrderingEnum.DESC}>
          Ordered DESC
        </TableHeader>
        <TableHeader showOrdering currentOrder={OrderingEnum.ASC}>
          Ordered ASC
        </TableHeader>
        <TableHeader showOrdering>Orderable</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDatum>1</TableDatum>
        <TableDatum>A</TableDatum>
        <TableDatum>Some Guy</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>2</TableDatum>
        <TableDatum>B</TableDatum>
        <TableDatum>Some Girl</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum>3</TableDatum>
        <TableDatum>C</TableDatum>
        <TableDatum>Some Non-Binary Individual</TableDatum>
      </TableRow>
    </TableBody>
  </Table>
);

export const CenteredCells = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader showOrdering currentOrder={OrderingEnum.DESC} center>
          Ordered DESC
        </TableHeader>
        <TableHeader showOrdering currentOrder={OrderingEnum.ASC} center>
          Ordered ASC
        </TableHeader>
        <TableHeader showOrdering center>
          Orderable
        </TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableDatum center>1</TableDatum>
        <TableDatum center>A</TableDatum>
        <TableDatum center>Some Guy</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum center>2</TableDatum>
        <TableDatum center>B</TableDatum>
        <TableDatum center>Some Girl</TableDatum>
      </TableRow>
      <TableRow>
        <TableDatum center>3</TableDatum>
        <TableDatum center>C</TableDatum>
        <TableDatum center>Some Non-Binary Individual</TableDatum>
      </TableRow>
    </TableBody>
  </Table>
);

export const NewRows = () => (
  <Table>
    <TableHead>
      <TableRow addEmptyTDAtEnd>
        <TableHeader showOrdering currentOrder={OrderingEnum.DESC} center>
          Ordered DESC
        </TableHeader>
        <TableHeader showOrdering currentOrder={OrderingEnum.ASC} center>
          Ordered ASC
        </TableHeader>
        <TableHeader showOrdering center>
          Orderable
        </TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow isNew>
        <TableDatum center>1</TableDatum>
        <TableDatum center>A</TableDatum>
        <TableDatum center>Some Guy</TableDatum>
      </TableRow>
      <TableRow addEmptyTDAtEnd>
        <TableDatum center>2</TableDatum>
        <TableDatum center>B</TableDatum>
        <TableDatum center>Some Girl</TableDatum>
      </TableRow>
      <TableRow isNew>
        <TableDatum center>3</TableDatum>
        <TableDatum center>C</TableDatum>
        <TableDatum center>Some Non-Binary Individual</TableDatum>
      </TableRow>
    </TableBody>
  </Table>
);

const ITEMS_PER_PAGE_OPTIONS = [
  { id: 10, label: "10" },
  { id: 20, label: "20" },
  { id: 50, label: "50" },
  { id: 100, label: "100" },
  { id: 200, label: "200" },
];

export const WithFooter = () => {
  // const [pageLimit, setPageLimit] = useState(+ITEMS_PER_PAGE_OPTIONS[0].id);

  // useEffect(() => {
  //   console.log("pageLimit: ", pageLimit);
  // }, [pageLimit]);

  const handleItemsPerPageChange = (limit) => {
    // console.log("handleItemsPerPageChange | limit: ", limit);
  };

  return (
    <Table>
      <TableHead>
        <TableRow addEmptyTDAtEnd>
          <TableHeader showOrdering currentOrder={OrderingEnum.DESC} center>
            User ID
          </TableHeader>
          <TableHeader showOrdering currentOrder={OrderingEnum.ASC} center>
            Ordered ASC
          </TableHeader>
          <TableHeader showOrdering center>
            Orderable
          </TableHeader>
          <TableHeader showOrdering center>
            Age
          </TableHeader>
          <TableHeader showOrdering center>
            Country
          </TableHeader>
          <TableHeader showOrdering center>
            Hobby
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow isNew>
          <TableDatum center>1</TableDatum>
          <TableDatum center>A</TableDatum>
          <TableDatum center>Some Guy</TableDatum>
          <TableDatum center>16</TableDatum>
          <TableDatum center>France</TableDatum>
          <TableDatum center>Trekking</TableDatum>
        </TableRow>
        <TableRow addEmptyTDAtEnd>
          <TableDatum center>2</TableDatum>
          <TableDatum center>B</TableDatum>
          <TableDatum center>Some Girl</TableDatum>
          <TableDatum center>21</TableDatum>
          <TableDatum center>Germany</TableDatum>
          <TableDatum center>Cooking</TableDatum>
        </TableRow>
        <TableRow isNew>
          <TableDatum center>3</TableDatum>
          <TableDatum center>C</TableDatum>
          <TableDatum center>Some Non-Binary Individual</TableDatum>
          <TableDatum center>42</TableDatum>
          <TableDatum center>Spain</TableDatum>
          <TableDatum center>Fishing</TableDatum>
        </TableRow>
        <TableRow>
          <TableDatum center>4</TableDatum>
          <TableDatum center>D</TableDatum>
          <TableDatum center>Some Guy 2</TableDatum>
          <TableDatum center>33</TableDatum>
          <TableDatum center>Brazil</TableDatum>
          <TableDatum center>Soccer</TableDatum>
        </TableRow>
        <TableRow>
          <TableDatum center>5</TableDatum>
          <TableDatum center>3</TableDatum>
          <TableDatum center>Some Girl 2</TableDatum>
          <TableDatum center>63</TableDatum>
          <TableDatum center>Japan</TableDatum>
          <TableDatum center>Chess</TableDatum>
        </TableRow>
      </TableBody>
      <TableFooter
        showGoToFirstPage
        showGoToLastPage
        showGoToPreviousPage
        showGoToNextPage
        showItemsCount
        itemsFrom="0"
        itemsTo="100"
        itemsTotal="1000"
        itemsPerPageOptions={ITEMS_PER_PAGE_OPTIONS}
        onSetItemsPerPage={(option) => handleItemsPerPageChange(option.id)}
      ></TableFooter>
    </Table>
  );
};

export const WithCustomStuffInFooter = () => (
  <Table>
    <TableHead>
      <TableRow addEmptyTDAtEnd>
        <TableHeader showOrdering currentOrder={OrderingEnum.DESC} center>
          Ordered DESC
        </TableHeader>
        <TableHeader showOrdering currentOrder={OrderingEnum.ASC} center>
          Ordered ASC
        </TableHeader>
        <TableHeader showOrdering center>
          Orderable
        </TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow isNew>
        <TableDatum center>1</TableDatum>
        <TableDatum center>A</TableDatum>
        <TableDatum center>Some Guy</TableDatum>
      </TableRow>
      <TableRow addEmptyTDAtEnd>
        <TableDatum center>2</TableDatum>
        <TableDatum center>B</TableDatum>
        <TableDatum center>Some Girl</TableDatum>
      </TableRow>
      <TableRow isNew>
        <TableDatum center>3</TableDatum>
        <TableDatum center>C</TableDatum>
        <TableDatum center>Some Non-Binary Individual</TableDatum>
      </TableRow>
    </TableBody>
    <TableFooter
      showGoToFirstPage
      goToFirstPageContent="GO TO FIRST"
      showGoToLastPage
      goToLastPageContent="GO TO LAST"
      showGoToPreviousPage
      goToPreviousPageContent="GO TO PREV"
      showGoToNextPage
      goToNextPageContent="GO TO NEXT"
      showItemsCount
      itemsFrom="0"
      itemsTo="100"
      itemsTotal="1000"
      itemsFromToTotalFormatter={(from, to, total) =>
        `custom format from:${from} to: ${to} total ${total}`
      }
    ></TableFooter>
  </Table>
);

export const CustomFooterContent = () => {
  return (
    <Table>
      <TableHead>
        <TableRow addEmptyTDAtEnd>
          <TableHeader showOrdering currentOrder={OrderingEnum.DESC} center>
            Ordered DESC
          </TableHeader>
          <TableHeader showOrdering currentOrder={OrderingEnum.ASC} center>
            Ordered ASC
          </TableHeader>
          <TableHeader showOrdering center>
            Orderable
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow isNew>
          <TableDatum center>1</TableDatum>
          <TableDatum center>A</TableDatum>
          <TableDatum center>Some Guy</TableDatum>
        </TableRow>
        <TableRow addEmptyTDAtEnd>
          <TableDatum center>2</TableDatum>
          <TableDatum center>B</TableDatum>
          <TableDatum center>Some Girl</TableDatum>
        </TableRow>
        <TableRow isNew>
          <TableDatum center>3</TableDatum>
          <TableDatum center>C</TableDatum>
          <TableDatum center>Some Non-Binary Individual</TableDatum>
        </TableRow>
      </TableBody>
      <TableFooter>
        <span
          style={{
            textAlign: "center",
            width: "100%",
            display: "block",
            background: "red",
          }}
        >
          Some Content
        </span>
      </TableFooter>
    </Table>
  );
};