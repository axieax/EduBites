import React, { useState } from "react";
import styles from "../styles/Classroom.module.css";

const Category = () => {
  return <div className={styles.category}>Category Name</div>;
};

const subchannel = ({ subchannels }) => {
  return <></>;
};

// const channel = ({name, type, selected, subchannels}) => {

// 	let render;
// 	switch(type) {
// 		case '':
// 	}

// 	return (
// 		<div className={styles.channel}>
// 			name
// 			{switch (type) {
// 				case
// 			}}
// 		</div>
// 	);
// }

export default function Classroom() {
  const [activeChat, setActiveChat] = useState(0);

  const categories = [
    {
      name: "general",
      channels: [
        {
          name: "announcements",
          type: "text",
        },
        {
          name: "classroom",
          type: "mixed",
          subchannels: [
            {
              name: "resources",
              type: "text",
            },
            {
              name: "join live call",
              type: "voice",
              active: "true",
            },
          ],
        },
        {
          name: "feedback",
          type: "text",
        },
        {
          name: "off-topic",
          type: "text",
        },
      ],
    },
    {
      name: "subjects",
      channels: [],
    },
  ];

  return (
    <div className={styles.classroom}>
      <div className={styles.sidebar}>
        <h2 className={styles.className}>Class Name</h2>
        <h3>GENERAL</h3>
        <ul>
          <li>#announcements</li>
          <li>#classroom</li>
          <li>#classroom</li>
        </ul>
        <h3>SUBJECTS</h3>
      </div>
      <div className={styles.main}>Main</div>
    </div>
  );
}
