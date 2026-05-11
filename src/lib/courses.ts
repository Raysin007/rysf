export interface CourseDetail {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  durationKey: string;
  level: string;
  tags?: string[];
  curriculum?: {
    objective: string;
    outcomes: string[];
    syllabus: {
      week: string;
      module: string;
      topics: string[];
      practical?: string[];
      assignment?: string;
    }[];
    labs: string[];
    tools: {
      beginner: string[];
      optional?: string[];
    };
    assessment: {
      type: string;
      weight: string;
    }[];
    certification: string[];
    careers: string[];
    methodology: string;
  };
}

export const courseDetails: Record<string, CourseDetail[]> = {
  agriculture: [
    { id: "ag-1", titleKey: "courses.tracks.agriculture.c1", descKey: "courses.tracks.agriculture.desc1", image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w8", level: "Foundation", tags: ["sustainability", "ecology"] },
    { id: "ag-2", titleKey: "courses.tracks.agriculture.c2", descKey: "courses.tracks.agriculture.desc2", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w6", level: "Foundation", tags: ["commercial", "horticulture"] },
    { id: "ag-3", titleKey: "courses.tracks.agriculture.c3", descKey: "courses.tracks.agriculture.desc3", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w4", level: "Foundation", tags: ["soil_health", "waste_mgmt"] },
    { id: "ag-4", titleKey: "courses.tracks.agriculture.c4", descKey: "courses.tracks.agriculture.desc4", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w8", level: "Foundation", tags: ["livestock", "nutrition"] },
    { id: "ag-5", titleKey: "courses.tracks.agriculture.c5", descKey: "courses.tracks.agriculture.desc5", image: "https://images.unsplash.com/photo-1497001891232-e215c30774d1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w10", level: "Foundation", tags: ["aquaculture", "water_mgmt"] },
    { id: "ag-a1", titleKey: "courses.tracks.agriculture.a1", descKey: "courses.tracks.agriculture.desca1", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w12", level: "Advance", tags: ["agro_processing", "branding"] },
    { id: "ag-a2", titleKey: "courses.tracks.agriculture.a2", descKey: "courses.tracks.agriculture.desca2", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w14", level: "Advance", tags: ["exports", "global_trade"] },
  ],
  wellness: [
    { id: "wl-1", titleKey: "courses.tracks.wellness.c1", descKey: "courses.tracks.wellness.desc1", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w6", level: "Foundation", tags: ["hygiene", "public_health"] },
    { id: "wl-2", titleKey: "courses.tracks.wellness.c2", descKey: "courses.tracks.wellness.desc2", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w10", level: "Foundation", tags: ["ayurveda", "herbal_medicine"] },
    { id: "wl-3", titleKey: "courses.tracks.wellness.c3", descKey: "courses.tracks.wellness.desc3", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w8", level: "Foundation", tags: ["yoga", "meditation"] },
    { id: "wl-4", titleKey: "courses.tracks.wellness.c4", descKey: "courses.tracks.wellness.desc4", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w6", level: "Foundation", tags: ["nutrition", "local_diet"] },
    { id: "wl-5", titleKey: "courses.tracks.wellness.c5", descKey: "courses.tracks.wellness.desc5", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w4", level: "Foundation", tags: ["first_aid", "emergency"] },
    { id: "wl-a1", titleKey: "courses.tracks.wellness.a1", descKey: "courses.tracks.wellness.desca1", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w12", level: "Advance", tags: ["diagnostics", "panchakarma"] },
  ],
  "data-tech": [
    {
      id: "dt-1",
      titleKey: "courses.tracks.data_tech.c1",
      descKey: "courses.tracks.data_tech.desc1",
      image: "https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["data", "analysis"],
      curriculum: {
        objective: "To help learners understand, collect, organize, interpret, and communicate data effectively using modern digital tools and real-world examples. The course focuses on practical data skills for education, business, agriculture, health, and community development.",
        outcomes: [
          "Understand what data is and why it matters",
          "Collect and organize information systematically",
          "Use spreadsheets for data handling",
          "Create charts and visual reports",
          "Interpret patterns and trends",
          "Make data-driven decisions",
          "Present findings clearly",
          "Understand ethical and responsible data use"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Data Literacy",
            topics: ["What is data?", "Why data matters in modern life", "Data in agriculture, health, business, and education", "Information vs data", "Structured vs unstructured data", "Quantitative vs qualitative data"],
            practical: ["Identify data used in daily life", "Group discussion: “How data affects decisions”", "Data spotting exercise"],
            assignment: "Create a list of 20 examples of data used in your community."
          },
          {
            week: "WEEK 2",
            module: "Data Collection Methods",
            topics: ["Primary and secondary data", "Surveys and questionnaires", "Observation methods", "Interviews and feedback collection", "Online forms and digital surveys", "Sampling basics"],
            practical: ["Writing effective survey questions", "Avoiding biased questions", "Recording accurate information", "Conduct a mini survey in class", "Create a feedback form", "Interview exercise"],
            assignment: "Design a survey about local community issues."
          },
          {
            week: "WEEK 3",
            module: "Organizing & Cleaning Data",
            topics: ["Tables and datasets", "Rows, columns, and headers", "File organization", "Data formatting standards", "Missing and duplicate data", "Data cleaning basics"],
            practical: ["Entering data", "Sorting", "Filtering", "Basic formulas", "Cell formatting", "Clean messy datasets"],
            assignment: "Organize survey data into a professional spreadsheet."
          },
          {
            week: "WEEK 4",
            module: "Data Analysis Fundamentals",
            topics: ["What is data analysis?", "Reading trends and patterns", "Percentages and averages", "Mean, median, and mode", "Comparing datasets", "Identifying anomalies"],
            practical: ["Analyze sample datasets", "Compare community statistics", "Identify patterns in charts", "Asking good questions", "Finding useful insights"],
            assignment: "Write a short analysis report using collected data."
          },
          {
            week: "WEEK 5",
            module: "Data Visualization",
            topics: ["Importance of visual communication", "Choosing the right chart (Bar, Pie, Line)", "Infographics basics", "Design Principles: Clarity and simplicity", "Labels and legends", "Avoiding misleading charts"],
            practical: ["Create graphs from survey data", "Design a simple infographic", "Present findings visually", "Excel charts & Google Sheets visualization"],
            assignment: "Create a visual report using charts and graphs."
          },
          {
            week: "WEEK 6",
            module: "Data Ethics & Digital Responsibility",
            topics: ["Data privacy", "Consent and confidentiality", "Ethical data collection", "Misinformation and fake statistics", "Digital security basics", "Responsible sharing of information"],
            practical: ["Identify fake vs real statistics", "Case study discussions", "Privacy awareness exercises", "Discussion: “Who owns data?”"],
            assignment: "Write a reflection on ethical data use."
          },
          {
            week: "WEEK 7",
            module: "Real-World Applications of Data",
            topics: ["Agriculture data systems", "Health and wellness tracking", "Business and finance data", "Social media analytics", "Government census data", "Educational analytics"],
            practical: ["Analyze a real-world case study (Crop productivity, Sales tracking)", "Community problem-solving exercise"],
            assignment: "Choose one industry and explain how data improves decision-making."
          },
          {
            week: "WEEK 8",
            module: "Final Project & Presentation",
            topics: ["Choosing a community data project", "Data collection & organization", "Analysis & Visualization", "Reporting techniques"],
            practical: ["Final project development", "Data analysis & charts", "Presentation preparation"],
            assignment: "Deliver final presentation with graphs, insights, and recommendations."
          }
        ],
        labs: ["Spreadsheet management", "Data cleaning", "Survey creation", "Visualization design", "Reporting techniques", "Digital collaboration"],
        tools: {
          beginner: ["Google Sheets", "Microsoft Excel", "Google Forms"],
          optional: ["Canva", "Power BI (intro)", "Tableau Public (intro)"]
        },
        assessment: [
          { type: "Class Participation", weight: "10%" },
          { type: "Weekly Assignments", weight: "25%" },
          { type: "Practical Exercises", weight: "25%" },
          { type: "Mid-Course Project", weight: "10%" },
          { type: "Final Project & Presentation", weight: "30%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all practical exercises",
          "Submit weekly assignments",
          "Complete the final data project",
          "Deliver a presentation"
        ],
        careers: [
          "Data Analysis & Visualization",
          "Business Analytics",
          "Research Assistance",
          "Digital Marketing Analytics",
          "Community Data Management",
          "Administrative & Office Roles"
        ],
        methodology: "40% Theory, 60% Practical & Project-Based Learning"
      }
    },
    {
      id: "dt-2",
      titleKey: "courses.tracks.data_tech.c2",
      descKey: "courses.tracks.data_tech.desc2",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["hardware", "security"],
      curriculum: {
        objective: "To equip learners with essential digital and technology skills required for education, communication, employment, entrepreneurship, and modern workplaces. The course focuses on practical computer usage, internet skills, digital safety, online collaboration, and emerging technologies.",
        outcomes: [
          "Understand computer and digital technology fundamentals",
          "Operate computers and mobile devices confidently",
          "Use the internet safely and effectively",
          "Create digital documents and presentations",
          "Communicate professionally online",
          "Understand cybersecurity basics",
          "Use cloud-based collaboration tools",
          "Adapt to modern digital workplaces"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Technology & Digital Devices",
            topics: ["What is technology?", "Role of technology in modern life", "Digital transformation in society", "Technology in agriculture, education, business, and healthcare", "Introduction to digital ecosystems", "Computer Fundamentals (Desktop vs Laptop vs Mobile)", "Hardware vs software", "Input and output devices"],
            practical: ["Identifying computer parts", "Device handling practice", "Technology discussion session"],
            assignment: "Create a chart explaining different digital devices and their uses."
          },
          {
            week: "WEEK 2",
            module: "Computer Operations & File Management",
            topics: ["Operating systems basics", "Windows interface fundamentals", "Desktop navigation", "Keyboard and mouse skills", "File and folder management", "Installing applications", "Managing downloads", "Printing documents"],
            practical: ["Creating folders", "Saving and organizing files", "Copy, paste, rename, delete", "Using USB drives", "Typing exercises", "Folder organization tasks", "File-sharing practice"],
            assignment: "Organize a complete digital folder structure for school or work."
          },
          {
            week: "WEEK 3",
            module: "Internet & Online Communication",
            topics: ["How the internet works", "Browsers and search engines", "Effective Google searching", "Downloading and uploading files", "Internet etiquette", "Email creation and management (Gmail)", "Writing professional emails", "Attachments and file sharing", "Video conferencing (Zoom/Meet)"],
            practical: ["Create and send professional emails", "Join a virtual meeting", "Online research exercises"],
            assignment: "Write and send a professional email with an attachment."
          },
          {
            week: "WEEK 4",
            module: "Digital Productivity Tools",
            topics: ["Word processing (MS Word/Google Docs)", "Creating presentations (PowerPoint/Slides)", "Spreadsheet basics", "Cloud storage systems (Google Drive)", "Collaborative work environments"],
            practical: ["Formatting documents", "Designing presentations", "Sharing files online", "Collaborative editing", "Resume creation", "Group presentation project"],
            assignment: "Create a professional presentation on a community topic."
          },
          {
            week: "WEEK 5",
            module: "Cybersecurity & Digital Safety",
            topics: ["Cybersecurity basics", "Strong passwords", "Online scams and phishing", "Privacy and personal data protection", "Social media safety", "Responsible online behavior", "Digital footprints", "Safe downloading practices"],
            practical: ["Creating secure passwords", "Privacy settings management", "Identifying fake websites and scams", "Scam detection workshop", "Online safety role-play"],
            assignment: "Prepare a digital safety checklist for families or students."
          },
          {
            week: "WEEK 6",
            module: "Social Media & Digital Identity",
            topics: ["Social media platforms (FB, IG, LinkedIn, YT)", "Personal branding basics", "Creating professional online profiles", "Content sharing ethics", "Social media for business and networking"],
            practical: ["Profile optimization", "Content posting basics", "Visual communication", "Digital networking", "Create a professional profile", "Social media content planning"],
            assignment: "Develop a one-week social media content plan."
          },
          {
            week: "WEEK 7",
            module: "Emerging Technologies",
            topics: ["Introduction to Artificial Intelligence (AI)", "Cloud computing basics", "Internet of Things (IoT)", "Digital payments and fintech", "E-commerce systems", "Automation", "Remote work technologies"],
            practical: ["Explore AI tools", "Cloud storage practice", "Digital payment simulations"],
            assignment: "Research an emerging technology and present its future impact."
          },
          {
            week: "WEEK 8",
            module: "Integrated Technology Project",
            topics: ["Project planning", "Integrated technology application", "Digital portfolio creation", "Presentation skills"],
            practical: ["Create a digital portfolio", "Design a professional resume/presentation", "Develop online business profile", "Digital awareness campaign"],
            assignment: "Complete one project option and deliver final presentation with digital demonstrations."
          }
        ],
        labs: ["Typing and computer navigation", "Document formatting", "Presentation design", "Internet research", "Email communication", "Cloud collaboration", "Cybersecurity exercises"],
        tools: {
          beginner: ["Microsoft Office", "Google Workspace", "Gmail", "Google Drive", "Zoom / Google Meet"],
          optional: ["Canva", "Notion", "Trello", "AI productivity tools"]
        },
        assessment: [
          { type: "Attendance & Participation", weight: "10%" },
          { type: "Weekly Assignments", weight: "25%" },
          { type: "Practical Lab Exercises", weight: "30%" },
          { type: "Mid-Course Evaluation", weight: "10%" },
          { type: "Final Project & Presentation", weight: "25%" }
        ],
        certification: [
          "Maintain 80% attendance",
          "Complete all practical activities",
          "Submit assignments",
          "Participate in labs and workshops",
          "Present the final project"
        ],
        careers: [
          "Office Administration",
          "Customer Support Roles",
          "Digital Operations",
          "Data Entry & Documentation",
          "Freelancing",
          "Digital Entrepreneurship",
          "IT Support Foundations"
        ],
        methodology: "35% Theory, 65% Practical Learning"
      }
    },
    { id: "dt-3", titleKey: "courses.tracks.data_tech.c3", descKey: "courses.tracks.data_tech.desc3", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w8", level: "Foundation", tags: ["genai", "office_tools"] },
    { id: "dt-4", titleKey: "courses.tracks.data_tech.c4", descKey: "courses.tracks.data_tech.desc4", image: "https://plus.unsplash.com/premium_photo-1664474559614-74d16c1c6f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w6", level: "Foundation", tags: ["enterprise", "bookkeeping"] },
    { id: "dt-a1", titleKey: "courses.tracks.data_tech.a1", descKey: "courses.tracks.data_tech.desca1", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w12", level: "Advance", tags: ["python", "automation"] },
    { id: "dt-a2", titleKey: "courses.tracks.data_tech.a2", descKey: "courses.tracks.data_tech.desca2", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w16", level: "Advance", tags: ["web_dev", "react"] },
    { id: "dt-a3", titleKey: "courses.tracks.data_tech.a3", descKey: "courses.tracks.data_tech.desca3", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w14", level: "Advance", tags: ["cloud", "aws_azure"] },
    { id: "dt-a4", titleKey: "courses.tracks.data_tech.a4", descKey: "courses.tracks.data_tech.desca4", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w12", level: "Advance", tags: ["sql", "bi_tools"] },
    { id: "dt-a5", titleKey: "courses.tracks.data_tech.a5", descKey: "courses.tracks.data_tech.desca5", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w14", level: "Advance", tags: ["ai_agents", "workflows"] },
    { id: "dt-a6", titleKey: "courses.tracks.data_tech.a6", descKey: "courses.tracks.data_tech.desca6", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w16", level: "Advance", tags: ["strategy", "scaling"] },
  ],
  "design-media": [
    { id: "dm-1", titleKey: "courses.tracks.design_media.c1", descKey: "courses.tracks.design_media.desc1", image: "https://plus.unsplash.com/premium_photo-1661326291059-eb076cc5bdd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w8", level: "Foundation", tags: ["typography", "layout"] },
    { id: "dm-2", titleKey: "courses.tracks.design_media.c2", descKey: "courses.tracks.design_media.desc2", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w8", level: "Foundation", tags: ["photography", "lighting"] },
    { id: "dm-3", titleKey: "courses.tracks.design_media.c3", descKey: "courses.tracks.design_media.desc3", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w10", level: "Foundation", tags: ["video_editing", "education"] },
    { id: "dm-4", titleKey: "courses.tracks.design_media.c4", descKey: "courses.tracks.design_media.desc4", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w6", level: "Foundation", tags: ["storytelling", "narrative"] },
    { id: "dm-a1", titleKey: "courses.tracks.design_media.a1", descKey: "courses.tracks.design_media.desca1", image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w12", level: "Advance", tags: ["ui_ux", "figma"] },
    { id: "dm-a2", titleKey: "courses.tracks.design_media.a2", descKey: "courses.tracks.design_media.desca2", image: "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w14", level: "Advance", tags: ["product_design", "three_d"] },
    { id: "dm-a3", titleKey: "courses.tracks.design_media.a3", descKey: "courses.tracks.design_media.desca3", image: "https://images.unsplash.com/photo-1587120511358-98f9104cc096?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w12", level: "Advance", tags: ["illustration", "art"] },
    { id: "dm-a4", titleKey: "courses.tracks.design_media.a4", descKey: "courses.tracks.design_media.desca4", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w16", level: "Advance", tags: ["animation", "sound"] },
    { id: "dm-a5", titleKey: "courses.tracks.design_media.a5", descKey: "courses.tracks.design_media.desca5", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", durationKey: "courses_page.durations.w10", level: "Advance", tags: ["marketing", "seo"] },
    { id: "dm-a6", titleKey: "courses.tracks.design_media.a6", descKey: "courses.tracks.design_media.desca6", image: "https://images.unsplash.com/photo-1764745222815-1395674e894b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", durationKey: "courses_page.durations.w14", level: "Advance", tags: ["branding", "strategy"] },
  ]
};

export function getAllCourses(): CourseDetail[] {
  return Object.values(courseDetails).flat();
}

export function getCourseById(id: string): CourseDetail | undefined {
  return getAllCourses().find(c => c.id === id);
}
