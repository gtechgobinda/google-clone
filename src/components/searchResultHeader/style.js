import styled from "styled-components";

export const SearchResultHeaderStyle = styled.div`
  .input-wrapper {
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    .google-logo {
      width: 92px;
    }
  }
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
