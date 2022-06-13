import styled from "styled-components";

const TabContent = styled.div`
  min-height: 100px;

  font-family: ${({ theme }) => theme.tabView.fontFamily};
  font-size: ${({ theme }) => theme.tabView.fontSize};
  font-weight: ${({ theme }) => theme.tabView.fontWeight};
`;

export default TabContent;
