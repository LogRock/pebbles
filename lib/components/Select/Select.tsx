import { mdiUnfoldMoreHorizontal } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useCallback, useEffect, useState } from "react";
import { InputBox } from "../InputBox";
import SimpleItem from "./items/SimpleItem";
import { SelectItems, SelectWrapper } from "./Select.styled";
import { BaseItemType, SelectProps } from "./Select.types";

const Select = <ItemType extends BaseItemType>({
  autoCompleteItems,
  renderItem,
  inputProps,
  renderHeader,
  onItemSelected,
  spaced,
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
    <SelectWrapper focus={hasFocus} spaced={spaced || inputProps?.spaced}>
      <InputBox
        {...inputProps}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        hint={{
          icon: inputProps?.hint?.icon || (
            <Icon path={mdiUnfoldMoreHorizontal} size={0.7} />
          ),
          content: inputProps?.hint?.content || "",
        }}
        spaced={false}
      />
      {showDropdown && (
        <SelectItems
          focus={hasFocus}
          helper={inputProps?.helper}
          description={inputProps?.description}
        >
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
        </SelectItems>
      )}
    </SelectWrapper>
  );
};

export default Select;
