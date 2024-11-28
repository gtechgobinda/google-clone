import styled from "styled-components";

export const SearchInputStyle = styled.div`
  .search-input-sec {
    display: flex;
    align-items: center;
    border: 1px solid #9aa0a6;
    border-radius: 15px;
    padding: 2px 10px;
    .input-field {
      outline: none;
      border: none;
      width: 100%;
    }
    .two-icons {
      display: flex;
      .single-img-icon {
        width: 25px;
      }
      .close-icon {
        cursor: pointer;
      }
    }
  }
`;
