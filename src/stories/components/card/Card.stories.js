import React from "react";

import Icon from "@mdi/react";
import { mdiInformation, mdiAlertCircle } from "@mdi/js";

import Card from "../../../../lib/components/Card";
import CardContent from "../../../../lib/components/Card/CardContent";
import CardHeader from "../../../../lib/components/Card/CardHeader";
import CardFooter from "../../../../lib/components/Card/CardFooter";
import StatusTrend from "../../../../lib/components/StatusTrend";
import { ParagraphLarge } from "../../../../lib/components/Typography";
import StatusTag from "../../../../lib/components/StatusTag";
import StatusPercentage from "../../../../lib/components/StatusPercentage";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args}></Card>;

export const Trend = Template.bind({});
Trend.args = {
  bgColor: "#f1f1f1",
  borderRadius: 8,
  padding: 24,
  shadow: true,
  children: (
    <>
      <CardHeader>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ParagraphLarge>Clear Inspections</ParagraphLarge>
        </div>
      </CardHeader>
      <CardContent style={{ marginBottom: "32px" }}>
        <h4>60%</h4>
      </CardContent>
      <CardFooter>
        <StatusTrend
          labelPrimary={"-42.2%"}
          labelSecondary={"vs prev month"}
          direction={"up"}
          variant={"negative"}
        />
      </CardFooter>
    </>
  ),
};

export const StatusWithTag = Template.bind({});
StatusWithTag.args = {
  bgColor: "#f4f4f4",
  borderRadius: 8,
  padding: 24,
  shadow: true,
  children: (
    <>
      <CardHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <ParagraphLarge style={{ marginRight: "32px" }}>
            Audit Risk
          </ParagraphLarge>
          <Icon size={0.95} path={mdiInformation} />
        </div>
      </CardHeader>
      <CardFooter>
        <StatusTag
          size="medium"
          variant="error"
          icon={<Icon size={0.75} path={mdiAlertCircle} />}
        >
          High Risk
        </StatusTag>
      </CardFooter>
    </>
  ),
};

export const StatusWithPercentage = Template.bind({});
StatusWithPercentage.args = {
  bgColor: "#f4f4f4",
  borderRadius: 8,
  padding: 24,
  shadow: true,
  children: (
    <>
      <CardHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <ParagraphLarge style={{ marginRight: "32px" }}>
            Document Missing
          </ParagraphLarge>
          <Icon size={0.95} path={mdiInformation} />
        </div>
      </CardHeader>
      <CardFooter>
        <StatusPercentage percentage="67" size="large">
          15%
        </StatusPercentage>
      </CardFooter>
    </>
  ),
};
