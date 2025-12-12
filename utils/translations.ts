import { Language } from '../types';

export const translations = {
  zh: {
    hero: {
      subtitle: "立足妈祖故里 · 放眼星辰大海",
      titleStart: "求真 · 创新",
      titleEnd: "未来",
      desc: "福建大学（简称“建大”）实行“2+2”培养模式：大一大二于莆田本部接受通识教育，大三大四分流至各专业校区。配套妈祖机场与轻轨枢纽，打造对标MIT的新型理工科大学。",
      ctaAcademics: "探索培养方案",
      ctaAbout: "一校三区",
    },
    stats: {
      title: "数据概览"
    },
    disciplines: {
      tag: "学科布局",
      title: "一校三区 · 协同创新",
      viewAll: "查看所有学部",
      learnMore: "了解更多",
      feature1Title: "莆田本部 (通识+理工)",
      feature1Desc: "全校本科生大一大二在此就读（书院制）。大三后，理工科学生留本开展科研，聚焦芯片与新能源。",
      feature2Title: "厦门校区 (医学+商科)",
      feature2Desc: "大三起，医学与商科学生转入厦门校区。依托厦大资源，对接两岸高端医疗与金融产业。",
      feature3Title: "福州校区 (人文社科)",
      feature3Desc: "大三起，文科学生转入福州校区。毗邻省会行政中心，聚焦数字治理与两岸法学研究。",
    },
    news: {
      title: "建大新闻",
      readMore: "阅读全文"
    },
    cta: {
      title: "搭乘通往未来的轻轨",
      desc: "从书院宿舍直达实验室与机场。体验“2+2”跨校区学习之旅。",
      button: "查看培养计划"
    },
    footer: {
      desc: "福建大学（建大）是一所立足海西、面向全球的新型研究型大学。注意：本校为新建理工科大学，不同于“福州大学”。",
      academics: "学术教育",
      research: "科学研究",
      connect: "联系我们",
      rights: "福建大学 (建大) 版权所有",
      privacy: "隐私政策",
      terms: "使用条款"
    },
    academics: {
      title: "院系设置",
      subtitle: "以“2+2”模式打破学科壁垒。点击专业或学院名称查看详情。",
      keyMajors: "核心专业",
      visitSite: "访问学院官网",
      modal: {
        curriculum: "核心课程体系",
        careers: "未来就业方向",
        mentors: "首席导师团队",
        close: "关闭"
      }
    },
    dept: {
      dean: "院长",
      majors: "开设专业",
      news: "学院动态",
      back: "返回院系列表"
    },
    major: {
      curriculum: "四年培养路线图",
      research: "核心科研方向",
      career: "毕业去向",
      mentors: "领军名师",
      back: "返回学院主页"
    },
    research: {
      title: "科学研究",
      subtitle: "聚焦福建优势产业，布局未来科技，服务两岸融合发展战略。",
      areas: {
        energy: {
          title: "新能源与新材料",
          desc: "依托福建（宁德）电池产业集群，在固态电池、储能系统及光伏玻璃材料领域保持全球领先。",
          tag: "对标 CATL/福耀研究院"
        },
        chips: {
          title: "两岸半导体融合",
          desc: "发挥对台地理优势，整合台湾芯片制造工艺与大陆市场设计需求，主攻先进封装（Chiplet）与光刻机核心部件。",
          tag: "两岸集成电路示范区"
        },
        marine: {
          title: "海洋科技与蓝碳",
          desc: "立足秀屿深水港，开展深海采矿机器人、海上风电运维及海洋碳汇研究，建设“海上福建”。",
          tag: "国家海洋实验室"
        },
        digital: {
          title: "数字治理与法治",
          desc: "服务“数字中国”建设，研究大数据时代的社会治理，以及两岸法律体系对接与融合。",
          tag: "数字中国研究院"
        }
      }
    },
    curriculum: {
      title: "精英培养计划",
      subtitle: "对标 MIT 与清华，独创“通识书院 + 专业学部”的 2+2 培养体系。",
      modelTitle: "“2+2” 跨校区模式",
      years12: "大一 / 大二",
      years12Desc: "地点：莆田本部（严复书院）。所有学生不分专业，接受高强度的数理基础、人文通识与工程训练。实行全员导师制与书院住宿制。",
      years34: "大三 / 大四",
      years34Desc: "地点：各专业校区。学生根据专业分流，进入高水平实验室与企业实习，完成毕业设计与创新项目。",
      benchmarkTitle: "课程体系对标",
      columns: ["课程模块", "福建大学 (建大)", "MIT (参考)", "清华大学 (参考)"],
      rows: [
        { name: "数理基础", fju: "35% (超强基)", mit: "25%", tsinghua: "30%" },
        { name: "通识教育", fju: "20% (文理兼修)", mit: "20%", tsinghua: "15%" },
        { name: "专业核心", fju: "30% (前沿深度)", mit: "40%", tsinghua: "40%" },
        { name: "科研实践", fju: "15% (全员进组)", mit: "15%", tsinghua: "15%" }
      ],
      features: [
        { title: "书院制", desc: "打破专业隔阂，师生同住，不仅学知识，更学做人。" },
        { title: "全英文教学", desc: "专业课采用原版教材，无缝对接国际学术界。" },
        { title: "产业轮岗", desc: "大三暑期必修：进入宁德时代、华为、台积电（两岸合作）等领军企业实习。" }
      ]
    },
    admissions: {
      heroTitle: "本科生招生",
      heroDesc: "加入建大，体验跨越三座城市的求学之旅，成为未来产业的领军者。",
      processTitle: "申请流程",
      processDesc: "福建大学采用“高考成绩+综合评价”的录取模式。",
      steps: [
        { title: "在线报名", desc: "通过建大招生系统提交个人档案与获奖证书。" },
        { title: "初审筛选", desc: "专家委员会对申请材料进行综合评估。" },
        { title: "校园考核", desc: "入围考生前往莆田本部参加面试与笔试。" },
        { title: "择优录取", desc: "综合高考成绩与校测成绩，择优录取。" }
      ],
      reqTitle: "报考要求",
      reqs: [
        "高考成绩位居全省前1%或同等水平。",
        "数学、物理基础扎实，具有学科特长。",
        "英语流利（核心课程全英文教学）。",
        "五大学科竞赛省级一等奖及以上者优先。"
      ],
      datesTitle: "重要日期",
      resourcesTitle: "招生资源",
      resources: ["2024 招生简章", "交通指引 (机场/轻轨)", "校园生活指南"]
    },
    about: {
      title: "关于福建大学 (建大)",
      intro: "福建大学（简称“建大”）是新创的高水平研究型大学，对标清华、浙大与MIT。本部位于莆田市秀屿区，配套建设妈祖机场与连接高铁站的专用轻轨系统。请注意：本校是全新筹建的理工科大学，不同于现有的“福州大学”或“福建师范大学”。",
      visionTitle: "三校区战略",
      visionDesc: "实行“2+2”模式：大一大二全部在莆田本部打基础；大三起，理工科留本，商医去厦门，人文去福州。轻轨与高铁网络将三个校区紧密相连。",
      newEngTitle: "基础设施",
      newEngDesc: "校园轻轨（Jianda Line）不仅连接教学区与宿舍，更直通妈祖国际机场与高铁站。周末你可以轻松往返厦门、福州进行跨校区交流。",
      quote: "我们在妈祖故里，建设一所通向世界的大学。",
      quoteAuthor: "首任校长",
      founded: "建校年份",
      ratio: "师生比例",
      focus: "校区数量",
      mapTitle: "校区分布图",
      mapDesc: "点击节点查看详细设施与交通连接。",
      mapFacilities: "核心地标",
      locations: {
        fuzhou: {
          name: "福州校区 (人文)",
          desc: "位于闽侯大学城，毗邻福州大学城地铁站。",
          landmarks: ["数字治理中心", "海峡法学院", "新文科图书馆"]
        },
        putian: {
          name: "莆田本部 (理工)",
          desc: "位于秀屿区，核心教学科研基地，连接妈祖国际机场。",
          landmarks: ["严复书院", "妈祖国际机场", "未来工学院", "量子中心"]
        },
        xiamen: {
          name: "厦门校区 (医商)",
          desc: "位于翔安，紧邻厦门新机场，与厦门大学紧密合作。",
          landmarks: ["林巧稚医学中心", "嘉庚商学院", "两岸金融港"]
        }
      }
    },
    common: {
      search: "搜索",
      apply: "申请入学",
      english: "English",
      chinese: "中文"
    }
  },
  en: {
    hero: {
      subtitle: "Rooted in Putian · Reaching for the Stars",
      titleStart: "Truth. Innovation.",
      titleEnd: "Future.",
      desc: "Fujian University (Jianda) adopts a '2+2' model: Years 1-2 at Putian Main Campus for General Ed, Years 3-4 at specialized campuses. Distinct from Fuzhou University.",
      ctaAcademics: "View Curriculum",
      ctaAbout: "Three Campuses",
    },
    stats: {
      title: "At a Glance"
    },
    disciplines: {
      tag: "Strategic Layout",
      title: "One University, Three Cities",
      viewAll: "View All Schools",
      learnMore: "Learn More",
      feature1Title: "Putian Main Campus (Years 1-2 + STEM)",
      feature1Desc: "All freshmen/sophomores study here (Residential College). Juniors/Seniors in STEM stay for research in Chips & Energy.",
      feature2Title: "Xiamen Campus (Med + Business)",
      feature2Desc: "Juniors/Seniors in Med & Business move here. Partnering with XMU for high-end healthcare and cross-strait finance.",
      feature3Title: "Fuzhou Campus (Humanities)",
      feature3Desc: "Juniors/Seniors in Arts move here. Located in the capital, focusing on Digital Governance and Law.",
    },
    news: {
      title: "Jianda News",
      readMore: "Read Article"
    },
    cta: {
      title: "Connect to the Future",
      desc: "From dorms to labs to the airport via Light Rail. Experience the 2+2 multi-campus journey.",
      button: "See Training Plan"
    },
    footer: {
      desc: "Fujian University (Jianda) is a globally oriented research university. Note: We are a new institute, distinct from Fuzhou University.",
      academics: "Academics",
      research: "Research",
      connect: "Connect",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use"
    },
    academics: {
      title: "Schools & Departments",
      subtitle: "Breaking barriers with the '2+2' model. Click department name or 'Visit Website' to explore.",
      keyMajors: "Key Majors",
      visitSite: "Visit Department Website",
      modal: {
        curriculum: "Core Curriculum",
        careers: "Career Paths",
        mentors: "Lead Mentors",
        close: "Close"
      }
    },
    dept: {
      dean: "Dean",
      majors: "Programs",
      news: "School News",
      back: "Back to Schools"
    },
    major: {
      curriculum: "4-Year Roadmap",
      research: "Research Areas",
      career: "Career Paths",
      mentors: "Faculty",
      back: "Back to School"
    },
    research: {
      title: "Scientific Research",
      subtitle: "Focusing on Fujian's key industries, future tech, and cross-strait integration strategies.",
      areas: {
        energy: {
          title: "New Energy & Materials",
          desc: "Leveraging the Ningde battery cluster. Global leadership in solid-state batteries, storage systems, and PV materials.",
          tag: "Benchmark: CATL"
        },
        chips: {
          title: "Cross-Strait Semiconductors",
          desc: "Integrating Taiwan's manufacturing with Mainland design. Focusing on Chiplet packaging and lithography optics.",
          tag: "IC Zone"
        },
        marine: {
          title: "Marine Tech & Blue Carbon",
          desc: "Based at Xiuyu Port. Deep-sea mining robots, offshore wind O&M, and marine carbon sink research.",
          tag: "National Lab"
        },
        digital: {
          title: "Digital Governance",
          desc: "Serving 'Digital China'. Researching big data social governance and cross-strait legal system integration.",
          tag: "Digital China Inst."
        }
      }
    },
    curriculum: {
      title: "Elite Training Plan",
      subtitle: "Benchmarked against MIT & Tsinghua. The unique 'Residential College + Professional School' 2+2 system.",
      modelTitle: "The '2+2' Multi-Campus Model",
      years12: "Year 1 / Year 2",
      years12Desc: "Location: Putian Main Campus (Yan Fu College). All students take intensive Math, Physics, and Liberal Arts foundations. Residential College system.",
      years34: "Year 3 / Year 4",
      years34Desc: "Location: Specialized Campuses. Students move to labs and industries based on major for research and capstone projects.",
      benchmarkTitle: "Curriculum Benchmark",
      columns: ["Module", "Fujian Univ (Jianda)", "MIT (Ref)", "Tsinghua (Ref)"],
      rows: [
        { name: "Math & Science", fju: "35% (Intensive)", mit: "25%", tsinghua: "30%" },
        { name: "General Ed", fju: "20% (Arts & Sci)", mit: "20%", tsinghua: "15%" },
        { name: "Core Major", fju: "30% (Deep Dive)", mit: "40%", tsinghua: "40%" },
        { name: "Research", fju: "15% (Mandatory)", mit: "15%", tsinghua: "15%" }
      ],
      features: [
        { title: "Residential College", desc: "Breaking major silos. Living and learning together with mentors." },
        { title: "English Instruction", desc: "Core courses use original English textbooks to align with global standards." },
        { title: "Industry Rotation", desc: "Mandatory Junior Summer Internship at leaders like CATL, Huawei, or TSMC partners." }
      ]
    },
    admissions: {
      heroTitle: "Undergraduate Admissions",
      heroDesc: "Join Jianda for a journey across three cities, becoming a leader in future industries.",
      processTitle: "Application Process",
      processDesc: "Fujian University (Jianda) accepts applications through Gaokao and our independent Comprehensive Evaluation pathway.",
      steps: [
        { title: "Online Registration", desc: "Submit profile and achievements via FJU Portal." },
        { title: "Preliminary Review", desc: "Faculty committee reviews materials for selection." },
        { title: "Campus Assessment", desc: "Tests held at Putian Main Campus." },
        { title: "Final Decision", desc: "Admission based on composite score of Gaokao + Interview." }
      ],
      reqTitle: "Requirements",
      reqs: [
        "Top 1% ranking in provincial Gaokao.",
        "Strong foundation in Math and Physics.",
        "Proficiency in English (Bilingual curriculum).",
        "National Olympiad awards preferred."
      ],
      datesTitle: "Important Dates",
      resourcesTitle: "Resources",
      resources: ["2024 Prospectus", "Transport Guide", "Campus Life"]
    },
    about: {
      title: "About Fujian University (Jianda)",
      intro: "Fujian University (abbreviated as 'Jianda') is a new world-class research university. Headquarters in Putian (Xiuyu District). NOTE: We are distinct from Fuzhou University and Fujian Normal University.",
      visionTitle: "Three-Campus Strategy",
      visionDesc: "'2+2' Model: Years 1-2 foundation at Putian. Years 3-4: STEM stays in Putian, Med/Biz to Xiamen, Arts to Fuzhou.",
      newEngTitle: "Infrastructure",
      newEngDesc: "The Jianda Light Rail seamlessly connects dorms, labs, the High-Speed Station, and Mazu Int'l Airport. Easy weekend access to Xiamen/Fuzhou.",
      quote: "Building a gateway to the world from the home of Mazu.",
      quoteAuthor: "Founding President",
      founded: "Founded",
      ratio: "Faculty-Student Ratio",
      focus: "Campuses",
      mapTitle: "Campus Network Map",
      mapDesc: "Click nodes to explore facilities and transport links.",
      mapFacilities: "Key Landmarks",
      locations: {
        fuzhou: {
          name: "Fuzhou Campus (Arts)",
          desc: "Located in Minhou University Town. Adjacent to Fuzhou University Metro Station.",
          landmarks: ["Digital Governance Center", "Cross-Strait Law School", "New Liberal Arts Library"]
        },
        putian: {
          name: "Putian Main Campus (STEM)",
          desc: "Xiuyu District. Core teaching and research base. Connected to Mazu Int'l Airport.",
          landmarks: ["Yan Fu Honors College", "Mazu Int'l Airport", "School of Future Engineering", "Quantum Center"]
        },
        xiamen: {
          name: "Xiamen Campus (Med/Biz)",
          desc: "Xiang'an District. Near the new airport. Close cooperation with Xiamen University.",
          landmarks: ["Lin Qiaozhi Medical Center", "TKK Business School", "Cross-Strait Finance Hub"]
        }
      }
    },
    common: {
      search: "Search",
      apply: "Apply Now",
      english: "English",
      chinese: "中文"
    }
  }
};
