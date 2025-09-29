const sections = [
  {
    title: "I. OPD / Screening",
    questions: [
      { id: "q_a1", label: "OPD registrations (new)" },
      { id: "q_a2", label: "OPD registrations (review)" }
    ],
  },
  {
    title: "II. Refraction",
    subsections: [
      {
        title: "A. Adults",
        questions: [
          { id: "q_b1", label: "Refractions done (adults)" },
          { id: "q_b2", label: "Spectacles prescribed (adults)" },
        ],
      },
      {
        title: "B. Children",
        questions: [
          { id: "q_b3", label: "Refractions done (children)" },
          { id: "q_b4", label: "Spectacles prescribed (children)" },
        ],
      },
    ],
  },
  /* These two “table” sections are markers. App/ReportEntry expects them. */
  {
    title: "III. EYE BANK PERFORMANCE",
    table: true,
    // Template rows — your real app may fill columns dynamically
    rows: [{ nameKey: "Name", collectedKey: "Collected", issuedKey: "Issued" }],
  },
  {
    title: "V. VISION CENTER",
    table: true,
    rows: [
      { centreKey: "Center", screenedKey: "Screened", referredKey: "Referred" },
      { centreKey: "Center", screenedKey: "Screened", referredKey: "Referred" },
    ],
  },
];

export default sections;
