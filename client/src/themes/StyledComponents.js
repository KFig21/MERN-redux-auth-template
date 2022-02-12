import styled from "styled-components";

const SC = {
  // ---------- APP.JS ----------
  mainContent: styled.div`
    background-color: ${(props) =>
      props.theme.colors.backgroundColor} !important;
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }

  };`,

  textOnBgColor: styled.span`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
  };`,
  subtextOnBgColor: styled.span`
    color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
  };`,

  primaryColorButton: styled.button`
    color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
    background-color: ${(props) =>
      props.theme.colors.primaryColorFaded} !important;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
    }
  `,
  primaryColorButtonInverse: styled.button`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    background-color: ${(props) =>
      props.theme.colors.backgroundColor} !important;
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.primaryColorFaded} !important;
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 16px;
    cursor: pointer;
    &.active {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: transparent !important;
    }
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
  `,

  primaryColorText: styled.span`
    color: ${(props) => props.theme.colors.primaryColor} !important;
    text-decoration: none;
  `,

  // ---------- NAV ----------
  nav: styled.nav`
    background-color: ${(props) =>
      props.theme.colors.navBackgroundColor} !important;
    color: ${(props) => props.theme.colors.navTextColor} !important;
  `,

  // ---------- AUTH ----------
  authContainer: styled.div`
    background-color: ${(props) =>
      props.theme.colors.navBackgroundColor} !important;
    color: ${(props) => props.theme.colors.navTextColor} !important;
  `,
  authInput: styled.input`
    background-color: ${(props) =>
      props.theme.colors.inputBackgroundColor} !important;
    color: ${(props) => props.theme.colors.inputTextColor} !important;
  `,

  // ---------- TABLES ----------
  tableBorderColorTR: styled.tr`
    border-color: ${(props) => props.theme.colors.tableBorderColor} !important;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.rowHoverColor} !important;
    }
  `,
  tableBorderColorTD: styled.td`
    border-color: ${(props) => props.theme.colors.tableBorderColor} !important;
  `,
  tableHeaderBgColor: styled.tr`
    color: ${(props) => props.theme.colors.tableHeaderColor} !important;
    background-color: ${(props) =>
      props.theme.colors.tableHeaderBgColor} !important;
  `,
  tableSortableCol: styled.td`
    &.active {
      background-color: ${(props) =>
        props.theme.colors.activeColColor} !important;
    }
  `,
  tableSortableColHeader: styled.th`
    &.active {
      background-color: ${(props) =>
        props.theme.colors.activeColColorHeader} !important;
    }
  `,

  // ---------- MISC ----------
  Loader: styled.div`
    color: ${(props) => props.theme.colors.primaryColor} !important;
  `,

  primaryColorUnderline: styled.div`
    text-decoration: underline solid 4px
      ${(props) => props.theme.colors.primaryColor} !important;
    text-underline-offset: 0.5px;
  `,

  primaryBorderColor: styled.div`
    border-color: ${(props) => props.theme.colors.primaryColor} !important;
  `,
};

export default SC;
