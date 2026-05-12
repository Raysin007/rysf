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
    {
      id: "ag-1",
      titleKey: "courses.tracks.agriculture.c1",
      descKey: "courses.tracks.agriculture.desc1",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w8",
      level: "Foundation",
      tags: ["sustainability", "ecology"],
      curriculum: {
        objective: "To provide learners with comprehensive knowledge and practical skills in organic farming techniques, soil health management, and sustainable agricultural practices for profitable and eco-friendly farming.",
        outcomes: [
          "Understand the core principles and benefits of organic farming",
          "Master soil preparation and long-term health management",
          "Implement natural pest and disease control methods",
          "Manage water resources efficiently through sustainable techniques",
          "Create high-quality compost and natural fertilizers",
          "Plan and manage seasonal organic crop production",
          "Understand the process of organic certification",
          "Develop marketing strategies for organic produce"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Organic Farming",
            topics: ["Principles of sustainability", "Benefits of organic vs. chemical farming", "Soil as a living system", "Traditional vs. modern organic methods", "Ecosystem services in agriculture"],
            practical: ["Soil observation exercise", "Farm ecosystem walk", "Identifying beneficial insects"],
            assignment: "Compare and contrast 5 differences between organic and conventional farming."
          },
          {
            week: "WEEK 2",
            module: "Soil Health & Preparation",
            topics: ["Understanding soil types and textures", "Soil testing and analysis techniques", "Land preparation for organic crops", "Restoring degraded soil", "Importance of soil organic matter"],
            practical: ["Conducting a simple soil test", "Bed preparation for sowing", "Measuring soil pH"],
            assignment: "Write a soil health assessment report for a local plot."
          },
          {
            week: "WEEK 3",
            module: "Composting & Natural Fertilization",
            topics: ["Aerobic and anaerobic composting", "Vermicomposting basics", "Bio-fertilizers and their application", "Green manuring and mulching", "Liquid organic fertilizers"],
            practical: ["Setting up a compost pit/bin", "Preparing a liquid fertilizer (Jeevamrut)", "Vermicompost harvesting"],
            assignment: "Design a composting plan for a 1-acre farm."
          },
          {
            week: "WEEK 4",
            module: "Seed Management & Sowing",
            topics: ["Selection and preservation of indigenous seeds", "Organic seed treatment methods", "Nursery management and seedling care", "Sowing techniques and spacing", "Germination testing"],
            practical: ["Seed treatment with bio-agents", "Nursery bed preparation", "Seedling transplantation"],
            assignment: "Create a list of 10 local indigenous seed varieties and their benefits."
          },
          {
            week: "WEEK 5",
            module: "Organic Pest & Disease Management",
            topics: ["Identifying common pests and diseases", "Natural pesticides and repellents (Neem, Dashparni)", "Biological control agents", "Integrated Pest Management (IPM)", "Trap cropping and companion planting"],
            practical: ["Preparing botanical extracts", "Setting up pheromone and light traps", "Field observation for pest thresholds"],
            assignment: "Develop a natural pest management plan for a specific crop."
          },
          {
            week: "WEEK 6",
            module: "Water & Weed Management",
            topics: ["Efficient irrigation (Drip, Sprinkler)", "Rainwater harvesting for farms", "Organic weed control methods", "Crop rotation and intercropping strategies", "Moisture conservation through mulching"],
            practical: ["Setting up a simple drip system", "Mulching demonstration", "Weeding techniques"],
            assignment: "Design an irrigation and rotation schedule for 3 seasons."
          },
          {
            week: "WEEK 7",
            module: "Post-Harvest & Marketing",
            topics: ["Organic harvesting standards", "Storage and packaging for organic produce", "Organic certification processes (PGS, NPOP)", "Building local markets and cooperatives", "Digital tools for agri-marketing"],
            practical: ["Proper harvesting techniques", "Packaging demonstration", "Market research at a local mandi"],
            assignment: "Outline the steps required for a farm to get organic certification."
          },
          {
            week: "WEEK 8",
            module: "Final Farming Project",
            topics: ["Developing a seasonal farm plan", "Budgeting and economics of organic farming", "Record-keeping for organic farms", "Presentation skills for farmers"],
            practical: ["Final project presentation", "Demonstrating a specific organic technique", "Peer review of farm plans"],
            assignment: "Submit a complete 1-year sustainable farm business plan."
          }
        ],
        labs: ["Soil testing lab", "Compost building workshop", "Natural pesticide preparation", "Nursery management", "Farm planning session"],
        tools: {
          beginner: ["Soil Testing Kit", "Composting Bins", "Basic Irrigation Tools", "Nursery Trays"],
          optional: ["Digital Soil Sensors", "Agri-analytics Apps", "Organic Certification Software"]
        },
        assessment: [
          { type: "Field Participation", weight: "20%" },
          { type: "Practical Lab Logs", weight: "20%" },
          { type: "Mid-term Crop Plan", weight: "20%" },
          { type: "Final Farm Project & Presentation", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% field attendance",
          "Complete all 5 core practical labs",
          "Submit a documented 1-year farm plan",
          "Successfully demonstrate natural pesticide preparation"
        ],
        careers: [
          "Organic Farm Manager",
          "Sustainable Agriculture Consultant",
          "Soil Health Specialist",
          "Agri-Entrepreneur",
          "Organic Quality Auditor",
          "Extension Officer"
        ],
        methodology: "20% Theory, 80% Practical Field Work"
      }
    },
    {
      id: "ag-2",
      titleKey: "courses.tracks.agriculture.c2",
      descKey: "courses.tracks.agriculture.desc2",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["commercial", "horticulture"],
      curriculum: {
        objective: "To equip learners with specialized skills in managing commercial plant nurseries and modern horticultural practices, focusing on propagation, greenhouse management, and high-value crop production.",
        outcomes: [
          "Design and manage professional nursery layouts and infrastructure",
          "Master advanced plant propagation techniques (grafting, budding, etc.)",
          "Operate and maintain greenhouse and polyhouse environments",
          "Cultivate high-value fruits, vegetables, and ornamental plants",
          "Implement specialized nursery pest and nutrient management",
          "Understand the economics and marketing of commercial nurseries",
          "Maintain accurate inventory and quality control for plants",
          "Manage water and soil-less media for nursery growth"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Nursery Management",
            topics: ["Types of nurseries (Commercial, Private, Govt)", "Site selection and infrastructure", "Infrastructure: Greenhouses, Shade nets, Lath houses", "Essential nursery tools and equipment", "Nursery legislation and standards"],
            practical: ["Site mapping and layout design", "Tool maintenance workshop", "Greenhouse component identification"],
            assignment: "Draft a layout for a 0.5-acre multi-purpose nursery."
          },
          {
            week: "WEEK 2",
            module: "Plant Propagation - Part 1 (Sexual)",
            topics: ["Sexual vs. asexual propagation", "Seed collection, extraction, and storage", "Germination media and containers", "Sowing methods and seedling care", "Dormancy and its management"],
            practical: ["Seed extraction and processing", "Preparing germination trays", "Sowing different seed sizes"],
            assignment: "Develop a seed-to-seedling schedule for 5 common crops."
          },
          {
            week: "WEEK 3",
            module: "Plant Propagation - Part 2 (Asexual)",
            topics: ["Vegetative propagation: Cuttings and layering", "Grafting and budding techniques", "Rooting hormones and their use", "Micro-propagation basics", "Clone selection and mother plant management"],
            practical: ["Cuttings preparation (hardwood/softwood)", "Air-layering demonstration", "Grafting (Wedge and T-budding)"],
            assignment: "Perform 10 successful grafts on sample plants."
          },
          {
            week: "WEEK 4",
            module: "Media & Nutrition Management",
            topics: ["Preparation of potting mixtures", "Soil-less media (Coco-peat, Perlite, Vermiculite)", "Fertilization programs for nurseries", "Managing irrigation and drainage in containers", "Container types and sizes"],
            practical: ["Preparing Coco-peat based media", "Mixing organic fertilizers", "Setting up nursery irrigation"],
            assignment: "Compare growth rates in soil vs. soil-less media."
          },
          {
            week: "WEEK 5",
            module: "Greenhouse & Polyhouse Management",
            topics: ["Principles of protected cultivation", "Temperature and humidity control systems", "Automated sensors and controllers", "Crops suitable for greenhouse production", "Structural maintenance and safety"],
            practical: ["Monitoring greenhouse micro-climate", "Sensor calibration", "Managing ventilation"],
            assignment: "Troubleshoot common greenhouse environmental issues."
          },
          {
            week: "WEEK 6",
            module: "Commercial Horticulture",
            topics: ["Production of high-value fruits and vegetables", "Floriculture (Flower production)", "Introduction to landscaping", "Vertical gardening basics", "Hydroponics awareness"],
            practical: ["Pruning and training horticultural plants", "Flower harvesting techniques", "Installing a vertical garden"],
            assignment: "Market research on high-value crops in local markets."
          },
          {
            week: "WEEK 7",
            module: "Pest & Disease Management",
            topics: ["Identifying nursery-specific pests", "Sanitation and hygiene protocols", "Integrated Pest Management for protected systems", "Preventing soil-borne diseases", "Fungal and viral issues in seedlings"],
            practical: ["Scouting for pests", "Sterilizing nursery equipment", "Applying organic fungicides"],
            assignment: "Create a nursery hygiene and sanitation checklist."
          },
          {
            week: "WEEK 8",
            module: "Nursery Business & Final Project",
            topics: ["Inventory management and record keeping", "Pricing strategies for plants", "Marketing channels (Local, Online, B2B)", "Customer service and plant transport", "Nursery economics"],
            practical: ["Final project presentation", "Designing a plant catalog", "Developing a nursery budget"],
            assignment: "Deliver a 10-minute presentation on a commercial nursery plan."
          }
        ],
        labs: ["Propagation lab", "Greenhouse management workshop", "Media preparation lab", "Nursery tools lab", "Marketing simulation"],
        tools: {
          beginner: ["Grafting Knives", "Secateurs", "Hygrometers", "Rooting Hormones"],
          optional: ["Automatic Misting Systems", "Coco-peat Buffering Unit", "Plant Inventory Software"]
        },
        assessment: [
          { type: "Hands-on Propagation Tasks", weight: "30%" },
          { type: "Daily Nursery Logs", weight: "20%" },
          { type: "Greenhouse Management Quiz", weight: "10%" },
          { type: "Final Nursery Project", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Pass the propagation skills test",
          "Submit a documented greenhouse operation log",
          "Present a viable commercial nursery business plan"
        ],
        careers: [
          "Nursery Manager",
          "Horticultural Consultant",
          "Greenhouse Supervisor",
          "Landscape Designer Assistant",
          "Plant Propagation Specialist",
          "Floriculture Entrepreneur"
        ],
        methodology: "25% Theory, 75% Practical Lab & Greenhouse Work"
      }
    },
    {
      id: "ag-3",
      titleKey: "courses.tracks.agriculture.c3",
      descKey: "courses.tracks.agriculture.desc3",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w4",
      level: "Foundation",
      tags: ["soil_health", "waste_mgmt"],
      curriculum: {
        objective: "To deepen learners' understanding of soil as a living ecosystem and provide practical techniques for regenerative farming that restores soil health, enhances biodiversity, and captures carbon.",
        outcomes: [
          "Understand the biological, chemical, and physical properties of soil",
          "Master professional soil testing and field assessment techniques",
          "Implement regenerative practices like no-till and cover cropping",
          "Enhance soil microbial life and functional biodiversity",
          "Manage carbon sequestration and organic matter in agricultural soils",
          "Develop comprehensive soil restoration plans for degraded lands",
          "Analyze the relationship between soil health and plant nutrition",
          "Implement sustainable waste management for soil enhancement"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Soil Science",
            topics: ["Soil formation and horizons", "Physical, chemical, and biological properties", "The Soil Food Web: Bacteria, Fungi, Protozoa", "Importance of soil organic matter (SOM)", "Soil structure vs. soil texture"],
            practical: ["Identifying soil textures by feel", "Digging soil pits for horizon observation", "Soil structure assessment"],
            assignment: "Write a summary of the 'Soil Food Web' and its role in nutrient cycling."
          },
          {
            week: "WEEK 2",
            module: "Soil Testing & Assessment",
            topics: ["Laboratory vs. field-based testing", "Interpreting professional soil reports", "Visual Soil Assessment (VSA) techniques", "In-field monitoring: pH, EC, and moisture", "Sampling techniques for accuracy"],
            practical: ["Conducting a Visual Soil Assessment", "Using field testing kits (pH/Nitrate)", "Interpreting sample lab reports"],
            assignment: "Develop a soil sampling plan for a 5-acre varied plot."
          },
          {
            week: "WEEK 3",
            module: "Principles of Regenerative Agriculture",
            topics: ["History and core tenets of regeneration", "Beyond sustainability: Restoration and healing", "Mimicking natural ecosystems in farming", "Integration of livestock and crops", "Minimizing external inputs"],
            practical: ["Comparing regenerative vs. conventional plots", "Observing ecosystem mimicry", "Documenting local natural indicators"],
            assignment: "Research and present a case study of a successful regenerative farm."
          },
          {
            week: "WEEK 4",
            module: "No-Till & Minimum Disturbance",
            topics: ["Impact of tillage on soil structure and life", "Transitioning to no-till systems", "Tools for minimum disturbance (Broadfork, No-till drills)", "Managing crop residues", "Weed control in no-till"],
            practical: ["Using a broadfork for aeration", "Seeding through mulch", "Residue management demonstration"],
            assignment: "Outline a 2-year transition plan from conventional tillage to no-till."
          },
          {
            week: "WEEK 5",
            module: "Cover Cropping & Biodiversity",
            topics: ["Types of cover crops (Legumes, Grasses, Brassicas)", "Green manures and their roles", "Multi-species cover cropping", "Crop rotation for soil health", "Enhancing below-ground biodiversity"],
            practical: ["Identifying cover crop seeds", "Preparing a cover crop seed mix", "Terminating cover crops naturally"],
            assignment: "Design a 3-crop rotation with specific cover crops for soil improvement."
          },
          {
            week: "WEEK 6",
            module: "Soil Biology & Bio-stimulants",
            topics: ["Understanding microbes, fungi, and earthworms", "The role of Mycorrhizae", "Making and using bio-stimulants", "Compost tea and extract preparation", "The Rhizosphere: The plant-soil interface"],
            practical: ["Brewing aerobic compost tea", "Using microscopy to view soil life", "Application of bio-stimulants"],
            assignment: "Compare the effects of two different bio-stimulants on seedling growth."
          },
          {
            week: "WEEK 7",
            module: "Water Cycles & Soil Moisture",
            topics: ["Soil-water relationships", "Infiltration and water-holding capacity", "Techniques for moisture conservation", "Rainwater harvesting in soil", "Drought resilience through soil health"],
            practical: ["Conducting infiltration tests", "Measuring soil moisture", "Installing simple swales for water retention"],
            assignment: "Calculate the water-holding capacity of two different soil samples."
          },
          {
            week: "WEEK 8",
            module: "Soil Restoration Project",
            topics: ["Developing a 3-year soil health transition plan", "Measuring progress: Indicators of success", "Economics of regenerative farming", "Future of soil health and carbon markets"],
            practical: ["Final project development", "Presenting restoration plans", "Peer review of soil strategies"],
            assignment: "Submit a complete 3-year regenerative soil management and restoration plan."
          }
        ],
        labs: ["Visual soil assessment lab", "Soil microscopy session", "Bio-stimulant preparation workshop", "Water infiltration testing", "Soil mapping exercises"],
        tools: {
          beginner: ["Soil Penetrometer", "pH Meter", "Field Testing Kit", "Magnifying Lens"],
          optional: ["Compound Microscope", "Infiltrometer", "Soil Moisture Sensors", "GIS Mapping Tools"]
        },
        assessment: [
          { type: "Field Assessment Reports", weight: "25%" },
          { type: "Practical Lab Logs", weight: "20%" },
          { type: "Soil Health Quiz", weight: "15%" },
          { type: "Final Restoration Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 5 core practical field assessments",
          "Submit a documented 3-year soil restoration plan",
          "Successfully demonstrate bio-stimulant preparation"
        ],
        careers: [
          "Soil Health Specialist",
          "Regenerative Farm Advisor",
          "Carbon Farming Consultant",
          "Environmental Scientist",
          "Conservationist",
          "Sustainable Agri-Entrepreneur"
        ],
        methodology: "30% Theory, 70% Practical & Field Analysis"
      }
    },
    {
      id: "ag-4",
      titleKey: "courses.tracks.agriculture.c4",
      descKey: "courses.tracks.agriculture.desc4",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w8",
      level: "Foundation",
      tags: ["livestock", "nutrition"],
      curriculum: {
        objective: "To provide learners with comprehensive skills in managing small to medium-scale livestock enterprises, focusing on animal health, nutrition, sustainable housing, and commercial livestock farming.",
        outcomes: [
          "Understand the core principles of animal husbandry and welfare",
          "Design and manage sustainable, hygienic livestock housing",
          "Master animal nutrition and year-round fodder management",
          "Implement preventative health care and basic disease management",
          "Manage livestock breeding cycles and neonatal care",
          "Process and market livestock products with quality control",
          "Integrate livestock effectively into circular farming systems",
          "Maintain accurate growth and financial records for livestock"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Livestock Farming",
            topics: ["Role of livestock in rural economies", "Common breeds: Cattle, Goats, Poultry, Pigs", "Animal welfare and ethics", "Integrated farming: Crops + Livestock", "Basics of livestock physiology"],
            practical: ["Identifying different breeds", "Animal behavior observation", "Farm safety walk"],
            assignment: "Write a report on the livestock population and types in your local area."
          },
          {
            week: "WEEK 2",
            module: "Housing & Environment",
            topics: ["Design principles for livestock shelters", "Ventilation, lighting, and bedding", "Sanitation and disinfection protocols", "Waste management and biogas basics", "Climate-resilient housing"],
            practical: ["Designing a low-cost shelter model", "Sanitation demonstration", "Waste-to-energy workshop"],
            assignment: "Draft a housing plan for a specific number of animals (e.g., 5 cows or 20 goats)."
          },
          {
            week: "WEEK 3",
            module: "Animal Nutrition & Feed",
            topics: ["Understanding ruminant and non-ruminant digestion", "Nutritional requirements for different life stages", "Fodder production (Green/Dry)", "Feed preservation: Silage and Hay", "Concentrate feed and supplements"],
            practical: ["Identifying different fodder types", "Preparing a balanced feed ration", "Silage making demonstration"],
            assignment: "Create a 12-month fodder availability and feeding calendar."
          },
          {
            week: "WEEK 4",
            module: "Health Care & Disease Management",
            topics: ["Signs of health vs. illness", "Common diseases: FMD, HS, PPR, Ranikhet", "Vaccination and deworming schedules", "First aid for livestock", "Bio-security and quarantine"],
            practical: ["Measuring animal temperature and pulse", "Identifying common parasites", "Vaccination technique simulation"],
            assignment: "Prepare a comprehensive vaccination and deworming chart."
          },
          {
            week: "WEEK 5",
            module: "Breeding & Lifecycle Management",
            topics: ["Selection of quality breeding stock", "Natural vs. Artificial Insemination (AI)", "Managing pregnancy and delivery", "Neonatal care and weaning", "Growth tracking and culling"],
            practical: ["Observing breeding signs (Heat detection)", "Mock neonatal care exercise", "Growth measurement and recording"],
            assignment: "Outline the lifecycle management plan for a dairy or meat enterprise."
          },
          {
            week: "WEEK 6",
            module: "Livestock Product Processing",
            topics: ["Milk, meat, and egg handling standards", "Value addition: Ghee, Paneer, Curd", "Quality control and food safety", "Cold chain and storage basics", "Packaging and labeling"],
            practical: ["Milk quality testing (Fat/SNF)", "Value-added product preparation", "Hygienic processing workshop"],
            assignment: "Design a simple value-addition process for one livestock product."
          },
          {
            week: "WEEK 7",
            module: "Marketing & Economics",
            topics: ["Budgeting for livestock enterprises", "Market analysis and sales channels", "Insurance and government schemes", "Cooperatives and group marketing", "Digital tools for livestock trade"],
            practical: ["Calculating cost of production", "Developing a marketing flyer", "Exploring agri-insurance options"],
            assignment: "Calculate the estimated monthly profit/loss for a sample livestock unit."
          },
          {
            week: "WEEK 8",
            module: "Final Livestock Project",
            topics: ["Integrated livestock management planning", "Economic feasibility study", "Record-keeping systems", "Future trends in livestock"],
            practical: ["Final project presentation", "Demonstrating a specific health/feed task", "Peer review of business plans"],
            assignment: "Submit a complete 2-year livestock enterprise and management plan."
          }
        ],
        labs: ["Health checkup simulation", "Fodder preparation (Silage) lab", "Housing design workshop", "Milk/Egg quality testing", "Livestock record-keeping clinic"],
        tools: {
          beginner: ["Weighing Scales", "Digital Thermometer", "Vaccination Kit", "Fodder Cutter"],
          optional: ["Automatic Milking Machine", "Digital Livestock Trackers", "Feed Analysis Kit"]
        },
        assessment: [
          { type: "Health Assessment Practical", weight: "25%" },
          { type: "Nutrition & Feed Logs", weight: "20%" },
          { type: "Housing Project", weight: "15%" },
          { type: "Final Enterprise Plan", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 5 core practical labs",
          "Submit a documented 2-year enterprise plan",
          "Successfully demonstrate basic livestock first aid"
        ],
        careers: [
          "Livestock Farm Manager",
          "Dairy Entrepreneur",
          "Veterinary Assistant",
          "Animal Nutritionist",
          "Poultry Supervisor",
          "Agri-Extension Specialist"
        ],
        methodology: "30% Theory, 70% Practical & Hands-on Training"
      }
    },
    {
      id: "ag-5",
      titleKey: "courses.tracks.agriculture.c5",
      descKey: "courses.tracks.agriculture.desc5",
      image: "https://images.unsplash.com/photo-1497001891232-e215c30774d1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w10",
      level: "Foundation",
      tags: ["aquaculture", "water_mgmt"],
      curriculum: {
        objective: "To provide learners with practical skills in sustainable aquaculture management, covering pond construction, species selection, water quality, nutrition, and commercial fish farming operations.",
        outcomes: [
          "Understand the principles of sustainable aquaculture and species biology",
          "Design and construct efficient fish ponds and tank-based systems",
          "Master water quality monitoring and management (pH, DO, Ammonia)",
          "Implement effective fish nutrition and feeding strategies",
          "Manage fish health through disease prevention and biosecurity",
          "Operate modern systems like Biofloc and Recirculatory Aquaculture (RAS)",
          "Understand harvesting, post-harvest handling, and market dynamics",
          "Maintain accurate production and financial records for fisheries"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Aquaculture",
            topics: ["Role of fisheries in food security", "Types of aquaculture systems", "Common freshwater species: IMC, Tilapia, Catfish", "Species biology and growth requirements", "Status of aquaculture in India"],
            practical: ["Identifying different fish species", "Observing fish behavior", "Visit to a local fish farm"],
            assignment: "Write a report on the most common fish species farmed in your region."
          },
          {
            week: "WEEK 2",
            module: "Pond Design & Construction",
            topics: ["Site selection and soil quality", "Types of ponds: Nursery, Rearing, Stocking", "Pond construction techniques and lining", "Tank-based system design", "Inlet and outlet management"],
            practical: ["Measuring and mapping a pond site", "Calculating pond volume", "Demonstration of pond lining techniques"],
            assignment: "Draft a layout for a 0.1-acre fish pond with water management features."
          },
          {
            week: "WEEK 3",
            module: "Water Quality Management",
            topics: ["Critical parameters: Dissolved Oxygen (DO), pH, Temperature", "Ammonia and Nitrite management", "Water testing and treatment techniques", "Aeration and filtration systems", "Water exchange protocols"],
            practical: ["Using pH and DO meters", "Sechi disc measurement", "Ammonia testing in pond water"],
            assignment: "Prepare a weekly water quality monitoring log for a sample pond."
          },
          {
            week: "WEEK 4",
            module: "Nutrition & Feed Management",
            topics: ["Natural vs. supplementary feed", "Feed ingredients and formulation", "Floating vs. sinking feeds", "Feeding schedules and techniques", "FCR (Feed Conversion Ratio) calculation"],
            practical: ["Calculating daily feed requirements", "Identifying feed ingredients", "FCR calculation exercise"],
            assignment: "Design a feeding schedule for a specific species and growth stage."
          },
          {
            week: "WEEK 5",
            module: "Seed Production & Hatchery",
            topics: ["Breeding techniques: Natural and Induced", "Hatchery layout and operations", "Seed collection and transportation", "Managing fry and fingerlings", "Nursery pond management"],
            practical: ["Seed counting and handling", "Demonstration of oxygen packing for transport", "Nursery pond preparation"],
            assignment: "Outline the steps required to manage a fish nursery for 30 days."
          },
          {
            week: "WEEK 6",
            module: "Health & Disease Management",
            topics: ["Identifying signs of healthy vs. diseased fish", "Common diseases: Parasitic, Bacterial, Fungal", "Preventative measures and biosecurity", "Safe use of medications", "Disinfection protocols"],
            practical: ["External fish health inspection", "Microscopic observation of parasites", "Applying pond disinfectants"],
            assignment: "Create a fish health and biosecurity checklist for a commercial farm."
          },
          {
            week: "WEEK 7",
            module: "Modern Aquaculture Systems",
            topics: ["Introduction to Biofloc technology", "Recirculatory Aquaculture Systems (RAS) basics", "Aquaponics: Integrating fish and plants", "Sustainable intensification", "Energy efficiency in aquaculture"],
            practical: ["Biofloc water preparation demonstration", "Observing an RAS setup", "Aquaponics system assembly"],
            assignment: "Compare the pros and cons of traditional vs. Biofloc systems."
          },
          {
            week: "WEEK 8",
            module: "Harvesting & Business Operations",
            topics: ["Harvesting techniques and timing", "Post-harvest handling and cold chain", "Marketing strategies and cooperatives", "Record keeping and financial analysis", "Government schemes for fisheries"],
            practical: ["Netting and sorting fish", "Ice packing demonstration", "Calculating profit/loss for a harvest cycle"],
            assignment: "Deliver a final 10-minute presentation on a commercial aquaculture business plan."
          }
        ],
        labs: ["Water quality testing lab", "Feed formulation workshop", "Pond measurement session", "Fish health inspection lab", "Biofloc/RAS demo"],
        tools: {
          beginner: ["pH Meter", "DO Meter", "Sechi Disc", "Hand Nets"],
          optional: ["Automatic Feeders", "Aerators (Paddle-wheel)", "Water Filtration Systems", "Agri-fishery Apps"]
        },
        assessment: [
          { type: "Water Quality Management Tasks", weight: "25%" },
          { type: "Feed & Nutrition Logs", weight: "20%" },
          { type: "System Design Project", weight: "15%" },
          { type: "Final Aquaculture Plan", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 5 core practical labs",
          "Submit a documented 1-year production plan",
          "Successfully demonstrate water quality testing"
        ],
        careers: [
          "Fish Farm Manager",
          "Hatchery Technician",
          "Aquaculture Consultant",
          "Fisheries Extension Officer",
          "Seafood Processing Manager",
          "Agri-Entrepreneur"
        ],
        methodology: "30% Theory, 70% Practical & Field Training"
      }
    },
    {
      id: "ag-a1",
      titleKey: "courses.tracks.agriculture.a1",
      descKey: "courses.tracks.agriculture.desca1",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w12",
      level: "Advance",
      tags: ["agro_processing", "branding"],
      curriculum: {
        objective: "To provide advanced knowledge and practical skills in value addition of agricultural produce through processing, packaging, and building strong brands for higher profitability in local and global markets.",
        outcomes: [
          "Master professional agro-processing techniques for various crops",
          "Understand and implement food safety standards (FSSAI, ISO, HACCP)",
          "Design and manage efficient small-scale food processing units",
          "Develop compelling brand identities and packaging for agri-products",
          "Implement rigorous quality control and shelf-life enhancement protocols",
          "Manage the complex supply chain from raw material to final consumer",
          "Understand the economics and financial management of agro-businesses",
          "Navigate government regulations and subsidies for the agro-industry"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Foundations of Agro-Processing",
            topics: ["Scope and importance of value addition", "Analysis of post-harvest losses and mitigation", "Primary vs. Secondary processing", "Overview of the global and local food processing industry", "Visit to a modern processing facility"],
            practical: ["Identifying value-addition opportunities in local crops", "Post-harvest loss assessment exercise", "Processing unit layout design"],
            assignment: "Research and present a report on the value-added potential of a major local crop."
          },
          {
            week: "WEEK 3-4",
            module: "Advanced Processing Technologies",
            topics: ["Cleaning, grading, and automated sorting", "Modern drying and dehydration (Solar, Freeze-drying)", "Milling and grinding operations", "Extraction techniques (Oil, Juice, Pulping)", "Heat processing and preservation (Pasteurization, Canning)"],
            practical: ["Operating small-scale drying equipment", "Refining oil/juice extraction methods", "Testing different preservation techniques"],
            assignment: "Develop a standardized processing protocol for one specific product."
          },
          {
            week: "WEEK 5-6",
            module: "Food Safety, Quality & Compliance",
            topics: ["Understanding FSSAI regulations and licensing", "Implementing HACCP and ISO 22000 standards", "Laboratory testing for physical, chemical, and microbial quality", "Hygiene and sanitation in processing environments", "Traceability and documentation"],
            practical: ["Conducting a mock food safety audit", "Water and product quality testing", "Designing a traceability logbook"],
            assignment: "Create a full HACCP plan for a selected agro-processing unit."
          },
          {
            week: "WEEK 7-8",
            module: "Packaging, Storage & Logistics",
            topics: ["Types of modern packaging materials and their properties", "Modified Atmosphere Packaging (MAP) and Vacuum packing", "Storage conditions and warehouse management", "Cold chain logistics and management", "Eco-friendly packaging alternatives"],
            practical: ["Packaging durability and shelf-life testing", "Designing a cold chain schedule", "Warehouse inventory simulation"],
            assignment: "Design a packaging solution that maximizes shelf life for a perishable product."
          },
          {
            week: "WEEK 9-10",
            module: "Agri-Branding & Market Strategy",
            topics: ["Building a brand story and value proposition", "Visual identity: Logo, color, and label design", "Digital marketing and E-commerce for agri-products", "Market research and consumer behavior", "Retail placement and distribution channels"],
            practical: ["Developing a brand style guide", "Creating a social media marketing campaign", "Simulating a retail pitch"],
            assignment: "Develop a complete brand identity and marketing plan for a processed product."
          },
          {
            week: "WEEK 11-12",
            module: "Business Operations & Final Project",
            topics: ["Costing, pricing, and margin analysis", "Managing workforce and productivity", "Financial management and subsidy navigation", "Scaling and expansion strategies", "Final project integration"],
            practical: ["Calculating ROI for a processing unit", "Final product development and packaging", "Presenting the business case"],
            assignment: "Deliver a final comprehensive business plan and prototype for an agro-processing enterprise."
          }
        ],
        labs: ["Industrial processing lab", "Quality control & Testing lab", "Packaging & Design workshop", "Supply chain simulation", "Branding & Pitching clinic"],
        tools: {
          beginner: ["Processing Equipment (Milling/Drying)", "Packaging Sealers", "Quality Testing Kits", "Canva for Branding"],
          optional: ["Advanced Lab Testing Gear", "Inventory Management Software", "Professional Design Suite", "E-commerce Platforms"]
        },
        assessment: [
          { type: "Product Development Task", weight: "30%" },
          { type: "Quality Control & Compliance Logs", weight: "20%" },
          { type: "Brand Identity Project", weight: "15%" },
          { type: "Final Business Plan & Prototype", weight: "35%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Successfully develop a market-ready processed product",
          "Pass the advanced food safety and compliance exam",
          "Submit a comprehensive, viable business plan"
        ],
        careers: [
          "Agro-Processing Unit Manager",
          "Quality Assurance Officer",
          "Agri-Brand & Marketing Manager",
          "Supply Chain & Logistics Coordinator",
          "Food Technology Entrepreneur",
          "Compliance Specialist"
        ],
        methodology: "30% Theory, 70% Practical & Case Studies"
      }
    },
    {
      id: "ag-a2",
      titleKey: "courses.tracks.agriculture.a2",
      descKey: "courses.tracks.agriculture.desca2",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w14",
      level: "Advance",
      tags: ["exports", "global_trade"],
      curriculum: {
        objective: "To equip learners with advanced knowledge of international agricultural trade, covering export-import procedures, global quality standards, trade documentation, and market intelligence for global expansion.",
        outcomes: [
          "Understand the global agricultural market landscape and emerging trends",
          "Master the end-to-end export-import process and legal requirements",
          "Comply with rigorous international quality and safety standards (GlobalGAP, SPS)",
          "Manage trade documentation, finance, and risk effectively",
          "Develop and execute strategic international market entry plans",
          "Leverage digital platforms and trade data for market intelligence",
          "Navigate international logistics and supply chain complexities",
          "Utilize government incentives and support for agricultural exports"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Introduction to Global Agri-Trade",
            topics: ["Current trends and opportunities in global agriculture", "Analyzing key global markets for Indian produce", "Role of international organizations (WTO, FAO, WCO)", "Trade barriers: Tariff and Non-Tariff", "India's Foreign Trade Policy (FTP)"],
            practical: ["Using TradeMap for market analysis", "Identifying high-demand agri-commodities", "Analyzing global trade case studies"],
            assignment: "Write a report on the export potential of a specific Indian agri-product to a selected country."
          },
          {
            week: "WEEK 3-4",
            module: "Export-Import Procedures & Licensing",
            topics: ["Step-by-step export-import process", "Obtaining IEC, RCMC, and other registrations", "Understanding Incoterms 2020", "Export order processing and fulfillment", "Shipping and logistics management"],
            practical: ["Filling out an IEC application", "Selecting appropriate Incoterms for different scenarios", "Logistics cost estimation exercise"],
            assignment: "Outline the complete procedure for exporting a consignment from farm to port."
          },
          {
            week: "WEEK 5-6",
            module: "International Quality Standards & Compliance",
            topics: ["Sanitary and Phytosanitary (SPS) measures", "International quality benchmarks: GlobalGAP, BRC, ISO", "Organic certifications for global markets (USDA, EU Organic)", "Maximum Residue Limits (MRLs) and traceability", "Fairtrade and social compliance"],
            practical: ["Conducting a mock quality audit", "Understanding MRL reports", "Designing a traceability system"],
            assignment: "Create a compliance checklist for exporting organic produce to the EU."
          },
          {
            week: "WEEK 7-8",
            module: "Trade Documentation & Digital Systems",
            topics: ["Commercial vs. Regulatory documentation", "Bills of Lading, Packing Lists, Certificates of Origin", "Phytosanitary Certificates and Inspection reports", "Single-window clearance systems (ICEGATE)", "Digital documentation and Blockchain in trade"],
            practical: ["Preparing a complete export document set", "Using digital trade platforms", "Documentation accuracy workshop"],
            assignment: "Prepare a full set of commercial and regulatory documents for a sample export order."
          },
          {
            week: "WEEK 9-10",
            module: "Trade Finance & Risk Management",
            topics: ["Payment methods: Letters of Credit (LC), Advance Payment, Open Account", "Export credit insurance (ECGC) and its role", "Managing currency fluctuations and hedging", "Trade finance options for SMEs", "Dispute resolution in international trade"],
            practical: ["Reading and interpreting a Letter of Credit", "Calculating currency risk impact", "Simulating a trade finance application"],
            assignment: "Develop a risk management plan for a $100,000 export transaction."
          },
          {
            week: "WEEK 11-12",
            module: "Market Intelligence & Entry Strategies",
            topics: ["Advanced market research techniques", "Finding and verifying international buyers (B2B platforms)", "Pricing strategies for global markets", "International branding and digital marketing", "Participating in global trade fairs"],
            practical: ["Using LinkedIn and B2B platforms for lead generation", "International pricing exercise", "Developing a buyer pitch deck"],
            assignment: "Design an entry strategy and marketing plan for a new target market."
          },
          {
            week: "WEEK 13-14",
            module: "Support Systems & Final Export Project",
            topics: ["Export promotion councils (APEDA, MPEDA, Spices Board)", "Export incentives and subsidies (RoDTEP, etc.)", "Free Trade Agreements (FTAs) and their benefits", "Final project integration and simulation"],
            practical: ["Final project presentation", "Simulating a complete export transaction", "Feedback and course review"],
            assignment: "Submit a comprehensive Export Business Plan for a specific agri-product and market."
          }
        ],
        labs: ["Trade documentation workshop", "Global market research lab", "Trade finance & LC simulation", "Quality compliance audit practice", "Digital trade platforms clinic"],
        tools: {
          beginner: ["TradeMap (ITC)", "DGFT Portal", "ICEGATE", "Google Market Finder"],
          optional: ["Professional CRM for Export", "Logistics Tracking Software", "Advanced Trade Analytics Tools"]
        },
        assessment: [
          { type: "Documentation Accuracy Task", weight: "30%" },
          { type: "Market Research & Intelligence Report", weight: "20%" },
          { type: "Trade Finance & Risk Quiz", weight: "15%" },
          { type: "Final Export Business Plan", weight: "35%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Prepare a complete error-free set of export documents",
          "Pass the trade finance and compliance assessment",
          "Submit a documented and viable export business plan"
        ],
        careers: [
          "Export-Import Manager",
          "International Trade Consultant",
          "Global Supply Chain Coordinator",
          "Trade Compliance Officer",
          "Agri-Export Entrepreneur",
          "Business Development Manager (International)"
        ],
        methodology: "30% Theory, 70% Practical & Simulation-Based Learning"
      }
    },
  ],
  wellness: [
    {
      id: "wl-1",
      titleKey: "courses.tracks.wellness.c1",
      descKey: "courses.tracks.wellness.desc1",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["hygiene", "public_health"],
      curriculum: {
        objective: "To provide learners with essential knowledge and practical skills in public health, sanitation, and hygiene to improve community health outcomes and prevent the spread of diseases.",
        outcomes: [
          "Understand the fundamentals of public health and its social determinants",
          "Master personal and community hygiene practices for disease prevention",
          "Implement safe Water, Sanitation, and Hygiene (WASH) protocols",
          "Understand disease transmission and the importance of immunization",
          "Conduct community health surveys and manage health data",
          "Develop and execute effective health awareness campaigns",
          "Identify and mitigate environmental health risks",
          "Understand basic maternal and child health care principles"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Public Health",
            topics: ["Core concepts and history of public health", "Social determinants of health", "Role of health workers in community development", "Local health challenges and statistics", "Global health goals (SDGs)"],
            practical: ["Identifying local health resources", "Community health walk", "Discussion: 'What makes a healthy village?'"],
            assignment: "List the top 5 health issues in your community and their possible causes."
          },
          {
            week: "WEEK 2",
            module: "Personal Hygiene & Health",
            topics: ["Principles of personal cleanliness", "Handwashing: The WHO standard", "Dental, skin, and hair care", "Nutrition and its impact on the immune system", "Sleep and stress management basics"],
            practical: ["Handwashing technique demonstration", "Preparing a personal hygiene checklist", "Nutrition mapping exercise"],
            assignment: "Keep a 7-day personal health and hygiene log."
          },
          {
            week: "WEEK 3",
            module: "WASH (Water, Sanitation, & Hygiene)",
            topics: ["Importance of safe drinking water", "Water purification at household level (SODIS, filtration)", "Sanitation systems and toilet hygiene", "Solid and liquid waste management", "Menstrual hygiene management (MHM)"],
            practical: ["Testing water samples", "Demonstrating water filtration", "Waste segregation exercise"],
            assignment: "Propose a simple waste management plan for 10 households."
          },
          {
            week: "WEEK 4",
            module: "Disease Prevention & Control",
            topics: ["Communicable vs. non-communicable diseases (NCDs)", "Modes of disease transmission", "Vector control: Malaria, Dengue, etc.", "Importance of vaccines and immunization", "Basic infection control at home"],
            practical: ["Identifying vector breeding sites", "Creating an immunization schedule chart", "Role-play: Explaining vaccines to families"],
            assignment: "Develop a vector control checklist for a community."
          },
          {
            week: "WEEK 5",
            module: "Environmental & Food Health",
            topics: ["Impact of environment on health", "Air and noise pollution mitigation", "Food safety: Handling, storage, and cooking", "Water-borne and food-borne illnesses", "Hygiene in local eateries and markets"],
            practical: ["Food safety audit of a local kitchen", "Water contamination simulation", "Environmental risk mapping"],
            assignment: "Write a report on food hygiene practices at a local market."
          },
          {
            week: "WEEK 6",
            module: "Maternal & Child Health",
            topics: ["Basics of prenatal and postnatal care", "Breastfeeding and infant nutrition", "Childhood growth monitoring (Growth charts)", "Common childhood illnesses and home care", "Adolescent health basics"],
            practical: ["Reading a growth chart", "Preparing ORS (Oral Rehydration Solution)", "Simulating a prenatal counseling session"],
            assignment: "Design a nutrition poster for pregnant women."
          },
          {
            week: "WEEK 7",
            module: "Community Health Assessment",
            topics: ["Introduction to health surveys", "Designing simple questionnaires", "Interview techniques and ethics", "Data collection and basic analysis", "Identifying community health patterns"],
            practical: ["Conducting a mock community survey", "Data entry and basic chart creation", "Writing a summary of findings"],
            assignment: "Conduct a health awareness survey with 10 community members."
          },
          {
            week: "WEEK 8",
            module: "Health Promotion & Project",
            topics: ["Principles of health communication", "Designing awareness posters and messages", "Organizing health camps and workshops", "Using digital media for health advocacy", "Public speaking for health workers"],
            practical: ["Final project presentation", "Designing a health campaign poster", "Conducting a mini-health awareness session"],
            assignment: "Deliver a final project on a community-wide health awareness campaign."
          }
        ],
        labs: ["WASH & Water testing lab", "Hygiene demonstration workshop", "First aid & Emergency basics", "Digital health survey lab", "Health communication workshop"],
        tools: {
          beginner: ["Water Testing Kit", "Handwashing UV Kit", "First Aid Kit", "Height/Weight Scales"],
          optional: ["Digital Thermometer", "Pulse Oximeter", "Survey Management Apps", "Mobile Health Apps"]
        },
        assessment: [
          { type: "Community Survey Report", weight: "25%" },
          { type: "Practical Lab Exercises", weight: "20%" },
          { type: "Health Awareness Project", weight: "15%" },
          { type: "Final Community Health Plan", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete the community health survey",
          "Successfully demonstrate 5 key hygiene protocols",
          "Submit a final health awareness campaign plan"
        ],
        careers: [
          "Community Health Worker",
          "Public Health Assistant",
          "WASH Program Coordinator",
          "Health Educator",
          "NGO Outreach Officer",
          "School Health Consultant"
        ],
        methodology: "40% Theory, 60% Practical & Community Field Work"
      }
    },
    {
      id: "wl-2",
      titleKey: "courses.tracks.wellness.c2",
      descKey: "courses.tracks.wellness.desc2",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w10",
      level: "Foundation",
      tags: ["ayurveda", "herbal_medicine"],
      curriculum: {
        objective: "To introduce learners to the foundational principles of Ayurveda and the practical use of local herbal medicines for holistic wellness, preventative health, and managing common ailments.",
        outcomes: [
          "Understand the core principles of Ayurveda (Doshas, Panchamahabhutas)",
          "Identify and catalog common local medicinal plants and their properties",
          "Master the preparation of simple herbal remedies like infusions and decoctions",
          "Apply Ayurvedic dietary principles for improved digestive health",
          "Implement preventative health routines (Dinacharya) for daily wellness",
          "Manage minor ailments safely using local herbal resources",
          "Understand the importance of sustainability in herbal harvesting",
          "Develop a personalized holistic wellness plan based on individual constitution"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Ayurveda",
            topics: ["Philosophy and history of Ayurveda", "The Five Elements (Panchamahabhutas)", "The Three Doshas: Vata, Pitta, Kapha", "Definition of health as a state of balance (Svastha)", "Introduction to Ayurvedic anatomy"],
            practical: ["Identifying dosha characteristics in nature", "Discussion: 'Wellness vs. Absence of Disease'", "Introduction to the Ayurvedic clock"],
            assignment: "Write a reflection on the relationship between elements and the human body."
          },
          {
            week: "WEEK 2",
            module: "Body Constitution & Balance",
            topics: ["Identifying individual constitution (Prakriti)", "Understanding signs of imbalance (Vikriti)", "Factors affecting balance: Season, age, and environment", "Introduction to Pulse and Tongue observation basics"],
            practical: ["Self-assessment of Prakriti", "Observing seasonal changes in the body", "Peer assessment exercise"],
            assignment: "Document your daily energy levels and physical signs for one week."
          },
          {
            week: "WEEK 3",
            module: "Introduction to Herbal Medicine",
            topics: ["History and importance of herbalism", "Identifying 20 common local medicinal plants (Tulsi, Neem, Turmeric, Aloe, etc.)", "Therapeutic properties (Rasa, Guna, Virya, Vipaka)", "Safety and ethical harvesting"],
            practical: ["Medicinal plant identification walk", "Herbarium sheet preparation", "Sensory evaluation of herbs (Taste/Smell)"],
            assignment: "Create a catalog of 10 local herbs with their traditional uses."
          },
          {
            week: "WEEK 4",
            module: "Herbal Preparation Techniques",
            topics: ["Methods of extraction: Water, Oil, Alcohol", "Preparing infusions and decoctions (Phant, Kwath)", "Powder (Churna) and Paste (Kalka) preparations", "Storage, labeling, and shelf life of herbs"],
            practical: ["Making a standardized decoction", "Preparing a herbal paste for skin care", "Herb drying and storage workshop"],
            assignment: "Prepare and package one herbal infusion and one powder."
          },
          {
            week: "WEEK 5",
            module: "Ayurvedic Diet & Nutrition",
            topics: ["The concept of Agni (Digestive Fire)", "The Six Tastes (Shad Rasa) and their effects", "Food as medicine (Ahara)", "Mindful eating and incompatible food combinations (Viruddha Ahara)"],
            practical: ["Identifying the six tastes in common foods", "Designing a dosha-balancing meal", "Cooking a simple Ayurvedic dish (Kitchari)"],
            assignment: "Create a meal plan tailored to your specific Prakriti."
          },
          {
            week: "WEEK 6",
            module: "Preventative Health & Daily Routines",
            topics: ["Dinacharya: Ayurvedic daily routine for longevity", "Ritucharya: Seasonal adjustments for wellness", "Basics of tongue scraping, oil pulling, and self-massage (Abhyanga)", "Introduction to Prana and Breathwork"],
            practical: ["Self-massage demonstration", "Guided breathwork session", "Daily routine planning workshop"],
            assignment: "Incorporate 3 Ayurvedic daily practices and report on the effects."
          },
          {
            week: "WEEK 7",
            module: "Managing Common Ailments",
            topics: ["Herbal remedies for digestive issues", "Managing colds, coughs, and fevers naturally", "Herbal support for skin health and stress", "When to seek professional medical advice", "Home pharmacy setup"],
            practical: ["Preparing a digestive herbal mix", "Making a natural steam inhalation", "Role-play: Wellness counseling"],
            assignment: "Design a simple 'Home Herbal First Aid' kit."
          },
          {
            week: "WEEK 8",
            module: "Herbal Garden & Final Project",
            topics: ["Designing a functional home herbal garden", "Growing and maintaining medicinal plants", "Final project: Developing a personalized wellness plan", "Ethics and future of traditional medicine"],
            practical: ["Sowing seeds for a medicinal garden", "Final wellness plan presentation", "Course review and feedback"],
            assignment: "Deliver a final presentation on your personalized 3-month wellness plan."
          }
        ],
        labs: ["Plant identification lab", "Herbal remedy preparation workshop", "Ayurvedic nutrition & cooking lab", "Daily routine & Yoga session", "Herbal garden design workshop"],
        tools: {
          beginner: ["Mortar and Pestle", "Drying Racks", "Airtight Storage Jars", "Gardening Tools"],
          optional: ["Herb Grinder", "pH Strips", "Digital Weighing Scale", "Ayurvedic Wellness Apps"]
        },
        assessment: [
          { type: "Plant Identification Test", weight: "25%" },
          { type: "Remedy Preparation Log", weight: "20%" },
          { type: "Daily Routine Project", weight: "15%" },
          { type: "Final Personalized Wellness Plan", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Identify 20 medicinal plants correctly",
          "Submit 5 correctly prepared herbal remedies",
          "Submit a documented personalized wellness plan"
        ],
        careers: [
          "Ayurvedic Wellness Advisor",
          "Herbal Product Consultant",
          "Wellness Center Assistant",
          "Organic Herbal Farmer",
          "Spa & Retreat Associate",
          "Health & Lifestyle Coach"
        ],
        methodology: "35% Theory, 65% Practical & Laboratory Work"
      }
    },
    {
      id: "wl-3",
      titleKey: "courses.tracks.wellness.c3",
      descKey: "courses.tracks.wellness.desc3",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w8",
      level: "Foundation",
      tags: ["yoga", "meditation"],
      curriculum: {
        objective: "To introduce learners to the holistic practice of Yoga and mindfulness techniques to enhance physical health, emotional resilience, and overall mental wellbeing.",
        outcomes: [
          "Understand the history, philosophy, and different paths of Yoga",
          "Master foundational Yoga Asanas for strength, balance, and flexibility",
          "Practice various Pranayama techniques for stress and anxiety management",
          "Implement daily mindfulness and meditation practices for mental clarity",
          "Understand and experience the deep connection between mind and body",
          "Develop emotional resilience through yogic tools and perspectives",
          "Create a sustainable, personalized daily yoga and mindfulness routine",
          "Understand the physiological benefits of regular yoga practice"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Yoga & Wellbeing",
            topics: ["History and origins of Yoga", "The Eight Limbs of Yoga (Ashtanga)", "Understanding the mind-body connection", "Benefits of Yoga for modern lifestyles", "Establishing a sacred space for practice"],
            practical: ["Setting intentions (Sankalpa)", "Basic body awareness exercises", "Guided relaxation (Savasana)"],
            assignment: "Write a reflection on your current physical and mental state and goals for the course."
          },
          {
            week: "WEEK 2",
            module: "Foundations of Asana - Part 1",
            topics: ["Principles of alignment and safety", "Sun Salutations (Surya Namaskar): Step-by-step", "Standing and balancing postures", "Building core stability and leg strength", "Breath-movement synchronization"],
            practical: ["Sun Salutation breakdown", "Warrior series (Virabhadrasana)", "Balance practice (Vrikshasana)"],
            assignment: "Practice 5 rounds of Sun Salutations daily and record your experience."
          },
          {
            week: "WEEK 3",
            module: "Foundations of Asana - Part 2",
            topics: ["Seated and twisting postures", "Forward folds and gentle backbends", "Importance of spinal health", "Restorative poses for recovery", "Using props (Blocks, Straps) for accessibility"],
            practical: ["Seated twist series", "Bridge pose (Setu Bandha)", "Using props to modify challenging poses"],
            assignment: "Design a 10-minute stretching routine for morning or evening."
          },
          {
            week: "WEEK 4",
            module: "Pranayama (The Art of Breath)",
            topics: ["Anatomy and physiology of breathing", "Connection between breath and the nervous system", "Basic techniques: Nadi Shodhana, Bhramari, Ujjayi", "Using breath to manage stress and anxiety", "Prana: The life force"],
            practical: ["Guided Pranayama session", "Breath counting meditation", "Comparing chest vs. belly breathing"],
            assignment: "Practice Nadi Shodhana for 5 minutes daily and note changes in stress levels."
          },
          {
            week: "WEEK 5",
            module: "Mindfulness & Meditation",
            topics: ["Introduction to Mindfulness (Sati)", "Concentration (Dharana) vs. Meditation (Dhyana)", "Guided meditation techniques", "Body scan and walking meditation", "Managing the 'Monkey Mind'"],
            practical: ["10-minute guided silent meditation", "Mindful eating exercise", "Walking meditation in nature"],
            assignment: "Practice a daily 10-minute mindfulness meditation."
          },
          {
            week: "WEEK 6",
            module: "Emotional Resilience & Stress Management",
            topics: ["Understanding the stress response (Fight/Flight vs. Rest/Digest)", "Yogic tools for emotional regulation", "Developing positive mental habits (Yamas & Niyamas)", "Yoga for sleep and deep relaxation (Yoga Nidra)"],
            practical: ["Full Yoga Nidra session", "Journaling for emotional release", "Gratitude meditation"],
            assignment: "Identify 3 personal stress triggers and a yogic tool to manage each."
          },
          {
            week: "WEEK 7",
            module: "Integrating Yoga into Daily Life",
            topics: ["Creating a sustainable home practice", "Yoga at work or school (Chair Yoga)", "Mindfulness in daily activities (Karma Yoga)", "Overcoming common barriers and resistance", "Long-term benefits of consistency"],
            practical: ["Designing a short 'office yoga' sequence", "Group discussion on obstacles to practice", "Developing a 4-week personal plan"],
            assignment: "Teach one simple yoga or breathing technique to a friend or family member."
          },
          {
            week: "WEEK 8",
            module: "Personalized Wellness Project",
            topics: ["Synthesizing the learnings", "Presentation of final routines", "Setting future wellness goals", "Closing ceremony and reflection"],
            practical: ["Final project presentation and demonstration", "Group practice session", "Reflection circle"],
            assignment: "Deliver a final 20-minute personalized daily routine and 4-week practice log."
          }
        ],
        labs: ["Asana alignment workshop", "Pranayama deep-dive session", "Meditation & Mindfulness circle", "Stress management & Resilience workshop", "Personalized routine design lab"],
        tools: {
          beginner: ["Yoga Mat", "Yoga Blocks", "Straps / Belts", "Meditation Cushion / Pillow"],
          optional: ["Yoga Bolster", "Eye Pillow", "Meditation Apps", "Wellness Journal"]
        },
        assessment: [
          { type: "Practical Asana Demonstration", weight: "30%" },
          { type: "Pranayama & Meditation Log", weight: "20%" },
          { type: "Reflection Journal", weight: "10%" },
          { type: "Final Personalized Routine", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Successfully demonstrate 10 key asanas",
          "Submit a 4-week daily practice log",
          "Present and submit a personalized 20-minute daily routine"
        ],
        careers: [
          "Yoga Instructor Assistant",
          "Wellness Program Facilitator",
          "Stress Management Coach",
          "Holistic Health Associate",
          "Community Wellness Coordinator",
          "Corporate Wellness Assistant"
        ],
        methodology: "20% Theory, 80% Practical & Experiential Learning"
      }
    },
    {
      id: "wl-4",
      titleKey: "courses.tracks.wellness.c4",
      descKey: "courses.tracks.wellness.desc4",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["nutrition", "local_diet"],
      curriculum: {
        objective: "To provide learners with a foundational understanding of human nutrition and practical skills in planning healthy, balanced diets using locally available resources for optimal health and disease prevention.",
        outcomes: [
          "Understand the vital roles of macronutrients and micronutrients in the body",
          "Master the principles of a balanced diet and portion control",
          "Evaluate and address nutritional needs for different life stages",
          "Plan healthy, cost-effective meals using local and seasonal foods",
          "Implement food safety and hygiene standards in food preparation",
          "Identify and manage common nutritional deficiencies in the community",
          "Understand the impact of diet on chronic disease prevention",
          "Develop a personalized, sustainable nutrition and meal plan"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Human Nutrition",
            topics: ["Definitions and core concepts of nutrition", "Role of nutrition in health, growth, and repair", "Basics of human digestion", "Understanding calories and energy balance", "History of traditional diets"],
            practical: ["Identifying food groups in daily meals", "Calculating Basal Metabolic Rate (BMR)", "Nutrition myth-busting session"],
            assignment: "Keep a detailed 3-day food diary and categorize items by food group."
          },
          {
            week: "WEEK 2",
            module: "Macronutrients & Micronutrients",
            topics: ["Proteins, Carbohydrates, and Fats: Functions and sources", "Vitamins and Minerals: Essential roles and deficiencies", "The importance of fiber and water", "Phytochemicals and antioxidants in local plants"],
            practical: ["Identifying nutrient-dense local foods", "Testing for starches and fats (simple experiments)", "Micronutrient source mapping"],
            assignment: "Research and list local sources for 10 essential vitamins and minerals."
          },
          {
            week: "WEEK 3",
            module: "The Balanced Diet & Label Reading",
            topics: ["The Food Pyramid vs. The Healthy Plate", "Portion sizes and mindful eating", "Reading and understanding food labels (sugar, salt, fats)", "Identifying hidden additives and preservatives"],
            practical: ["Analyzing food labels from local products", "Measuring standard portion sizes", "Building a 'Perfect Plate' model"],
            assignment: "Analyze the labels of 5 packaged foods and rank them by health value."
          },
          {
            week: "WEEK 4",
            module: "Nutrition Through the Lifecycle",
            topics: ["Nutritional needs for infants (Breastfeeding/Weaning)", "Growth and nutrition in childhood and adolescence", "Adult and elderly nutrition requirements", "Nutrition during pregnancy and lactation"],
            practical: ["Designing a child-friendly healthy snack", "Creating a nutrition plan for an elderly person", "Role-play: Nutritional counseling"],
            assignment: "Develop a one-day menu for a specific life stage (e.g., a pregnant woman)."
          },
          {
            week: "WEEK 5",
            module: "Local, Seasonal & Traditional Nutrition",
            topics: ["Benefits of eating local and seasonal", "Nutritional value of traditional grains and legumes", "Cost-effective healthy eating strategies", "Traditional fermentation and food processing"],
            practical: ["Cooking workshop: Traditional grains", "Seasonal food availability mapping", "Budget meal planning exercise"],
            assignment: "Create a 3-day seasonal meal plan using only local ingredients."
          },
          {
            week: "WEEK 6",
            module: "Food Safety & Preparation",
            topics: ["Principles of hygienic food handling (WHO 5 keys)", "Cooking methods to preserve nutrients (Steaming vs. Frying)", "Avoiding food-borne illnesses", "Safe storage and preservation at home"],
            practical: ["Food safety audit of a kitchen", "Demonstrating nutrient-preserving cooking", "Safe food storage simulation"],
            assignment: "Develop a food safety and hygiene checklist for a household."
          },
          {
            week: "WEEK 7",
            module: "Clinical & Community Nutrition",
            topics: ["Identifying signs of malnutrition and deficiencies", "The 'Double Burden': Undernutrition and Obesity", "Impact of sugar and ultra-processed foods", "Dietary management for common chronic conditions"],
            practical: ["Identifying common deficiency signs (simulated)", "Weight management workshop", "Designing a sugar-reduction plan"],
            assignment: "Write a short report on the impact of processed foods on community health."
          },
          {
            week: "WEEK 8",
            module: "Nutrition Planning & Final Project",
            topics: ["Synthesizing nutritional knowledge", "Creating a 7-day balanced meal plan", "Presenting a personalized nutrition strategy", "Future trends in nutrition"],
            practical: ["Final meal plan presentation", "Nutrition quiz challenge", "Course reflection and goal setting"],
            assignment: "Deliver a final 7-day personalized nutrition and wellness plan."
          }
        ],
        labs: ["Nutritional value calculation lab", "Balanced meal planning workshop", "Nutrient-preserving cooking demo", "Food label reading clinic", "Traditional food analysis lab"],
        tools: {
          beginner: ["Food Weighing Scales", "Calorie Tracking Charts", "Measuring Cups/Spoons", "Food Safety Kit"],
          optional: ["Digital Nutrition Apps", "Body Composition Monitor", "Professional Diet Planning Software"]
        },
        assessment: [
          { type: "Meal Planning Logs", weight: "25%" },
          { type: "Nutrient Analysis Practical", weight: "20%" },
          { type: "Food Safety Quiz", weight: "15%" },
          { type: "Final Personalized Nutrition Plan", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete the 7-day food diary and analysis",
          "Submit a 7-day balanced meal plan for a specific goal",
          "Pass the food safety and hygiene practical"
        ],
        careers: [
          "Nutrition Assistant",
          "Health & Wellness Coach",
          "School Nutrition Coordinator",
          "Community Nutrition Worker",
          "Food Safety Associate",
          "Dietetic Technician Assistant"
        ],
        methodology: "40% Theory, 60% Practical & Case Studies"
      }
    },
    {
      id: "wl-5",
      titleKey: "courses.tracks.wellness.c5",
      descKey: "courses.tracks.wellness.desc5",
      image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w4",
      level: "Foundation",
      tags: ["first_aid", "emergency"],
      curriculum: {
        objective: "To equip learners with life-saving knowledge and practical skills to provide immediate and effective first aid in emergency situations, ensuring stability until professional medical help arrives.",
        outcomes: [
          "Understand the core principles of first aid and the responsibilities of a first aider",
          "Master life-saving techniques including CPR and choking relief for all ages",
          "Manage various types of wounds, severe bleeding, and shock effectively",
          "Recognize and provide initial care for fractures, sprains, and joint injuries",
          "Identify and respond correctly to critical medical emergencies (Heart attack, Stroke, etc.)",
          "Handle environmental emergencies such as burns, poisoning, and animal bites",
          "Develop a robust emergency action plan for home, school, or workplace",
          "Maintain and effectively use a professional first aid kit"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to First Aid & Emergency Action",
            topics: ["Goals and principles of first aid", "Legal and ethical considerations (Good Samaritan laws)", "Personal safety and scene assessment", "The Emergency Action Plan: Check-Call-Care", "Effective communication with emergency services"],
            practical: ["Conducting a primary and secondary survey", "Scene safety simulation", "Practicing emergency calls"],
            assignment: "Identify 10 potential hazards in your local community and their first aid solutions."
          },
          {
            week: "WEEK 2",
            module: "Life-Saving Skills: CPR & AED",
            topics: ["Understanding cardiac arrest vs. heart attack", "Chest compressions and rescue breaths", "CPR for Adults, Children, and Infants", "Introduction to Automated External Defibrillators (AEDs)", "Hand-only CPR basics"],
            practical: ["CPR practice on manikins (Adult/Infant)", "AED training simulation", "Team-based CPR practice"],
            assignment: "Create a step-by-step CPR visual guide for your household."
          },
          {
            week: "WEEK 3",
            module: "Airway & Breathing Emergencies",
            topics: ["Recognizing and clearing airway obstructions", "The Heimlich maneuver (Abdominal thrusts)", "Assisting with asthma and severe allergic reactions (Anaphylaxis)", "The Recovery Position and its importance"],
            practical: ["Choking rescue simulation (conscious/unconscious)", "Placing someone in the recovery position", "Epi-pen trainer practice"],
            assignment: "Write a summary of the 'Heimlich Maneuver' for different age groups."
          },
          {
            week: "WEEK 4",
            module: "Wounds, Bleeding & Shock",
            topics: ["Types of wounds: Abrasions, Lacerations, Punctures", "Managing severe external and internal bleeding", "Use of tourniquets and hemostatic dressings", "Recognizing and treating shock", "Infection prevention in wound care"],
            practical: ["Applying pressure bandages", "Tourniquet application simulation", "Shock management positioning"],
            assignment: "Develop a guide on managing severe bleeding in remote areas."
          },
          {
            week: "WEEK 5",
            module: "Musculoskeletal & Head Injuries",
            topics: ["Recognizing fractures, sprains, and strains", "R.I.C.E. therapy principles", "Splinting and immobilization techniques", "Managing head, neck, and spinal injuries", "Safe movement and transport of the injured"],
            practical: ["Applying various splints and slings", "Stabilizing a suspected neck injury", "Improvising first aid tools from local materials"],
            assignment: "List 5 ways to improvise a splint using common household items."
          },
          {
            week: "WEEK 6",
            module: "Common Medical Emergencies",
            topics: ["Recognizing signs of Heart Attack and Stroke", "Managing Seizures and Epilepsy", "Diabetic emergencies (Hypoglycemia/Hyperglycemia)", "Fainting and heat-related illness", "Poisoning and overdose basics"],
            practical: ["Positioning for different medical conditions", "Seizure safety demonstration", "Simulating a medical emergency response"],
            assignment: "Create a 'Red Flag' chart for common medical emergencies."
          },
          {
            week: "WEEK 7",
            module: "Environmental Emergencies & Bites",
            topics: ["First aid for thermal, chemical, and electrical burns", "Managing snake, insect, and animal bites", "Heatstroke and dehydration management", "Basics of water safety and drowning response", "Cold-related emergencies awareness"],
            practical: ["Burn dressing techniques", "First aid for snake bites (Do's and Don'ts)", "Creating an oral rehydration solution"],
            assignment: "Develop a first aid protocol for local venomous snake bites."
          },
          {
            week: "WEEK 8",
            module: "Integrated Project & Certification",
            topics: ["Review of all life-saving skills", "Complex scenario-based simulations", "Setting up a community first aid kit", "Continuous learning and refresher planning"],
            practical: ["Final multi-emergency simulation", "First aid kit assembly workshop", "Final skills assessment"],
            assignment: "Deliver a final 5-minute presentation on a community emergency action plan."
          }
        ],
        labs: ["CPR & AED manikin lab", "Choking rescue workshop", "Advanced bandaging & splinting lab", "Emergency scenario role-play", "First aid kit assembly clinic"],
        tools: {
          beginner: ["First Aid Kit (Standard)", "CPR Manikin", "Training AED", "Triangular Bandages"],
          optional: ["Epi-pen Trainer", "Bleeding Control Kit (Tourniquets)", "Pulse Oximeter", "Emergency Stretcher"]
        },
        assessment: [
          { type: "Life-Saving Skills Demonstration", weight: "35%" },
          { type: "Scenario-based Evaluation", weight: "25%" },
          { type: "First Aid & Emergency Quiz", weight: "10%" },
          { type: "Final Emergency Action Plan", weight: "30%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Successfully demonstrate CPR and choking rescue",
          "Pass the scenario-based practical evaluation",
          "Complete and submit an approved emergency action plan"
        ],
        careers: [
          "First Aid Instructor Assistant",
          "Community First Responder",
          "Emergency Response Team Member",
          "Health & Safety Officer",
          "Event Safety Associate",
          "Workplace Safety Coordinator"
        ],
        methodology: "20% Theory, 80% Practical & Simulation-Based Training"
      }
    },
    {
      id: "wl-a1",
      titleKey: "courses.tracks.wellness.a1",
      descKey: "courses.tracks.wellness.desca1",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w12",
      level: "Advance",
      tags: ["diagnostics", "panchakarma"],
      curriculum: {
        objective: "To provide advanced knowledge and practical skills in traditional Ayurvedic diagnostic methods and the implementation of Panchakarma therapies for deep detoxification and rejuvenation.",
        outcomes: [
          "Master the 'Eight-fold' diagnostic method (Ashta Vidha Pariksha) including pulse and tongue analysis",
          "Understand the core principles, indications, and contraindications of Panchakarma",
          "Perform various Purvakarma (Preparatory) and Pradhanakarma (Main) therapies with precision",
          "Manage critical post-therapy care and dietary regimens (Samsarjana Krama)",
          "Understand the scientific basis and clinical research behind Panchakarma therapies",
          "Manage a professional Panchakarma center's daily operations and safety protocols",
          "Evaluate patient progress and adjust treatment plans accordingly",
          "Implement high standards of hygiene and professionalism in a clinical setting"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Advanced Ayurvedic Diagnostics",
            topics: ["Ashta Vidha Pariksha: The Eight-fold examination", "Nadi Pariksha (Pulse Analysis) - levels and rhythms", "Jihva (Tongue), Netra (Eyes), and Akriti (General appearance) diagnosis", "Assessing Agni, Dhatu, and Mala status", "Root cause analysis (Nidana Panchaka)"],
            practical: ["Guided pulse reading sessions", "Tongue and physical feature observation", "Conducting a full clinical consultation"],
            assignment: "Perform 10 complete diagnostic assessments and document the findings."
          },
          {
            week: "WEEK 3-4",
            module: "Purvakarma (Preparatory Therapies)",
            topics: ["Deepana and Pachana: Kindling digestion and toxins", "Snehana: Internal and External Oleation", "Swedana: Principles of Herbal Steam (various types)", "Indications and signs of proper oleation/sudation", "Preparing medicines for Purvakarma"],
            practical: ["Demonstration of Abhyanga (Ayurvedic Massage)", "Setting up and managing a steam chamber", "Calculating dosage for internal snehana"],
            assignment: "Prepare a protocol for a 7-day preparatory phase for a sample patient."
          },
          {
            week: "WEEK 5-6",
            module: "Pradhanakarma - Vamana & Virechana",
            topics: ["Vamana: Therapeutic Emesis - Procedure and signs", "Virechana: Therapeutic Purgation - Procedure and signs", "Managing complications and 'Ayoga/Atiyoga'", "Dietary restrictions during therapy", "Scientific basis of elimination"],
            practical: ["Observing a live or simulated Vamana session", "Preparing decoctions for Virechana", "Monitoring patient vitals during therapy"],
            assignment: "Write a detailed procedure and monitoring log for a Virechana therapy."
          },
          {
            week: "WEEK 7-8",
            module: "Pradhanakarma - Basti & Nasya",
            topics: ["Basti: The 'half of all treatments' - Types and procedures", "Anuvasana (Oil) and Niruha (Decoction) Basti", "Nasya: Nasal administration for head and neck health", "Local Basti (Kati, Janu, Griva Basti) techniques", "Post-Basti care and observations"],
            practical: ["Basti equipment preparation and sterilization", "Performing a Nasya session", "Application of Local Basti (Kati Basti)"],
            assignment: "Design a 15-day Basti schedule for a specific chronic condition."
          },
          {
            week: "WEEK 9",
            module: "Pradhanakarma - Raktamokshana",
            topics: ["Principles of Bloodletting in Ayurveda", "Methods: Leech therapy (Jalaukavacharana) and Siravyadha", "Indications, safety, and hygiene", "Post-procedure care and wound management", "Ethical considerations"],
            practical: ["Handling and applying leeches (simulated/supervised)", "Post-procedure dressing techniques", "Safety protocol drill"],
            assignment: "Develop a safety and hygiene protocol for Raktamokshana therapy."
          },
          {
            week: "WEEK 10",
            module: "Post-Therapy Care & Rejuvenation",
            topics: ["Samsarjana Krama: Gradual dietary re-introduction", "Parihara Vishaya: Lifestyle restrictions post-detox", "Rasayana: Rejuvenation therapies for longevity", "Building immunity and preventing recurrence", "Mental health support post-Panchakarma"],
            practical: ["Ayurvedic cooking: Preparing Manda, Peya, Vilepi", "Designing a 15-day post-detox lifestyle plan", "Guided Rasayana therapy planning"],
            assignment: "Create a 14-day Samsarjana Krama meal and activity chart."
          },
          {
            week: "WEEK 11-12",
            module: "Clinical Internship & Management",
            topics: ["Setting up a Panchakarma unit (Infrastructure/Legal)", "Stock management of oils and herbs", "Professional ethics and patient confidentiality", "Record keeping and case study documentation", "Entrepreneurship in Ayurvedic wellness"],
            practical: ["Full patient management from admission to discharge", "Stock taking and inventory audit", "Final case study presentation"],
            assignment: "Submit a complete business and operational plan for a small Panchakarma center."
          }
        ],
        labs: ["Diagnostic & Pulse lab", "Therapy demonstration workshop", "Ayurvedic pharmacy (herb prep) lab", "Patient management simulation", "Clinical internship hours"],
        tools: {
          beginner: ["Panchakarma Table (Droni)", "Steam Chamber", "Basti Syringes / Equipment", "Diagnostic Kit"],
          optional: ["Pulse Oximeter", "Blood Pressure Monitor", "Digital Case Management Software", "Advanced Sterilization Units"]
        },
        assessment: [
          { type: "Diagnostic Accuracy & Case Taking", weight: "30%" },
          { type: "Practical Therapy Demonstration", weight: "30%" },
          { type: "Clinical Case Study Documentation", weight: "10%" },
          { type: "Final Center Management Project", weight: "30%" }
        ],
        certification: [
          "Attend at least 80% of theory and 95% of clinical sessions",
          "Successfully demonstrate 5 main Panchakarma procedures",
          "Complete and submit 5 detailed patient case studies",
          "Pass the final clinical and management evaluation"
        ],
        careers: [
          "Panchakarma Technician",
          "Ayurvedic Health Consultant (Advanced)",
          "Wellness Center Manager",
          "Medical Spa Therapist",
          "Ayurvedic Clinical Assistant",
          "Health & Longevity Coach"
        ],
        methodology: "30% Theory, 70% Practical & Clinical Internship"
      }
    },
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
    {
      id: "dt-3",
      titleKey: "courses.tracks.data_tech.c3",
      descKey: "courses.tracks.data_tech.desc3",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w8",
      level: "Foundation",
      tags: ["genai", "office_tools"],
      curriculum: {
        objective: "To introduce learners to Artificial Intelligence (AI) concepts while developing practical office productivity and digital workplace skills using modern office software and AI-powered tools.",
        outcomes: [
          "Understand the fundamentals of Artificial Intelligence",
          "Use AI tools for productivity and learning",
          "Create professional documents, spreadsheets, and presentations",
          "Organize digital workflows efficiently",
          "Use AI ethically and responsibly",
          "Collaborate using cloud-based office systems",
          "Automate simple office tasks",
          "Prepare for modern digital workplaces"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Artificial Intelligence",
            topics: ["What is AI?", "History and evolution", "Types of AI", "AI in daily life (Chatbots, Voice Assistants)", "Opportunities and risks", "AI in agriculture, health, and business"],
            practical: ["Discussion: “Where do we already use AI?”", "Identifying AI-powered tools", "AI awareness workshop"],
            assignment: "Write a short reflection on how AI can help local communities."
          },
          {
            week: "WEEK 2",
            module: "AI Tools & Prompting Fundamentals",
            topics: ["Generative AI introduction", "Text-based AI systems", "Image-generation AI", "Writing effective prompts", "Prompt refinement", "AI ethics: Limitations, bias, and misinformation"],
            practical: ["Prompt-writing exercises", "AI-assisted brainstorming", "Comparing AI-generated outputs"],
            assignment: "Create 10 useful prompts for education or business tasks."
          },
          {
            week: "WEEK 3",
            module: "Word Processing & Professional Documents",
            topics: ["MS Word / Google Docs fundamentals", "Professional document design", "Templates and layouts", "Digital writing standards", "AI-assisted documentation (Grammar, Summarization)"],
            practical: ["Resume creation", "Business letter writing", "Report formatting exercises", "AI-assisted document generation"],
            assignment: "Create a professional resume and cover letter using AI assistance."
          },
          {
            week: "WEEK 4",
            module: "Spreadsheet Fundamentals & Data Handling",
            topics: ["Spreadsheet interface (Excel/Sheets)", "Rows, columns, and cells", "Formulas (SUM, AVERAGE, COUNT, %) ", "Data entry & formatting", "Sorting and filtering", "AI-assisted data analysis"],
            practical: ["Expense tracker creation", "Attendance sheets", "Budget management exercises", "Spreadsheet automation basic"],
            assignment: "Build a monthly personal or business budget spreadsheet."
          },
          {
            week: "WEEK 5",
            module: "Presentation & Communication Skills",
            topics: ["Presentation design principles", "Storytelling and typography", "Slide transitions and media", "AI for presentations (Slide generators, Design help)", "AI image generation for slides"],
            practical: ["Pitch presentation creation", "Team presentation workshop", "Visual storytelling practice"],
            assignment: "Create a presentation about a local business or community initiative."
          },
          {
            week: "WEEK 6",
            module: "Digital Collaboration & Cloud Productivity",
            topics: ["Cloud computing (Drive, OneDrive)", "Online collaboration systems", "Shared workspaces", "Professional email writing", "Meeting etiquette", "AI-powered productivity (Scheduling, Note-taking)"],
            practical: ["Collaborative group project", "Shared document editing", "Online meeting simulation"],
            assignment: "Organize and manage a collaborative digital project."
          },
          {
            week: "WEEK 7",
            module: "AI Automation & Workplace Efficiency",
            topics: ["Workflow automation concepts", "AI office assistants", "Smart content generation", "AI for customer support", "Email drafting and report summarization", "Human skills vs AI"],
            practical: ["AI productivity challenge", "Workflow optimization exercise", "AI tool comparison workshop"],
            assignment: "Design a workflow where AI improves efficiency in a workplace task."
          },
          {
            week: "WEEK 8",
            module: "Digital Portfolio & Final Project",
            topics: ["Project requirements", "Document, Spreadsheet, and Presentation integration", "AI tool integration", "Final workplace project development"],
            practical: ["Final project development", "Project workflow demonstration", "Productivity improvement analysis"],
            assignment: "Complete one project option and deliver final presentation with AI-enhanced office results."
          }
        ],
        labs: ["AI prompt engineering", "Professional document creation", "Spreadsheet analysis", "Presentation design", "Cloud collaboration", "Digital communication", "AI-assisted productivity workflows"],
        tools: {
          beginner: ["Microsoft Office", "Google Workspace", "Gmail", "Google Drive", "Zoom / Google Meet"],
          optional: ["ChatGPT", "AI Writing Assistants", "Canva", "AI Presentation Tools"]
        },
        assessment: [
          { type: "Attendance & Participation", weight: "10%" },
          { type: "Weekly Assignments", weight: "20%" },
          { type: "Practical Lab Exercises", weight: "30%" },
          { type: "Mid-Course Evaluation", weight: "10%" },
          { type: "Final Project & Presentation", weight: "30%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all practical exercises",
          "Submit assignments and mini-projects",
          "Participate in collaborative activities",
          "Successfully present the final project"
        ],
        careers: [
          "Office Administration",
          "Data Entry & Documentation",
          "AI-Assisted Operations",
          "Digital Marketing",
          "Business Management",
          "Customer Support Roles"
        ],
        methodology: "35% Theory, 65% Practical & Project-Based Learning"
      }
    },
    {
      id: "dt-4",
      titleKey: "courses.tracks.data_tech.c4",
      descKey: "courses.tracks.data_tech.desc4",
      image: "https://plus.unsplash.com/premium_photo-1664474559614-74d16c1c6f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["enterprise", "bookkeeping"],
      curriculum: {
        objective: "To empower learners with the essential skills required to start, manage, and grow a sustainable small business or rural enterprise, with a focus on practical financial management and market strategy.",
        outcomes: [
          "Define and understand business fundamentals",
          "Conduct basic market research to identify opportunities",
          "Manage business operations and resources effectively",
          "Implement basic marketing and sales strategies",
          "Maintain accurate financial records and bookkeeping",
          "Understand local business regulations and compliance",
          "Leverage digital tools for business management",
          "Develop a comprehensive business plan"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Entrepreneurship",
            topics: ["What is a business?", "Solving community problems", "Mindset of an entrepreneur", "Types of rural enterprises", "SWOT Analysis basics"],
            practical: ["Identify local business opportunities", "Self-assessment: 'Am I an entrepreneur?'", "Community problem mapping"],
            assignment: "List 5 potential business ideas for your village or town."
          },
          {
            week: "WEEK 2",
            module: "Market Research & Planning",
            topics: ["Understanding your customers", "Analyzing competitors", "Value proposition", "Business idea validation", "Setting SMART business goals"],
            practical: ["Customer interview simulation", "Competitor analysis exercise", "Writing a value proposition"],
            assignment: "Conduct a simple market survey with 10 potential customers."
          },
          {
            week: "WEEK 3",
            module: "Product & Operations",
            topics: ["Developing your product/service", "Supply chain and inventory", "Managing resources", "Quality control", "Production planning"],
            practical: ["Mapping the production process", "Supplier identification exercise", "Resource planning simulation"],
            assignment: "Create an operational plan for your chosen business idea."
          },
          {
            week: "WEEK 4",
            module: "Marketing & Branding",
            topics: ["Building a brand", "Pricing strategies", "Local marketing techniques", "Introduction to sales", "Customer relationship management"],
            practical: ["Designing a simple logo/brand", "Role-play: Selling your product", "Pricing exercise"],
            assignment: "Develop a one-month marketing plan for your business."
          },
          {
            week: "WEEK 5",
            module: "Basic Bookkeeping",
            topics: ["Importance of records", "Tracking income and expenses", "Cash flow management", "Using physical vs digital ledgers", "Inventory tracking"],
            practical: ["Maintaining a daily cash book", "Recording business transactions", "Categorizing expenses"],
            assignment: "Record sample transactions for one week in a ledger."
          },
          {
            week: "WEEK 6",
            module: "Financial Management",
            topics: ["Profit and Loss statements", "Calculating break-even", "Budgeting for growth", "Loans and credit basics", "Understanding taxes and fees"],
            practical: ["Preparing a simple P&L statement", "Break-even calculation exercise", "Monthly budget planning"],
            assignment: "Calculate the monthly break-even point for your business."
          },
          {
            week: "WEEK 7",
            module: "Business Growth & Digital Tools",
            topics: ["Scaling your business", "Social media for marketing (WhatsApp, FB)", "Digital payments (UPI, Wallets)", "Online selling basics", "E-commerce for rural products"],
            practical: ["Setting up WhatsApp Business", "Digital payment simulation", "Online product listing"],
            assignment: "Create a digital marketing post for your business."
          },
          {
            week: "WEEK 8",
            module: "Final Business Project",
            topics: ["Creating a one-page business plan", "Pitching your idea", "Financial projections", "Future roadmap"],
            practical: ["Final business plan development", "Pitching to peers", "Feedback and iteration"],
            assignment: "Deliver a final 5-minute business pitch and submit the business plan."
          }
        ],
        labs: ["Business model canvas", "Cash flow simulation", "Marketing plan workshop", "Digital payment setup", "Pitching practice"],
        tools: {
          beginner: ["WhatsApp Business", "Google Sheets / Excel", "Digital Payment Apps (PhonePe/GPay)"],
          optional: ["Canva", "Tally (intro)", "Khatabook"]
        },
        assessment: [
          { type: "Class Participation", weight: "15%" },
          { type: "Weekly Business Logs", weight: "25%" },
          { type: "Mid-term Business Idea", weight: "20%" },
          { type: "Final Business Plan & Pitch", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Submit all weekly bookkeeping logs",
          "Complete the business model canvas",
          "Present a viable business plan"
        ],
        careers: [
          "Small Business Owner",
          "Store Manager",
          "Business Development Associate",
          "Freelance Bookkeeper",
          "Digital Entrepreneur",
          "Micro-finance Assistant"
        ],
        methodology: "30% Theory, 70% Practical & Case Studies"
      }
    },
    {
      id: "dt-a1",
      titleKey: "courses.tracks.data_tech.a1",
      descKey: "courses.tracks.data_tech.desca1",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w12",
      level: "Advance",
      tags: ["python", "automation"],
      curriculum: {
        objective: "To equip learners with advanced programming skills in Python, focusing on automation, scripting, and data handling to improve efficiency in various technical and business environments.",
        outcomes: [
          "Master advanced Python syntax, data structures, and functional programming",
          "Automate repetitive file system and administrative tasks using scripts",
          "Develop robust programs that interact with REST APIs and web services",
          "Perform automated web scraping and data extraction at scale",
          "Integrate Python scripts with SQL databases for automated data management",
          "Automate professional documents including Excel, PDF, and Email workflows",
          "Implement comprehensive error handling, logging, and unit testing",
          "Design, build, and deploy a custom end-to-end automation tool"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Advanced Python Foundations",
            topics: ["Recap of core syntax and logic", "Advanced data structures (Nested Lists, Dicts, Sets)", "List & Dictionary comprehensions", "Lambda functions, Map, Filter, and Reduce", "Decorators and Generators for efficiency"],
            practical: ["Building a complex data sorter", "Writing memory-efficient generators", "Custom decorator implementation"],
            assignment: "Develop a script to process and clean a complex nested JSON dataset."
          },
          {
            week: "WEEK 3-4",
            module: "File System & Data Automation",
            topics: ["Automating OS tasks with 'os' and 'shutil' modules", "Working with CSV, JSON, and XML files at scale", "Regular Expressions (Regex) for data pattern matching", "Logging and configuration management", "Automating backups and file organization"],
            practical: ["Automated file organizer script", "Regex data extractor tool", "Log file analyzer"],
            assignment: "Create an automated system that monitors a folder and sorts incoming files by type and date."
          },
          {
            week: "WEEK 5-6",
            module: "Web Automation & Scraping",
            topics: ["Introduction to the Document Object Model (DOM)", "Web scraping with BeautifulSoup4 and LXML", "Browser automation with Selenium", "Handling dynamic content and AJAX", "Ethical scraping and 'Robots.txt' compliance"],
            practical: ["Price tracker for e-commerce sites", "Automated form filler", "Scraping news headlines and saving to CSV"],
            assignment: "Build a web scraper that collects product data from 5 different pages and generates a report."
          },
          {
            week: "WEEK 7-8",
            module: "API Integration & Web Services",
            topics: ["Understanding REST Architecture and HTTP Methods", "Using the 'Requests' library for API calls", "Authentication: API Keys, Bearer Tokens, and OAuth2", "Handling API rate limits and retries", "Consuming data from Google, Twitter, or Weather APIs"],
            practical: ["Building a weather notification system", "Automated social media poster", "Currency converter using live APIs"],
            assignment: "Develop a script that fetches data from an API, processes it, and sends an automated email summary."
          },
          {
            week: "WEEK 9-10",
            module: "Database & Document Automation",
            topics: ["Introduction to SQL and Relational Databases", "Connecting Python to SQLite and PostgreSQL", "Automating CRUD (Create, Read, Update, Delete) operations", "Working with Excel (Openpyxl) and PDFs (ReportLab/PyPDF2)", "Email automation with Smtplib and MIME"],
            practical: ["Automated invoice generator (Excel to PDF)", "Database-driven report tool", "Bulk personalized email sender"],
            assignment: "Create a system that reads customer data from a database, generates personalized PDF reports, and emails them."
          },
          {
            week: "WEEK 11-12",
            module: "Testing, Debugging & Final Project",
            topics: ["Unit testing with Pytest", "Debugging techniques in VS Code", "Exception handling and building robust scripts", "Project planning and documentation", "Packaging and deployment (PyInstaller)"],
            practical: ["Writing test suites for existing code", "Debugging a 'broken' automation script", "Final project development"],
            assignment: "Deliver a final, documented, and tested automation tool that solves a real-world problem."
          }
        ],
        labs: ["Advanced scripting lab", "Web scraping & DOM workshop", "API integration & Authentication lab", "Database & Document automation workshop", "Final project development & Testing clinic"],
        tools: {
          beginner: ["VS Code", "Python 3.11+", "Git & GitHub", "Postman for API Testing"],
          optional: ["Docker", "SQLite / PostgreSQL", "Selenium Grid", "Cloud Functions (AWS/GCP)"]
        },
        assessment: [
          { type: "Weekly Coding Assignments", weight: "30%" },
          { type: "Technical Lab Proficiency", weight: "20%" },
          { type: "Automation Logic & Testing Quiz", weight: "10%" },
          { type: "Final Capstone Automation Project", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 6 weekly advanced coding tasks",
          "Pass the unit testing and debugging assessment",
          "Successfully demonstrate a functional, tested capstone project"
        ],
        careers: [
          "Automation Engineer",
          "Python Developer (Backend)",
          "Data Operations Analyst",
          "DevOps Junior Engineer",
          "QA Automation Specialist",
          "Technical Consultant"
        ],
        methodology: "25% Theory, 75% Practical & Project-Based Learning"
      }
    },
    {
      id: "dt-a2",
      titleKey: "courses.tracks.data_tech.a2",
      descKey: "courses.tracks.data_tech.desc2",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w16",
      level: "Advance",
      tags: ["web_dev", "react"],
      curriculum: {
        objective: "To provide learners with advanced skills in modern web development using React.js, focusing on component-based architecture, state management, and building high-performance, responsive web applications.",
        outcomes: [
          "Master modern JavaScript (ES6+) and foundational React principles",
          "Master advanced React Hooks and create custom hooks for reusable logic",
          "Implement robust state management using Context API and Redux Toolkit",
          "Build complex, multi-page applications with advanced routing and authentication",
          "Develop highly responsive and performant UIs using Tailwind CSS and modern UI libraries",
          "Integrate and manage asynchronous data from RESTful APIs using React Query",
          "Implement unit testing for components and optimize app performance",
          "Deploy production-ready React applications to modern cloud platforms"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Modern JavaScript & React Foundations",
            topics: ["ES6+ Deep Dive: Destructuring, Spread/Rest, Modules, Promises", "JSX and the Virtual DOM", "Functional Components vs. Class Components", "Props, State, and Component Lifecycle", "Handling Events and Conditional Rendering"],
            practical: ["Refactoring legacy JS into ES6+", "Building a dynamic 'Task Manager' UI", "Component composition exercises"],
            assignment: "Develop a multi-component dashboard interface using only local state and props."
          },
          {
            week: "WEEK 3-4",
            module: "Advanced Hooks & Reusable Logic",
            topics: ["Deep dive into useEffect and its dependency array", "Performance Hooks: useMemo and useCallback", "Managing DOM and persistent values with useRef", "Building custom hooks for API calls, forms, and local storage", "Rules of Hooks and common pitfalls"],
            practical: ["Optimizing a list-heavy component", "Creating a 'useLocalStorage' custom hook", "Building a custom 'useFetch' hook"],
            assignment: "Create a library of 3 custom hooks for common UI patterns."
          },
          {
            week: "WEEK 5-6",
            module: "State Management Strategies",
            topics: ["Lifting State Up and Prop Drilling issues", "Context API for global state management", "Introduction to Redux Toolkit (RTK)", "Slices, Actions, and Reducers", "Handling asynchronous logic with RTK Query"],
            practical: ["Implementing 'Dark Mode' toggle using Context API", "Building a Shopping Cart with Redux Toolkit", "Managing global user authentication state"],
            assignment: "Migrate a complex local-state application to Redux Toolkit."
          },
          {
            week: "WEEK 7-8",
            module: "Routing, Navigation & Auth",
            topics: ["Advanced routing with React Router v6", "Nested routes and dynamic parameters", "Protected routes and navigation guards", "Authentication flows (JWT, OAuth) basics", "Search parameters and location management"],
            practical: ["Building a multi-level navigation system", "Implementing a Login/Signup flow", "Creating an admin dashboard with protected routes"],
            assignment: "Develop a full routing structure for a multi-user blogging platform."
          },
          {
            week: "WEEK 9-10",
            module: "API Integration & Data Fetching",
            topics: ["Consuming REST APIs with Axios", "Handling loading, error, and empty states", "Introduction to TanStack Query (React Query)", "Caching, Retries, and Stale-time management", "Optimistic UI updates"],
            practical: ["Building a 'Search and Filter' UI with live API data", "Implementing infinite scroll", "Handling complex API mutations"],
            assignment: "Develop a real-time data visualization dashboard using React Query and a public API."
          },
          {
            week: "WEEK 11-12",
            module: "Modern Styling & UI Components",
            topics: ["Tailwind CSS for rapid UI development", "CSS-in-JS and Styled Components", "Using shadcn/ui and Headless UI for accessible components", "Responsive design patterns and Mobile-first approach", "Design systems and theme customization"],
            practical: ["Building a responsive 'SaaS' landing page", "Customizing a UI component library", "Implementing complex animations with Framer Motion"],
            assignment: "Design and build a professional, fully responsive UI for a web application."
          },
          {
            week: "WEEK 13-14",
            module: "Forms, Testing & Optimization",
            topics: ["Managing complex forms with React Hook Form", "Schema-based validation with Yup/Zod", "Unit testing with Vitest and React Testing Library", "Performance: Code splitting, Lazy loading, and Suspense", "Profiling React applications"],
            practical: ["Building a multi-step registration form with validation", "Writing unit tests for UI components", "Optimizing a slow React app using Profiler"],
            assignment: "Submit a tested and optimized version of your core application components."
          },
          {
            week: "WEEK 15-16",
            module: "Full Project & Deployment",
            topics: ["Project architecture and best practices", "Environment variables and configuration", "Continuous Integration and Deployment (Vercel/Netlify)", "Portfolio building for React Developers", "Final project presentation"],
            practical: ["Final project development", "Deployment to Vercel", "Peer code review session"],
            assignment: "Deliver a final production-ready React application with a GitHub repository and live URL."
          }
        ],
        labs: ["Custom hooks workshop", "State management deep-dive", "Advanced routing & Auth lab", "React Query & API lab", "Testing & Performance clinic"],
        tools: {
          beginner: ["VS Code", "Node.js & npm/pnpm", "Vite", "Git & GitHub"],
          optional: ["Redux Toolkit", "Tailwind CSS", "React Query", "Vitest", "Framer Motion"]
        },
        assessment: [
          { type: "Weekly Development Tasks", weight: "30%" },
          { type: "State Management Project", weight: "20%" },
          { type: "Modern Web Architecture Quiz", weight: "10%" },
          { type: "Final Full-Stack React Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 8 bi-weekly coding challenges",
          "Successfully pass the technical testing assessment",
          "Submit a final project with clean code and documentation"
        ],
        careers: [
          "Frontend Developer (React)",
          "Web Application Engineer",
          "UI / UX Engineer",
          "JavaScript Specialist",
          "Full-stack Developer (MERN Stack)",
          "Software Development Engineer"
        ],
        methodology: "25% Theory, 75% Practical & Project-Based Learning"
      }
    },
    {
      id: "dt-a3",
      titleKey: "courses.tracks.data_tech.a3",
      descKey: "courses.tracks.data_tech.desca3",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w14",
      level: "Advance",
      tags: ["cloud", "aws_azure"],
      curriculum: {
        objective: "To provide learners with advanced skills in cloud infrastructure, focusing on designing, deploying, and managing scalable and secure applications on major cloud platforms like AWS and Microsoft Azure.",
        outcomes: [
          "Understand and compare cloud service models (IaaS, PaaS, SaaS) and deployment strategies",
          "Master core compute services including Virtual Machines and Serverless functions",
          "Design and manage scalable cloud storage and database solutions",
          "Implement secure cloud networking architectures with VPCs, Subnets, and Gateways",
          "Master Identity and Access Management (IAM) for granular cloud security",
          "Understand containerization and basic orchestration in a cloud environment",
          "Monitor cloud resources and implement effective cost optimization strategies",
          "Deploy and manage resilient, high-availability applications on AWS and Azure"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Cloud Fundamentals & Architecture",
            topics: ["History and evolution of Cloud Computing", "Benefits of the cloud: Elasticity, Scalability, High Availability", "Service Models: IaaS, PaaS, SaaS", "Deployment Models: Public, Private, Hybrid, Multi-cloud", "Overview of AWS vs. Azure ecosystems"],
            practical: ["Setting up AWS/Azure Free Tier accounts", "Navigating the management consoles", "Exploring cloud service catalogs"],
            assignment: "Write a comparative report on AWS vs. Azure services for a small startup."
          },
          {
            week: "WEEK 3-4",
            module: "Compute Services & Scaling",
            topics: ["Virtual Machines: AWS EC2 and Azure VMs", "Instance types, AMI/Images, and Storage", "Load Balancing: ALB and Azure Load Balancer", "Auto-scaling groups and Virtual Machine Scale Sets", "Serverless basics: AWS Lambda and Azure Functions"],
            practical: ["Deploying and connecting to a Linux/Windows VM", "Setting up a simple Load Balancer", "Creating a basic 'Hello World' serverless function"],
            assignment: "Deploy a highly available web server across multiple availability zones."
          },
          {
            week: "WEEK 5-6",
            module: "Cloud Storage & Data Management",
            topics: ["Object Storage: AWS S3 and Azure Blob Storage", "Block Storage: EBS and Azure Managed Disks", "File Systems: EFS and Azure Files", "Data lifecycle management and Versioning", "Backup and disaster recovery strategies"],
            practical: ["Creating and securing storage buckets", "Hosting a static website on S3", "Mounting network file systems to VMs"],
            assignment: "Design and implement a multi-region data backup and archival strategy."
          },
          {
            week: "WEEK 7-8",
            module: "Cloud Networking & Connectivity",
            topics: ["Virtual Private Clouds (VPC) and Azure VNets", "Subnets (Public/Private), Routing, and Internet Gateways", "Network Security Groups (NSG) and ACLs", "DNS Management: Route 53 and Azure DNS", "VPN and Direct Connect basics"],
            practical: ["Designing and building a custom VPC with subnets", "Implementing secure routing and NAT gateways", "Setting up a custom domain with cloud DNS"],
            assignment: "Build a secure 3-tier network architecture with private database subnets."
          },
          {
            week: "WEEK 9-10",
            module: "Databases & IAM Security",
            topics: ["Relational Databases: RDS and Azure SQL", "NoSQL Databases: DynamoDB and CosmosDB", "Database scaling, read-replicas, and multi-AZ", "Identity & Access Management: Users, Groups, Roles, Policies", "Multi-Factor Authentication (MFA) and SSO"],
            practical: ["Provisioning and connecting to a cloud database", "Creating granular IAM policies", "Setting up cross-account/subscription access"],
            assignment: "Implement a secure database cluster with restricted access for specific app roles."
          },
          {
            week: "WEEK 11-12",
            module: "Containers, Monitoring & Cost",
            topics: ["Introduction to Docker and containerization", "Container Registries: ECR and ACR", "Monitoring with CloudWatch and Azure Monitor", "CloudTrail and Log Analytics for auditing", "Cost Explorer, Budgets, and Optimization"],
            practical: ["Building and pushing a Docker image to the cloud", "Setting up billing alerts and cost reports", "Creating custom monitoring dashboards"],
            assignment: "Develop a cost-optimization report and monitoring plan for a sample infrastructure."
          },
          {
            week: "WEEK 13-14",
            module: "Final Cloud Architecture Project",
            topics: ["Designing resilient and secure architectures", "Infrastructure as Code (IaC) awareness (Terraform/CloudFormation)", "Best practices: Well-Architected Framework", "Final project development and documentation"],
            practical: ["Final project development", "Automating simple tasks with CLI", "Peer review of cloud architectures"],
            assignment: "Deliver a final project: A fully documented, secure, and scalable cloud infrastructure for a web application."
          }
        ],
        labs: ["VM & Scaling lab", "Cloud storage & Static site workshop", "VPC & Networking design lab", "Database & IAM security clinic", "Docker & Cloud monitoring workshop"],
        tools: {
          beginner: ["AWS Management Console", "Azure Portal", "AWS/Azure CLI", "Docker Desktop"],
          optional: ["Terraform", "Ansible", "CloudFormation", "Kubernetes (basics)"]
        },
        assessment: [
          { type: "Infrastructure Deployment Tasks", weight: "30%" },
          { type: "Security & Networking Project", weight: "20%" },
          { type: "Cloud Architecture Theory Quiz", weight: "10%" },
          { type: "Final Capstone Cloud Project", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 6 weekly hands-on cloud labs",
          "Successfully implement a secure multi-tier networking setup",
          "Present a documented and cost-optimized final cloud architecture"
        ],
        careers: [
          "Cloud Administrator",
          "Cloud Engineer",
          "DevOps Junior Engineer",
          "Systems & Network Engineer",
          "Solutions Architect (Junior)",
          "IT Infrastructure Specialist"
        ],
        methodology: "30% Theory, 70% Practical & Hands-on Labs"
      }
    },
    {
      id: "dt-a4",
      titleKey: "courses.tracks.data_tech.a4",
      descKey: "courses.tracks.data_tech.desca4",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w12",
      level: "Advance",
      tags: ["sql", "bi_tools"],
      curriculum: {
        objective: "To equip learners with advanced skills in data analysis and business intelligence, focusing on complex SQL querying, data modeling, and creating interactive dashboards using professional BI tools like Power BI or Tableau.",
        outcomes: [
          "Master advanced SQL for complex data extraction, transformation, and analysis",
          "Understand and implement data warehousing principles and ETL processes",
          "Design efficient data models (Star/Snowflake) for business intelligence",
          "Create interactive and insightful dashboards using Power BI or Tableau",
          "Apply DAX or calculated fields for advanced business metrics",
          "Perform time-series and cohort analysis to identify business trends",
          "Master the art of data storytelling and effective visual communication",
          "Deliver comprehensive end-to-end business intelligence reports"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Advanced SQL for Data Analytics",
            topics: ["Recap of SQL basics", "Advanced Joins (Inner, Left, Right, Full, Self)", "Subqueries and Common Table Expressions (CTEs)", "Window Functions: RANK, LEAD, LAG, NTILE", "Complex data aggregation and filtering"],
            practical: ["Solving complex data extraction challenges", "Building reports using CTEs", "Performance tuning for SQL queries"],
            assignment: "Develop a set of SQL scripts to answer 10 complex business questions from a sample database."
          },
          {
            week: "WEEK 3-4",
            module: "Data Modeling & Warehousing",
            topics: ["Introduction to Data Warehousing concepts", "Dimensional Modeling: Star and Snowflake Schemas", "Facts and Dimensions", "Slowly Changing Dimensions (SCD)", "Introduction to ETL (Extract, Transform, Load) basics"],
            practical: ["Designing a star schema for a retail business", "Mapping data from source to warehouse", "Identifying and managing SCDs"],
            assignment: "Design a comprehensive data model for an e-commerce or agricultural business."
          },
          {
            week: "WEEK 5-6",
            module: "Business Intelligence Foundations",
            topics: ["Overview of Power BI / Tableau ecosystem", "Connecting to diverse data sources (SQL, Web, Excel)", "Data cleaning and transformation (Power Query)", "Understanding relationships and the data model", "Basic DAX (Power BI) or Calculated Fields (Tableau)"],
            practical: ["Loading and cleaning a messy dataset", "Building basic visualizations", "Establishing data relationships"],
            assignment: "Connect to a database, clean the data, and create a basic 3-page report."
          },
          {
            week: "WEEK 7-8",
            module: "Dashboard Design & Interactivity",
            topics: ["Principles of effective dashboard design", "Choosing the right visualization for the story", "Adding interactivity: Slicers, Filters, and Drill-downs", "Conditional formatting and dynamic titles", "User Experience (UX) for data products"],
            practical: ["Building an interactive sales dashboard", "Implementing drill-through functionality", "Creating a custom theme for a report"],
            assignment: "Develop a highly interactive dashboard that allows users to explore data at different levels."
          },
          {
            week: "WEEK 9-10",
            module: "Advanced Analytics Techniques",
            topics: ["Time Series Analysis: YTD, MTD, and Year-over-Year growth", "Cohort Analysis and Customer Segmentation", "Introduction to predictive modeling in BI tools", "Advanced DAX: Calculate, Filter, and Time Intelligence", "Performance optimization for reports"],
            practical: ["Calculating YoY growth using DAX", "Building a customer retention dashboard", "Optimizing report load times"],
            assignment: "Implement advanced time-intelligence metrics into an existing dashboard."
          },
          {
            week: "WEEK 11-12",
            module: "Data Storytelling & Final Project",
            topics: ["The art of data storytelling: Narratives and context", "Communicating insights to non-technical stakeholders", "Designing a final comprehensive BI project", "Publishing and sharing reports securely", "Future of AI in Business Intelligence"],
            practical: ["Presenting insights from a dashboard", "Peer review of dashboard designs", "Final project development"],
            assignment: "Deliver a final project: A professional, interactive BI dashboard and a 5-minute insight presentation."
          }
        ],
        labs: ["Advanced SQL query workshop", "Data modeling & ETL lab", "BI tool (Power BI/Tableau) deep-dive", "Dashboard design & UX clinic", "Data storytelling & Presentation lab"],
        tools: {
          beginner: ["PostgreSQL / MySQL", "Power BI Desktop or Tableau Public", "Microsoft Excel (Advanced)"],
          optional: ["SQL Server Management Studio", "DAX Studio", "Python for Data Analysis (Pandas)"]
        },
        assessment: [
          { type: "Advanced SQL Coding Tasks", weight: "30%" },
          { type: "Dashboard Design & Interactivity", weight: "20%" },
          { type: "Data Analytics Theory Quiz", weight: "10%" },
          { type: "Final Capstone BI Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 weekly advanced SQL challenges",
          "Pass the advanced BI tool proficiency assessment",
          "Successfully present a professional, data-driven final project"
        ],
        careers: [
          "Data Analyst",
          "Business Intelligence (BI) Analyst",
          "Data Visualization Specialist",
          "Business Operations Analyst",
          "Marketing Data Analyst",
          "Junior Data Engineer"
        ],
        methodology: "30% Theory, 70% Practical & Project-Based Learning"
      }
    },
    {
      id: "dt-a5",
      titleKey: "courses.tracks.data_tech.a5",
      descKey: "courses.tracks.data_tech.desca5",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w14",
      level: "Advance",
      tags: ["ai_agents", "workflows"],
      curriculum: {
        objective: "To equip learners with advanced skills in designing, building, and deploying AI agents and automated workflows using Large Language Models (LLMs) and orchestration frameworks.",
        outcomes: [
          "Understand the architecture of AI agents and LLM-powered applications",
          "Master advanced prompt engineering and orchestration techniques",
          "Build autonomous agents with sophisticated tool-use and function-calling capabilities",
          "Implement high-performance Retrieval-Augmented Generation (RAG) systems",
          "Design and automate complex multi-agent collaborative workflows",
          "Manage LLM memory, state, and persistent context effectively",
          "Evaluate and optimize AI agent performance, reliability, and safety",
          "Deploy production-ready AI agentic systems to solve real-world problems"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Introduction to AI Agents & Architectures",
            topics: ["Evolution from Chatbots to Autonomous Agents", "Key components: Perception, Reasoning, and Action", "Types of Agents: Simple, Model-based, Goal-based, Utility-based", "The LLM as the reasoning engine", "Overview of the AI Agent ecosystem and use cases"],
            practical: ["Exploring existing AI agent platforms", "Deconstructing an agentic workflow", "First basic agent implementation"],
            assignment: "Write a conceptual design for an AI agent that automates a specific professional task."
          },
          {
            week: "WEEK 3-4",
            module: "Advanced Prompting & Orchestration",
            topics: ["Advanced prompting: Chain of Thought, Tree of Thoughts, Self-Reflection", "Introduction to LangChain and LangGraph", "Managing LLM state and conversation memory", "Building sequential and branching chains", "Handling LLM outputs: Parsing and Validation"],
            practical: ["Implementing a self-reflecting prompt chain", "Building a memory-enabled conversation agent", "Using output parsers for structured data"],
            assignment: "Develop a multi-step orchestration chain that processes and summarizes a large dataset."
          },
          {
            week: "WEEK 5-6",
            module: "Tool Use & Function Calling",
            topics: ["Enabling agents to interact with external tools and APIs", "The mechanics of Function Calling in LLMs", "Designing and implementing custom Python tools", "Handling tool errors and feedback loops", "Agents with internet search and calculator tools"],
            practical: ["Building an agent that uses a calculator and search API", "Creating a custom file-management tool for an agent", "Managing multi-tool selection logic"],
            assignment: "Develop an agent capable of searching for information, summarizing it, and saving it to a local file."
          },
          {
            week: "WEEK 7-8",
            module: "Retrieval-Augmented Generation (RAG)",
            topics: ["The RAG Architecture: Beyond the context window", "Document chunking and embedding strategies", "Working with Vector Databases (ChromaDB, Pinecone, FAISS)", "Advanced retrieval: Re-ranking and Multi-query retrieval", "Handling hallucination in RAG systems"],
            practical: ["Building a 'Chat with your PDF' application", "Implementing a vector search pipeline", "Evaluating RAG retrieval accuracy"],
            assignment: "Create a RAG system for a specific knowledge base (e.g., local agricultural manuals)."
          },
          {
            week: "WEEK 9-10",
            module: "Multi-Agent Systems & Workflows",
            topics: ["Principles of multi-agent collaboration", "Orchestration frameworks: CrewAI and LangGraph", "Hierarchical vs. Sequential multi-agent workflows", "Agent-to-agent communication and task delegation", "Handling complex, long-running agentic tasks"],
            practical: ["Building a 'Research and Writing' multi-agent crew", "Designing a supervisor-worker agent hierarchy", "Implementing a multi-agent feedback loop"],
            assignment: "Develop a multi-agent system where three specialized agents collaborate to solve a complex problem."
          },
          {
            week: "WEEK 11-12",
            module: "Evaluation, Safety & Optimization",
            topics: ["Measuring agent performance: Accuracy, Latency, and Cost", "Handling hallucinations and edge cases with guardrails", "Implementing safety layers (Pydantic, NeMo Guardrails)", "Security: Preventing prompt injection and data leaks", "A/B testing and agent versioning"],
            practical: ["Running a performance evaluation on an agent", "Implementing a safety guardrail for sensitive data", "Optimizing an agent for cost and speed"],
            assignment: "Develop a comprehensive evaluation report for your single or multi-agent system."
          },
          {
            week: "WEEK 13-14",
            module: "Final AI Agent Project & Deployment",
            topics: ["Production-ready agent design: Persistence and Error handling", "Building a UI for your AI Agent (Streamlit/React)", "Deployment strategies: Cloud functions and API endpoints", "Future trends: Agentic operating systems and world models"],
            practical: ["Final project development and debugging", "Deploying an agent as a web service", "Final project demo and peer review"],
            assignment: "Deliver a final project: A production-ready, multi-tool or multi-agent AI system with a functional UI."
          }
        ],
        labs: ["Advanced prompt engineering lab", "Agent tool-use & API workshop", "Full-stack RAG system build", "Multi-agent orchestration project", "AI Agent safety & Evaluation clinic"],
        tools: {
          beginner: ["Python 3.10+", "OpenAI / Anthropic / Gemini APIs", "LangChain / LangGraph", "Streamlit"],
          optional: ["CrewAI", "ChromaDB / Pinecone", "Docker", "Weights & Biases for Evaluation"]
        },
        assessment: [
          { type: "AI Agent Development Tasks", weight: "30%" },
          { type: "RAG System Implementation", weight: "20%" },
          { type: "Technical Theory Quiz", weight: "10%" },
          { type: "Final Capstone AI Agent Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 bi-weekly agent development labs",
          "Successfully implement a functional RAG system",
          "Present a final multi-agent system that solves a complex task"
        ],
        careers: [
          "AI Engineer (Agentic Systems)",
          "AI Automation Specialist",
          "LLM / Prompt Engineer",
          "AI Solutions Architect (Junior)",
          "Product Manager (AI)",
          "Data Scientist (NLP Focus)"
        ],
        methodology: "25% Theory, 75% Practical & Project-Based Learning"
      }
    },
    {
      id: "dt-a6",
      titleKey: "courses.tracks.data_tech.a6",
      descKey: "courses.tracks.data_tech.desca6",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w16",
      level: "Advance",
      tags: ["strategy", "scaling"],
      curriculum: {
        objective: "To provide learners with advanced skills in strategic planning, business operations, and scaling, focusing on taking a small enterprise or startup to the next level of growth and sustainability.",
        outcomes: [
          "Develop and execute advanced business strategies and competitive positioning",
          "Master financial modeling, revenue forecasting, and investment readiness",
          "Implement scalable operational systems and efficient business processes",
          "Understand the dynamics of leadership, team building, and organizational culture",
          "Design and execute data-driven growth and market expansion plans",
          "Manage innovation and product lifecycle strategies for long-term growth",
          "Navigate advanced legal, regulatory, and global expansion complexities",
          "Build a comprehensive 3-year scaling roadmap and professional investment pitch"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Advanced Strategic Management",
            topics: ["Competitive analysis and market positioning", "Strategic planning frameworks: OKRs and Balanced Scorecard", "Vision, Mission, and Culture at scale", "Blue Ocean vs. Red Ocean strategies", "SWOT Analysis 2.0: From analysis to action"],
            practical: ["Conducting a deep-dive competitor analysis", "Setting OKRs for a sample business", "Strategic planning workshop"],
            assignment: "Develop a 1-year strategic roadmap for a growing enterprise."
          },
          {
            week: "WEEK 3-4",
            module: "Financial Strategy & Fundraising",
            topics: ["Advanced financial modeling and forecasting", "Unit economics: CAC, LTV, and Payback period", "Understanding the investment landscape (Angels, VCs, Impact Funds)", "Valuation methods and Term Sheets", "Budgeting and cash flow management for growth"],
            practical: ["Building a 3-year financial forecast", "Calculating unit economics for different business models", "Mock valuation and negotiation session"],
            assignment: "Create a detailed 3-year financial model for your business project."
          },
          {
            week: "WEEK 5-6",
            module: "Operations & Systems for Scale",
            topics: ["Building scalable processes and SOPs", "Supply chain and logistics optimization", "Introduction to ERP and business automation systems", "Quality management and control at scale", "Outsourcing vs. In-house development"],
            practical: ["Mapping a business process and identifying bottlenecks", "Designing a scalable SOP for a core function", "Evaluating ERP solutions"],
            assignment: "Design an operational manual for a key business process during expansion."
          },
          {
            week: "WEEK 7-8",
            module: "Growth Hacking & Market Expansion",
            topics: ["Data-driven growth marketing strategies", "Product-market fit and the viral loop", "Scaling sales and distribution networks", "Advanced customer acquisition channels", "International vs. Regional expansion strategies"],
            practical: ["Designing a growth experiment", "Sales pipeline optimization exercise", "Market entry analysis for a new region"],
            assignment: "Develop a comprehensive growth and expansion plan for a selected market."
          },
          {
            week: "WEEK 9-10",
            module: "Leadership & Organizational Design",
            topics: ["Building and managing high-performing teams", "Leadership styles for different growth stages", "Managing organizational change and growth pain points", "Talent acquisition and retention at scale", "Incentive structures and performance management"],
            practical: ["Team building and conflict resolution simulation", "Designing an organizational chart for a scaled company", "Leadership self-assessment and feedback exercise"],
            assignment: "Create a 2-year hiring and talent management plan for your growing team."
          },
          {
            week: "WEEK 11-12",
            module: "Innovation & Product Strategy",
            topics: ["Managing the product lifecycle and R&D", "Design Thinking for business innovation", "Intellectual Property (IP) and patents basics", "Scaling technology and infrastructure", "Diversification vs. Specialization"],
            practical: ["Design Thinking sprint for a new product feature", "IP audit of a sample business", "Technology stack evaluation for scale"],
            assignment: "Develop a product innovation roadmap for the next 3 years."
          },
          {
            week: "WEEK 13-14",
            module: "Legal, Regulatory & Risk Management",
            topics: ["Advanced legal structures for scaling (LLP, Pvt Ltd)", "Corporate governance and compliance", "Managing business risks during expansion", "Strategic partnerships, alliances, and M&A basics", "Exit strategies: IPO, Acquisition, or Sustainability"],
            practical: ["Drafting a basic partnership agreement", "Conducting a business risk assessment", "Legal structure comparison workshop"],
            assignment: "Develop a comprehensive risk management and compliance report."
          },
          {
            week: "WEEK 15-16",
            module: "Final Scaling Project & Pitch",
            topics: ["Synthesizing the scaling strategy", "Creating a professional investment pitch deck", "Mastering the art of pitching to investors", "Final project presentation and peer review", "Course wrap-up and future planning"],
            practical: ["Pitch deck design workshop", "Pitching simulation to a panel", "Peer review of scaling roadmaps"],
            assignment: "Deliver a final 3-year scaling roadmap and a professional investment pitch deck."
          }
        ],
        labs: ["Strategic management workshop", "Financial modeling & Analytics lab", "Investment & Pitching simulation", "Operational systems & SOP clinic", "Growth hacking & Expansion workshop"],
        tools: {
          beginner: ["Excel / Google Sheets (Advanced)", "Trello / Asana", "CRM (HubSpot/Salesforce basics)", "Pitch Deck tools"],
          optional: ["ERP Systems (Odoo/SAP basics)", "Advanced Financial Analytics Tools", "HR Management Software"]
        },
        assessment: [
          { type: "Weekly Strategic Assignments", weight: "30%" },
          { type: "Financial Modeling Project", weight: "20%" },
          { type: "Business Strategy Theory Quiz", weight: "10%" },
          { type: "Final Scaling Roadmap & Pitch", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 8 bi-weekly strategic development tasks",
          "Successfully defend a 3-year financial and growth forecast",
          "Deliver a professional-grade investment pitch deck and scaling plan"
        ],
        careers: [
          "Business Strategist",
          "Operations Manager",
          "Founder / CEO",
          "Business Development Director",
          "Startup Consultant",
          "Investment Analyst (Agri-Business Focus)"
        ],
        methodology: "35% Theory, 65% Practical & Case Studies"
      }
    },
  ],
  "design-media": [
    {
      id: "dm-1",
      titleKey: "courses.tracks.design_media.c1",
      descKey: "courses.tracks.design_media.desc1",
      image: "https://plus.unsplash.com/premium_photo-1661326291059-eb076cc5bdd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w8",
      level: "Foundation",
      tags: ["typography", "layout"],
      curriculum: {
        objective: "To introduce learners to the core principles of graphic design and equip them with practical skills using industry-standard tools to create visually compelling designs for print and digital media.",
        outcomes: [
          "Understand and apply the fundamental elements and principles of design",
          "Master layout and composition techniques for various media formats",
          "Use modern digital design tools (Canva, Photopea, etc.) effectively",
          "Create professional-quality logos, posters, and social media graphics",
          "Understand the psychology of color and typography in communication",
          "Develop a consistent visual identity and basic branding systems",
          "Prepare files correctly for both print and digital publishing",
          "Build a foundational design portfolio to showcase practical skills"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Graphic Design",
            topics: ["What is graphic design? Design vs. Art", "Role of design in modern communication", "The Elements of Design: Line, Shape, Color, Texture, Space", "Design thinking and the creative process", "History of visual communication"],
            practical: ["Identifying design elements in the environment", "Creating abstract compositions using basic shapes", "Manual sketching exercises"],
            assignment: "Collect and analyze 5 examples of 'Good Design' and 'Bad Design'."
          },
          {
            week: "WEEK 2",
            module: "Principles of Design",
            topics: ["Balance (Symmetrical/Asymmetrical)", "Contrast and Emphasis", "Movement and Rhythm", "Unity and Variety", "Visual Hierarchy: Guiding the viewer's eye"],
            practical: ["Creating hierarchy in a text-based layout", "Balance exercises using blocks", "Contrast workshop"],
            assignment: "Design a simple black-and-white poster focusing on one design principle."
          },
          {
            week: "WEEK 3",
            module: "Typography & Lettering",
            topics: ["Introduction to typefaces and fonts", "Anatomy of type and font categories (Serif, Sans, Script)", "Typography terminology: Kerning, Leading, Tracking", "Readability vs. Legibility", "Font pairing strategies"],
            practical: ["Identifying fonts in popular brands", "Manual lettering exercise", "Digital typography layout task"],
            assignment: "Design a typographic poster for a famous quote."
          },
          {
            week: "WEEK 4",
            module: "Color Theory & Psychology",
            topics: ["The Color Wheel: Primary, Secondary, Tertiary", "Color Harmonies (Complementary, Analogous, etc.)", "Psychology of color in branding and marketing", "Color modes: RGB vs. CMYK", "Creating effective color palettes"],
            practical: ["Mixing colors and creating palettes", "Redesigning a logo with different color schemes", "Color emotion mapping"],
            assignment: "Develop a custom color palette for a specific brand persona."
          },
          {
            week: "WEEK 5",
            module: "Layout & Composition",
            topics: ["Using grids and alignments for structure", "The Rule of Thirds and Golden Ratio", "Negative space as a design element", "Designing for different formats (Poster, Brochure, Web)", "Compositional flow"],
            practical: ["Creating a multi-column grid layout", "Analyzing compositions in magazines", "Layout sketching workshop"],
            assignment: "Design a simple one-page brochure for a local event."
          },
          {
            week: "WEEK 6",
            module: "Digital Design Tools (Canva/Photopea)",
            topics: ["Introduction to Canva and Photopea interface", "Layers, masks, and basic image editing", "Using templates vs. starting from scratch", "Digital assets: Icons, photos, and illustrations", "Exporting for social media and print"],
            practical: ["Creating a social media post series", "Basic photo retouching", "Working with vector-style assets in Canva"],
            assignment: "Develop a set of 3 social media graphics for a local business."
          },
          {
            week: "WEEK 7",
            module: "Branding & Visual Identity",
            topics: ["Definition of a brand and brand strategy", "Logo design principles: Simplicity and scalability", "Consistency across various touchpoints", "Creating a basic brand style guide", "Visual storytelling for brands"],
            practical: ["Brainstorming and sketching logos", "Designing a simple logo digitally", "Building a one-page brand sheet"],
            assignment: "Design a logo and business card for a personal brand."
          },
          {
            week: "WEEK 8",
            module: "Final Project & Portfolio",
            topics: ["Synthesizing the design process", "Presenting and critiquing design work", "Building a digital design portfolio", "Freelancing basics and client communication", "Future trends in graphic design"],
            practical: ["Final project development", "Portfolio assembly session", "Design critique and feedback"],
            assignment: "Deliver a final design campaign and submit your digital portfolio."
          }
        ],
        labs: ["Typography & Lettering workshop", "Digital layout & Grid lab", "Color & Branding workshop", "Logo design & Illustration lab", "Portfolio building & Presentation clinic"],
        tools: {
          beginner: ["Canva", "Photopea (Browser-based Photoshop)", "Google Fonts", "Unsplash / Pexels"],
          optional: ["Adobe Express", "Figma (intro)", "Inkscape (intro)", "Pinterest for inspiration"]
        },
        assessment: [
          { type: "Weekly Design Assignments", weight: "30%" },
          { type: "Digital Tool Proficiency", weight: "20%" },
          { type: "Design Theory Quiz", weight: "10%" },
          { type: "Final Design Portfolio", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 6 weekly design assignments",
          "Successfully demonstrate proficiency in Canva/Photopea",
          "Submit a final portfolio featuring 5 high-quality designs"
        ],
        careers: [
          "Junior Graphic Designer",
          "Social Media Content Creator",
          "Desktop Publishing Assistant",
          "Branding & Marketing Associate",
          "Freelance Graphic Designer",
          "Digital Artist"
        ],
        methodology: "30% Theory, 70% Practical & Project-Based Learning"
      }
    },
    {
      id: "dm-2",
      titleKey: "courses.tracks.design_media.c2",
      descKey: "courses.tracks.design_media.desc2",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w8",
      level: "Foundation",
      tags: ["photography", "lighting"],
      curriculum: {
        objective: "To introduce learners to the fundamentals of digital photography and the art of visual storytelling, enabling them to capture high-quality images and create compelling narratives through photos.",
        outcomes: [
          "Understand the technical foundations of photography: Aperture, Shutter Speed, and ISO",
          "Master composition and framing techniques to create visually balanced images",
          "Use smartphones and digital cameras effectively in various lighting conditions",
          "Understand the principles of visual storytelling and photo-essay structure",
          "Master basic photo editing and post-processing using mobile and desktop tools",
          "Identify and capture compelling moments across different photography genres",
          "Develop a creative eye for lighting, color, and perspective",
          "Build a professional photography portfolio showcasing diverse work"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Photography",
            topics: ["History and evolution of the image", "How cameras work: Sensors and lenses", "Smartphone vs. Digital cameras (DSLR/Mirrorless)", "Exploring the visual language", "Camera safety and handling"],
            practical: ["Exploring camera settings on your device", "Identifying different lens types and their effects", "First photo-walk: 'Look again'"],
            assignment: "Capture 5 images of everyday objects from unique perspectives."
          },
          {
            week: "WEEK 2",
            module: "The Exposure Triangle",
            topics: ["Aperture and Depth of Field", "Shutter Speed and Motion", "ISO and Image Noise", "The Light Meter and Exposure Compensation", "Balancing the triangle for creative effect"],
            practical: ["Depth of field exercise (Blurring backgrounds)", "Capturing motion (Freeze vs. Blur)", "Low-light photography practice"],
            assignment: "Demonstrate the effect of changing Aperture and Shutter Speed in 3 pairs of photos."
          },
          {
            week: "WEEK 3",
            module: "Composition & Framing",
            topics: ["The Rule of Thirds and Golden Ratio", "Leading lines, Framing, and Symmetry", "Perspectives: High, Low, and Eye-level", "Foreground, Middle-ground, and Background", "Breaking the rules for creative impact"],
            practical: ["Composition scavenger hunt", "Practicing negative space", "Angle and perspective workshop"],
            assignment: "Create a series of 5 photos, each using a different composition technique."
          },
          {
            week: "WEEK 4",
            module: "Lighting & Color",
            topics: ["Understanding natural light (Quality, Direction, Intensity)", "Using the Golden Hour and Blue Hour", "Artificial light basics and reflectors", "White balance and color temperature", "Color psychology in photography"],
            practical: ["Outdoor lighting portrait session", "Using simple reflectors", "Working with window light indoors"],
            assignment: "Capture the same subject at 3 different times of the day to show the change in light."
          },
          {
            week: "WEEK 5",
            module: "Visual Storytelling Fundamentals",
            topics: ["What is a narrative in photography?", "The structure of a photo-essay (Establishing shot, Detail, etc.)", "Storytelling through single vs. multiple images", "Identifying themes and emotions", "The ethics of documentary photography"],
            practical: ["Brainstorming a photo-story", "Sequencing images to tell a tale", "Documenting a simple process (e.g., local craft)"],
            assignment: "Plan a 5-image photo-essay on a local community topic."
          },
          {
            week: "WEEK 6",
            module: "Genre Exploration",
            topics: ["Portrait photography: Capturing people and emotion", "Landscape and Nature photography", "Street and Documentary photography", "Product photography for local business", "Architecture and shapes"],
            practical: ["Portrait session with peers", "Close-up/Macro photography practice", "Product styling and shooting"],
            assignment: "Select one genre and capture 3 high-quality themed images."
          },
          {
            week: "WEEK 7",
            module: "Post-Processing & Editing",
            topics: ["Introduction to Snapseed and Lightroom Mobile", "Basic adjustments: Exposure, Contrast, Highlights", "Color grading and selective editing", "Cropping and straightening", "Digital workflow and file management"],
            practical: ["Editing a series of photos in Lightroom", "Before/After comparisons", "Creative styling and filter use"],
            assignment: "Edit 5 of your best photos to achieve a consistent 'look' or style."
          },
          {
            week: "WEEK 8",
            module: "Final Project & Portfolio",
            topics: ["Finalizing the themed photo-essay", "Selecting and sequencing for the final presentation", "Building an online photography portfolio", "Copyright, sharing, and social media for photographers", "Future of digital imaging"],
            practical: ["Final project presentation and critique", "Portfolio setup session", "Course reflection and next steps"],
            assignment: "Deliver a final 8-image photo-essay and submit your digital photography portfolio."
          }
        ],
        labs: ["Camera settings & Exposure lab", "Composition & Perspective walk", "Natural & Studio lighting lab", "Visual storytelling & Sequence workshop", "Editing & Post-processing masterclass"],
        tools: {
          beginner: ["Smartphone with manual controls", "Lightroom Mobile / Snapseed", "Google Photos / iCloud"],
          optional: ["DSLR / Mirrorless Camera", "Portable Reflector", "Tripod", "Desktop Lightroom / Photoshop"]
        },
        assessment: [
          { type: "Weekly Photo Assignments", weight: "30%" },
          { type: "Technical Proficiency Tasks", weight: "20%" },
          { type: "Visual Storytelling Quiz", weight: "10%" },
          { type: "Final Photo-Essay Project", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 6 weekly photo assignments",
          "Successfully demonstrate manual exposure control",
          "Submit a final themed photo-essay and digital portfolio"
        ],
        careers: [
          "Junior Photographer",
          "Social Media Content Creator",
          "Visual Storyteller / Journalist",
          "Photo Editor Assistant",
          "Product & E-commerce Photographer",
          "Event Photography Assistant"
        ],
        methodology: "25% Theory, 75% Practical & Field Work"
      }
    },
    {
      id: "dm-3",
      titleKey: "courses.tracks.design_media.c3",
      descKey: "courses.tracks.design_media.desc3",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w10",
      level: "Foundation",
      tags: ["video_editing", "education"],
      curriculum: {
        objective: "To provide learners with practical skills in planning, filming, and editing high-quality video content for social media, education, and community storytelling using smartphones and accessible editing software.",
        outcomes: [
          "Understand the complete video production lifecycle from concept to delivery",
          "Master smartphone cinematography: framing, movement, and camera control",
          "Record high-quality audio and implement effective lighting for video",
          "Use mobile and desktop video editing tools (CapCut, VN, etc.) proficiently",
          "Plan and storyboard video projects with clear narrative structures",
          "Create engaging social media content and short documentary-style videos",
          "Apply basic color correction and sound design to enhance video projects",
          "Understand video distribution platforms and digital copyright basics"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Video Production",
            topics: ["Role of video in the digital age", "Video formats, resolutions, and frame rates", "Overview of the production process: Pre-Pro, Pro, Post", "Analyzing successful digital video content", "Hardware: Smartphones vs. Dedicated Cameras"],
            practical: ["Exploring video settings on your smartphone", "Analyzing a viral video structure", "First 'one-take' recording challenge"],
            assignment: "Capture 3 short clips demonstrating different resolutions and frame rates."
          },
          {
            week: "WEEK 2",
            module: "Pre-Production & Storyboarding",
            topics: ["Developing a video concept and goal", "Writing simple scripts and voiceovers", "Creating storyboards and shot lists", "Location scouting and planning", "Managing resources and permissions"],
            practical: ["Writing a 1-minute video script", "Drawing a simple 6-frame storyboard", "Planning a 'Day in the Life' video"],
            assignment: "Develop a full pre-production plan for a 1-minute community story."
          },
          {
            week: "WEEK 3",
            module: "Smartphone Cinematography",
            topics: ["Advanced camera settings: Exposure and Focus locking", "Framing and composition for moving images", "Camera movements: Pan, Tilt, Zoom, Dolly, Truck", "Using simple stabilizers and tripods", "The rule of thirds in video"],
            practical: ["Practicing smooth camera movements", "Filming the same scene from 5 different angles", "Depth of field in video"],
            assignment: "Create a 30-second silent video demonstrating 5 different camera movements."
          },
          {
            week: "WEEK 4",
            module: "Lighting & Audio for Video",
            topics: ["Why audio is 50% of video", "Types of microphones: Lavalier, Shotgun, Internal", "Techniques for clear voice recording and interviews", "Introduction to 3-point lighting", "Using natural light and reflectors"],
            practical: ["Recording interviews in different environments", "Outdoor lighting setup with reflectors", "Testing internal vs. external microphones"],
            assignment: "Record a 1-minute interview with clear audio and good lighting."
          },
          {
            week: "WEEK 5",
            module: "The Production Phase (The Shoot)",
            topics: ["Directing subjects and conducting interviews", "Capturing 'B-Roll' (Supporting footage)", "Maintaining a production log", "File management on the field", "Problem-solving during the shoot"],
            practical: ["Conducting a real interview with B-roll", "Filming a 'process' video (e.g., a local craft)", "Managing a production team role-play"],
            assignment: "Complete the primary filming for your community story project."
          },
          {
            week: "WEEK 6",
            module: "Post-Production Part 1 (The Cut)",
            topics: ["Introduction to CapCut and VN Editor interface", "Importing and organizing your footage", "The 'Basic Cut': Trimming and splitting", "Understanding the timeline and layers", "Pacing and rhythm in editing"],
            practical: ["Importing and organizing project files", "Creating a first 'Rough Cut'", "Synchronization of audio and video"],
            assignment: "Complete a rough cut of your 1-minute community story."
          },
          {
            week: "WEEK 7",
            module: "Post-Production Part 2 (Polishing)",
            topics: ["Adding transitions, titles, and text overlays", "Sound design: Music, SFX, and mixing", "Basic color correction and filters", "Adding a professional 'Call to Action'", "Exporting settings for YouTube and Social Media"],
            practical: ["Adding text and graphics", "Mixing background music with voiceover", "Applying a consistent color grade"],
            assignment: "Complete the final edit of your video project."
          },
          {
            week: "WEEK 8",
            module: "Final Project & Distribution",
            topics: ["Publishing to YouTube and Social Media platforms", "Video SEO: Titles, Tags, and Thumbnails", "Understanding digital copyright and fair use", "Final project screening and peer review", "Future of video: AI and Live-streaming"],
            practical: ["Final project screening and feedback session", "Creating a custom YouTube thumbnail", "Uploading and optimizing a video"],
            assignment: "Deliver your final 2-minute video project and share it with the community."
          }
        ],
        labs: ["Storyboarding & Scripting workshop", "Smartphone Cinematography field day", "Audio recording & Lighting lab", "Editing & Post-production masterclass", "Final Video Screening & Critique"],
        tools: {
          beginner: ["Smartphone with high-quality camera", "CapCut / VN Editor", "YouTube / Instagram"],
          optional: ["Lavalier Microphone", "Smartphone Gimbal / Tripod", "LumaFusion / DaVinci Resolve", "Canva for thumbnails"]
        },
        assessment: [
          { type: "Weekly Video Assignments", weight: "30%" },
          { type: "Technical Proficiency Tasks", weight: "20%" },
          { type: "Production & Ethics Quiz", weight: "10%" },
          { type: "Final Video Project", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 6 weekly video assignments",
          "Successfully demonstrate mobile editing proficiency",
          "Submit a final edited 2-minute video project"
        ],
        careers: [
          "Junior Video Editor",
          "Social Media Content Creator",
          "Videographer Assistant",
          "Digital Storyteller / Journalist",
          "YouTube Channel Manager",
          "E-learning Content Producer"
        ],
        methodology: "25% Theory, 75% Practical & Project-Based Learning"
      }
    },
    {
      id: "dm-4",
      titleKey: "courses.tracks.design_media.c4",
      descKey: "courses.tracks.design_media.desc4",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w6",
      level: "Foundation",
      tags: ["storytelling", "narrative"],
      curriculum: {
        objective: "To introduce learners to the principles of journalism and digital storytelling, equipping them with the skills to research, write, and produce impactful stories for community engagement and digital platforms.",
        outcomes: [
          "Understand the core principles and ethics of professional journalism",
          "Master professional interview techniques and information gathering",
          "Write compelling, clear stories for digital, social, and print media",
          "Use modern digital tools for research, fact-checking, and storytelling",
          "Understand and leverage the role of media in community development",
          "Integrate multimedia elements (photo/video/audio) into written narratives",
          "Develop a critical eye for news and information verification",
          "Build a professional digital journalism portfolio"
        ],
        syllabus: [
          {
            week: "WEEK 1",
            module: "Introduction to Journalism & Ethics",
            topics: ["Role of journalism in a democratic society", "Core principles: Accuracy, Balance, Fairness, and Clarity", "The Digital Journalism landscape vs. Traditional Media", "Journalistic ethics and avoiding bias", "Introduction to media law and privacy"],
            practical: ["Analyzing local and national news stories", "Ethics case study discussion", "Identifying different types of news (Hard vs. Soft)"],
            assignment: "Write a 300-word reflection on the impact of news in your community."
          },
          {
            week: "WEEK 2",
            module: "Finding & Researching the Story",
            topics: ["What makes a story newsworthy? (Impact, Timeliness, Proximity)", "Research techniques: Online vs. Offline", "Fact-checking and verifying sources in the digital age", "Understanding your audience and their needs", "Developing a story pitch"],
            practical: ["Fact-checking exercise: Spotting misinformation", "Story brainstorming session", "Conducting preliminary research for a topic"],
            assignment: "Develop three unique story pitches based on local community events."
          },
          {
            week: "WEEK 3",
            module: "Interviewing Techniques",
            topics: ["Preparing for a professional interview", "Crafting effective questions: Open-ended vs. Closed", "Active listening and accurate note-taking", "Recording audio and video for interviews", "Building rapport and trust with subjects"],
            practical: ["Mock interview role-play", "Transcribing a short interview clip", "Practicing difficult interview scenarios"],
            assignment: "Conduct and record a 10-minute interview with a community member."
          },
          {
            week: "WEEK 4",
            module: "Writing for Digital Media",
            topics: ["Headline writing and the 'Hook'", "The Inverted Pyramid structure", "Writing clear, concise, and active copy", "Adapting style for different platforms (Web, Social, Print)", "Using SEO in journalistic writing"],
            practical: ["Drafting 5 different headlines for one story", "Rewriting a report into the inverted pyramid format", "Writing for social media 'Threads'"],
            assignment: "Write a 500-word news report based on your Week 3 interview."
          },
          {
            week: "WEEK 5",
            module: "Multi-Media Storytelling",
            topics: ["Integrating photos and videos to enhance narratives", "Creating short-form video for news (Reels/TikTok style)", "Basics of audio storytelling and podcasting", "Visual data: Using simple charts and maps", "Interactive storytelling tools"],
            practical: ["Creating a multi-media 'Mobile Story'", "Recording a short audio news brief", "Designing a simple infographic for a story"],
            assignment: "Produce a 90-second multi-media story using text and at least 3 images/clips."
          },
          {
            week: "WEEK 6",
            module: "Community & Citizen Journalism",
            topics: ["The role and importance of local/grassroots stories", "Citizen journalism: Empowerment through the lens", "Covering community events, issues, and successes", "Impact of journalism on local social change", "Challenges of community reporting"],
            practical: ["Field reporting exercise: A local event", "Interviewing community leaders", "Mapping community issues for coverage"],
            assignment: "Develop a community-focused feature story (text + photo)."
          },
          {
            week: "WEEK 7",
            module: "Digital Tools & Data Basics",
            topics: ["Using online databases and public records", "Tools for fact-checking and digital investigation", "Basic data journalism: Finding stories in numbers", "Digital safety and security for journalists", "Collaboration tools for newsrooms"],
            practical: ["Finding stories in local census/health data", "Advanced Google search for journalists", "Testing digital security tools"],
            assignment: "Create a simple data-driven report using one local dataset."
          },
          {
            week: "WEEK 8",
            module: "Final Project & Portfolio",
            topics: ["Synthesizing research, interview, and writing", "Building a professional digital journalism portfolio", "Publishing on platforms like Medium or Substack", "Freelancing basics and pitching to editors", "Career paths in modern media"],
            practical: ["Final project presentation and peer review", "Portfolio setup and layout session", "Course reflection and career planning"],
            assignment: "Deliver your final multi-media story and submit your professional digital portfolio."
          }
        ],
        labs: ["Interviewing & Active listening lab", "News writing & Editing workshop", "Fact-checking & Digital research lab", "Multi-media storytelling clinic", "Portfolio building & Pitching workshop"],
        tools: {
          beginner: ["Smartphone / Digital Recorder", "Google Docs / Word", "Medium / Substack", "Snapseed / Canva"],
          optional: ["Otter.ai (Transcription)", "Anchor/Spotify for Podcasting", "DataWrapper (Charts)", "Professional DSLR"]
        },
        assessment: [
          { type: "Weekly Writing Assignments", weight: "30%" },
          { type: "Interview & Research Tasks", weight: "20%" },
          { type: "Journalism Ethics Quiz", weight: "10%" },
          { type: "Final Storytelling Project", weight: "40%" }
        ],
        certification: [
          "Attend at least 80% of sessions",
          "Complete all 6 weekly writing and research tasks",
          "Successfully conduct and document a professional interview",
          "Submit a final multi-media story project and digital portfolio"
        ],
        careers: [
          "Junior Journalist",
          "Content Writer / Editor",
          "Community Media Coordinator",
          "Social Media Reporter",
          "Communications Assistant",
          "Digital Storyteller",
          "Public Relations Associate"
        ],
        methodology: "35% Theory, 65% Practical & Field Reporting"
      }
    },
    {
      id: "dm-a1",
      titleKey: "courses.tracks.design_media.a1",
      descKey: "courses.tracks.design_media.desca1",
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w12",
      level: "Advance",
      tags: ["ui_ux", "figma"],
      curriculum: {
        objective: "To provide learners with advanced skills in User Interface (UI) and User Experience (UX) design, focusing on creating intuitive, user-centered digital products using Figma and industry-standard design methodologies.",
        outcomes: [
          "Master the complete User-Centered Design (UCD) process",
          "Conduct professional user research and translate findings into design insights",
          "Create detailed user personas, journey maps, and information architectures",
          "Master advanced Figma features including Auto Layout, Components, and Variants",
          "Design highly responsive, accessible, and aesthetically pleasing digital interfaces",
          "Build complex, high-fidelity interactive prototypes with micro-interactions",
          "Understand the creation and maintenance of professional design systems",
          "Deliver comprehensive design handoffs and build a professional UI/UX portfolio"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Introduction to UI/UX & Research",
            topics: ["History and evolution of digital design", "The difference between UI and UX", "The Design Thinking process: Empathize to Test", "User research methods: Interviews, Surveys, and Observation", "Creating User Personas and Empathy Maps"],
            practical: ["Conducting a user interview", "Synthesizing research into a persona", "Identifying UX pain points in existing apps"],
            assignment: "Complete a user research report for a specific mobile app idea."
          },
          {
            week: "WEEK 3-4",
            module: "Information Architecture & Wireframing",
            topics: ["Building Site Maps and User Flows", "Information Architecture principles", "Low-fidelity vs. High-fidelity wireframing", "Visual hierarchy and layout grids", "Sketching techniques for rapid ideation"],
            practical: ["Designing a complex user flow", "Creating paper wireframes", "Building a low-fidelity digital wireframe in Figma"],
            assignment: "Develop a complete set of wireframes for a 5-screen mobile application."
          },
          {
            week: "WEEK 5-6",
            module: "UI Foundations & Figma Mastery",
            topics: ["Mastering Figma: Frames, Groups, and Layers", "Advanced Auto Layout and Responsive constraints", "Typography systems and Color theory for UI", "Iconography and visual assets", "Design accessibility (WCAG standards)"],
            practical: ["Building a responsive navigation bar", "Creating a typography and color style guide", "Designing an accessible form component"],
            assignment: "Design a high-fidelity homepage for a web application using Auto Layout."
          },
          {
            week: "WEEK 7-8",
            module: "Components, Variants & Design Systems",
            topics: ["Atomic Design principles", "Creating and managing Components and Variants", "Building and using Design Libraries", "Introduction to Variables and Design Tokens", "Collaborative design workflows"],
            practical: ["Building a multi-state button component", "Creating a scalable icon system", "Assembling a basic UI kit"],
            assignment: "Develop a mini-design system with at least 10 reusable components."
          },
          {
            week: "WEEK 9-10",
            module: "Prototyping & Interaction Design",
            topics: ["Figma prototyping: Flows, Connections, and Triggers", "Advanced transitions and Smart Animate", "Creating micro-interactions and hover states", "Mobile vs. Desktop prototyping patterns", "Device-specific design considerations"],
            practical: ["Building an interactive side-menu", "Creating a smooth scroll and click-through flow", "Implementing complex Smart Animate transitions"],
            assignment: "Build a high-fidelity interactive prototype of your 5-screen application."
          },
          {
            week: "WEEK 11-12",
            module: "Testing, Handoff & Portfolio",
            topics: ["Usability testing methods and metrics", "Conducting a remote usability test", "Iterating based on feedback", "Design Handoff: Documentation and Inspecting", "Building a professional UI/UX portfolio and Case Studies"],
            practical: ["Conducting a usability test on your prototype", "Preparing a Figma file for developer handoff", "Drafting a UX case study"],
            assignment: "Deliver a final project: A high-fidelity prototype, a case study, and a professional portfolio link."
          }
        ],
        labs: ["User research & Synthesis workshop", "Information Architecture & Wireframing lab", "Advanced Figma UI masterclass", "Interactive prototyping & Animation lab", "Usability testing & Handoff clinic"],
        tools: {
          beginner: ["Figma", "FigJam", "Maze / UseBerry for testing", "Google Fonts"],
          optional: ["Adobe XD", "Sketch", "Prototyping tools (Protopie/Framer)", "Design Handoff (Zeplin)"]
        },
        assessment: [
          { type: "UX Research & Ideation", weight: "20%" },
          { type: "UI Design Assignments", weight: "30%" },
          { type: "Interactive Prototyping Task", weight: "20%" },
          { type: "Final UI/UX Portfolio Project", weight: "30%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 bi-weekly design challenges",
          "Successfully conduct and document a usability test",
          "Submit a final project featuring a high-fidelity prototype and a complete case study"
        ],
        careers: [
          "UI / UX Designer",
          "Product Designer",
          "Interaction Designer",
          "UX Researcher",
          "Web Designer",
          "Visual Designer"
        ],
        methodology: "25% Theory, 75% Practical & Project-Based Learning"
      }
    },
    {
      id: "dm-a2",
      titleKey: "courses.tracks.design_media.a2",
      descKey: "courses.tracks.design_media.desca2",
      image: "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w14",
      level: "Advance",
      tags: ["product_design", "three_d"],
      curriculum: {
        objective: "To provide learners with advanced skills in 3D modeling, rendering, and product design, enabling them to create realistic 3D visualizations for products and environments using industry-standard software.",
        outcomes: [
          "Master foundational and advanced 3D modeling techniques (Hard-surface and Sculpting)",
          "Understand and apply complex materials, PBR textures, and UV mapping",
          "Design and implement realistic lighting setups for 3D scenes",
          "Create high-fidelity 3D product prototypes and architectural visualizations",
          "Master rendering engines (Cycles/Eevee) and post-processing in 3D",
          "Understand the end-to-end pipeline for 3D printing and manufacturing",
          "Optimize 3D assets for different platforms (Web, Games, AR/VR)",
          "Build a professional 3D design portfolio showcasing high-quality renders"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Introduction to 3D & Modeling Foundations",
            topics: ["History and applications of 3D design", "The 3D coordinate system (X, Y, Z)", "Mastering the workspace and navigation", "Basic 3D geometry and transforms", "Primitive modeling and non-destructive workflows"],
            practical: ["Building simple objects using primitives", "Customizing the 3D workspace", "First 3D model challenge"],
            assignment: "Design and model a 5-piece set of basic household objects."
          },
          {
            week: "WEEK 3-4",
            module: "Advanced Hard-Surface Modeling",
            topics: ["Modifier stacks and parametric modeling", "Subdivision surface modeling techniques", "Precision modeling and Boolean operations", "Edge flow and topology for clean surfaces", "Modeling complex product details"],
            practical: ["Modeling a detailed electronic gadget", "Using modifiers for complex shapes", "Topology correction workshop"],
            assignment: "Develop a high-fidelity 3D model of a consumer electronic product."
          },
          {
            week: "WEEK 5-6",
            module: "Sculpting & Organic Modeling",
            topics: ["Box modeling vs. Digital Sculpting", "Brush types and sculpting workflows", "Creating organic and ergonomic shapes", "Retopology: Converting sculpts to clean meshes", "Adding fine details and textures through sculpting"],
            practical: ["Sculpting an ergonomic product handle", "Practicing retopology on a complex mesh", "Organic shape-making challenge"],
            assignment: "Create a 3D model of an organic product (e.g., an ergonomic chair or shoe)."
          },
          {
            week: "WEEK 7-8",
            module: "Materials, Texturing & UV Mapping",
            topics: ["Principles of PBR (Physically Based Rendering) materials", "UV Unwrapping and seam placement", "Procedural textures vs. Image mapping", "Working with Shaders and Node-based material editors", "Creating realistic wear and tear"],
            practical: ["Unwrapping a complex product model", "Creating a custom procedural metal shader", "Applying high-resolution textures"],
            assignment: "Apply realistic materials and textures to your Week 4/6 models."
          },
          {
            week: "WEEK 9-10",
            module: "Lighting, Camera & Environment",
            topics: ["Principles of 3D lighting (3-point lighting, HDRI)", "Setting up virtual cameras and focal lengths", "Creating environments and studio backdrops", "Depth of field and motion blur in 3D", "Lighting for mood and product presentation"],
            practical: ["Setting up a professional studio lighting rig", "Camera animation basics", "Working with HDRI environments"],
            assignment: "Create 3 different lighting setups for your product (Studio, Outdoor, Dramatic)."
          },
          {
            week: "WEEK 11-12",
            module: "Rendering & Post-Processing",
            topics: ["Understanding rendering engines (Cycles vs. Eevee)", "Render passes and AOVs for compositing", "Optimizing render settings for speed and quality", "Basic compositing and color grading in 3D", "Exporting for different media types"],
            practical: ["Setting up a final high-quality render", "Using the 3D compositor for post-effects", "Optimizing a scene for real-time rendering"],
            assignment: "Produce a final, high-resolution render of your product from multiple angles."
          },
          {
            week: "WEEK 13-14",
            module: "3D for Web, AR & Final Project",
            topics: ["Exporting for 3D printing (STL/OBJ)", "Optimizing assets for WebGL and AR (GLB/GLTF)", "Introduction to real-time 3D (Spline/Three.js basics)", "Building a professional 3D design portfolio", "Project presentation and feedback"],
            practical: ["Exporting and testing a model in an AR viewer", "Setting up a 3D portfolio page", "Final project critique"],
            assignment: "Deliver a final 3D product visualization project including project files and renders."
          }
        ],
        labs: ["Advanced modeling & Topology lab", "Sculpting & Organic design workshop", "Materials & UV mapping clinic", "Lighting & Rendering masterclass", "3D for Web & AR deployment lab"],
        tools: {
          beginner: ["Blender 3.6+", "Fusion 360 (Personal/Student)", "Mesa / Poly Haven for assets"],
          optional: ["Adobe Substance 3D Painter", "ZBrush (basics)", "Spline for Web 3D", "3D Printing software (Cura)"]
        },
        assessment: [
          { type: "3D Modeling Assignments", weight: "30%" },
          { type: "Texturing & Rendering Tasks", weight: "20%" },
          { type: "3D Design Theory Quiz", weight: "10%" },
          { type: "Final 3D Product Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 bi-weekly 3D development tasks",
          "Successfully demonstrate clean topology and UV unwrapping",
          "Submit a final high-quality 3D product render and documented project file"
        ],
        careers: [
          "3D Modeler",
          "Product Visualizer",
          "Industrial Designer (Junior)",
          "3D Artist (Games/Advertising)",
          "AR / VR Asset Designer",
          "3D Printing Specialist"
        ],
        methodology: "20% Theory, 80% Practical & Project-Based Learning"
      }
    },
    {
      id: "dm-a3",
      titleKey: "courses.tracks.design_media.a3",
      descKey: "courses.tracks.design_media.desca3",
      image: "https://images.unsplash.com/photo-1587120511358-98f9104cc096?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w12",
      level: "Advance",
      tags: ["illustration", "art"],
      curriculum: {
        objective: "To provide learners with advanced skills in digital illustration and artistic expression, focusing on mastering digital brushes, color composition, and character design to create professional-level artwork.",
        outcomes: [
          "Master advanced digital drawing, painting, and rendering techniques",
          "Understand and apply sophisticated color theory and lighting in digital art",
          "Design unique, story-driven characters and immersive 2D environments",
          "Use professional illustration tools (Procreate, Photoshop, Krita) proficiently",
          "Implement principles of visual storytelling and narrative through single and sequential art",
          "Master various digital art styles: from realistic painting to cell-shading",
          "Understand the business of digital art, including freelancing and copyright",
          "Build a high-quality professional digital illustration portfolio"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Foundations of Digital Art & Tools",
            topics: ["Transitioning from traditional to digital workflows", "Professional hardware: Tablets, Stylus, and Displays", "Mastering software interfaces: Layers, Masks, and Brushes", "Digital file formats and resolution (DPI/PPI)", "Brush engine customization"],
            practical: ["Setting up a custom digital workspace", "Developing a set of custom digital brushes", "Basic shape and value painting"],
            assignment: "Create a digital study of a traditional still-life object."
          },
          {
            week: "WEEK 3-4",
            module: "Anatomy & Gesture Drawing",
            topics: ["Understanding human and animal anatomy for artists", "Mastering gesture drawing and line of action", "Sketching dynamic poses and movement", "Capturing facial expressions and emotion", "Proportion and skeletal structure"],
            practical: ["Timed gesture drawing sessions", "Anatomy breakdown of the human figure", "Facial expression masterclass"],
            assignment: "Develop a sheet of 10 dynamic character gestures and 5 facial expressions."
          },
          {
            week: "WEEK 5-6",
            module: "Advanced Color & Lighting",
            topics: ["Building on color theory: Harmonies and Mood", "Using light and shadow to create volume (Rendering)", "Mastering digital blending modes (Multiply, Overlay, etc.)", "Color grading and atmospheric perspective", "Subsurface scattering and reflective light basics"],
            practical: ["Painting a sphere in 5 different lighting conditions", "Colorizing a grayscale illustration", "Atmospheric landscape study"],
            assignment: "Create a grayscale-to-color illustration of a complex object or character."
          },
          {
            week: "WEEK 7-8",
            module: "Environment & Perspective Design",
            topics: ["Principles of linear perspective (1, 2, and 3-point)", "Designing immersive backgrounds and environments", "Compositional storytelling in landscapes", "Architecture and nature in digital art", "Using 3D bases for 2D illustration"],
            practical: ["Designing an interior room in 2-point perspective", "Painting an outdoor environment with depth", "Thumbnailing for environment design"],
            assignment: "Produce a full environment illustration (e.g., a futuristic city or a magical forest)."
          },
          {
            week: "WEEK 9-10",
            module: "Character Design & Development",
            topics: ["Concept art foundations: Form follows function", "Creating character silhouettes and turnarounds", "Designing for personality, story, and world-building", "Costume, prop, and weapon design", "Character expression sheets"],
            practical: ["Brainstorming and sketching a unique character", "Creating a professional character turnaround", "Designing a character's signature prop"],
            assignment: "Develop a complete character concept sheet (Turnaround + Expressions + Props)."
          },
          {
            week: "WEEK 11-12",
            module: "Narrative Art & Final Portfolio",
            topics: ["Principles of narrative art and visual storytelling", "Creating comic panels and storyboards", "Preparing artwork for print vs. web", "Building a professional digital art portfolio", "Freelancing, social media, and the art business"],
            practical: ["Creating a 3-panel narrative sequence", "Final portfolio layout and assembly", "Final project presentation and critique"],
            assignment: "Deliver a final high-fidelity illustration project and submit your digital art portfolio."
          }
        ],
        labs: ["Advanced anatomy & Gesture workshop", "Digital color & Lighting masterclass", "Environment & Perspective design lab", "Character design & Concept art sprint", "Portfolio building & Art business clinic"],
        tools: {
          beginner: ["Procreate or Krita", "Graphics Tablet (Wacom/Huion)", "Google Fonts for lettering"],
          optional: ["Adobe Photoshop", "Clip Studio Paint", "Blender for 2D backgrounds", "Pinterest for inspiration"]
        },
        assessment: [
          { type: "Weekly Illustration Assignments", weight: "30%" },
          { type: "Technique Proficiency Tasks", weight: "20%" },
          { type: "Art Theory & Composition Quiz", weight: "10%" },
          { type: "Final Illustration Portfolio", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 bi-weekly illustration challenges",
          "Successfully demonstrate advanced digital rendering techniques",
          "Submit a final portfolio featuring 5 professional-grade illustrations"
        ],
        careers: [
          "Digital Illustrator",
          "Concept Artist (Games/Movies)",
          "Character Designer",
          "Storyboard Artist",
          "Visual Development Artist",
          "Freelance Illustrator"
        ],
        methodology: "15% Theory, 85% Practical & Artistic Practice"
      }
    },
    {
      id: "dm-a4",
      titleKey: "courses.tracks.design_media.a4",
      descKey: "courses.tracks.design_media.desca4",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w16",
      level: "Advance",
      tags: ["animation", "sound"],
      curriculum: {
        objective: "To provide learners with advanced skills in creating dynamic motion graphics and professional sound design, enabling them to produce engaging animated content and high-quality audio for various digital platforms.",
        outcomes: [
          "Master the 12 principles of animation (Timing, Easing, Squash & Stretch, etc.)",
          "Create advanced motion graphics using After Effects or similar professional tools",
          "Understand and implement professional sound design, foley, and audio editing",
          "Integrate motion graphics and sound for compelling, professional-grade storytelling",
          "Master kinetic typography and animated UI/UX elements for digital products",
          "Understand and use expressions and automation to speed up motion workflows",
          "Prepare and export high-quality motion assets for various platforms (Web, Social, TV)",
          "Build a professional motion design portfolio and showreel"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Introduction to Motion Design & Animation",
            topics: ["History and evolution of Motion Graphics", "The 12 Principles of Animation for motion designers", "Overview of the motion design workflow: Concept to Export", "Software foundations: Layers, Timelines, and Compositions", "Keyframing and the Power of the Graph Editor"],
            practical: ["Creating a simple bouncing ball animation", "Mastering easing and timing in the Graph Editor", "Analyzing iconic motion design pieces"],
            assignment: "Animate a simple object using at least 3 principles of animation."
          },
          {
            week: "WEEK 3-4",
            module: "Kinetic Typography & Text Animation",
            topics: ["Principles of typography in motion", "Animating text for impact and clarity", "Using Text Animators and Selectors", "Kinetic typography techniques and styles", "Title sequence design and storytelling through text"],
            practical: ["Building a 'Spoken Word' kinetic typography video", "Designing a professional title sequence", "Automating text animation with expressions"],
            assignment: "Develop a 15-second kinetic typography piece for a selected quote."
          },
          {
            week: "WEEK 5-6",
            module: "Vector Animation & Logo Motion",
            topics: ["Working with Vector assets (Illustrator to After Effects)", "Shape Layer mastery and Trim Paths", "Morphing and complex shape transitions", "Logo animation principles: Personality and Brand", "Using the 'Puppet Tool' for 2D character animation"],
            practical: ["Animating a brand logo from scratch", "Creating a set of animated icons", "Simple 2D character movement"],
            assignment: "Animate a selected brand logo with a professional intro/outro."
          },
          {
            week: "WEEK 7-8",
            module: "Advanced Motion & 3D Techniques",
            topics: ["3D in 2D space (2.5D) and Camera layers", "Parenting, Null Objects, and complex hierarchies", "Masking, Track Mattes, and Rotoscoping", "Introduction to Expressions and Javascript-based automation", "Particle systems and visual effects basics"],
            practical: ["Building a 3D parallax environment", "Creating a complex multi-layered motion scene", "Writing basic expressions for automation"],
            assignment: "Design a 10-second '2.5D' scene with camera movement and depth."
          },
          {
            week: "WEEK 9-10",
            module: "Sound Design & Audio Engineering",
            topics: ["Physics of sound and digital audio foundations", "Audio recording techniques and external microphones", "Sound Design: Using Music, SFX, and Foley for impact", "Audio editing and cleanup in Audition/Audacity", "Mixing and mastering for different platforms"],
            practical: ["Recording and editing custom foley sounds", "Cleaning up a noisy voiceover", "Building a soundscape for a silent animation"],
            assignment: "Create a 30-second soundscape including SFX, music, and voiceover."
          },
          {
            week: "WEEK 11-12",
            module: "Integrating Motion & Sound",
            topics: ["Synchronizing animation to rhythm and beats", "Using audio to drive animation (Audio Reactivity)", "Sound as a storytelling tool in motion design", "Advanced rendering and compression for different outputs", "Preparing a professional showreel"],
            practical: ["Creating an audio-reactive visualizer", "Finalizing the audio-visual sync for the main project", "Render optimization workshop"],
            assignment: "Complete the final integration of motion and sound for your project."
          },
          {
            week: "WEEK 13-16",
            module: "Final Project & Showreel",
            topics: ["Final project development: From storyboard to final export", "Building a professional motion design showreel", "Portfolio presentation and critique", "Freelancing and the motion design industry", "Future of motion: Real-time and AI-assisted animation"],
            practical: ["Final project development and feedback", "Assembling your 60-second showreel", "Final screening and peer review"],
            assignment: "Deliver a final 30-second motion graphic project and a professional showreel."
          }
        ],
        labs: ["Advanced animation & Keyframing lab", "Kinetic typography & Text workshop", "Vector & Logo animation clinic", "Sound design & Audio engineering masterclass", "Showreel & Portfolio building clinic"],
        tools: {
          beginner: ["Adobe After Effects", "Adobe Audition / Audacity", "Adobe Illustrator", "CapCut (Advanced)"],
          optional: ["Cavalry", "Maxon Cinema 4D (Lite)", "Framer Motion (Web)", "Professional Sound Libraries"]
        },
        assessment: [
          { type: "Weekly Animation Assignments", weight: "30%" },
          { type: "Sound Design & Audio Tasks", weight: "20%" },
          { type: "Motion Design Theory Quiz", weight: "10%" },
          { type: "Final Motion Project & Showreel", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 8 bi-weekly motion development tasks",
          "Successfully demonstrate synchronization of audio and video",
          "Submit a final high-quality project and a professional showreel"
        ],
        careers: [
          "Motion Graphics Designer",
          "Video Editor (Advanced)",
          "Multimedia Artist",
          "UI / UX Animator",
          "Sound Designer (Junior)",
          "E-learning Content Developer"
        ],
        methodology: "20% Theory, 80% Practical & Project-Based Learning"
      }
    },
    {
      id: "dm-a5",
      titleKey: "courses.tracks.design_media.a5",
      descKey: "courses.tracks.design_media.desca5",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      durationKey: "courses_page.durations.w10",
      level: "Advance",
      tags: ["marketing", "seo"],
      curriculum: {
        objective: "To provide learners with advanced skills in digital marketing and Search Engine Optimization (SEO), focusing on data-driven strategies to increase online visibility, drive traffic, and achieve business goals.",
        outcomes: [
          "Master the core channels and strategies of modern digital marketing",
          "Implement advanced SEO techniques (On-page, Off-page, and Technical)",
          "Design and manage high-performing Search Engine Marketing (SEM) and Social ads",
          "Develop comprehensive content marketing and email automation workflows",
          "Use advanced analytics (GA4) to track, measure, and optimize marketing ROI",
          "Understand and apply consumer psychology and behavior in digital spaces",
          "Navigate the legal and ethical considerations of digital data and privacy",
          "Develop and present a professional, data-driven digital marketing strategy"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Advanced Digital Marketing Strategy",
            topics: ["The modern digital marketing ecosystem and trends", "Understanding the digital customer journey and funnels", "Inbound vs. Outbound marketing strategies", "Setting SMART goals and KPIs", "Competitive digital landscape analysis"],
            practical: ["Mapping a customer journey for a local business", "Conducting a digital competitor audit", "Setting KPIs for a sample campaign"],
            assignment: "Develop a 6-month strategic marketing overview for a selected brand."
          },
          {
            week: "WEEK 3-4",
            module: "Advanced SEO (Search Engine Optimization)",
            topics: ["How search algorithms work (Google/Bing)", "Advanced Keyword Research and intent analysis", "On-page SEO: Content, structure, and meta-data", "Technical SEO: Site speed, Core Web Vitals, and Mobile-first", "Off-page SEO: Ethical link building and authority"],
            practical: ["Performing a full SEO audit on a website", "Keyword research for a niche market", "Optimizing a blog post for specific keywords"],
            assignment: "Create a comprehensive SEO audit and improvement plan for a local website."
          },
          {
            week: "WEEK 5-6",
            module: "SEM & Social Media Advertising",
            topics: ["Search Engine Marketing (SEM) and Google Ads foundations", "Campaign types: Search, Display, Shopping, and Video", "Bidding strategies and Quality Score optimization", "Social Media Advertising (Meta, LinkedIn, TikTok)", "Audience targeting, retargeting, and lookalike audiences"],
            practical: ["Setting up a mock Google Ads campaign", "Designing a Facebook/Instagram ad set", "Budgeting and forecasting ad performance"],
            assignment: "Develop a paid media plan with a budget of ₹50,000 for a product launch."
          },
          {
            week: "WEEK 7-8",
            module: "Content & Email Marketing Automation",
            topics: ["Content marketing strategy: Storytelling and Value", "Building a content calendar and distribution plan", "Email marketing fundamentals and list building", "Introduction to Marketing Automation and drip campaigns", "Personalization and segmentation in email"],
            practical: ["Designing an automated email welcome sequence", "Creating a one-month content calendar", "Writing high-converting email copy"],
            assignment: "Design a 3-step automated email marketing funnel for a local service."
          },
          {
            week: "WEEK 9-10",
            module: "Marketing Analytics & GA4",
            topics: ["Introduction to Google Analytics 4 (GA4)", "Tracking conversions and event-based data", "Understanding user behavior and acquisition reports", "Attribution models and ROI measurement", "Data visualization for marketing reports"],
            practical: ["Setting up conversion tracking in GA4", "Building a custom marketing dashboard", "Analyzing traffic sources and user behavior"],
            assignment: "Create a monthly performance report based on sample analytics data."
          },
          {
            week: "WEEK 11-12",
            module: "Final Project & Strategy",
            topics: ["Synthesizing the digital marketing mix", "Budget allocation and resource planning", "Pitching a comprehensive marketing strategy", "Ethical marketing and data privacy (GDPR/DPDP)", "Future of marketing: AI and Personalization"],
            practical: ["Final project development", "Presenting the marketing strategy to 'clients'", "Peer review and feedback session"],
            assignment: "Deliver a final 360-degree digital marketing strategy and campaign project."
          }
        ],
        labs: ["SEO audit & Keyword research lab", "Google & Meta Ads setup workshop", "Email automation & Funnel clinic", "Marketing Analytics (GA4) deep-dive", "Digital strategy & Pitching lab"],
        tools: {
          beginner: ["Google Analytics 4", "Google Search Console", "Meta Business Suite", "Mailchimp / Substack"],
          optional: ["SEMrush / Ahrefs (Basics)", "Google Ads Editor", "Canva for Ad Design", "Hotjar for User Behavior"]
        },
        assessment: [
          { type: "Weekly Marketing Assignments", weight: "30%" },
          { type: "Technical Proficiency Tasks", weight: "20%" },
          { type: "Digital Marketing Theory Quiz", weight: "10%" },
          { type: "Final Capstone Marketing Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 weekly strategic marketing tasks",
          "Successfully pass the GA4 and SEO proficiency assessment",
          "Submit a final comprehensive, data-driven digital marketing strategy"
        ],
        careers: [
          "Digital Marketing Manager",
          "SEO Specialist",
          "Social Media Manager",
          "PPC / SEM Analyst",
          "Content Strategist",
          "Growth Marketing Associate",
          "Marketing Analytics Specialist"
        ],
        methodology: "30% Theory, 70% Practical & Case Studies"
      }
    },
    {
      id: "dm-a6",
      titleKey: "courses.tracks.design_media.a6",
      descKey: "courses.tracks.design_media.desca6",
      image: "https://images.unsplash.com/photo-1764745222815-1395674e894b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      durationKey: "courses_page.durations.w14",
      level: "Advance",
      tags: ["branding", "strategy"],
      curriculum: {
        objective: "To provide learners with advanced skills in building, managing, and sustaining powerful brands, focusing on strategic positioning, brand architecture, and long-term brand equity management in competitive markets.",
        outcomes: [
          "Understand the core foundations of brand strategy and brand equity management",
          "Master strategic brand positioning and competitive differentiation techniques",
          "Develop comprehensive, scalable brand identities and brand architectures",
          "Create and manage compelling brand narratives and consistent voices",
          "Design and audit the complete brand experience across all digital and physical touchpoints",
          "Understand the internal branding process and building a brand-aligned culture",
          "Master brand measurement, auditing, and health tracking metrics",
          "Develop and present a professional, long-term brand growth and management strategy"
        ],
        syllabus: [
          {
            week: "WEEK 1-2",
            module: "Foundations of Brand Strategy",
            topics: ["What is a brand? The business of branding", "Brand Equity: Definition, components, and importance", "The Brand Strategy framework: From purpose to profit", "Evolution of branding: Traditional to Digital/Social", "Ethical branding and social responsibility"],
            practical: ["Analyzing 5 iconic global and local brands", "Identifying brand equity drivers", "Workshop: 'Is it a brand or just a logo?'"],
            assignment: "Write a comparative analysis of the brand strategies of two competing companies."
          },
          {
            week: "WEEK 3-4",
            module: "Brand Discovery & Positioning",
            topics: ["Defining Brand Purpose, Vision, Mission, and Values", "Understanding the target audience: Persona and Psychographics", "The 12 Brand Archetypes and their application", "Competitive analysis and the 'Perceptual Map'", "Crafting the unique Positioning Statement"],
            practical: ["Developing a brand's 'Core Values' set", "Mapping competitors in a local market", "Writing a high-impact positioning statement"],
            assignment: "Develop a complete brand discovery report for a new rural-focused enterprise."
          },
          {
            week: "WEEK 5-6",
            module: "Visual & Verbal Identity",
            topics: ["Designing the Visual Identity: Logos, Color, and Typography", "The Verbal Identity: Brand naming, Slogans, and Taglines", "Understanding Brand Architecture (Master brand, House of brands, etc.)", "Consistency vs. Flexibility in identity", "Protecting the brand: Trademarks and IP basics"],
            practical: ["Naming workshop for a new product", "Designing a basic visual identity system", "Creating a brand architecture map"],
            assignment: "Create a complete visual and verbal identity concept for your brand project."
          },
          {
            week: "WEEK 7-8",
            module: "Brand Storytelling & Voice",
            topics: ["Developing a compelling Brand Narrative", "Defining the Brand Voice, Tone, and Personality", "Storytelling as a tool for emotional connection", "Content strategy through the brand lens", "Managing brand communication across platforms"],
            practical: ["Writing a brand story/manifesto", "Developing a 'Tone of Voice' guide with examples", "Storytelling sprint for social media"],
            assignment: "Write a 500-word brand manifesto and a 1-week brand communication plan."
          },
          {
            week: "WEEK 9-10",
            module: "Brand Experience & Culture",
            topics: ["Mapping the Customer Brand Experience (CX)", "Ensuring consistency across physical and digital touchpoints", "Internal Branding: Turning employees into brand ambassadors", "Brand-aligned culture and service standards", "Managing brand reputation in a crisis"],
            practical: ["Creating a brand touchpoint map", "Designing an internal branding workshop", "Crisis communication role-play"],
            assignment: "Develop a brand experience improvement plan for an existing local service."
          },
          {
            week: "WEEK 11-12",
            module: "Brand Audit & Growth Management",
            topics: ["Measuring Brand Health: Awareness, Association, and Loyalty", "Conducting a comprehensive Brand Audit", "Managing brand growth and evolution over time", "Rebranding and Brand Extensions: Pros and Cons", "Future of branding: Personalization and AI"],
            practical: ["Performing a brand audit on a local business", "Designing a brand health survey", "Developing a rejuvenation strategy for a 'stale' brand"],
            assignment: "Deliver a final 20-page Brand Strategy and Identity Guide including a long-term growth plan."
          }
        ],
        labs: ["Brand discovery & Purpose workshop", "Competitive positioning & Archetype lab", "Identity design & Architecture workshop", "Brand storytelling & Voice clinic", "Brand audit & Equity management masterclass"],
        tools: {
          beginner: ["Canva / Adobe Express", "Brand Strategy Frameworks (Value Prop, etc.)", "Google Forms for Audits"],
          optional: ["Professional Design Suite (Adobe)", "Brand Monitoring Tools", "Advanced Survey Software"]
        },
        assessment: [
          { type: "Weekly Strategic Assignments", weight: "30%" },
          { type: "Identity Design & Voice Tasks", weight: "20%" },
          { type: "Brand Strategy Theory Quiz", weight: "10%" },
          { type: "Final Capstone Brand Strategy Project", weight: "40%" }
        ],
        certification: [
          "Maintain at least 80% attendance",
          "Complete all 6 weekly strategic branding tasks",
          "Successfully pass the brand audit proficiency assessment",
          "Submit a final comprehensive, professional-grade Brand Strategy and Style Guide"
        ],
        careers: [
          "Brand Manager",
          "Strategic Brand Planner",
          "Brand Identity Consultant",
          "Marketing Director Assistant",
          "Branding & Communications Specialist",
          "Creative Strategist"
        ],
        methodology: "35% Theory, 65% Practical & Case Studies"
      }
    },
  ]
};

export function getAllCourses(): CourseDetail[] {
  return Object.values(courseDetails).flat();
}

export function getCourseById(id: string): CourseDetail | undefined {
  return getAllCourses().find(c => c.id === id);
}
