/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "../../main";
import { BaseInputBoxProps } from "./BaseInputBox";

const defaultStatus = "info";

export const StyledDatePicker = styled.div<Pick<BaseInputBoxProps, "status">>`
  input {
    display: flex;
    box-sizing: ${({ theme }) => theme.inputBox.boxSizing};
    flex-direction: row;
    flex-grow: 0;
    align-items: center;
    align-self: stretch;
    width: ${({ theme }) => theme.inputBox.width};
    height: ${({ theme }) => theme.inputBox.height};
    margin: ${({ theme }) => theme.inputBox.margin};
    padding: ${({ theme }) => theme.inputBox.padding};

    border: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].border};
    border-radius: ${({ theme }) => theme.inputBox.borderRadius};

    background: ${({ theme }) => theme.inputBox.background};
    box-shadow: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].boxShadow};

    color: ${({ theme, status }) =>
      theme.inputBox[status || defaultStatus].color};
    font-family: ${({ theme }) => theme.typography.paragraphMedium.fontFamily};
    font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};

    &:focus {
      box-sizing: ${({ theme, status }) =>
        theme.inputBox[status || defaultStatus].focused.boxSizing};

      border: ${({ theme, status }) =>
        theme.inputBox[status || defaultStatus].focused.border};
      border-radius: ${({ theme, status }) =>
        theme.inputBox[status || defaultStatus].focused.borderRadius};
      outline: none;

      background: ${({ theme }) => theme.inputBox.background};
      box-shadow: ${({ theme, status }) =>
        theme.inputBox[status || defaultStatus].focused.boxShadow};
    }

    &::placeholder {
      display: flex;
      align-items: center;

      color: ${(props: any) =>
        props.disabled
          ? props.theme.colors.neutral[300]
          : props.theme.inputBox.placeholder.color};
    }

    &:disabled {
      box-sizing: ${({ theme }) => theme.inputBox.disabled.boxSizing};
      align-items: center;
      padding: ${({ theme }) => theme.inputBox.padding};

      border: ${({ theme }) => theme.inputBox.disabled.border};
      border-radius: ${({ theme }) => theme.inputBox.borderRadius};

      background: ${({ theme }) => theme.inputBox.background};
      box-shadow: ${({ theme }) => theme.inputBox.disabled.boxShadow};

      color: ${({ theme }) => theme.colors.neutral[300]};

      cursor: not-allowed;
    }
  }
`;

// This set-ups the "calendar popup" styles
export const DatePickerWrapperStyles = createGlobalStyle<{ theme: Theme }>`
    .react-datepicker {
      border: 1px solid rgba(0,0,0,0.04);

      box-shadow: ${({ theme }) => theme.shadows.large};

      font-family: ${({ theme }) =>
        theme.typography.paragraphMedium.fontFamily};

      /* Top triangle, that "connects" the date picker to the form field */
      &__triangle {
        position: absolute !important;
        left: 50% !important;

        transform: none !important;

        &::before {
          border-bottom-color: #e2e2e2;
        }
        &::after {
          border-bottom-color: #f2f2f2;
        }
      }

      /* Left and right arrows that change the month/year */
      &__navigation {
        top:24px;

        &--previous {
          left: 24px;
        }

        &--next {
          right: 24px;
        }
      }

      /* Header, contains month/year and also week days indicator */
      &__header {
        padding: ${({ theme }) => theme.spacings.xbig};

        border-bottom: none;

        background-color: transparent;

        &__dropdown {
          display: flex;
          justify-content: space-around;
          padding: 0 16px;
        }
      }

      &__month-read-view--down-arrow, &__year-read-view--down-arrow {
        top: -2px;
        right: -20px;
      }

      &__day-names {
        margin-top: 16px;
        margin-bottom: -52px;
      }

      &__day-name {
        color: ${({ theme }) => theme.colors.neutral[400]};
      }

      /* Month/year dropdowns (select menu) */
      &__year-dropdown,
      &__month-dropdown,
      &__month-year-dropdown {
        border: 1px solid rgba(0,0,0,0.04);

        background-color: white;
        box-shadow: ${({ theme }) => theme.shadows.xxLarge};
      }

      &__year-option,
      &__month-option,
      &__month-year-option {
        padding: 4px 0;

        &:hover {
          background-color: ${({ theme }) => theme.colors.neutral[100]};
        }
      }

      &__month-option--selected_month,
      &__year-option--selected_year {
        color: ${({ theme }) => theme.colors.primary[400]};
        font-weight: 500;

        & > span {
          display: none;
        }
      }

      &__current-month,
      &-time__header,
      &-year-header {
        margin-bottom: 8px;

        color: ${({ theme }) => theme.colors.neutral[600]};
        font-size: 16px;
        font-weight: 500;
      }

      &__month {
        padding: ${({ theme }) => theme.spacings.xbig};
      }

      &__day, &__month, &__quarter, &__year {
        border-radius: 4px;

        color: ${({ theme }) => theme.colors.neutral[900]};

        &--in-range, &--in-selecting-range {
          background-color: ${({ theme }) =>
            theme.colors.neutral[100]} !important;

          &:hover {
            background-color: ${({ theme }) =>
              theme.colors.primary[200]} !important;
          }
        }

        &--selected {
          background-color: ${({ theme }) =>
            theme.colors.primary[400]} !important;

          &:hover {
            background-color: ${({ theme }) =>
              theme.colors.primary[200]} !important;
          }
        }

        &--keyboard-selected {
          background-color: ${({ theme }) => theme.colors.secondary[400]};

          &:hover {
            background-color: ${({ theme }) => theme.colors.secondary[200]};
          }
        }
      }

      &__year-option:first-of-type {
        position: relative;
        height: 24px;

        /* this fixes a bug - it was hard/impossible to select the uppermost year */
        a {
          display: none;
        }

        &::after {
          content: '';

          display: inline-block;
          position: absolute;
          top: 12px;
          left: 50%;
          width: 0.45em;
          height: 0.45em;

          transform: translate(-50%, 0) rotate(-45deg);

          border-width: 0.25em 0.25em 0 0;
          border-style: solid;
          border-color: #bbb;

          vertical-align: top;
        }
      }

      &__year-option:last-of-type {
        position: relative;
        height: 24px;

        &::after {
          content: '';

          display: inline-block;
          position: absolute;
          top: 12px;
          left: 50%;
          width: 0.45em;
          height: 0.45em;

	        transform: translate(-50%, 0) rotate(135deg) ;

          border-width: 0.25em 0.25em 0 0;
          border-style: solid;
          border-color: #bbb;

          vertical-align: top;
        }
      }
    }    
`;
