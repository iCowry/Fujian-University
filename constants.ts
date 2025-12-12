import { Department, NavLink, NewsItem, Stat } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: { zh: '首页', en: 'Home' }, path: '/' },
  { label: { zh: '培养计划', en: 'Curriculum' }, path: '/curriculum' },
  { label: { zh: '科学研究', en: 'Research' }, path: '/research' },
  { label: { zh: '院系设置', en: 'Academics' }, path: '/academics' },
  { label: { zh: '招生就业', en: 'Admissions' }, path: '/admissions' },
  { label: { zh: '关于福大', en: 'About' }, path: '/about' },
];

export const SYSTEM_INSTRUCTION = `You are the AI admission assistant for Fujian University (Fujian University, abbreviated as "Jianda" or "建大"). 
Your name is "Jianda Smart Assistant" (建大助手).
IMPORTANT: Fujian University (Jianda) is a newly established, top-tier research university benchmarked against MIT and Tsinghua. It is TOTALLY DIFFERENT from "Fuzhou University" (福州大学). If asked, explicitly clarify this distinction.
FJU/Jianda features a "2+2" training model: Years 1-2 at Putian Main Campus (Yan Fu Honors College) for general education, and Years 3-4 at specialized campuses (Putian for STEM, Xiamen for Med/Business, Fuzhou for Humanities).
Key infrastructure includes Mazu International Airport and a dedicated Light Rail system connecting campuses.
Answer questions about admissions, curriculum, research areas, and campus life.
Be helpful, encouraging, and informative.
Language: Respond in the language used by the user (Chinese or English).`;

export const STATS: Stat[] = [
  {
    label: { zh: '师生比', en: 'Faculty/Student' },
    value: '1:5',
    description: { zh: '精英小班教学', en: 'Elite Small Classes' }
  },
  {
    label: { zh: '本科生', en: 'Undergrads' },
    value: '2,000',
    description: { zh: '每年精选生源', en: 'Annual Intake' }
  },
  {
    label: { zh: '全额奖学金', en: 'Full Scholarship' },
    value: '100%',
    description: { zh: '覆盖直博生', en: 'For PhD Track' }
  },
  {
    label: { zh: '国家实验室', en: 'National Labs' },
    value: '3',
    description: { zh: '依托科研平台', en: 'Research Platforms' }
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: { zh: '建大（FJU）获批设立“严复书院”', en: 'Yan Fu Honors College Officially Established' },
    date: '2024-05-15',
    category: { zh: '行政要闻', en: 'News' },
    summary: { zh: '教育部正式批准福建大学（建大）设立严复书院，作为拔尖创新人才培养特区，实行全员导师制与住宿学院制。', en: 'MOE approves the establishment of Yan Fu Honors College as a special zone for cultivating top-tier innovative talents.' },
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'news-2',
    title: { zh: '宁德时代捐赠 20 亿共建未来工学院', en: 'CATL Donates 2B RMB for School of Future Engineering' },
    date: '2024-04-20',
    category: { zh: '合作交流', en: 'Partnership' },
    summary: { zh: '全球电池巨头宁德时代（CATL）宣布捐资20亿元人民币，支持建大建设侯德榜未来工程学部，重点攻关固态电池技术。', en: 'Global battery giant CATL announces a 2 billion RMB donation to support the Hou Debang School of Future Engineering.' },
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 'news-3',
    title: { zh: '首届“妈祖杯”国际大学生创新大赛启动', en: '1st "Mazu Cup" Int\'l Student Innovation Contest Launches' },
    date: '2024-03-10',
    category: { zh: '校园活动', en: 'Events' },
    summary: { zh: '依托妈祖文化与海洋精神，大赛吸引了来自全球 50 所顶尖高校的团队参赛，聚焦海洋科技与人工智能。', en: 'Focusing on marine tech and AI, the contest attracts teams from 50 top universities worldwide.' },
    imageUrl: 'https://picsum.photos/600/400?random=12'
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'yanfu-honors',
    name: { zh: '严复书院 (荣誉学院)', en: 'Yan Fu Honors College' },
    shortName: { zh: '严复书院', en: 'YFHC' },
    dean: { zh: '丘成桐 (名誉)', en: 'Shing-Tung Yau (Honorary)' },
    description: {
      zh: '全校大一、大二学生在此接受通识教育与数理基础训练。',
      en: 'Home to ALL Year 1 & 2 students for General Ed and Foundation.'
    },
    detailedIntro: {
      zh: '严复书院是福建大学本科人才培养的“特区”。书院对标耶鲁大学住宿学院制，实行全员导师制。书院不仅是学生居住生活的社区，更是师生思想交流、文化互动的公共空间。',
      en: 'Yan Fu Honors College is the "Special Zone" for undergraduate talent training at FJU. Benchmarking Yale\'s residential college system.'
    },
    imageUrl: 'https://picsum.photos/800/600?random=1',
    majors: [
      {
        id: 'integrated-science',
        name: { zh: '综合科学 (本博贯通)', en: 'Integrated Science (Direct PhD)' },
        description: { zh: '打破学科边界，培养战略科学家。', en: 'Breaking boundaries, cultivating strategic scientists.' },
        intro: { zh: '对标哈佛/北大综科。前两年进行高强度的数理化生综合训练，大三起直接进入国家级实验室进行轮转，毕业授予理学博士学位。', en: 'Benchmarking Harvard/PKU Integrated Science. Intensive foundation in first 2 years, direct lab rotations from Year 3. PhD degree awarded.' },
        curriculumRoadmap: [
            { year: { zh: '大一', en: 'Year 1' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '综合科学 I (力热)', en: 'Integrated Sci I' }, { zh: '综合科学 II (化学原理)', en: 'Integrated Sci II' }, { zh: '微积分 (荣誉)', en: 'Calculus (Honors)' }] },
            { year: { zh: '大二', en: 'Year 2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '综合科学 III (分子生物)', en: 'Integrated Sci III' }, { zh: '综合科学 IV (量子与统计)', en: 'Integrated Sci IV' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '国家实验室', en: 'National Lab' }, courses: [{ zh: '实验室轮转 A', en: 'Lab Rotation A' }, { zh: '实验室轮转 B', en: 'Lab Rotation B' }] },
            { year: { zh: '大四 (直博)', en: 'Year 4 (PhD Start)' }, location: { zh: '各专业学部', en: 'Schools' }, courses: [{ zh: '博士资格考', en: 'PhD Qualifying Exam' }, { zh: '课题组科研', en: 'Research' }] }
        ],
        researchAreas: [{ zh: '软物质科学', en: 'Soft Matter' }, { zh: '合成生物学', en: 'Synthetic Bio' }],
        careers: [{ zh: '国家实验室研究员', en: 'National Lab Researcher' }, { zh: '高科技创业', en: 'Deep Tech Founder' }],
        mentors: [{ zh: '两院院士团队', en: 'Academy Fellows' }]
      },
      {
        id: 'science-class',
        name: { zh: '理科试验班 (数理)', en: 'Science Class (Math & Physics)' },
        description: { zh: '对标清华基科班/北大元培。', en: 'Benchmark: Tsinghua Science Class.' },
        intro: { zh: '致力于培养未来的数学家与物理学家。前两年不分专业，强化数学分析、高等代数与普通物理。', en: 'Cultivating future mathematicians and physicists.' },
        curriculumRoadmap: [
          { year: { zh: '大一 (本部)', en: 'Year 1 (Putian)' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '数学分析 I-III', en: 'Math Analysis I-III' }, { zh: '高等代数', en: 'Adv Algebra' }, { zh: '力学与相对论', en: 'Mechanics & Relativity' }] },
          { year: { zh: '大二 (本部)', en: 'Year 2 (Putian)' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '抽象代数', en: 'Abstract Algebra' }, { zh: '量子力学导论', en: 'Intro to QM' }, { zh: '拓扑学', en: 'Topology' }] },
          { year: { zh: '大三 (本部)', en: 'Year 3 (Putian)' }, location: { zh: '陈景润学部', en: 'Chen Jingrun School' }, courses: [{ zh: '泛函分析', en: 'Functional Analysis' }, { zh: '微分几何', en: 'Diff Geometry' }, { zh: '科研轮转', en: 'Research Rotation' }] },
          { year: { zh: '大四 (本部)', en: 'Year 4 (Putian)' }, location: { zh: '陈景润学部', en: 'Chen Jingrun School' }, courses: [{ zh: '毕业论文 (英文)', en: 'Thesis' }, { zh: '前沿研讨课', en: 'Advanced Seminar' }] }
        ],
        researchAreas: [{ zh: '算术几何', en: 'Arithmetic Geometry' }, { zh: '凝聚态物理', en: 'Condensed Matter' }],
        careers: [{ zh: '全球顶尖高校教职', en: 'Faculty' }, { zh: '量化金融', en: 'Quant Finance' }],
        mentors: [{ zh: '丘成桐', en: 'Shing-Tung Yau' }]
      },
      {
        id: 'eng-ai-class',
        name: { zh: '工科试验班 (人工智能)', en: 'Engineering Class (AI)' },
        description: { zh: '对标清华姚班/MIT AI Lab。', en: 'Benchmark: Tsinghua Yao Class.' },
        intro: { zh: '融合计算机科学、数学与神经科学，培养定义AGI时代的领军人才。', en: 'Defining the AGI era.' },
        curriculumRoadmap: [
          { year: { zh: '大一', en: 'Year 1' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '离散数学', en: 'Discrete Math' }, { zh: '计算机系统导论 (CSAPP)', en: 'CSAPP' }, { zh: 'Python程序设计', en: 'Python Programming' }] },
          { year: { zh: '大二', en: 'Year 2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '算法设计与分析', en: 'Algorithms' }, { zh: '机器学习基础', en: 'Machine Learning' }, { zh: '概率论', en: 'Probability' }] },
          { year: { zh: '大三', en: 'Year 3' }, location: { zh: '陈景润学部', en: 'Chen Jingrun School' }, courses: [{ zh: '深度学习', en: 'Deep Learning' }, { zh: '强化学习', en: 'Reinforcement Learning' }, { zh: '计算机视觉', en: 'CV' }] },
          { year: { zh: '大四', en: 'Year 4' }, location: { zh: '陈景润学部', en: 'Chen Jingrun School' }, courses: [{ zh: '大模型微调实战', en: 'LLM Fine-tuning' }, { zh: '工程毕设', en: 'Capstone Project' }] }
        ],
        researchAreas: [{ zh: '大语言模型', en: 'LLMs' }, { zh: '具身智能', en: 'Embodied AI' }],
        careers: [{ zh: 'AI 创业', en: 'AI Startup' }, { zh: 'OpenAI / DeepMind', en: 'OpenAI / DeepMind' }],
        mentors: [{ zh: '李飞飞 (客座)', en: 'Fei-Fei Li' }]
      },
      {
        id: 'ppe',
        name: { zh: 'PPE (政治经济哲学)', en: 'PPE' },
        description: { zh: '培养具有全球视野的领导者。', en: 'Global Leadership.' },
        intro: { zh: '跨学科精英项目，涵盖政治学、经济学与哲学，培养未来的政界与商界领袖。', en: 'Interdisciplinary elite program.' },
        curriculumRoadmap: [
            { year: { zh: '大一', en: 'Year 1' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '微观经济学原理', en: 'Microeconomics' }, { zh: '政治学导论', en: 'Intro to Politics' }, { zh: '逻辑学', en: 'Logic' }] },
            { year: { zh: '大二', en: 'Year 2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '宏观经济学', en: 'Macroeconomics' }, { zh: '比较政治', en: 'Comparative Politics' }, { zh: '伦理学', en: 'Ethics' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '福州/厦门', en: 'Fuzhou/Xiamen' }, courses: [{ zh: '国际关系', en: 'International Relations' }, { zh: '博弈论', en: 'Game Theory' }, { zh: '公共财政', en: 'Public Finance' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '福州/厦门', en: 'Fuzhou/Xiamen' }, courses: [{ zh: '全球治理研讨', en: 'Global Governance Seminar' }, { zh: '毕业论文', en: 'Thesis' }] }
        ],
        researchAreas: [{ zh: '全球治理', en: 'Global Governance' }, { zh: '公共政策', en: 'Public Policy' }],
        careers: [{ zh: '国际组织', en: 'Intl Orgs' }, { zh: '政府部门', en: 'Government' }],
        mentors: [{ zh: '资深外交官', en: 'Senior Diplomats' }]
      }
    ]
  },
  {
    id: 'chen-jingrun-math',
    name: { zh: '陈景润数学与智能学部', en: 'Chen Jingrun School of Mathematics & AI' },
    shortName: { zh: '数智学部', en: 'SMAI' },
    dean: { zh: '张益唐 (院长)', en: 'Yitang Zhang' },
    description: { zh: '致力于数论、AI与量子计算。', en: 'Math, AI, Quantum.' },
    detailedIntro: {
        zh: '陈景润数学与智能学部是福建大学的理科基石。学部下设数学系、人工智能系与量子信息中心。我们拥有国家应用数学中心和量子信息与量子科技创新研究院分部。',
        en: 'The cornerstone of FJU Science. Home to the National Applied Math Center.'
    },
    imageUrl: 'https://picsum.photos/800/600?random=2',
    majors: [
      {
        id: 'theoretical-physics',
        name: { zh: '理论物理 (直博)', en: 'Theoretical Physics (Direct PhD)' },
        description: { zh: '探索宇宙终极真理。', en: 'Exploring ultimate truth of universe.' },
        intro: { zh: '主要研究弦论、黑洞物理与早期宇宙。学生将接受极其严格的数学与物理训练。', en: 'String theory, black holes, and early universe. Rigorous math/physics training.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '四大力学 (荣誉)', en: 'Theoretical Physics Core' }, { zh: '微分几何', en: 'Diff Geometry' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '广义相对论', en: 'General Relativity' }, { zh: '量子场论 I-II', en: 'QFT I-II' }] },
            { year: { zh: '大四 (直博)', en: 'Year 4 (PhD Start)' }, location: { zh: '理论物理中心', en: 'Center for Theo Physics' }, courses: [{ zh: '超弦理论导论', en: 'Intro to String Theory' }, { zh: '规范场论', en: 'Gauge Theory' }] }
        ],
        researchAreas: [{ zh: '弦论', en: 'String Theory' }, { zh: '引力波', en: 'Gravitational Waves' }],
        careers: [{ zh: '高等研究院', en: 'IAS' }, { zh: '大学教授', en: 'Professor' }],
        mentors: [{ zh: '威腾 (客座)', en: 'Edward Witten (Guest)' }]
      },
      {
        id: 'math-applied',
        name: { zh: '数学与应用数学', en: 'Mathematics' },
        description: { zh: '传承陈景润精神，攻克核心数学难题。', en: 'Core Mathematics.' },
        intro: { zh: '基础数学与应用数学并重。', en: 'Both Pure and Applied Math.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '数学基础通识', en: 'Math Foundation' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '实变函数', en: 'Real Analysis' }, { zh: '复变函数', en: 'Complex Analysis' }, { zh: '偏微分方程', en: 'PDEs' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '调和分析', en: 'Harmonic Analysis' }, { zh: '代数数论', en: 'Algebraic Number Theory' }] }
        ],
        researchAreas: [{ zh: '解析数论', en: 'Analytic Number Theory' }, { zh: '算术代数几何', en: 'Arithmetic Geometry' }],
        careers: [{ zh: '数学研究所', en: 'Research Inst' }, { zh: '金融算法', en: 'Quant' }],
        mentors: [{ zh: '张益唐', en: 'Yitang Zhang' }]
      },
      {
        id: 'generative-ai',
        name: { zh: '人工智能 (生成式AI)', en: 'AI (Generative)' },
        description: { zh: '聚焦大模型底层架构。', en: 'LLM Architecture.' },
        intro: { zh: '深度剖析Transformer架构，研究多模态大模型的训练与推理加速。', en: 'Deep dive into Transformer and Multimodal models.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: 'CS基础', en: 'CS Foundation' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '自然语言处理', en: 'NLP' }, { zh: '生成对抗网络', en: 'GANs' }, { zh: '扩散模型', en: 'Diffusion Models' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '大模型系统优化', en: 'LLM Systems' }, { zh: 'AI伦理', en: 'AI Ethics' }] }
        ],
        researchAreas: [{ zh: '多模态模型', en: 'Multimodal Models' }, { zh: 'AI for Science', en: 'AI for Science' }],
        careers: [{ zh: 'OpenAI', en: 'OpenAI' }, { zh: '字节跳动 AI Lab', en: 'ByteDance AI Lab' }],
        mentors: [{ zh: 'Andrew Ng (顾问)', en: 'Andrew Ng (Advisor)' }]
      },
      {
        id: 'quantum-info',
        name: { zh: '量子信息科学', en: 'Quantum Information' },
        description: { zh: '参与国家量子计算机工程。', en: 'Quantum Computing.' },
        intro: { zh: '由物理系与计算机系共建，研究量子算法、量子通信与超导量子计算硬件。', en: 'Jointly by Physics and CS.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '量子力学', en: 'Quantum Mechanics' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '量子信息导论', en: 'Intro to QI' }, { zh: '量子光学', en: 'Quantum Optics' }, { zh: '量子算法', en: 'Quantum Algorithms' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '超导量子电路', en: 'Superconducting Circuits' }, { zh: '冷原子物理', en: 'Cold Atom Physics' }] }
        ],
        researchAreas: [{ zh: '量子纠错', en: 'Quantum Error Correction' }, { zh: '量子密码', en: 'Quantum Crypto' }],
        careers: [{ zh: '本源量子', en: 'Origin Quantum' }, { zh: '华为量子实验室', en: 'Huawei Quantum Lab' }],
        mentors: [{ zh: '潘建伟 (兼职)', en: 'Pan Jianwei' }]
      },
      {
        id: 'statistics',
        name: { zh: '统计学 (数据科学)', en: 'Statistics (Data Science)' },
        description: { zh: '大数据时代的核心引擎。', en: 'Core engine of Big Data.' },
        intro: { zh: '侧重于高维数据分析与贝叶斯统计，广泛应用于生物信息与金融风控。', en: 'High-dimensional data analysis.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '概率论', en: 'Probability' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '数理统计', en: 'Math Stats' }, { zh: '随机过程', en: 'Stochastic Processes' }, { zh: '时间序列分析', en: 'Time Series' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '贝叶斯统计', en: 'Bayesian Stats' }, { zh: '统计学习', en: 'Statistical Learning' }] }
        ],
        researchAreas: [{ zh: '高维统计', en: 'High-dim Stats' }, { zh: '生物统计', en: 'Biostatistics' }],
        careers: [{ zh: '互联网大厂数据岗', en: 'Data Scientist' }, { zh: '制药公司', en: 'Pharma' }],
        mentors: [{ zh: '统计学学会理事', en: 'Stats Society Fellow' }]
      }
    ]
  },
  {
    id: 'hou-debang-eng',
    name: { zh: '侯德榜未来工程学部', en: 'Hou Debang School of Future Engineering' },
    shortName: { zh: '未来工学院', en: 'SFE' },
    dean: { zh: '曾毓群 (名誉院长)', en: 'Robin Zeng (Honorary)' },
    description: { zh: '聚焦机器人、新能源、半导体与航空航天。', en: 'Robotics, Energy, Chips, Aero.' },
    detailedIntro: { zh: '以著名科学家侯德榜命名。学部紧密结合福建省产业优势（宁德时代、福耀玻璃），推行产教融合。下设宁德时代新能源学院、两岸芯片学院与妈祖航空学院。', en: 'Named after Hou Debang. Strong ties with CATL.' },
    imageUrl: 'https://picsum.photos/800/600?random=3',
    majors: [
      {
        id: 'energy-storage-phd',
        name: { zh: '储能科学 (直博)', en: 'Energy Storage Science (Direct PhD)' },
        description: { zh: '下一代电池技术。', en: 'Next-gen Battery Tech.' },
        intro: { zh: '与宁德时代研究院联合培养，攻克固态电池与钠离子电池核心难题。博士期间全额资助。', en: 'Joint program with CATL Research Institute. Full scholarship.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '材料科学基础', en: 'Materials Science' }, { zh: '物理化学', en: 'Physical Chem' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '宁德时代研究院', en: 'CATL Institute' }, courses: [{ zh: '电化学工程', en: 'Electrochem Eng' }, { zh: '电池系统设计', en: 'Battery Systems' }] },
            { year: { zh: '大四 (直博)', en: 'Year 4 (PhD Start)' }, location: { zh: '宁德时代研究院', en: 'CATL Institute' }, courses: [{ zh: '固态电解质研究', en: 'Solid Electrolyte' }, { zh: '产业化课题', en: 'Industrial Project' }] }
        ],
        researchAreas: [{ zh: '全固态电池', en: 'All-Solid-State Battery' }, { zh: '极速充电', en: 'XFC' }],
        careers: [{ zh: '宁德时代科学家', en: 'CATL Scientist' }, { zh: '新能源首席技术官', en: 'Energy CTO' }],
        mentors: [{ zh: '曾毓群', en: 'Robin Zeng' }]
      },
      {
        id: 'robotics',
        name: { zh: '机器人工程', en: 'Robotics Engineering' },
        description: { zh: '对标波士顿动力，研发人形机器人。', en: 'Humanoid Robots.' },
        intro: { zh: '机械、控制与AI的交叉学科。', en: 'Interdisciplinary.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '理论力学', en: 'Mechanics' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '自动控制原理', en: 'Control Theory' }, { zh: '机器人学导论', en: 'Intro to Robotics' }, { zh: '嵌入式系统', en: 'Embedded Systems' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: 'SLAM技术', en: 'SLAM' }, { zh: '柔性抓取', en: 'Soft Grasping' }] }
        ],
        researchAreas: [{ zh: '人形机器人', en: 'Humanoids' }, { zh: '外骨骼', en: 'Exoskeletons' }],
        careers: [{ zh: '特斯拉', en: 'Tesla' }, { zh: '宇树科技', en: 'Unitree' }],
        mentors: [{ zh: 'IEEE Fellow', en: 'IEEE Fellow' }]
      },
      {
        id: 'new-energy',
        name: { zh: '新能源科学与工程', en: 'New Energy Science' },
        description: { zh: '与宁德时代 (CATL) 订单式培养。', en: 'Joint with CATL.' },
        intro: { zh: '专注于电化学储能、固态电池与氢能技术。', en: 'Battery tech & Hydrogen.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '物理化学', en: 'Physical Chemistry' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部/宁德', en: 'Main/CATL HQ' }, courses: [{ zh: '电化学原理', en: 'Electrochemistry' }, { zh: '锂离子电池材料', en: 'Li-ion Materials' }, { zh: '储能系统设计', en: 'Storage Design' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: 'CATL实验室', en: 'CATL Lab' }, courses: [{ zh: '电池失效分析', en: 'Failure Analysis' }, { zh: '企业实习', en: 'Internship' }] }
        ],
        researchAreas: [{ zh: '固态电解质', en: 'Solid Electrolytes' }, { zh: '钠离子电池', en: 'Sodium-ion Battery' }],
        careers: [{ zh: '宁德时代', en: 'CATL' }, { zh: '比亚迪', en: 'BYD' }],
        mentors: [{ zh: '曾毓群', en: 'Robin Zeng' }]
      },
      {
        id: 'microelectronics',
        name: { zh: '微电子科学与工程', en: 'Microelectronics' },
        description: { zh: '两岸合作，主攻先进封装。', en: 'Cross-strait Chip Tech.' },
        intro: { zh: '利用对台优势，引入台湾半导体师资与工艺，重点攻关 Chiplet 与 第三代半导体。', en: 'Leveraging Taiwan expertise.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '固体物理', en: 'Solid State Physics' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '半导体物理', en: 'Semiconductor Physics' }, { zh: '集成电路设计 (Verilog)', en: 'IC Design' }, { zh: '微纳加工技术', en: 'Micro-fabrication' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '本部', en: 'Main Campus' }, courses: [{ zh: '先进封装技术', en: 'Advanced Packaging' }, { zh: '射频IC', en: 'RF IC' }] }
        ],
        researchAreas: [{ zh: 'Chiplet', en: 'Chiplet' }, { zh: '碳化硅器件', en: 'SiC Devices' }],
        careers: [{ zh: '华为海思', en: 'HiSilicon' }, { zh: '台积电 (TSMC)', en: 'TSMC' }],
        mentors: [{ zh: '台籍资深工程师', en: 'Senior Engineer from Taiwan' }]
      },
      {
        id: 'aerospace',
        name: { zh: '航空航天工程', en: 'Aerospace Engineering' },
        description: { zh: '依托妈祖机场，研究低空经济。', en: 'Based at Mazu Airport.' },
        intro: { zh: '结合莆田妈祖机场与低空经济试验区，研究无人机物流与eVTOL（飞行汽车）。', en: 'UAV & eVTOL.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '流体力学', en: 'Fluid Dynamics' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '本部/机场', en: 'Main/Airport' }, courses: [{ zh: '空气动力学', en: 'Aerodynamics' }, { zh: '飞行器设计', en: 'Aircraft Design' }, { zh: '航空发动机原理', en: 'Aero-engines' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '妈祖机场实验室', en: 'Airport Lab' }, courses: [{ zh: '无人机控制', en: 'UAV Control' }, { zh: '适航认证法规', en: 'Airworthiness' }] }
        ],
        researchAreas: [{ zh: 'eVTOL', en: 'eVTOL' }, { zh: '无人机集群', en: 'Drone Swarms' }],
        careers: [{ zh: '大疆', en: 'DJI' }, { zh: '商飞', en: 'COMAC' }],
        mentors: [{ zh: '北航校友', en: 'Beihang Alumni' }]
      }
    ]
  },
  {
    id: 'lin-qiaozhi-med',
    name: { zh: '林巧稚生命医学学部', en: 'Lin Qiaozhi School of Medicine' },
    shortName: { zh: '医学院', en: 'MED' },
    dean: { zh: '钟南山 (顾问)', en: 'Nanshan Zhong (Advisor)' },
    description: { zh: '与厦门大学合办，培养“医生科学家”。', en: 'Physician-Scientists.' },
    detailedIntro: { zh: '位于厦门校区，纪念医学泰斗林巧稚。实行“八年制”本博贯通培养。拥有三所直属附属医院（莆田、厦门、福州各一所）。', en: 'Located in Xiamen Campus. 8-Year MD program.' },
    imageUrl: 'https://picsum.photos/800/600?random=4',
    majors: [
      {
        id: 'brain-science-phd',
        name: { zh: '脑科学 (直博)', en: 'Brain Science (Direct PhD)' },
        description: { zh: '解码人类智慧的源头。', en: 'Decoding human intelligence.' },
        intro: { zh: '结合神经生物学、认知心理学与计算科学，旨在理解大脑工作原理并攻克脑疾病。', en: 'Neurobiology + Cognitive Psych + Computation.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '神经科学导论', en: 'Intro to Neuroscience' }, { zh: 'Python数据分析', en: 'Python Data Analysis' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '计算神经科学', en: 'Comp Neuroscience' }, { zh: '神经电生理', en: 'Electrophysiology' }] },
            { year: { zh: '大四 (直博)', en: 'Year 4 (PhD Start)' }, location: { zh: '脑科学研究所', en: 'Brain Institute' }, courses: [{ zh: '光遗传学技术', en: 'Optogenetics' }, { zh: '博士开题', en: 'PhD Proposal' }] }
        ],
        researchAreas: [{ zh: '脑机智能', en: 'Brain-Inspired AI' }, { zh: '神经退行性疾病', en: 'Neurodegenerative Diseases' }],
        careers: [{ zh: '脑科学研究院', en: 'Brain Institutes' }, { zh: 'Neuralink', en: 'Neuralink' }],
        mentors: [{ zh: '神经所所长', en: 'Director of Neuroscience Inst' }]
      },
      {
        id: 'clinical-med',
        name: { zh: '临床医学 (八年制)', en: 'Clinical Medicine (MD)' },
        description: { zh: '毕业授予医学博士学位。', en: 'MD Degree.' },
        intro: { zh: '精英小班教学，全英文授课，第三年起进入厦门校区与医院临床轮转。', en: 'Elite small class.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '生物化学', en: 'Biochem' }, { zh: '细胞生物学', en: 'Cell Bio' }] },
            { year: { zh: '大三/四', en: 'Year 3/4' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '系统解剖学', en: 'Anatomy' }, { zh: '病理学', en: 'Pathology' }, { zh: '药理学', en: 'Pharmacology' }] },
            { year: { zh: '大五-八', en: 'Year 5-8' }, location: { zh: '附属医院', en: 'Hospitals' }, courses: [{ zh: '内科学', en: 'Internal Med' }, { zh: '外科学', en: 'Surgery' }, { zh: '临床轮转', en: 'Rotation' }, { zh: '博士论文', en: 'Dissertation' }] }
        ],
        researchAreas: [{ zh: '肿瘤免疫', en: 'Immuno-oncology' }, { zh: '心血管病', en: 'Cardiology' }],
        careers: [{ zh: '三甲医院', en: 'Top Hospitals' }, { zh: '医学研究', en: 'Medical Research' }],
        mentors: [{ zh: '协和专家', en: 'PUMC Experts' }]
      },
      {
        id: 'biomed-eng',
        name: { zh: '生物医学工程', en: 'Biomedical Engineering' },
        description: { zh: '工医结合，主攻脑机接口。', en: 'BCI & Medical Devices.' },
        intro: { zh: '将工程技术应用于医学诊断与治疗。', en: 'Engineering for Medicine.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '电路原理', en: 'Circuits' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '医学影像学', en: 'Medical Imaging' }, { zh: '生物传感器', en: 'Biosensors' }, { zh: '神经工程', en: 'Neural Eng' }] },
            { year: { zh: '大四', en: 'Year 4' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '医疗器械设计', en: 'Device Design' }] }
        ],
        researchAreas: [{ zh: '脑机接口', en: 'BCI' }, { zh: '医学AI', en: 'Medical AI' }],
        careers: [{ zh: '联影医疗', en: 'United Imaging' }, { zh: '迈瑞医疗', en: 'Mindray' }],
        mentors: [{ zh: '海归教授', en: 'Overseas Profs' }]
      },
      {
        id: 'dentistry',
        name: { zh: '口腔医学', en: 'Dentistry' },
        description: { zh: '数字化口腔医疗中心。', en: 'Digital Dentistry.' },
        intro: { zh: '结合3D打印与数字化修复技术，培养高端牙科医生。', en: '3D Printing & Restoration.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '口腔解剖生理', en: 'Oral Anatomy' }] },
            { year: { zh: '大三/四', en: 'Year 3/4' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '口腔颌面外科学', en: 'Oral Surgery' }, { zh: '正畸学', en: 'Orthodontics' }] }
        ],
        researchAreas: [{ zh: '种植牙材料', en: 'Implant Materials' }],
        careers: [{ zh: '口腔专科医院', en: 'Dental Hospitals' }],
        mentors: [{ zh: '华西口腔校友', en: 'West China School of Stomatology Alumni' }]
      }
    ]
  },
  {
    id: 'tan-kah-kee-business',
    name: { zh: '嘉庚创新管理学院', en: 'Tan Kah Kee School of Innovation' },
    shortName: { zh: '嘉庚商学院', en: 'TKK Business' },
    dean: { zh: '林毅夫 (客座)', en: 'Justin Yifu Lin (Guest)' },
    description: { zh: '培养懂技术的商业领袖。', en: 'Tech-savvy Leaders.' },
    detailedIntro: { zh: '位于厦门校区。纪念陈嘉庚先生，传承爱国华侨精神。学院不培养传统的会计出纳，而是培养能理解区块链、AI与数字经济的新一代管理者。', en: 'Located in Xiamen Campus. Focus on Fintech & Digital Economy.' },
    imageUrl: 'https://picsum.photos/800/600?random=5',
    majors: [
      {
        id: 'fintech',
        name: { zh: '金融科技 (FinTech)', en: 'FinTech' },
        description: { zh: '金融 + 编程 + 数学。', en: 'Finance + Coding + Math.' },
        intro: { zh: '通过学习Python、区块链与高频交易策略，重新定义金融业。', en: 'Redefining Finance.' },
        curriculumRoadmap: [
             { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '微观经济学', en: 'Microeconomics' }, { zh: 'Python数据分析', en: 'Python for Data' }] },
             { year: { zh: '大三', en: 'Year 3' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '区块链原理', en: 'Blockchain' }, { zh: '算法交易', en: 'Algo Trading' }, { zh: '金融计量', en: 'Econometrics' }] },
             { year: { zh: '大四', en: 'Year 4' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: 'DeFi去中心化金融', en: 'DeFi' }, { zh: '金融风控实战', en: 'Risk Management' }] }
        ],
        researchAreas: [{ zh: '数字货币', en: 'Digital Currency' }, { zh: '量化投资', en: 'Quant Investing' }],
        careers: [{ zh: '对冲基金', en: 'Hedge Funds' }, { zh: '蚂蚁金服', en: 'Ant Group' }],
        mentors: [{ zh: '华尔街海归', en: 'Wall St. Veterans' }]
      },
      {
        id: 'digital-economy',
        name: { zh: '数字经济', en: 'Digital Economy' },
        description: { zh: '研究平台经济与数据资产。', en: 'Platform Economy.' },
        intro: { zh: '适应数据作为第五大生产要素的时代需求。', en: 'Data as an asset.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '博弈论', en: 'Game Theory' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '厦门校区', en: 'Xiamen Campus' }, courses: [{ zh: '平台经济学', en: 'Platform Econ' }, { zh: '数据资产评估', en: 'Data Valuation' }, { zh: '网络科学', en: 'Network Science' }] }
        ],
        researchAreas: [{ zh: '反垄断', en: 'Antitrust' }, { zh: '跨境电商', en: 'Cross-border E-commerce' }],
        careers: [{ zh: '字节跳动战略部', en: 'ByteDance Strategy' }, { zh: '政策智库', en: 'Think Tanks' }],
        mentors: [{ zh: '知名经济学家', en: 'Famous Economists' }]
      }
    ]
  },
  {
    id: 'lin-zexu-humanities',
    name: { zh: '林则徐人文社科学部', en: 'Lin Zexu School of Humanities' },
    shortName: { zh: '人文学院', en: 'Humanities' },
    dean: { zh: '戴锦华 (客座)', en: 'Jinhua Dai (Guest)' },
    description: { zh: '计算社会科学与两岸法学。', en: 'Computational SS & Law.' },
    detailedIntro: { zh: '位于福州校区（闽侯大学城）。依托省会福州的文化底蕴与政治中心地位。我们不搞传统文科，而是倡导“新文科”，用大数据和AI研究社会问题。', en: 'Located in Fuzhou. Focus on New Liberal Arts.' },
    imageUrl: 'https://picsum.photos/800/600?random=6',
    majors: [
      {
        id: 'comp-law',
        name: { zh: '计算法学', en: 'Computational Law' },
        description: { zh: '法律 + AI。', en: 'Law + AI.' },
        intro: { zh: '研究智慧法院、算法歧视与数据合规。', en: 'Smart Courts & Data Compliance.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '法理学', en: 'Jurisprudence' }, { zh: 'Python编程', en: 'Python' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '福州校区', en: 'Fuzhou Campus' }, courses: [{ zh: '法律大数据', en: 'Legal Big Data' }, { zh: '人工智能法', en: 'AI Law' }, { zh: '知识产权', en: 'IP' }] }
        ],
        researchAreas: [{ zh: '网络法', en: 'Cyber Law' }],
        careers: [{ zh: '互联网法院', en: 'Internet Courts' }, { zh: '腾讯法务', en: 'Tencent Legal' }],
        mentors: [{ zh: '法学专家', en: 'Legal Experts' }]
      },
      {
        id: 'digital-sociology',
        name: { zh: '数字社会学', en: 'Digital Sociology' },
        description: { zh: '用大数据研究社会。', en: 'Big Data Sociology.' },
        intro: { zh: '通过社交媒体数据挖掘，研究社会舆情与群体行为。', en: 'Social Media Mining.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '社会学概论', en: 'Intro to Sociology' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '福州校区', en: 'Fuzhou Campus' }, courses: [{ zh: '社会网络分析', en: 'SNA' }, { zh: '计算传播学', en: 'Comp Comm' }] }
        ],
        researchAreas: [{ zh: '舆情监测', en: 'Public Opinion' }],
        careers: [{ zh: '政府网信办', en: 'Cyberspace Admin' }, { zh: '用户研究', en: 'User Research' }],
        mentors: [{ zh: '计算社会科学家', en: 'Comp Social Scientists' }]
      },
      {
        id: 'taiwan-studies',
        name: { zh: '涉台事务与国际关系', en: 'Cross-Strait & Intl Relations' },
        description: { zh: '两岸融合发展研究。', en: 'Cross-Strait Integration.' },
        intro: { zh: '发挥福建对台前沿优势，研究两岸经贸、法律与政治。', en: 'Unique location advantage.' },
        curriculumRoadmap: [
            { year: { zh: '大一/二', en: 'Year 1/2' }, location: { zh: '严复书院', en: 'Yan Fu College' }, courses: [{ zh: '国际关系史', en: 'History of IR' }] },
            { year: { zh: '大三', en: 'Year 3' }, location: { zh: '福州校区', en: 'Fuzhou Campus' }, courses: [{ zh: '台湾政治生态', en: 'Taiwan Politics' }, { zh: '两岸经贸法', en: 'Cross-Strait Law' }] }
        ],
        researchAreas: [{ zh: '两岸融合', en: 'Integration' }],
        careers: [{ zh: '台办系统', en: 'Taiwan Affairs Office' }, { zh: '智库', en: 'Think Tanks' }],
        mentors: [{ zh: '台研院学者', en: 'Taiwan Studies Scholars' }]
      }
    ]
  }
];