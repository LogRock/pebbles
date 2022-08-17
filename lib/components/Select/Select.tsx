import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputBox } from "../InputBox";
import SimpleItem from "./items/SimpleItem";
import { IconWrapper, SelectItems, SelectWrapper } from "./Select.styled";
import { BaseItemType, SelectProps } from "./Select.types";

const Select = <ItemType extends BaseItemType>({
  autoCompleteItems,
  renderItem,
  inputProps,
  renderHeader,
  onItemSelected,
  spaced,
  maxHeight,
  multiSelect,
  expandUp,
  ...props
}: SelectProps<ItemType>) => {
  const Item = renderItem || SimpleItem;

  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [firstFocus, setFirstFocus] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const keyPressHandler = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setHasFocus(false);
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
            if (autoCompleteItems.length) {
              if (onItemSelected && typeof onItemSelected === "function") {
                onItemSelected(autoCompleteItems[oldHighlight]);
                setHasFocus(false);
              }
            }
            return 0;
          });
          break;
      }
    },
    [autoCompleteItems, onItemSelected]
  );

  const clickListener = (event: { target: any }) => {
    // Do nothing if clicking ref's element or descendent elements
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    setHasFocus(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler, false);
    document.addEventListener("mousedown", clickListener);
    document.addEventListener("touchstart", clickListener);

    return () => {
      document.removeEventListener("keydown", keyPressHandler, false);
      document.removeEventListener("mousedown", clickListener);
      document.removeEventListener("touchstart", clickListener);
    };
  }, [keyPressHandler]);

  useEffect(() => {
    if (firstFocus) {
      setHasFocus(true);
    }
  }, [autoCompleteItems, firstFocus]);

  return (
    <SelectWrapper
      focus={hasFocus}
      spaced={spaced || inputProps?.spaced}
      ref={ref}
      {...props}
    >
      <InputBox
        {...inputProps}
        onFocus={(e) => {
          setFirstFocus(true);
          setHasFocus(true);
          inputProps?.onFocus?.(e);
        }}
        onClick={(e) => {
          setHasFocus(true);
          inputProps?.onClick?.(e);
        }}
        hint={{
          icon: inputProps?.hint?.icon ? (
            <IconWrapper
              onClick={() => {
                setHasFocus((focus) => !focus);
              }}
            >
              {inputProps.hint.icon}
            </IconWrapper>
          ) : (
            <IconWrapper
              onClick={() => {
                setHasFocus((focus) => !focus);
              }}
            >
              <Icon
                path={hasFocus ? mdiChevronUp : mdiChevronDown}
                size={0.9}
              />
            </IconWrapper>
          ),
          content: inputProps?.hint?.content || "",
        }}
        spaced={false}
      />
      {hasFocus && (
        <SelectItems
          focus={hasFocus}
          helper={inputProps?.helper}
          description={inputProps?.description}
          maxHeight={maxHeight}
        >
          {renderHeader || null}
          {autoCompleteItems?.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              onClick={() => {
                if (!multiSelect) {
                  setHasFocus(false);
                }
                setCurrentHighlight(index);
                onItemSelected?.(autoCompleteItems[index]);
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
