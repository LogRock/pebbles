import { mdiUnfoldMoreHorizontal } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useCallback, useEffect, useState } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { InputBox } from "../InputBox";
import SimpleItem from "./items/SimpleItem";
import { BaseItemType, SelectProps } from "./Select.types";

const AutoCompleteWrapper = styled.div<{ focus?: boolean }>`
  display: flex;
  position: ${({ focus }) => (focus ? "fixed" : "relative")};
  z-index: ${({ focus }) => (focus ? "99999" : "9")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  flex-flow: column nowrap;
  padding: ${({ theme, focus }) => (focus ? theme.spacings.md : undefined)};

  background: ${({ theme, focus }) =>
    focus ? theme.colors.shades["0"] : "none"};

  ${up("desktop")} {
    position: relative;
    z-index: unset;
    padding: 0;

    background: none;
  }
`;

const AutoCompleteItems = styled.div<{ focus?: boolean }>`
  display: ${({ focus }) => (focus ? "flex" : "none")};
  box-sizing: border-box;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.shades["0"]};
  box-shadow: ${({ theme, focus }) =>
    focus ? undefined : theme.select.items.shadow};

  ${up("desktop")} {
    display: ${({ focus }) => (focus ? "flex" : "none")};
    position: absolute;
    z-index: 9999;
    top: ${({ theme }) => theme.spacings.xxlg};
    flex-grow: unset;
    flex-shrink: unset;

    box-shadow: ${({ theme }) => theme.select.items.shadow};
  }
`;

const Select = <ItemType extends BaseItemType>({
  autoCompleteItems,
  renderItem,
  inputProps,
  renderHeader,
  onItemSelected,
}: SelectProps<ItemType>) => {
  const Header = renderHeader || (() => null);
  const Item = renderItem || SimpleItem;

  const [showDropdown, setShowDropdown] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);

  const keyPressHandler = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setShowDropdown(false);
          break;
        case "ArrowUp":
          setCurrentHighlight((oldHighlight) =>
            oldHighlight ? oldHighlight - 1 : oldHighlight
          );
          break;
        case "ArrowDown":
          setCurrentHighlight((oldHighlight) => {
            return oldHighlight < autoCompleteItems.length - 1
              ? oldHighlight + 1
              : oldHighlight;
          });
          break;
        case "Enter":
          setCurrentHighlight((oldHighlight) => {
            setShowDropdown(false);
            if (autoCompleteItems.length) {
              if (onItemSelected && typeof onItemSelected === "function") {
                onItemSelected(autoCompleteItems[oldHighlight]);
              }
            }
            return 0;
          });
          break;
      }
    },
    [autoCompleteItems, onItemSelected]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler, false);

    return () => {
      document.removeEventListener("keydown", keyPressHandler, false);
    };
  }, [keyPressHandler]);

  useEffect(() => {
    setShowDropdown(true);
  }, [autoCompleteItems]);

  return (
    <AutoCompleteWrapper focus={hasFocus}>
      <InputBox
        {...inputProps}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        hint={{
          icon: <Icon path={mdiUnfoldMoreHorizontal} size={0.7} />,
          content: "",
        }}
      />
      {showDropdown && (
        <AutoCompleteItems focus={hasFocus}>
          {autoCompleteItems?.length > 0 && <Header />}
          {autoCompleteItems?.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              onClick={() => {
                setShowDropdown(false);
                if (onItemSelected && typeof onItemSelected === "function") {
                  onItemSelected(autoCompleteItems[index]);
                }
                setCurrentHighlight(0);
              }}
              onMouseEnter={() => setCurrentHighlight(index)}
              highlighted={currentHighlight === index}
            />
          ))}
        </AutoCompleteItems>
      )}
    </AutoCompleteWrapper>
  );
};

export default Select;
