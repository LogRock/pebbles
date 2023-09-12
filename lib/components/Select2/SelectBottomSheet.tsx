import React from "react";
import BottomSheet from "../BottomSheet";
import { MenuProps } from "react-select";
import { InputBox } from "../InputBox";
import { BsSearch } from "react-icons/bs";
import { Text } from "../Typography";
import styled from "styled-components";

const StyledText = styled(Text)`
  display: block;

  text-align: left;
`;

export default function SelectBottomSheet(props: MenuProps) {
  // this is the proper react-select API, but it's not typed correctly
  // they actually recommend ts-ignore in the docs
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { label, onMenuClose, setMenuIsOpen, inputValue, onInputChange } =
    props.selectProps;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { bottomSheetFooter, bottomSheetHeader } = props.selectProps;

  return (
    <BottomSheet
      open={true}
      onDismiss={() => {
        onMenuClose?.();
        setMenuIsOpen?.(false);
        onInputChange("", { action: "menu-close", prevInputValue: inputValue });
      }}
      snapPoints={({ maxHeight }) => [
        maxHeight * 0.5,
        maxHeight * 0.7,
        maxHeight * 0.9,
        maxHeight,
      ]}
      defaultSnap={({ maxHeight }) => maxHeight * 0.7}
      header={
        <>
          <InputBox
            type="text"
            placeholder="Type Here"
            startIcon={<BsSearch />}
            spaceAfter="xxxbig"
            value={inputValue}
            onChange={(e) =>
              onInputChange(e.target.value, {
                action: "input-change",
                prevInputValue: inputValue,
              })
            }
          />
          <StyledText type="overlineLarge" color="neutral" shade="400">
            {label}
          </StyledText>
          {bottomSheetHeader}
        </>
      }
      footer={bottomSheetFooter}
    >
      {props.children}
    </BottomSheet>
  );
}
