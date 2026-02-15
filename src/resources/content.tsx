import { About, Home, Newsletter, Person, Social } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Eren",
  lastName: "Vural",
  name: `Eren Vural`,
  role: "Cost Planning and Analysis Executive",
  avatar: "/images/pp-eren-bussiness.jpg",
  email: "vuraleren8@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about finance and cost management</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/evrenvural",
    essential: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vuraleren/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@vuraleren",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const about: About = {
  path: "/",
  label: "About",
  title: `${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div>
        Experienced <strong>Cost Planning and Analysis Executive</strong> with a
        strong background in manufacturing finance, budgeting, and cost
        accounting across the
        <strong>&nbsp;FMCG and Heavy Industry&nbsp;</strong>sectors. Certified
        Public Accountant (CPA) with deep expertise in
        <strong>&nbsp;SAP CO modules</strong>, cost closing processes, and
        profitability analysis.
        <br /> <br />
        Currently driving cost planning and analysis initiatives at
        <strong>&nbsp;Hayat</strong>, bridging the gap between operational
        efficiency and financial performance.
      </div>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "HAYAT",
        timeframe: "Dec 2022 - Present",
        role: "Full-time · 3 yrs 3 mos",
        achievements: [],
        subRoles: [
          {
            role: "Cost Planning and Analysis Executive",
            timeframe: "Dec 2025 - Present",
            achievements: [
              <>
                Leading cost planning and analysis operations, managing
                <strong>&nbsp;SAP-CO modules&nbsp;</strong>cost closing for
                business units in accordance with legal regulations and company
                accounting policies.
              </>,
              <>
                Preparing and sharing actual monthly
                <strong>&nbsp;profitability and cost reports&nbsp;</strong>with
                relevant departments and top management.
              </>,
              <>
                Responsible for plant
                <strong>&nbsp;budget preparation</strong>, cost budget analyses,
                and variance reporting to drive operational efficiency.
              </>,
              <>
                Working closely with related departments to calculate incentives
                and manage
                <strong>&nbsp;legal mandatory reportings</strong>.
              </>,
            ],
          },
          {
            role: "Manufacturing Finance Executive",
            timeframe: "Dec 2022 - Dec 2025",
            achievements: [
              <>
                Managed the operational process of costing in accordance with
                legal regulations and company
                <strong>&nbsp;accounting policies</strong>.
              </>,
              <>
                Responsible for monthly
                <strong>&nbsp;SAP-CO modules&nbsp;</strong>cost closing for
                business units, preparing and sharing actual monthly
                profitability and cost reports.
              </>,
              <>
                Prepared monthly cost reports including
                <strong>&nbsp;Production Reports</strong>,
                <strong>&nbsp;Expense Reports</strong>, and
                <strong>&nbsp;Stock Aging Reports&nbsp;</strong>for relevant
                departments.
              </>,
              <>
                Responsible for preparation of
                <strong>&nbsp;product cost</strong>, standard and actual unit
                costs, and deep material analysis.
              </>,
            ],
          },
        ],
        images: [],
      },
      {
        company: "KANCA FORGING",
        timeframe: "Jan 2019 - Dec 2022",
        role: "Full-time · 3 yrs 11 mos",
        achievements: [],
        subRoles: [
          {
            role: "Budget and Cost Accounting Specialist",
            timeframe: "Feb 2022 - Dec 2022",
            achievements: [
              <>
                Took part in
                <strong>&nbsp;budgets and forecasts&nbsp;</strong>preparation,
                performing comparison and analysis of budget/forecast against
                monthly results.
              </>,
              <>
                Executed planning, follow-up, and
                <strong>&nbsp;control processes&nbsp;</strong>related to budget
                and cost operations.
              </>,
            ],
          },
          {
            role: "Cost Accounting Specialist",
            timeframe: "Jan 2019 - Feb 2022",
            achievements: [
              <>
                Performed analysis and reporting of
                <strong>
                  &nbsp;production and end-of-period product costs
                </strong>
                .
              </>,
              <>
                Prepared
                <strong>&nbsp;cost improvement measures&nbsp;</strong>and
                managed end-of-period cost accounting and inventory operations.
              </>,
              <>
                Controlled, analyzed, and reported on
                <strong>&nbsp;order costs&nbsp;</strong>within the company.
              </>,
            ],
          },
        ],
        images: [],
      },
      {
        company: "SAR CAM",
        timeframe: "May 2017 - Dec 2018",
        role: "Full-time · 1 yr 7 mos",
        achievements: [],
        subRoles: [
          {
            role: "Project Costing Specialist",
            timeframe: "May 2017 - Dec 2018",
            achievements: [
              <>
                Substituted alternatives to customers by searching for suitable
                products to be used in projects.
              </>,
              <>
                Conducted
                <strong>&nbsp;cost analysis&nbsp;</strong>for custom/project
                orders.
              </>,
              <>Analyzed and reported on the status of given proposals.</>,
            ],
          },
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Gebze Technical University",
        description: (
          <>
            <br />
            Master's Degree in Economics (2019 - 2022)
            <br />
            <br />
            Thesis: "The effect of oil prices on the stock market: An empirical
            investigation"
            <br />
            <br />
            Focused on empirical research methodologies and financial economics,
            applying quantitative analysis to understand macroeconomic impacts
            on capital markets.
          </>
        ),
      },
      {
        name: "Karadeniz Technical University",
        description: (
          <>
            <br />
            Bachelor's Degree in Economics (2010 - 2014)
            <br />
            <br />
            Activities and societies: Karadeniz Teknik Üniversitesi İşletme ve
            Ekonomi Kulübü
            <br />
            <br />
            Built a strong foundation in economic theory, quantitative methods,
            and financial analysis.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Certifications & Skills",
    skills: [
      {
        title: "Certified Public Accountant (CPA)",
        description: (
          <>
            Licensed by TÜRMOB (Union of Chambers of Certified Public
            Accountants of Türkiye), issued February 2023.
            <br />
            <br />
            Certified in financial reporting, auditing, tax compliance, and
            accounting standards.
          </>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Core Competencies",
        description: (
          <>
            SAP CO (Controlling Module) · Budgeting · Financial Planning · Cost
            Accounting · Profitability Analysis · Manufacturing Finance · Cost
            Improvement · Inventory Management · Variance Analysis · Financial
            Reporting
          </>
        ),
        tags: [],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

export { person, social, newsletter, about };
