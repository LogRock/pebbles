import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { spacingTokens } from "../../../lib/types/tokens";

const Table = styled.table`
  text-align: left;

  th,
  td {
    padding: 4px;
  }
`;

const Spacings: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Table>
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>Example</th>
      </tr>
      {Object.keys(theme.spacings).map((spacing) => (
        <tr key={spacing}>
          <td>{spacing}</td>
          <td>{theme.spacings[spacing as spacingTokens]}</td>
          <td>
            <div
              style={{
                background: theme.colors.primary["400"],
                width: theme.spacings[spacing as spacingTokens],
                height: 20,
              }}
            />
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default Spacings;
