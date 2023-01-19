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
import { Card } from "../../../../lib/main";

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

export const SimpleTableInCard = () => (
  <Card noPadding>
    <Table width="100%">
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
  </Card>
);

export const OrderableTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader showOrdering currentOrder={OrderingEnum.DESC}>
          Ordered DESC Ordered DESC Ordered DESC
        </TableHeader>
        <TableHeader showOrdering currentOrder={OrderingEnum.ASC}>
          Ordered ASC Ordered ASC Ordered ASC
        </TableHeader>
        <TableHeader showOrdering>Orderable Orderable Orderable</TableHeader>
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

export const WithFooter = () => {
  const [pageLimit, setPageLimit] = React.useState(50);

  const pageSizeChangedHandler = (pageSize) => {
    setPageLimit(pageSize);
  };

  return (
    <Table>
      <TableHead>
        <TableRow addEmptyTDAtEnd>
          <TableHeader showOrdering currentOrder={OrderingEnum.DESC} center>
            User Identification (ID)
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
          <TableDatum center>Angola</TableDatum>
          <TableDatum center>Some Guy</TableDatum>
          <TableDatum center>16</TableDatum>
          <TableDatum center>France</TableDatum>
          <TableDatum center>Trekking</TableDatum>
        </TableRow>
        <TableRow addEmptyTDAtEnd>
          <TableDatum center>2</TableDatum>
          <TableDatum center>Belgium</TableDatum>
          <TableDatum center>Some Girl</TableDatum>
          <TableDatum center>21</TableDatum>
          <TableDatum center>Germany</TableDatum>
          <TableDatum center>Cooking</TableDatum>
        </TableRow>
        <TableRow isNew>
          <TableDatum center>3</TableDatum>
          <TableDatum center>Cameroon</TableDatum>
          <TableDatum center>Some Non-Binary Individual</TableDatum>
          <TableDatum center>42</TableDatum>
          <TableDatum center>Spain</TableDatum>
          <TableDatum center>Fishing</TableDatum>
        </TableRow>
        <TableRow>
          <TableDatum center>4</TableDatum>
          <TableDatum center>Denmark</TableDatum>
          <TableDatum center>Some Guy 2</TableDatum>
          <TableDatum center>33</TableDatum>
          <TableDatum center>Brazil</TableDatum>
          <TableDatum center>Soccer</TableDatum>
        </TableRow>
        <TableRow>
          <TableDatum center>5</TableDatum>
          <TableDatum center>Etiopia</TableDatum>
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
        pageSize={pageLimit}
        pageSizeOptions={[10, 20, 50, 100]}
        onPageSizeSelected={pageSizeChangedHandler}
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
