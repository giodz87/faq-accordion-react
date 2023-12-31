import { useState } from "react";
import style from "styled-components";
import AccordionItem from "../styles-components/AccordionItem";

const DATA = [
  {
    itemNumber: 1,
    title: "How many team members can I invite",
    content: "There is no limit on team members for the Premium plan.",
  },
  {
    itemNumber: 2,
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    itemNumber: 3,
    title: "   How do I reset my password?",
    content: "Sign in with your  ID. Then click Password & Security, Change Password, and follow the onscreen instructions.",
  },
  {
    itemNumber: 4,
    title: "Can I cancel my subscription?",
    content: "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    itemNumber: 5,
    title: "Do you provide additional support?",
    content: " 24/7 Live Phone & Chat Support ",
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
