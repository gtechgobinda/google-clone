import styled from "styled-components";

export const SearchResultStyle = styled.div`
  .menu-container {
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid #d4d4d4;
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
    .selected-menu {
      color: #1a73e8;
      border-bottom: 4px solid #1a73e8;
    }
  }
`;
