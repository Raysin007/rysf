import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: "About",
            courses: "Courses",
            areas: "Areas",
            impact: "Impact",
            contact: "Contact",
            logo_alt: "Rural Youth Skill Forum logo"
          },
          hero: {
            tag: "Mirik, Darjeeling · April 2026",
            title: "Rural Youth",
            skill_forum: "Skill Forum",
            tagline: "Where traditional wisdom meets modern opportunity — bridging communities with skills that last.",
            explore: "Explore the Initiative",
            view_courses: "View Courses",
            courses: "Courses",
            disciplines: "Disciplines",
            pilot_regions: "Pilot Regions",
            scroll: "Scroll to explore",
            label_top: "Rural Youth Skill Development",
            label_left: "Career Placement",
            label_right: "Rural Skills Archive"
          },
          about: {
            label: "CORE CONCEPT",
            lead: "An initiative rooted in the belief that real development begins with people, their skills and connection with their own land and knowledge systems.",
            accent: "The Rural Youth Skill Forum is designed as a bridge between traditional wisdom and modern opportunities.",
            pillar1_title: "Skill Development",
            pillar1_desc: "Courses grounded in the realities of rural life, building expertise that translates to income.",
            pillar2_title: "Rural Skills Archive",
            pillar2_desc: "Documenting and preserving indigenous knowledge systems and traditional livelihoods.",
            pillar3_title: "Career Placement",
            pillar3_desc: "Connecting trained youth to employment networks, markets, and entrepreneurship pathways.",
            photo_youth: "Youth Learning",
            photo_craft: "Traditional Craft"
          },
          courses: {
            label: "CURRICULUM",
            title: "14+ Foundation Courses",
            title_em: "& 12+ Advance Courses",
            sub: "Four tracks designed to connect rural knowledge with future livelihoods.",
            foundation_label: "FOUNDATION COURSES",
            advance_label: "ADVANCE COURSES",
            foundation: "Foundation",
            advance: "Advance",
            tracks: {
              agriculture: {
                title: "Agriculture",
                subtitle: "Rooted and income-generating skills",
                c1: "Organic Farming Basics",
                c2: "Nursery Basics",
                c3: "Composting & Soil Health"
              },
              wellness: {
                title: "Wellness",
                subtitle: "Traditional systems-based livelihoods",
                c1: "Health & Wellness Basics",
                c2: "Ayurveda Basics",
                c3: "Yoga & Wellness"
              },
              data_tech: {
                title: "Data & Technology",
                subtitle: "Future-ready opportunities",
                c1: "Data Literacy",
                c2: "Tech Literacy",
                c3: "AI Basics + Office Tools",
                c4: "Basic Business Management",
                a1: "Python Development",
                a2: "Web & App Development",
                a3: "Cloud Systems",
                a4: "Data Analysis & Visualisation",
                a5: "Agentic AI",
                a6: "Business Management"
              },
              design_media: {
                title: "Design & Media",
                subtitle: "Creative skills + Better market value",
                c1: "Design Literacy",
                c2: "Basic Photography",
                c3: "Video Editing",
                c4: "Storytelling Basics",
                a1: "UI/UX Design",
                a2: "Product Design",
                a3: "Digital Illustration",
                a4: "Animation & Sound",
                a5: "Digital Marketing",
                a6: "Branding & Advertising"
              }
            }
          },
          areas: {
            label: "AREA OF WORK",
            subtitle: "Two pilot regions. One shared vision.",
            why_title: "Why these regions?",
            why1: "Geographically underserved with high youth population",
            why2: "Rich in traditional knowledge ripe for documentation",
            why3: "Emerging digital connectivity enabling remote learning",
            why4: "Existing community networks to build trust and scale",
            points: {
              plassey1: "Deep local understanding — we design with real-world insights, not assumptions",
              plassey2: "Strong community trust, leading to higher participation and impact",
              mirik1: "High need, low access — where intervention creates real change",
              mirik2: "Built to scale; models tested here can grow across regions"
            }
          },
          impact: {
            label: "OUR IMPACT",
            title: "Building futures,",
            title_em: "one skill at a time.",
            desc: "The Rural Youth Skill Forum is built for measurable, lasting change — starting with the communities that need it most, and scaling to reach thousands across the region.",
            stat1_label: "Youth Targeted in 1st Year",
            stat1_desc: "Across both pilot regions",
            stat2_label: "Skill Courses",
            stat2_desc: "Across 4 disciplines — foundation to advanced",
            stat3_label: "Pilot Regions",
            stat3_desc: "Plassey, Nadia and Mirik, Darjeeling",
            stat4_label: "Core Pillars",
            stat4_desc: "Skills Development, Career Placement, Skills Archive",
            quote: "Real development begins with people — their skills and connection with their own land and knowledge systems.",
            cite: "— Rural Youth Skill Forum, Core Concept"
          },
          contact: {
            label: "JOIN THE FORUM",
            title: "Be part of",
            title_em: "the change.",
            desc: "Whether you're a young person in Mirik or Plassey, an educator, an NGO partner, or a funding organization — there's a place for you in this initiative.",
            info1_label: "Pilot Locations",
            info1_value: "Mirik, Darjeeling & Plassey, Nadia",
            info2_label: "Initiated",
            info2_value: "April 2026",
            info3_label: "Prepared by",
            info3_value: "Rabiul Islam & Subhendu Kundu",
            success_title: "You're in!",
            success_desc: "Thank you for your interest. We'll reach out soon with next steps for joining the Rural Youth Skill Forum.",
            form: {
              name: "Full Name",
              name_ph: "Your name",
              email: "Email Address",
              email_ph: "you@example.com",
              role: "I am a…",
              role_ph: "Select your role",
              role_youth: "Youth / Student",
              role_educator: "Educator / Trainer",
              role_ngo: "NGO / Community Org",
              role_funder: "Funder / Donor",
              role_govt: "Government Body",
              role_other: "Other",
              message: "Message (optional)",
              message_ph: "Tell us how you'd like to get involved…",
              submit: "Join the Rural Youth Skill Forum →"
            }
          },
          footer: {
            brand_name: "RURAL YOUTH SKILL FORUM",
            brand_sub: "Concept Pitch · April 2026 · Mirik, Darjeeling",
            brand_desc: "Bridging traditional wisdom and modern opportunities for rural youth across West Bengal and beyond.",
            nav_title: "Navigate",
            disc_title: "Disciplines",
            regions_title: "Regions",
            copy: "Concept Pitch of Rural Youth Skill Forum · Prepared by Rabiul Islam & Subhendu Kundu",
            tagline: "Real development begins with people."
          }
        }
      },
      hi: {
        translation: {
          nav: {
            about: "हमारे बारे में",
            courses: "पाठ्यक्रम",
            areas: "क्षेत्र",
            impact: "प्रभाव",
            contact: "संपर्क",
            logo_alt: "ग्रामीण युवा कौशल मंच लोगो"
          },
          hero: {
            tag: "मिरिक, दार्जिलिंग · अप्रैल 2026",
            title: "ग्रामीण युवा",
            skill_forum: "कौशल मंच",
            tagline: "जहाँ पारंपरिक ज्ञान आधुनिक अवसर से मिलता है — समुदायों को ऐसे कौशल से जोड़ना जो स्थायी हों।",
            explore: "पहल का अन्वेषण करें",
            view_courses: "पाठ्यक्रम देखें",
            courses: "पाठ्यक्रम",
            disciplines: "विषय",
            pilot_regions: "पायलट क्षेत्र",
            scroll: "अन्वेषण के लिए स्क्रॉल करें",
            label_top: "ग्रामीण युवा कौशल विकास",
            label_left: "कैरियर  प्लेसमेंट",
            label_right: "ग्रामीण कौशल पुरालेख"
          },
          about: {
            label: "मूल अवधारणा",
            lead: "एक ऐसी पहल जो इस विश्वास में निहित है कि वास्तविक विकास लोगों, उनके कौशल और उनकी अपनी भूमि और ज्ञान प्रणालियों के साथ जुड़ाव से शुरू होता है।",
            accent: "ग्रामीण युवा कौशल मंच पारंपरिक ज्ञान और आधुनिक अवसरों के बीच एक सेतु के रूप में डिज़ाइन किया गया है।",
            pillar1_title: "कौशल विकास",
            pillar1_desc: "ग्रामीण जीवन की वास्तविकताओं पर आधारित पाठ्यक्रम, जो आय में बदलने वाली विशेषज्ञता का निर्माण करते हैं।",
            pillar2_title: "ग्रामीण कौशल पुरालेख",
            pillar2_desc: "स्वदेशी ज्ञान प्रणालियों और पारंपरिक आजीविका का दस्तावेजीकरण और संरक्षण।",
            pillar3_title: "कैरियर प्लेसमेंट",
            pillar3_desc: "प्रशिक्षित युवाओं को रोजगार नेटवर्क, बाजार और उद्यमिता के रास्तों से जोड़ना।",
            photo_youth: "युवा शिक्षा",
            photo_craft: "पारंपरिक शिल्प"
          },
          courses: {
            label: "पाठ्यक्रम",
            title: "14+ बुनियादी पाठ्यक्रम",
            title_em: "& 12+ उन्नत पाठ्यक्रम",
            sub: "ग्रामीण ज्ञान को भविष्य की आजीविका से जोड़ने के लिए डिज़ाइन किए गए चार ट्रैक।",
            foundation_label: "बुनियादी पाठ्यक्रम",
            advance_label: "उन्नत पाठ्यक्रम",
            foundation: "बुनियादी",
            advance: "उन्नत",
            tracks: {
              agriculture: {
                title: "कृषि",
                subtitle: "जड़ और आय-सृजन कौशल",
                c1: "जैविक खेती की बुनियादी बातें",
                c2: "नर्सरी की बुनियादी बातें",
                c3: "कम्पोस्टिंग और मिट्टी का स्वास्थ्य"
              },
              wellness: {
                title: "कल्याण",
                subtitle: "पारंपरिक प्रणालियों पर आधारित आजीविका",
                c1: "स्वास्थ्य और कल्याण की बुनियादी बातें",
                c2: "आयुर्वेद की बुनियादी बातें",
                c3: "योग और कल्याण"
              },
              data_tech: {
                title: "डेटा और प्रौद्योगिकी",
                subtitle: "भविष्य के लिए तैयार अवसर",
                c1: "डेटा साक्षरता",
                c2: "तकनीकी साक्षरता",
                c3: "AI बुनियादी बातें + ऑफिस टूल्स",
                c4: "बुनियादी व्यवसाय प्रबंधन",
                a1: "पायथन विकास",
                a2: "वेब और ऐप विकास",
                a3: "क्लाउड सिस्टम",
                a4: "डेटा विश्लेषण और विज़ुअलाइज़ेशन",
                a5: "एजेंटिक AI",
                a6: "व्यवसाय प्रबंधन"
              },
              design_media: {
                title: "डिजाइन और मीडिया",
                subtitle: "रचनात्मक कौशल + बेहतर बाजार मूल्य",
                c1: "डिजाइन साक्षरता",
                c2: "बुनियादी फोटोग्राफी",
                c3: "वीडियो संपादन",
                c4: "कहानी सुनाने की बुनियादी बातें",
                a1: "UI/UX डिजाइन",
                a2: "उत्पाद डिजाइन",
                a3: "डिजिटल चित्रण",
                a4: "एनिमेशन और ध्वनि",
                a5: "डिजिटल मार्केटिंग",
                a6: "ब्रांडिंग और विज्ञापन"
              }
            }
          },
          areas: {
            label: "कार्य क्षेत्र",
            subtitle: "दो पायलट क्षेत्र। एक साझा दृष्टिकोण।",
            why_title: "ये क्षेत्र क्यों?",
            why1: "उच्च युवा जनसंख्या के साथ भौगोलिक रूप से वंचित",
            why2: "पारंपरिक ज्ञान से समृद्ध, दस्तावेजीकरण के लिए तैयार",
            why3: "उभरती डिजिटल कनेक्टिविटी जो दूरस्थ शिक्षा को सक्षम बनाती है",
            why4: "विश्वास और विस्तार के लिए मौजूदा सामुदायिक नेटवर्क",
            points: {
              plassey1: "गहरी स्थानीय समझ — हम वास्तविक दुनिया की अंतर्दृष्टि के साथ डिजाइन करते हैं, न कि मान्यताओं के साथ",
              plassey2: "मजबूत सामुदायिक विश्वास, जिससे उच्च भागीदारी और प्रभाव होता है",
              mirik1: "उच्च आवश्यकता, कम पहुंच — जहाँ हस्तक्षेप वास्तविक परिवर्तन लाता है",
              mirik2: "विस्तार के लिए निर्मित; यहाँ परीक्षण किए गए मॉडल पूरे क्षेत्रों में बढ़ सकते हैं"
            }
          },
          impact: {
            label: "हमारा प्रभाव",
            title: "भविष्य का निर्माण,",
            title_em: "एक समय में एक कौशल।",
            desc: "ग्रामीण युवा कौशल मंच औसत दर्जे के, स्थायी परिवर्तन के लिए बनाया गया है — उन समुदायों से शुरू होकर जिन्हें इसकी सबसे अधिक आवश्यकता है, और पूरे क्षेत्र में हजारों तक पहुँचने के लिए विस्तार करना।",
            stat1_label: "प्रथम वर्ष में लक्षित युवा",
            stat1_desc: "दोनों पायलट क्षेत्रों में",
            stat2_label: "कौशल पाठ्यक्रम",
            stat2_desc: "4 विषयों में — बुनियादी से उन्नत तक",
            stat3_label: "पायलट क्षेत्र",
            stat3_desc: "पलाशी, नदिया और मिरिक, दार्जिलिंग",
            stat4_label: "मुख्य स्तंभ",
            stat4_desc: "कौशल विकास, कैरियर प्लेसमेंट, कौशल पुरालेख",
            quote: "वास्तविक विकास लोगों से शुरू होता है — उनके कौशल और उनकी अपनी भूमि और ज्ञान प्रणालियों के साथ जुड़ाव।",
            cite: "— ग्रामीण युवा कौशल मंच, मूल अवधारणा"
          },
          contact: {
            label: "मंच से जुड़ें",
            title: "परिवर्तन का",
            title_em: "हिस्सा बनें।",
            desc: "चाहे आप मिरिक या पलाशी के युवा हों, एक शिक्षक हों, एक एनजीओ भागीदार हों, या एक वित्तपोषण संगठन हों — इस पहल में आपके लिए जगह है।",
            info1_label: "पायलट स्थान",
            info1_value: "मिरिक, दार्जिलिंग और पलाशी, नदिया",
            info2_label: "शुरुआत",
            info2_value: "अप्रैल 2026",
            info3_label: "द्वारा तैयार",
            info3_value: "रबीउल इस्लाम और सुभेंदु कुंडू",
            success_title: "आप शामिल हैं!",
            success_desc: "आपकी रुचि के लिए धन्यवाद। हम ग्रामीण युवा कौशल मंच में शामिल होने के अगले चरणों के साथ जल्द ही आपसे संपर्क करेंगे।",
            form: {
              name: "पूरा नाम",
              name_ph: "आपका नाम",
              email: "ईमेल पता",
              email_ph: "you@example.com",
              role: "मैं एक हूँ…",
              role_ph: "अपनी भूमिका चुनें",
              role_youth: "युवा / छात्र",
              role_educator: "शिक्षक / प्रशिक्षक",
              role_ngo: "एनजीओ / सामुदायिक संगठन",
              role_funder: "दाता / निवेशक",
              role_govt: "सरकारी निकाय",
              role_other: "अन्य",
              message: "संदेश (वैकल्पिक)",
              message_ph: "हमें बताएं कि आप कैसे जुड़ना चाहेंगे…",
              submit: "ग्रामीण युवा कौशल मंच से जुड़ें →"
            }
          },
          footer: {
            brand_name: "ग्रामीण युवा कौशल मंच",
            brand_sub: "कॉन्सेप्ट पिच · अप्रैल 2026 · मिरिक, दार्जिलिंग",
            brand_desc: "पश्चिम बंगाल और उससे आगे के ग्रामीण युवाओं के लिए पारंपरिक ज्ञान और आधुनिक अवसरों को जोड़ना।",
            nav_title: "नेविगेट",
            disc_title: "विषय",
            regions_title: "क्षेत्र",
            copy: "ग्रामीण युवा कौशल मंच का कॉन्सेप्ट पिच · रबीउल इस्लाम और सुभेंदु कुंडू द्वारा तैयार",
            tagline: "वास्तविक विकास लोगों से शुरू होता है।"
          }
        }
      },
      bn: {
        translation: {
          nav: {
            about: "আমাদের সম্পর্কে",
            courses: "কোর্স",
            areas: "এলাকা",
            impact: "প্রভাব",
            contact: "যোগাযোগ",
            logo_alt: "গ্রামীণ যুব দক্ষতা মঞ্চ লোগো"
          },
          hero: {
            tag: "মিরিক, দার্জিলিং · এপ্রিল ২০২৬",
            title: "গ্রামীণ যুব",
            skill_forum: "দক্ষতা মঞ্চ",
            tagline: "যেখানে ঐতিহ্যগত জ্ঞান আধুনিক সুযোগের সাথে মিলিত হয় — সম্প্রদায়গুলিকে এমন দক্ষতার সাথে সংযুক্ত করা যা স্থায়ী হয়।",
            explore: "উদ্যোগটি অন্বেষণ করুন",
            view_courses: "কোর্স দেখুন",
            courses: "কোর্স",
            disciplines: "বিষয়",
            pilot_regions: "পাইলট অঞ্চল",
            scroll: "অন্বেষণ করতে স্ক্রল করুন",
            label_top: "গ্রামীণ যুব দক্ষতা উন্নয়ন",
            label_left: "ক্যারিয়ার প্লেসমেন্ট",
            label_right: "গ্রামীণ দক্ষতা আর্কাইভ"
          },
          about: {
            label: "মূল ধারণা",
            lead: "একটি উদ্যোগ যা এই বিশ্বাসে নিহিত যে প্রকৃত উন্নয়ন মানুষের সাথে শুরু হয়, তাদের দক্ষতা এবং তাদের নিজস্ব ভূমি ও জ্ঞান ব্যবস্থার সাথে সংযোগের মাধ্যমে।",
            accent: "গ্রামীণ যুব দক্ষতা মঞ্চ ঐতিহ্যগত জ্ঞান এবং আধুনিক সুযোগের মধ্যে একটি সেতু হিসেবে ডিজাইন করা হয়েছে।",
            pillar1_title: "দক্ষতা উন্নয়ন",
            pillar1_desc: "গ্রামীণ জীবনের বাস্তবতার ওপর ভিত্তি করে কোর্স, যা আয়ের সুযোগ তৈরি করে এমন দক্ষতা তৈরি করে।",
            pillar2_title: "গ্রামীণ দক্ষতা আর্কাইভ",
            pillar2_desc: "দেশীয় জ্ঞান ব্যবস্থা এবং ঐতিহ্যগত জীবিকার নথিভুক্তকরণ এবং সংরক্ষণ।",
            pillar3_title: "ক্যারিয়ার প্লেসমেন্ট",
            pillar3_desc: "প্রশিক্ষিত যুবকদের কর্মসংস্থান নেটওয়ার্ক, বাজার এবং উদ্যোক্তা পথের সাথে সংযুক্ত করা।",
            photo_youth: "যুব শিক্ষা",
            photo_craft: "ঐতিহ্যবাহী কারুশিল্প"
          },
          courses: {
            label: "পাঠ্যক্রম",
            title: "১৪+ ফাউন্ডেশন কোর্স",
            title_em: "& ১২+ অ্যাডভান্স কোর্স",
            sub: "গ্রামীণ জ্ঞানকে ভবিষ্যতের জীবিকার সাথে সংযুক্ত করার জন্য ডিজাইন করা চারটি ট্র্যাক।",
            foundation_label: "ফাউন্ডেশন কোর্স",
            advance_label: "অ্যাডভান্স কোর্স",
            foundation: "ফাউন্ডেশন",
            advance: "অ্যাডভান্স",
            tracks: {
              agriculture: {
                title: "কৃষি",
                subtitle: "মূল এবং আয়-উৎপাদনকারী দক্ষতা",
                c1: "জৈব চাষের মৌলিক বিষয়",
                c2: "নার্সারির মৌলিক বিষয়",
                c3: "কম্পোস্টিং এবং মাটির স্বাস্থ্য"
              },
              wellness: {
                title: "সুস্থতা",
                subtitle: "ঐতিহ্যগত ব্যবস্থা-ভিত্তিক জীবিকা",
                c1: "স্বাস্থ্য ও সুস্থতার মৌলিক বিষয়",
                c2: "আয়ুর্বেদ মৌলিক বিষয়",
                c3: "যোগ এবং সুস্থতা"
              },
              data_tech: {
                title: "ডেটা এবং প্রযুক্তি",
                subtitle: "ভবিষ্যতের জন্য প্রস্তুত সুযোগ",
                c1: "ডেটা সাক্ষরতা",
                c2: "প্রযুক্তি সাক্ষরতা",
                c3: "AI বেসিক + অফিস টুলস",
                c4: "বেসিক বিজনেস ম্যানেজমেন্ট",
                a1: "পাইথন ডেভেলপমেন্ট",
                a2: "ওয়েব এবং অ্যাপ ডেভেলপমেন্ট",
                a3: "ক্লাউড সিস্টেম",
                a4: "ডেটা বিশ্লেষণ এবং ভিজ্যুয়ালাইজেশন",
                a5: "এজেন্টিক AI",
                a6: "বিজনেস ম্যানেজমেন্ট"
              },
              design_media: {
                title: "ডিজাইন এবং মিডিয়া",
                subtitle: "সৃজনশীল দক্ষতা + উন্নত বাজার মূল্য",
                c1: "ডিজাইন সাক্ষরতা",
                c2: "বেসিক ফটোগ্রাফি",
                c3: "ভিডিও এডিটিং",
                c4: "গল্প বলার মৌলিক বিষয়",
                a1: "UI/UX ডিজাইন",
                a2: "প্রোডাক্ট ডিজাইন",
                a3: "ডিজিটাল ইলাস্ট্রেশন",
                a4: "অ্যানিমেশন এবং শব্দ",
                a5: "ডিজিটাল মার্কেটিং",
                a6: "ব্র্যান্ডিং এবং বিজ্ঞাপন"
              }
            }
          },
          areas: {
            label: "কাজের ক্ষেত্র",
            subtitle: "দুটি পাইলট অঞ্চল। একটিShared লক্ষ্য।",
            why_title: "কেন এই অঞ্চলগুলো?",
            why1: "ভৌগোলিকভাবে সুবিধাবঞ্চিত এবং উচ্চ যুব জনসংখ্যা বিশিষ্ট",
            why2: "ঐতিহ্যগত জ্ঞানে সমৃদ্ধ, নথিভুক্তকরণের জন্য উপযুক্ত",
            why3: "উদীয়মান ডিজিটাল সংযোগ যা দূরশিক্ষাকে সক্ষম করে",
            why4: "বিশ্বাস এবং প্রসারের জন্য বিদ্যমান সম্প্রদায় নেটওয়ার্ক",
            points: {
              plassey1: "গভীর স্থানীয় বোঝাপড়া — আমরা বাস্তব জগতের অন্তর্দৃষ্টি দিয়ে ডিজাইন করি, অনুমান দিয়ে নয়",
              plassey2: "দৃঢ় সম্প্রদায়ের বিশ্বাস, যা উচ্চ অংশগ্রহণ এবং প্রভাবের দিকে পরিচালিত করে",
              mirik1: "উচ্চ প্রয়োজন, কম অ্যাক্সেস — যেখানে হস্তক্ষেপ প্রকৃত পরিবর্তন আনে",
              mirik2: "প্রসারিত করার জন্য তৈরি; এখানে পরীক্ষিত মডেলগুলি অঞ্চল জুড়ে বৃদ্ধি পেতে পারে"
            }
          },
          impact: {
            label: "আমাদের প্রভাব",
            title: "ভবিষ্যৎ নির্মাণ,",
            title_em: "এক সময়ে একটি দক্ষতা।",
            desc: "গ্রামীণ যুব দক্ষতা মঞ্চ পরিমাপযোগ্য, স্থায়ী পরিবর্তনের জন্য তৈরি — সবচেয়ে বেশি প্রয়োজন এমন সম্প্রদায়গুলি থেকে শুরু করে অঞ্চল জুড়ে হাজার হাজার মানুষের কাছে পৌঁছানোর জন্য প্রসারিত করা হচ্ছে।",
            stat1_label: "প্রথম বছরে লক্ষ্যমাত্রা যুব",
            stat1_desc: "উভয় পাইলট অঞ্চল জুড়ে",
            stat2_label: "দক্ষতা কোর্স",
            stat2_desc: "৪টি বিষয়ে — ফাউন্ডেশন থেকে অ্যাডভান্স পর্যন্ত",
            stat3_label: "পাইলট অঞ্চল",
            stat3_desc: "পলাশী, নদীয়া এবং মিরিক, দার্জিলিং",
            stat4_label: "মূল স্তম্ভ",
            stat4_desc: "দক্ষতা উন্নয়ন, ক্যারিয়ার প্লেসমেন্ট, দক্ষতা আর্কাইভ",
            quote: "প্রকৃত উন্নয়ন মানুষের সাথে শুরু হয় — তাদের দক্ষতা এবং তাদের নিজস্ব ভূমি ও জ্ঞান ব্যবস্থার সাথে সংযোগ।",
            cite: "— গ্রামীণ যুব দক্ষতা মঞ্চ, মূল ধারণা"
          },
          contact: {
            label: "ফোরামে যোগ দিন",
            title: "পরিবর্তনের",
            title_em: "অংশ হোন।",
            desc: "আপনি মিরিক বা পলাশীর একজন তরুণ, একজন শিক্ষক, একজন এনজিও অংশীদার, বা একটি অর্থায়নকারী সংস্থা হোন না কেন — এই উদ্যোগে আপনার জন্য জায়গা রয়েছে।",
            info1_label: "পাইলট অবস্থান",
            info1_value: "মিরিক, দার্জিলিং এবং পলাশী, নদীয়া",
            info2_label: "শুরু",
            info2_value: "এপ্রিল ২০২৬",
            info3_label: "প্রস্তুতকারক",
            info3_value: "রবিউল ইসলাম ও শুভেন্দু কুণ্ডু",
            success_title: "আপনি যুক্ত হয়েছেন!",
            success_desc: "আপনার আগ্রহের জন্য ধন্যবাদ। গ্রামীণ যুব দক্ষতা মঞ্চে যোগদানের পরবর্তী পদক্ষেপগুলি নিয়ে আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
            form: {
              name: "পুরো নাম",
              name_ph: "আপনার নাম",
              email: "ইমেল ঠিকানা",
              email_ph: "you@example.com",
              role: "আমি একজন…",
              role_ph: "আপনার ভূমিকা নির্বাচন করুন",
              role_youth: "যুবক / ছাত্র",
              role_educator: "শিক্ষক / প্রশিক্ষক",
              role_ngo: "এনজিও / সম্প্রদায় সংস্থা",
              role_funder: "দাতা / বিনিয়োগকারী",
              role_govt: "সরকারি সংস্থা",
              role_other: "অন্যান্য",
              message: "বার্তা (ঐচ্ছিক)",
              message_ph: "আপনি কীভাবে যুক্ত হতে চান তা আমাদের জানান…",
              submit: "গ্রামীণ যুব দক্ষতা মঞ্চে যোগ দিন →"
            }
          },
          footer: {
            brand_name: "গ্রামীণ যুব দক্ষতা মঞ্চ",
            brand_sub: "কনসেপ্ট পিচ · এপ্রিল ২০২৬ · মিরিক, দার্জিলিং",
            brand_desc: "পশ্চিমবঙ্গ এবং তার বাইরে গ্রামীণ যুবকদের জন্য ঐতিহ্যগত জ্ঞান এবং আধুনিক সুযোগের সেতুবন্ধন।",
            nav_title: "নেভিগেট",
            disc_title: "বিষয়",
            regions_title: "অঞ্চল",
            copy: "গ্রামীণ যুব দক্ষতা মঞ্চের কনসেপ্ট পিচ · রবিউল ইসলাম ও শুভেন্দু কুণ্ডু দ্বারা প্রস্তুত",
            tagline: "প্রকৃত উন্নয়ন মানুষের সাথে শুরু হয়।"
          }
        }
      }
    }
  });

export default i18n;
