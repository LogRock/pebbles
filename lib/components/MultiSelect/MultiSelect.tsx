import React, { FC } from "react";

import CheckBox from "../CheckBox";
import BaseInputBox, { BaseInputBoxProps } from "../InputBox/BaseInputBox";

export interface MultiSelectProps extends BaseInputBoxProps {
  possibleValues?: string[];
  values?: string[];
}

const MultiSelect: FC<MultiSelectProps> = ({
  possibleValues,
  values,
  ...inputProps
}) => {
  const selectedItems = Array.from(values || []);
  return (
    <BaseInputBox {...inputProps}>
      <div style={{ padding: "10px 12px" }}>
        {possibleValues &&
          possibleValues.map((item: any) => (
            <CheckBox
              {...inputProps}
              key={item}
              onChange={async () => {
                const numberOfItems = 1;
                const index = selectedItems.indexOf(item);
                const alreadyExists = index > -1;
                if (alreadyExists) selectedItems.splice(index, numberOfItems);
                else selectedItems.push(item);
                // @ts-ignore
                inputProps?.onChange(selectedItems);
              }}
              checked={values ? values?.indexOf(item) >= 0 : false}
              disabled={inputProps?.disabled || false}
              id={item.replace(/[^a-z]+/i, "")}
            >
              {item}
            </CheckBox>
          ))}
      </div>
    </BaseInputBox>
  );
};

export default MultiSelect;
