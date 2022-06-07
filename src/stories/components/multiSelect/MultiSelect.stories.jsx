import React, { FC, useState } from "react";
import { MultiSelect } from "../../../../lib/components/MultiSelect";
import Form from "@rjsf/core";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
};

const Template = (props) => {
  // this is disabled because the component already have a props, but this is JS file
  // eslint-disable-next-line react/prop-types
  const [values, setValues] = useState(props?.values || []);

  return (
    <>
      <MultiSelect
        {...props}
        values={values}
        onChange={async (data) => {
          setValues(data);
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  values: ["1st", "3rd"],
  possibleValues: ["1st", "2nd", "3rd"],
  title: "Title Alternatives",
  description: "Description Alternatives",
  status: "error",
  helper: "Please provide the alternatives",
};

const basaltSchema = {
  type: "object",
  required: ["endorsements", "examiner"],
  properties: {
    endorsements: {
      title: "Endorsements",
      type: "array",
      items: {
        type: "string",
        enum: [
          "(H) Hazmat",
          "(N) Tank",
          "(T) Double/Triples",
          "(X) Tank and Hazmat",
          "(P) Passenger",
          "(S) School Bus",
        ],
      },
    },
    examiner: {
      title: "Examiner",
      type: "string",
    },
  },
};
const CustomMultiSelect: FC = (props) => {
  return (
    <MultiSelect
      description={props.schema.title}
      possibleValues={props.schema.items.enum}
      values={props.formData || null}
      helper={props?.rawErrors?.length ? props.rawErrors.join("; ") : undefined}
      status={props?.rawErrors?.length ? "error" : "info"}
      onChange={(data) => {
        props.onChange(data);
      }}
    />
  );
};

const DynamicForm: FC = (props) => {
  return (
    <Form
      schema={basaltSchema}
      fields={{
        ArrayField: CustomMultiSelect,
      }}
    />
  );
};

const FormTemplate = (args) => {
  return <DynamicForm values={["(T) Double/Triples"]} />;
};
export const FormMultiSelect = FormTemplate.bind({});
