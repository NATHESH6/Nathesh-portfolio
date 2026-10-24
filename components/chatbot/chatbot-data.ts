// Comprehensive Knowledge Base and Intelligent Intent Matcher for Nathesh's Portfolio AI Chatbot

export interface ChatAction {
  label: string
  type: "scroll" | "url" | "download" | "prompt"
  value: string
  icon?: string
}

export interface ChatMessage {
  id: string
  sender: "bot" | "user"
  text: string
  timestamp: string
  actions?: ChatAction[]
  suggestions?: string[]
}

export const INITIAL_SUGGESTIONS = [
  "👋 Who is Nathesh?",
  "💻 What are his technical skills?",
  "🚀 Tell me about his projects",
  "💼 Machine Learning Internship",
  "📄 CIETM-2026 Research Paper",
  "🎓 Education & College details",
  "🛠️ What services does he offer?",
  "📬 How can I contact or hire him?",
]

// Detailed portfolio knowledge base
export const NATHESH_PROFILE = {
  name: "Nathesh ",
  shortName: "Nathesh",
  title: "Web Developer & Web Designer",
  subtitle: "Full-Stack Web Development ",
  status: "Available for Seeking Job / Open to Full-time Opportunities & Freelance",
  email: "megaladevi2084@gmail.com",
  phone: "+91 93612 55171",
  location: "Thevur, Salem, Tamil Nadu, India",
  github: "https://github.com/NATHESH6",
  resumePath: "/NATHESH_PV_Resume.pdf",
  resumeFilename: "NATHESH_PV_RESUM.pdf",
  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      institution: "Coimbatore Institute of Engineering and Technology (CIET)",
      period: "2023 - 2026",
      cgpa: "6.48",
      status: "Completed",
    },
    {
      degree: "Diploma in Computer Technology",
      field: "Computer Technology",
      institution: "Kongu Polytechnic College, Erode",
      period: "2020 - 2023",
      percentage: "91%",
      status: "Completed with Distinction",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "Secondary Education",
      institution: "Sri Sakthi Supreme Ideal Vikas Matric Hr Sec School",
      period: "2019 - 2020",
      percentage: "62.8%",
      status: "Completed",
    },
  ],
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    backend: ["Python", "Java", "Flask APIs"],
    machineLearning: [
      "XGBoost",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Predictive Maintenance",
      "Classification & Regression",
      "Anomaly Detection",
      "Feature Engineering",
    ],
    databases: ["MySQL"],
    tools: ["VS Code", "Streamlit", "Git & GitHub", "Canva", "VirtualBox", "MS Office", "Computer Hardware"],
  },
  projects: [
    {
      title: "AI System to Identify and Block Phishing Emails",
      tech: "Python, Flask, HTML, CSS, Machine Learning, XGBoost",
      description:
        "Intelligent email cybersecurity platform leveraging XGBoost classification to parse email headers and content, accurately identifying deceptive phishing attempts in real-time.",
      github: "https://github.com/NATHESH6/DEVELOP-AN-AI-SYSTEM-TO-IDENTIFY-AND-BLOCK-PHISHING-EMAILS",
    },
    {
      title: "Cyber Hacking Breach Prediction and Detection",
      tech: "Python, Flask, XGBoost, HTML5, CSS3, JavaScript",
      description:
        "End-to-end multi-vector cybersecurity platform predicting and detecting intrusion breaches using advanced XGBoost algorithms. Presented at the CIETM-2026 National Conference.",
      github: "https://github.com/NATHESH6",
    },
    {
      title: "AI-Powered Predictive Maintenance System for Industrial Equipment",
      tech: "Python, Streamlit, HTML, CSS, ML, Gradient Boosting / XGBoost",
      description:
        "Predicts the Remaining Useful Life (RUL) of industrial machinery by analyzing vibration and thermal sensor telemetry, featuring an interactive Streamlit analytical dashboard.",
      github: "https://github.com/NATHESH6/AI-Powered-Predictive-Maintenance-System-for-Industrial-Equipment",
    },
    {
      title: "Image Steganography using Modified SDSA Algorithm",
      tech: "C#, SDSA Algorithm, Image Processing, Cryptography",
      description:
        "Advanced cryptographic steganography tool that imperceptibly hides sensitive confidential data inside images using a modified Spatially De-synchronization Steganography Algorithm.",
      github: "https://github.com/NATHESH6/IMAGE-STEGANOGRAPHY-USING-MODIFIED-SDSA-ALGORITHM",
    },
  ],
  internship: {
    company: "Grandtwin",
    location: "Chennai, Tamil Nadu",
    role: "Machine Learning Intern",
    duration: "4 Months",
    project: "AI-Powered Predictive Maintenance System for Industrial Equipment",
    highlights: [
      "Cleaned, normalized, and synchronized high-frequency vibration and thermal sensor streams.",
      "Engineered frequency-domain statistical indicators (RMS, Kurtosis, Crest Factor) from time-series telemetry.",
      "Trained supervised classification and regression models to predict Mean Time To Failure (MTTF).",
      "Created modular Python pipelines with NumPy, Pandas, Scikit-Learn, and Streamlit.",
      "Performed cross-validation, precision-recall, and ROC-AUC evaluations to minimize false alarm stoppages.",
    ],
  },
  research: {
    paperTitle: "Cyber Hacking Breaches Detection And Prediction Using Machine Learning",
    conference: "National Conference on Contemporary Innovations in Engineering Technology & Management (CIETM-2026)",
    organizer: "CIET (Coimbatore Institute of Engineering and Technology)",
    date: "May 2026",
    highlights: [
      "Presented original research findings to academic and industrial evaluators.",
      "Selected as Team Leader for B.E. final year conference research team.",
      "Built working end-to-end Machine Learning systems with Flask REST backends.",
    ],
  },
  certificates: [
    "Cyber Hacking Breaches Detection & Prediction - CIETM-2026 National Conference",
    "Fundamentals of Deep Learning - NVIDIA Deep Learning Institute (2024)",
    "Full Stack Development - NoviTech R&D Private Limited (Dec 2025 - Jan 2026)",
    "Web Development using PHP Programming and MySQL - Infosys Springboard (2025)",
  ],
  services: [
    {
      title: "Full-Stack Web Development",
      description: "Building modern, responsive, high-performance web applications using React, Next.js, HTML5, CSS3, JavaScript, and modern CSS frameworks.",
    },
    {
      title: "Web Design & UI/UX Design",
      description: "Crafting beautiful, accessible, interactive web interfaces with smooth micro-animations, glassmorphism, and responsive layouts for mobile and desktop.",
    },
    {
      title: "Machine Learning & Predictive AI",
      description: "Designing classification and regression systems with XGBoost and Scikit-Learn, including predictive maintenance, phishing detection, and data pipelines.",
    },
    {
      title: "Python Backend & REST APIs",
      description: "Developing robust RESTful backend APIs with Python and Flask, integrated with MySQL databases and data processing modules.",
    },
    {
      title: "AI Chatbot Facility & Q&A Integration",
      description: "Creating intelligent interactive assistant chatbots for portfolios and business websites to answer visitor inquiries instantly 24/7.",
    },
  ],
}

interface MatchRule {
  keywords: string[]
  weight?: number
  responseBuilder: () => { text: string; actions?: ChatAction[]; suggestions?: string[] }
}

export function matchUserQuery(query: string): {
  text: string
  actions?: ChatAction[]
  suggestions?: string[]
} {
  const clean = query.trim().toLowerCase()

  if (!clean) {
    return {
      text: "I'm here to help! Ask me anything about Nathesh's projects, technical skills, machine learning research, education, or how to hire him.",
      suggestions: INITIAL_SUGGESTIONS.slice(0, 4),
    }
  }

  // 1. Greetings & Pleasantries
  if (/^(hi|hello|hey|hola|vanakkam|namaste|greetings|good\s*(morning|afternoon|evening|day)|sup|yo)\b/i.test(clean)) {
    return {
      text: `Hello! 👋 I'm **Nathesh's AI Assistant**. 

I can answer any questions about Nathesh's background, full-stack web development skills, machine learning projects (like phishing detection and industrial predictive maintenance), research paper at CIETM-2026, or how to get in touch with him.

How can I assist you today?`,
      suggestions: [
        "Tell me about Nathesh",
        "What are his technical skills?",
        "What projects has he built?",
        "How can I contact him?",
      ],
      actions: [
        { label: "View About", type: "scroll", value: "#about" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
      ],
    }
  }

  // 2. How are you / Who made you / What can you do
  if (/(how are you|how're you|who are you|what are you|what can you do|your role|help me)/i.test(clean)) {
    return {
      text: `I'm an **Interactive AI Portfolio Chatbot** built for Nathesh Venkateswaran. 

Here are the key things I can do for you:
• Provide detailed information on Nathesh's **web development & design skills**.
• Explain his **Machine Learning & AI projects** (XGBoost, Predictive Maintenance, Phishing Detection).
• Share details on his **CIETM-2026 conference research** and **Grandtwin ML internship**.
• Walk you through his **education, CGPA, and certifications**.
• Help you **hire Nathesh, download his resume**, or **send him an inquiry**!`,
      suggestions: [
        "What services does Nathesh offer?",
        "Show featured projects",
        "How to contact him?",
      ],
      actions: [
        { label: "Explore Projects", type: "scroll", value: "#projects" },
        { label: "Contact Nathesh", type: "scroll", value: "#contact" },
      ],
    }
  }

  // 3. Who is Nathesh / About / Background / Summary
  if (/(who is nathesh|about nathesh|tell me about (him|nathesh|yourself)|bio|background|summary|overview|profile|introduce)/i.test(clean)) {
    return {
      text: `**${NATHESH_PROFILE.name}** is a passionate **Web Developer & Web Designer** with strong expertise in Full-Stack development and Machine Learning with Python.

Key Highlights:
• **Education**: B.E. in Computer Science and Engineering from Coimbatore Institute of Engineering and Technology (CIET).
• **Diploma**: Kongu Polytechnic College with **91% distinction**.
• **Experience**: 4+ years of hands-on coding, including a 4-month Machine Learning internship at **Grandtwin, Chennai**.
• **Research**: Lead author & presenter of a research paper at the **CIETM-2026 National Conference**.
• **Status**: Currently **Available for Seeking Job** & freelance opportunities.`,
      suggestions: [
        "What are his technical skills?",
        "Tell me about his projects",
        "Download his resume",
        "How can I hire him?",
      ],
      actions: [
        { label: "Read About Section", type: "scroll", value: "#about" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
        { label: "Contact Form", type: "scroll", value: "#contact" },
      ],
    }
  }

  // 4. Skills & Tech Stack
  if (/(skill|skills|tech stack|technologies|programming language|tools|frontend|backend|framework|database|python|javascript|html|css|xgboost|machine learning skills)/i.test(clean)) {
    return {
      text: `Here is a breakdown of **Nathesh's Technical Skills & Stack**:

🌐 **Frontend & UI/UX**:
• HTML5, CSS3, JavaScript, Responsive Web Design, Tailwind CSS

⚙️ **Backend & APIs**:
• Python, Java, PHP, Flask RESTful APIs

🤖 **Machine Learning & Data Science**:
• XGBoost, Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn
• Predictive Maintenance, Classification, Anomaly Detection, Feature Engineering

🗄️ **Databases**:
• MySQL

🛠️ **Tools & Software**:
• VS Code, Streamlit, Git & GitHub, Canva, VirtualBox, MS Office, Computer Hardware`,
      suggestions: [
        "Show projects using Python & ML",
        "Tell me about his ML internship",
        "What web dev services does he offer?",
      ],
      actions: [
        { label: "Jump to Skills Section", type: "scroll", value: "#skills" },
        { label: "View Projects", type: "scroll", value: "#projects" },
      ],
    }
  }

  // 5. Specific Project: Phishing
  if (/(phishing|email security|detect phishing|block phishing)/i.test(clean)) {
    const p = NATHESH_PROFILE.projects[0]
    return {
      text: `🛡️ **${p.title}**

• **Overview**: An intelligent email cybersecurity system powered by Machine Learning that detects and stops deceptive phishing emails with high classification accuracy.
• **Tech Stack**: ${p.tech}
• **Nathesh's Role**: Handled both frontend interface design and Python/Flask backend logic along with training the XGBoost classifier.`,
      suggestions: [
        "Tell me about Cyber Breach Detection project",
        "Tell me about Predictive Maintenance project",
        "All projects",
      ],
      actions: [
        { label: "View on GitHub", type: "url", value: p.github },
        { label: "Projects Section", type: "scroll", value: "#projects" },
      ],
    }
  }

  // 6. Specific Project: Cyber Breach / CIETM
  if (/(breach|cyber hacking|hacking breach|intrusion|cietm)/i.test(clean)) {
    const p = NATHESH_PROFILE.projects[1]
    return {
      text: `🔐 **${p.title}**

• **Overview**: An AI-driven cybersecurity platform designed to predict and detect multi-vector network intrusions and cyber breaches using XGBoost.
• **Conference Presentation**: Proudly presented at the **CIETM-2026 National Conference on Contemporary Innovations in Engineering, Technology, and Management**.
• **Leadership**: Nathesh led the team, oversaw the frontend design, backend programming, and presentation before academic and industrial evaluators.
• **Tech Stack**: ${p.tech}`,
      suggestions: [
        "Tell me more about CIETM-2026",
        "What other projects did he build?",
        "Download Nathesh's Resume",
      ],
      actions: [
        { label: "View Research & Awards", type: "scroll", value: "#research" },
        { label: "View on GitHub", type: "url", value: p.github },
      ],
    }
  }

  // 7. Specific Project: Predictive Maintenance
  if (/(predictive maintenance|industrial|equipment|remaining useful life|rul|mttf|grandtwin)/i.test(clean)) {
    const p = NATHESH_PROFILE.projects[2]
    return {
      text: `🏭 **${p.title}**

• **Overview**: Developed during Nathesh's 4-month ML internship at **Grandtwin, Chennai**. It predicts the Remaining Useful Life (RUL) of industrial machinery by evaluating vibration and thermal telemetry.
• **Key Highlights**: Preprocessed raw sensor streams, extracted frequency-domain indicators (RMS, Kurtosis, Crest Factor), and trained Gradient Boosting / XGBoost regression models.
• **Interface**: Interactive Streamlit dashboard with real-time heatmaps and metric plots.
• **Tech Stack**: ${p.tech}`,
      suggestions: [
        "Tell me more about the Grandtwin internship",
        "What other ML skills does he have?",
        "Check his certificates",
      ],
      actions: [
        { label: "View Internship Section", type: "scroll", value: "#internship" },
        { label: "View Project on GitHub", type: "url", value: p.github },
      ],
    }
  }

  // 8. Specific Project: Steganography / SDSA
  if (/(steganography|image steganography|sdsa|c#|diploma project)/i.test(clean)) {
    const p = NATHESH_PROFILE.projects[3]
    return {
      text: `🖼️ **${p.title}**

• **Overview**: Built as his final year diploma project at Kongu Polytechnic College. An advanced cryptographic steganography application that conceals confidential data inside image files.
• **Algorithm**: Spatially De-synchronization Steganography Algorithm (SDSA) for maximum imperceptibility and resistance to steganalysis.
• **Nathesh's Role**: Team leader and frontend/logic programmer in C#.
• **Tech Stack**: ${p.tech}`,
      suggestions: [
        "Tell me about his diploma education",
        "What other projects has he built?",
      ],
      actions: [
        { label: "View on GitHub", type: "url", value: p.github },
        { label: "View Education", type: "scroll", value: "#education" },
      ],
    }
  }

  // 9. All Projects
  if (/(project|projects|portfolio work|built|github|showcase)/i.test(clean)) {
    return {
      text: `🚀 **Featured Projects by Nathesh**:

1. **AI System to Identify and Block Phishing Emails**
   • XGBoost ML classification, Python, Flask, HTML/CSS.
2. **Cyber Hacking Breach Prediction and Detection**
   • CIETM-2026 presented, XGBoost, Flask, full-stack cybersecurity defense.
3. **AI-Powered Predictive Maintenance System for Industrial Equipment**
   • Remaining Useful Life (RUL) prediction, sensor telemetry processing, Streamlit dashboard.
4. **Image Steganography using Modified SDSA Algorithm**
   • Cryptographic image steganography built in C#.`,
      suggestions: [
        "Tell me about the Phishing project",
        "Tell me about the Predictive Maintenance project",
        "Visit his GitHub profile",
      ],
      actions: [
        { label: "Explore Projects Section", type: "scroll", value: "#projects" },
        { label: "Nathesh's GitHub", type: "url", value: NATHESH_PROFILE.github },
      ],
    }
  }

  // 10. Internship Experience / Grandtwin
  if (/(intern|internship|experience|work experience|job history|grandtwin|chennai)/i.test(clean)) {
    const i = NATHESH_PROFILE.internship
    return {
      text: `💼 **Machine Learning Internship at ${i.company} (${i.location})**

• **Role**: ${i.role} (4 Months duration)
• **Key Project**: ${i.project}

**Key Contributions**:
• Preprocessed and synchronized high-frequency vibration and thermal sensor telemetry.
• Extracted statistical frequency-domain indicators (RMS, Kurtosis, Crest Factor).
• Formulated supervised classification and regression models to predict Mean Time To Failure (MTTF).
• Created modular Python pipelines with NumPy, Pandas, Scikit-Learn, and Streamlit.
• Validated models using ROC-AUC and Precision-Recall metrics to prevent false alarm stoppages.`,
      suggestions: [
        "What are his ML skills?",
        "Tell me about the Predictive Maintenance project",
        "How can I contact him?",
      ],
      actions: [
        { label: "View Internship Section", type: "scroll", value: "#internship" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
      ],
    }
  }

  // 11. Research / Conference / CIETM-2026 / Publications
  if (/(research|conference|paper|publication|cietm|presentation|achievement|award)/i.test(clean)) {
    const r = NATHESH_PROFILE.research
    return {
      text: `🔬 **Research & Conference Presentation**:

• **Paper Title**: *"${r.paperTitle}"*
• **Conference**: ${r.conference}
• **Organizer**: CIET (${r.date})

**Key Achievements**:
🏆 **Conference Presentation Honor**: Presented empirical findings before academic and industrial evaluators.
👑 **Dual Project Team Leadership**: Selected as Team Leader for both B.E. research and Diploma final year project.
⚡ **Applied AI Deployment**: Built working end-to-end Machine Learning systems with Flask REST backends.`,
      suggestions: [
        "Tell me about the Breach Detection project",
        "What are his certificates?",
        "Check his education",
      ],
      actions: [
        { label: "View Research Section", type: "scroll", value: "#research" },
        { label: "View Certificates", type: "scroll", value: "#certificates" },
      ],
    }
  }

  // 12. Education & College & Marks
  if (/(education|college|degree|b\.e|bachelor|diploma|school|sslc|cgpa|percentage|marks|study|qualification)/i.test(clean)) {
    return {
      text: `🎓 **Educational Background**:

1. **Bachelor of Engineering (B.E.) in Computer Science & Engineering**
   • Institution: Coimbatore Institute of Engineering and Technology (CIET)
   • Period: 2023 - 2026
   • Status: Completed (CGPA: **6.48**)

2. **Diploma in Computer Technology**
   • Institution: Kongu Polytechnic College, Erode
   • Period: 2020 - 2023
   • Status: Completed with **91% Distinction**

3. **Secondary School Leaving Certificate (SSLC)**
   • Institution: Sri Sakthi Supreme Ideal Vikas Matric Hr Sec School
   • Period: 2019 - 2020
   • Percentage: **62.8%**`,
      suggestions: [
        "Tell me about his certifications",
        "What projects did he do in college?",
        "Download Resume",
      ],
      actions: [
        { label: "View Education Section", type: "scroll", value: "#education" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
      ],
    }
  }

  // 13. Certificates
  if (/(certificate|certificates|certified|certification|nvidia|novitech|infosys)/i.test(clean)) {
    return {
      text: `📜 **Certifications & Accreditations**:

1. **Cyber Hacking Breaches Detection & Prediction**
   • National Conference on Contemporary Innovations in Engineering, Technology & Management (CIETM-2026).
2. **Fundamentals of Deep Learning**
   • NVIDIA Deep Learning Institute (2024).
3. **Full Stack Development**
   • NoviTech R&D Private Limited (Dec 2025 - Jan 2026).
4. **Web Development using PHP Programming and MySQL**
   • Infosys Springboard (2025).`,
      suggestions: [
        "View research presentation",
        "What are his technical skills?",
        "How can I hire him?",
      ],
      actions: [
        { label: "View Certificates Section", type: "scroll", value: "#certificates" },
        { label: "Contact Nathesh", type: "scroll", value: "#contact" },
      ],
    }
  }

  // 14. Services / What can you build / Freelance / Facility Services
  if (/(service|services|facility|what can he (do|build)|hire for|offer|freelance|consulting|web design service|ml service)/i.test(clean)) {
    return {
      text: `🛠️ **Services & Facilities Provided by Nathesh**:

1. **Modern Full-Stack Web Development**
   • Fast, responsive web applications built with Next.js, React, HTML5, CSS3, JavaScript, and Tailwind CSS.
2. **Web Design & UI/UX Crafting**
   • Clean, modern, intuitive user interfaces with responsive layout, dark/light modes, and micro-interactions.
3. **Applied Machine Learning & Predictive Systems**
   • Classification, regression, and anomaly detection models (e.g. XGBoost, predictive maintenance, security defense).
4. **Python Backend & REST API Development**
   • Clean modular RESTful APIs using Python & Flask connected to MySQL databases.
5. **Interactive AI Chatbots for Websites**
   • Smart 24/7 conversational question-response chatbots integrated seamlessly into client sites.`,
      suggestions: [
        "How can I hire Nathesh?",
        "Send Nathesh a message",
        "View his past projects",
      ],
      actions: [
        { label: "Get in Touch to Hire", type: "scroll", value: "#contact" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
        { label: "Email Directly", type: "url", value: `mailto:${NATHESH_PROFILE.email}` },
      ],
    }
  }

  // 15. Contact / Hire / Email / Phone / Location / Resume
  if (/(contact|hire|job|email|phone|call|location|address|where|resume|cv|reach|touch|available)/i.test(clean)) {
    return {
      text: `📬 **Contact & Hiring Information**:

• **Current Status**: 🟢 Available for Seeking Job / Full-time Roles & Projects
• **Email**: [${NATHESH_PROFILE.email}](mailto:${NATHESH_PROFILE.email})
• **Phone**: [${NATHESH_PROFILE.phone}](tel:+919361255171)
• **Location**: ${NATHESH_PROFILE.location}
• **GitHub**: [github.com/NATHESH6](${NATHESH_PROFILE.github})

You can send him an inquiry directly via the contact form on this website or download his full CV!`,
      suggestions: [
        "Download Resume",
        "Open Contact Form",
        "What services does he offer?",
      ],
      actions: [
        { label: "Go to Contact Form", type: "scroll", value: "#contact" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
        { label: "Send Email", type: "url", value: `mailto:${NATHESH_PROFILE.email}` },
        { label: "Call Nathesh", type: "url", value: `tel:+919361255171` },
      ],
    }
  }

  // 16. Resume / CV specifically
  if (/(resume|cv|curriculum vitae|download resume)/i.test(clean)) {
    return {
      text: `📄 You can download **Nathesh's latest Resume** in PDF format directly:

Click the button below to start the download, or inspect his projects and education here on this portfolio!`,
      suggestions: [
        "Tell me about his education",
        "What are his top projects?",
        "Contact Nathesh",
      ],
      actions: [
        { label: "Download Resume (PDF)", type: "download", value: NATHESH_PROFILE.resumePath },
        { label: "View About", type: "scroll", value: "#about" },
      ],
    }
  }

  // 17. Thank you / Good / Great
  if (/(thank|thanks|great|awesome|cool|good job|nice|appreciate)/i.test(clean)) {
    return {
      text: `You're very welcome! 😊 

Feel free to ask more questions, explore Nathesh's projects, or reach out to him if you have an exciting opportunity or project collaboration!`,
      suggestions: [
        "What services does he offer?",
        "Show featured projects",
        "Contact Nathesh",
      ],
      actions: [
        { label: "Contact Nathesh", type: "scroll", value: "#contact" },
        { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
      ],
    }
  }

  // 18. Default fallback with smart guidance
  return {
    text: `I'd love to help answer that! While I might not have specific notes on that exact phrase, I know all about **Nathesh's portfolio**:

• **Technical Skills**: Web Development, Python, Machine Learning (XGBoost, Scikit-Learn), MySQL
• **Projects**: Phishing Email Blocker, Cyber Breach Prediction, Industrial Predictive Maintenance, Image Steganography
• **Experience**: 4-Month ML Internship at Grandtwin, Chennai
• **Research**: CIETM-2026 National Conference Presentation
• **Education & Certifications**: B.E. at CIET, Kongu Polytechnic (91%), NVIDIA & NoviTech Certificates
• **Hiring & Contact**: Email, Phone, Location & downloadable Resume

What would you like to explore?`,
    suggestions: [
      "Who is Nathesh?",
      "What are his skills?",
      "Tell me about his projects",
      "How can I contact him?",
    ],
    actions: [
      { label: "Contact Nathesh", type: "scroll", value: "#contact" },
      { label: "Download Resume", type: "download", value: NATHESH_PROFILE.resumePath },
    ],
  }
}
