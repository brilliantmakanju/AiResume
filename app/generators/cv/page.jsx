"use client";

import { useState, useEffect } from "react";

export default function CVGen() {
  const [fb, setFB] = useState("");
  const [mail, setMail] = useState("");
  const [github, setGit] = useState("");
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [dateob, setDateoB] = useState("");
  const [gender, setGender] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [numbertel, setNumberTel] = useState("");
  // const [fname, setFname] = useState("")
  // const [fname, setFname] = useState("")
  // const [fname, setFname] = useState("")
  // const [fname, setFname] = useState("")
  // const [fname, setFname] = useState("")
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);

  function Tab1(e) {
    e.preventDefault();
    if (fname === "" || lname === "" || dateob === "" || gender === "") {
      alert("All Field are required to be filled");
    } else {
      setTab1(false);
      setTab2(true);
      setTab3(false);
      setTab4(false);
    }
  }

  function Tab2(e) {
    e.preventDefault();
    if (
      fb === "" ||
      twitter === "" ||
      discord === "" ||
      linkedIn === "" ||
      github === "" ||
      numbertel === "" ||
      mail === ""
    ) {
      alert("All Field are required to be filled");
    } else {
      setTab1(false);
      setTab2(false);
      setTab3(true);
      setTab4(false);
    }
  }

  function backTab(e) {
    e.preventDefault();
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  }

  return (
    <main className="px-2 lg:px-20 py-2 pb-10 flex flex-col items-center gap-5 text-white ">
      Resume Generator
    </main>
  );
}
