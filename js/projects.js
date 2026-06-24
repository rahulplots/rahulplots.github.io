/*projects.js  -  Centralized data source for Skills, Projects, Experience, and Reviews.
   To add a new project, simply add a new object to the `projects` array.*/

const skills = [
  {
    name: 'Python',
    description: 'Data manipulation, automation, and analysis using Pandas, NumPy, and Matplotlib for end-to-end workflows.',
    icon: 'code',
    tags: ['EDA', 'OOps', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    name: 'SQL',
    description: 'Complex queries, joins, CTEs, window functions, and database design for analytical workloads.',
    icon: 'database',
    tags: ['MySQL', 'PostgreSQL', 'Joins','Subqueries']
  },
  {
    name: 'Microsoft Excel',
    description: 'Advanced formulas, pivot tables, VLOOKUP, INDEX-MATCH, and what-if analysis for rapid reporting.',
    icon: 'sheet',
    tags: ['Pivot Tables', 'VLOOKUP', 'Charts', 'Dynamic Dashboards']
  },
  {
    name: 'Power BI',
    description: 'Interactive dashboards, DAX measures, data modelling, and storytelling through visuals.',
    icon: 'chart',
    tags: ['DAX', 'Power Query', 'Reports','Storytelling']
  },
  {
    name: 'Tableau',
    description: 'Drag-and-drop dashboards, calculated fields, parameters, and visual storytelling.',
    icon: 'chart',
    tags: ['Calculations', 'Stories', 'Filters','Parameters']
  },
  {
    name: 'Pandas',
    description: 'DataFrames, groupby operations, merging, reshaping, and time-series analysis.',
    icon: 'code',
    tags: ['DataFrames', 'GroupBy', 'Merge']
  },
  {
    name: 'NumPy',
    description: 'Numerical computing with arrays, broadcasting, and vectorized operations for fast analysis.',
    icon: 'code',
    tags: ['Arrays', 'Broadcasting', 'Math']
  },
  {
    name: 'Data Visualization',
    description: 'Choosing the right chart, designing clear visuals, and presenting insights with impact.',
    icon: 'chart',
    tags: ['Charts', 'Design', 'Storytelling']
  },
  {
    name: 'Data Cleaning',
    description: 'Handling missing values, duplicates, outliers, and standardising messy real-world datasets.',
    icon: 'clean',
    tags: ['Missing Data', 'Outliers', 'ETL']
  },
  {
    name: 'EDA',
    description: 'Exploratory Data Analysis to discover patterns, anomalies, and test hypotheses quickly.',
    icon: 'search',
    tags: ['Statistics', 'Insights', 'Trends']
  },
  {
    name: 'Machine Learning',
    description: 'Building predictive models, classification, and regression using Scikit-Learn to forecast business trends.',
    icon: 'cpu',
    tags: ['Scikit-Learn', 'Predictive Analysis', 'Forecasting']
  },
  {
    name: 'Git & Version Control',
    description: 'Managing code versions, collaborating via GitHub, and setting up reproducible Python virtual environments.',
    icon: 'git-branch',
    tags: ['Git', 'GitHub', 'Virtual Env', 'Pipelines']
  }
];

const projects = [
  {
    title: 'PhonePe Transaction Analytics Dashboard',
    description: 'An end-to-end analytics Interactive Power BI dashboard analyzing PhonePe transactions, user behavior, service performance, and payment trends using DAX, KPIs, and business storytelling.',
    category: 'Transaction Analytics',
    tools: ['Power BI','Excel'],
    thumbVariant: 'default',
    image: "assets/images/projects/dashboard_preview.png",
    github: 'https://github.com/rahulplots/PhonePe-Analytics-Dashboard',
    caseStudy: '#'
  },
  {
    title: 'Customer Churn Analysis',
    description: 'Identified churn drivers and predicted at-risk customers using behavioural features and segmentation.',
    category: 'Customer Analytics',
    tools: ['Python', 'Pandas', 'Tableau'],
    thumbVariant: 'alt-1',
    github: 'https://github.com/rahul-kumar/customer-churn',
    caseStudy: '#'
  },
  {
    title: 'Retail Insights Dashboard',
    description: 'Multi-store retail dashboard covering basket analysis, inventory turnover, and category performance.',
    category: 'Retail Analytics',
    tools: ['Tableau', 'SQL', 'Excel'],
    thumbVariant: 'alt-2',
    github: 'https://github.com/rahul-kumar/retail-insights',
    caseStudy: '#'
  },
  {
    title: 'E-Commerce Analytics',
    description: 'Conversion funnel, traffic sources, cart abandonment, and product page performance for an online store.',
    category: 'Digital Analytics',
    tools: ['Python', 'Power BI'],
    thumbVariant: 'default',
    github: 'https://github.com/rahul-kumar/ecommerce-analytics',
    caseStudy: '#'
  },
  {
    title: 'Financial KPI Dashboard',
    description: 'Executive financial dashboard tracking P&amp;L, cash flow, and budget vs actuals across departments.',
    category: 'Finance',
    tools: ['Power BI', 'SQL', 'DAX'],
    thumbVariant: 'alt-1',
    github: 'https://github.com/rahul-kumar/financial-kpi',
    caseStudy: '#'
  },
  {
    title: 'Marketing Campaign Analysis',
    description: 'ROI, CAC, channel attribution, and A/B test results analysed to optimise future marketing spend.',
    category: 'Marketing Analytics',
    tools: ['Python', 'Tableau', 'Excel'],
    thumbVariant: 'alt-2',
    github: 'https://github.com/rahul-kumar/marketing-campaign',
    caseStudy: '#'
  }
];

const experience = [
  {
    date: '2026 — Present',
    role: 'Self-Directed Learning & Projects',
    org: 'Independent Data Analyst Track',
    description: 'Building portfolio-grade projects and Designing real-world analytics solutions for diverse business sectors. Focused on extracting clean data, building predictive models, and uncovering the hidden stories within complex datasets using SQL, Python, and BI tools.',
    tags: ['Python', 'SQL', 'Power BI', 'Tableau']
  },
  {
    date: '2026',
    role: 'Data Analytics Intern',
    org: 'Analytics Internship Program (Virtual)',
    description: 'Architecting end-to-end analytical solutions across finance, healthcare, and retail sectors. Leveraging advanced SQL for data extraction, Python for rigorous EDA, and machine learning models to translate complex datasets into actionable, data-driven business strategies.',
    tags: ['Microsoft Excel', 'Advanced SQL','Python (Pandas/NumPy)', 'BI & Storytelling']
  },
  {
    date: '2025 - 2026 (Present)',
    role: 'Data Science Professional Course',
    org: 'Ducat AI',
    description: 'Enrolled in a comprehensive Data Science Professional Course designed to bridge the gap between academic learning and industry requirements. The program has strengthened my understanding of data analytics, business intelligence, statistical analysis, and data visualization through extensive hands-on practice. Working with tools such as Microsoft Excel, SQL, Power BI, Tableau, and Python, I have gained experience in data cleaning, exploratory data analysis, dashboard development, and insight-driven storytelling. Currently, I am advancing into machine learning, predictive analytics, and Generative AI, learning how intelligent systems can automate processes and support data-driven decision making. This journey continues to enhance my technical expertise, business perspective, and ability to solve real-world problems using data.',
    tags: ['Data Analytics', 'Machine Learning', 'Generative AI', 'Python & Statistics']
  },
  {
    date: '2024 - 2028 (Expected)',
    role: "Bachelor's Degree in Data Science",
    org: 'SDGI Global University(SGU).',
    description:'Pursuing a Bachelor’s degree in Data Science with a strong focus on analytics, statistics, database management, and data-driven decision making. Throughout my academic journey, I have explored subjects such as Programming, data Science Foundations, database management, statistical methods, machine learning fundamentals, business intelligence, and data visualization through coursework and hands-on projects. Beyond academics, I actively explore real-world datasets, build interactive dashboards, and practice data storytelling to transform raw data into actionable insights. This journey has strengthened my analytical thinking, problem-solving abilities, and business understanding while preparing me to create meaningful impact through data and analytics.',
    tags: ['Statistics', 'CS Fundamentals','Programming','Problem Solving','storytelling']
  },
   {
    date: '2022 - 2024',
    role: 'Higher Secondary Education (PCM)',
    org: 'Shahid Bhagat Singh Senior Secondary School, East Champaran, Bihar',
    description: 'Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics under the Bihar School Examination Board, achieving 60%. The rigorous study of mathematical and scientific concepts helped develop strong analytical, logical, and problem-solving skills. This academic foundation played a key role in shaping my interest in technology, data-driven thinking, and quantitative analysis, ultimately inspiring my journey toward Data Science and Analytics.',
    tags: ['Math  ematics', 'Logical Reasoning', 'Analytical Thinking','Problem Solving']
  }
];

const reviews = [
  {
    name: 'ChatGPT (OpenAI)',
    role: 'AI Portfolio Assessment (ChatGPT)',
    initials: 'AS',
    avatarClass: '',
    rating: 5,
    text: "A highly motivated Data Science student with a solid foundation in analytics and business intelligence. Rahul's portfolio highlights technical versatility, curiosity, and a strong ability to communicate insights through dashboards and storytelling. His focus on practical projects and continuous skill development indicates strong potential for future roles in Data Analytics, Business Intelligence, and Data Science.",
  },
    {
    name: 'Claude (Anthropic)',
    role: 'AI Project Review — PhonePe Analytics Dashboard',
    initials: 'CL',
    avatarClass: '',
    rating: 5,
    text: "Reviewed the PhonePe Payment Insights Dashboard repo: well-structured DAX measures, clear KPI framing (300K transactions, ₹3.47B value, 96% success rate), and an honest 'what I learned' writeup that reads as genuine reflection rather than filler. The project shows real grasp of business storytelling through data, not just chart-building.",
    },
  {
    name: 'Gemini (Google)',
    role: 'AI Profile Evaluation — Academic & Skill Foundation',
    initials: 'GM',
    avatarClass: '',
    rating: 5,
    text: "Analyzed the profile of this Passionate Data Scientist & Analyst. The ongoing academic progression at SDGI Global University (2024 - 2028) combined with advanced Python, SQL, and Gen-AI capabilities demonstrates a strong, future-ready foundation for predictive analytics."
  },
  // {
  //   name: 'Vikram Singh',
  //   role: 'BI Lead',
  //   initials: 'VS',
  //   avatarClass: 'avatar-4',
  //   rating: 5,
  //   text: 'Reviewed Rahul\'s Power BI work — the DAX is well structured, the model is sensible, and the report tells a story end-to-end. The kind of work you would expect from a mid-level analyst.'
  // },
  // {
  //   name: 'Neha Kapoor',
  //   role: 'Marketing Director',
  //   initials: 'NK',
  //   avatarClass: 'avatar-5',
  //   rating: 5,
  //   text: 'Rahul built a marketing attribution analysis for us that finally made our channel performance legible. Clear visuals, clear recommendations, and very easy to work with.'
  // },
  // {
  //   name: 'Arjun Mehta',
  //   role: 'Founder · Startup',
  //   initials: 'AM',
  //   avatarClass: 'avatar-6',
  //   rating: 5,
  //   text: 'I needed quick, reliable analysis on early traction metrics. Rahul delivered a clean, well-structured report inside a tight deadline. Will absolutely hire again.'
  // }
];

/*  Skill icon library (inline SVG)*/
const ICONS = {
  code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  database: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  sheet: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
  chart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  clean: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  search: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
};

/*Renderers*/

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skills.map((s, i) => `
    <article class="skill-card reveal" data-delay="${(i % 6) + 1}">
      <div class="skill-icon" aria-hidden="true">${ICONS[s.icon] || ICONS.chart}</div>
      <h4>${s.name}</h4>
      <p>${s.description}</p>
      <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    </article>
  `).join('');
}

function renderProjects() {
  let thumbBars = '';
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => {
    let thumbBars = '';
    if (p.thumbVariant === 'alt-1') {
      thumbBars = `
        <div class="thumb-bar short"></div>
        <div class="thumb-row">
          <div class="thumb-tile alt-1"></div>
          <div class="thumb-tile alt-1"></div>
          <div class="thumb-tile"></div>
        </div>
        <div class="thumb-bar full"></div>
      `;
    } else if (p.thumbVariant === 'alt-2') {
      thumbBars = `
        <div class="thumb-bar"></div>
        <div class="thumb-row">
          <div class="thumb-tile alt-2"></div>
          <div class="thumb-tile alt-2"></div>
        </div>
        <div class="thumb-bar full"></div>
        <div class="thumb-bar short"></div>
      `;
    } else {
      thumbBars = `
        <div class="thumb-bar"></div>
        <div class="thumb-row">
          <div class="thumb-tile alt"></div>
          <div class="thumb-tile"></div>
        </div>
        <div class="thumb-bar full"></div>
      `;
    }

    const thumbContent = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="project-thumb-img" loading="lazy">`
      : `<div class="project-thumb-inner">
          <div class="project-thumb-card">${thumbBars}</div>
        </div>`;

    return `
    
    <article class="project-card reveal" data-delay="${(i % 4) + 1}">
      <div class="project-thumb">
        ${thumbContent}
        <div class="project-overlay">
          <a href="${p.caseStudy}" class="project-overlay-btn" aria-label="View case study">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-category">${p.category}</div>
        <h4>${p.title}</h4>
        <p>${p.description}</p>
        <div class="project-tools">${p.tools.map(t => `<span class="project-tool">${t}</span>`).join('')}</div>
        <div class="project-actions">
          <a href="${p.github}" class="btn btn-secondary" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="${p.caseStudy}" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Case Study
          </a>
        </div>
      </div>
    </article>`;
  }).join('');
}

function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;
  timeline.innerHTML = experience.map((e, i) => `
    <div class="timeline-item reveal" data-delay="${(i % 3) + 1}">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-content">
        <div class="timeline-date">${e.date}</div>
        <h4>${e.role}</h4>
        <div class="timeline-org">${e.org}</div>
        <p>${e.description}</p>
        <div class="timeline-tags">${e.tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;

  const stars = '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  track.innerHTML = reviews.map(r => `
    <article class="review-card" role="group" aria-label="Review by ${r.name}">
      <div class="review-quote" aria-hidden="true">"</div>
      <div class="review-stars" aria-label="${r.rating} out of 5 stars">${stars.repeat(r.rating)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <div class="review-avatar ${r.avatarClass}" aria-hidden="true">${r.initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-role">${r.role}</div>
        </div>
      </div>
    </article>
  `).join('');
}

/*Boot*/
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderExperience();
  renderReviews();
});