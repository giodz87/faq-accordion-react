import { useState } from "react";
import style from "styled-components";
import AccordionItem from "../styles-components/AccordionItem";

const DATA = [
  {
    itemNumber: 1,
    title: "How many team members can I invite",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
  },
  {
    itemNumber: 2,
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space",
  },
  {
    itemNumber: 3,
    title: "   How do I reset my password?",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
  },
  {
    itemNumber: 4,
    title: "Can I cancel my subscription?",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
  },
  {
    itemNumber: 5,
    title: "Do you provide additional support?",
    content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ",
  },
];
export default function Accordion() {
  const [visible, setVisible] = useState(2);

  const accordionClck = (accordionNumber) => {
    if (visible === accordionNumber) {
      setVisible(null);
    } else {
      setVisible(accordionNumber);
    }
  };

  return (
    <>
      {DATA.map((item) => (
        <AccordionItem
          visible={visible}
          accordionClck={accordionClck}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}
        />
      ))}
      {/* <AccordionItem
        visible={visible}
        accordionClck={accordionClck}
        itemNumber={1}
        title=" How many team members can I invite?"
        content="dora doura wieba wasdadsad"
      />

      <AccordionItem
        visible={visible}
        accordionClck={accordionClck}
        itemNumber={2}
        title="What is the maximum file upload size?"
        content="dora doura wieba wasdadsad"
      />
      <AccordionItem
        visible={visible}
        accordionClck={accordionClck}
        itemNumber={3}
        title="   How do I reset my password?"
        content="dora doura wieba wasdadsad"
      />

      <AccordionItem
        visible={visible}
        accordionClck={accordionClck}
        itemNumber={4}
        title="   Can I cancel my subscription?"
        content="dora doura wieba wasdadsad"
      />
      <AccordionItem
        visible={visible}
        accordionClck={accordionClck}
        itemNumber={5}
        title=" Do you provide additional support?"
        content="dora doura wieba wasdadsad"
      /> */}
    </>
  );
}
