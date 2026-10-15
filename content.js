'use strict';
window.CV_CONTENT = {
  "zh": {
    "researchAreas": {
      "network": {
        "number": "01",
        "title": "结构化表征与复杂网络",
        "body": "研究多层网络中的异质关系与跨层依赖，关注网络表征、关键节点识别和鲁棒性分析，并将时序建模与双曲空间表征用于工业故障诊断。",
        "tags": [
          "多层网络表征",
          "双曲空间表征",
          "时序建模",
          "网络鲁棒性"
        ],
        "works": [
          "rtgcn",
          "sensors",
          "patent"
        ]
      },
      "agents": {
        "number": "02",
        "title": "大模型与智能体",
        "body": "面向专业领域的复杂任务，研究大模型知识增强、任务规划与工具调用。通过规划、工具执行和反思智能体的协作，改进多步推理与工具使用。",
        "tags": [
          "知识增强与RAG",
          "多智能体协作",
          "任务规划",
          "工具调用"
        ],
        "works": [
          "corea",
          "food"
        ]
      },
      "embodied": {
        "number": "03",
        "title": "多模态感知与具身智能",
        "body": "研究图像与点云融合、三维目标检测和视觉语言模型驱动的具身问答。针对观测不足以支持答案的问题，以证据评估指导补充观察，研究有限探索预算下的回答质量与感知效率。",
        "tags": [
          "图像与点云融合",
          "三维目标检测",
          "具身问答",
          "证据约束主动感知"
        ],
        "works": [
          "crossray"
        ]
      },
      "education": {
        "number": "04",
        "title": "教育人工智能 AIED",
        "body": "研究生成式AI辅助下的学习能力估计与认知诊断。以多层异质图关联知识、行为与认知，在外部支持不完全可观测的条件下定位学习困难、设计分层干预，并通过课堂实验与独立测验验证。",
        "tags": [
          "学习者建模",
          "学习真实性诊断",
          "认知修复",
          "教师反馈"
        ],
        "works": []
      }
    },
    "works": [
      {
        "id": "rtgcn",
        "name": "RT-GCN",
        "subtitle": "多层网络表征",
        "venue": "Expert Systems with Applications",
        "year": "2027 · 2026年在线发表",
        "status": "已发表",
        "statusClass": "",
        "role": "第一作者",
        "image": "assets/rtgcn.png",
        "title": "Learning multilayer network representation via rotational graph convolutional networks",
        "intro": "以旋转映射组织异质层间关系，联合考虑层内拓扑与跨层依赖。",
        "problem": "多层网络存在多对多的异质层间依赖，逐层建模或简单聚合难以同时保留层内拓扑与层间关系。",
        "method": "在复数空间中以旋转描述关系特定的层间映射，结合关系感知注意力与一致性门控，选择性融合跨层信息。",
        "evidence": "在四个真实网络数据集上开展链接预测与稀疏耦合实验，并用于中心性度量和网络可视化分析。",
        "citation": "JIANG Z, JI G, DAI Y, DOYLE P, GU W. Learning multilayer network representation via rotational graph convolutional networks[J]. Expert Systems with Applications, 2027, 333: 134080.",
        "doi": "10.1016/j.eswa.2026.134080",
        "caption": "RT-GCN层内编码与跨层融合架构"
      },
      {
        "id": "sensors",
        "name": "HTP-Net",
        "subtitle": "工业故障诊断",
        "venue": "IEEE Sensors Journal",
        "year": "2026 · 9月23日录用",
        "status": "已录用",
        "statusClass": "accepted",
        "role": "通讯作者",
        "image": "assets/htp-net.png",
        "title": "Novel Hyperbolic Temporal Prototype Network for Industrial Fault Diagnosis",
        "intro": "将时序表示与双曲空间原型分类结合，区分响应相似的工业故障。",
        "problem": "工业过程中的非线性动态、反馈控制和变量耦合，会使不同故障呈现相似的时序响应。",
        "method": "利用多尺度卷积、BiGRU和时序注意力提取特征，映射至Poincaré球，以样本与可学习类别原型的双曲测地距离分类。",
        "evidence": "在Tennessee Eastman过程的两组所选故障上进行五个随机种子的对比与消融实验，检验时序建模和双曲原型分类的贡献。",
        "citation": "HE Y L, LI J Y, ZHU Q X, JIANG Z Y. Novel Hyperbolic Temporal Prototype Network for Industrial Fault Diagnosis[J]. IEEE Sensors Journal, 2026（已录用）.",
        "doi": "10.1109/JSEN.2026.3737913",
        "caption": "HTP-Net总体结构 · 录用校样原图"
      },
      {
        "id": "crossray",
        "name": "CrossRay3D",
        "subtitle": "多模态三维目标检测",
        "venue": "IEEE Transactions on Intelligent Transportation Systems",
        "year": "2026",
        "status": "已发表",
        "statusClass": "",
        "role": "通讯作者",
        "image": "assets/crossray.png",
        "title": "CrossRay3D: Geometry and Distribution Guidance for Efficient Multimodal 3D Detection",
        "intro": "通过稀疏特征选择与几何对齐，改善图像和点云融合的检测质量。",
        "problem": "图像与点云融合存在前景特征质量不足、类别分布不均与跨模态几何对齐困难。",
        "method": "以射线感知和类别平衡监督选择稀疏特征，并以射线位置编码对齐跨模态表示。",
        "evidence": "在nuScenes上验证检测精度与计算效率，并评估相机或激光雷达数据缺失时的鲁棒性。",
        "citation": "YANG H, LIU W, QIAO Y, YANG L, ZENG X, WANG L, LI Z, ZENG Z, JIANG Z, LIU H, WANG K. CrossRay3D: Geometry and Distribution Guidance for Efficient Multimodal 3D Detection[J]. IEEE Transactions on Intelligent Transportation Systems, 2026, 27(5): 6027–6039.",
        "doi": "10.1109/TITS.2026.3651273",
        "caption": "CrossRay3D稀疏特征选择与跨模态几何对齐"
      },
      {
        "id": "corea",
        "name": "CoReaAgents",
        "subtitle": "多智能体协同推理",
        "venue": "Applied Sciences",
        "year": "2025",
        "status": "已发表",
        "statusClass": "",
        "role": "通讯作者",
        "image": "assets/corea.png",
        "title": "CoReaAgents: A Collaboration and Reasoning Framework Based on LLM-Powered Agents for Complex Reasoning Tasks",
        "intro": "以规划、工具执行和反思智能体协作，改进复杂任务推理。",
        "problem": "复杂推理任务中容易出现步骤遗漏、执行偏差和工具误选。",
        "method": "规划智能体筛选工具与分解任务，工具智能体增强工具描述并执行子任务，反思智能体核验结果并调整后续计划。",
        "evidence": "在工具学习、数学推理和多跳问答的五个公开数据集上开展对比与消融实验。",
        "citation": "HAN Z, WANG J, YAN X, JIANG Z, ZHANG Y, LIU S, GONG Q, SONG C. CoReaAgents: A Collaboration and Reasoning Framework Based on LLM-Powered Agents for Complex Reasoning Tasks[J]. Applied Sciences, 2025, 15(10): 5663.",
        "doi": "10.3390/app15105663",
        "caption": "CoReaAgents与传统推理方法对比 · 论文原图"
      },
      {
        "id": "patent",
        "name": "多层网络鲁棒性",
        "subtitle": "表征学习方法授权专利",
        "venue": "中国发明专利",
        "year": "2026",
        "status": "已授权",
        "statusClass": "",
        "role": "第一发明人",
        "image": null,
        "title": "一种基于表征学习增强多层网络鲁棒性的方法",
        "intro": "基于表征学习研究多层网络鲁棒性，获中国发明专利授权。",
        "problem": "研究多层网络的结构表征与鲁棒性增强。",
        "method": "将表征学习用于多层网络鲁棒性分析与增强方法。",
        "evidence": "中国发明专利CN120337984B，2026年授权，江志英为第一发明人。",
        "citation": "江志英, 等. 一种基于表征学习增强多层网络鲁棒性的方法：中国，CN120337984B[P]. 2026.",
        "doi": null
      },
      {
        "id": "food",
        "name": "食品安全新闻摘要",
        "subtitle": "大模型与RAG",
        "venue": "IEEE DDCLS",
        "year": "2025",
        "status": "已发表",
        "statusClass": "",
        "role": "第一作者",
        "image": null,
        "title": "Food Safety News Summarization Paradigm Based On Large Language Models And RAG",
        "intro": "面向食品安全新闻摘要的大模型与检索增强生成研究。",
        "problem": "研究大模型与检索增强生成在食品安全新闻摘要中的应用。",
        "method": "将大语言模型与RAG方法用于食品安全新闻摘要。",
        "evidence": "发表于2025 IEEE 14th Data Driven Control and Learning Systems（DDCLS）。",
        "citation": "JIANG Z, ZHANG Z, JI G, LI F. Food Safety News Summarization Paradigm Based On Large Language Models And RAG[C]//2025 IEEE 14th Data Driven Control and Learning Systems (DDCLS). Wuxi: IEEE, 2025: 1681–1686.",
        "doi": "10.1109/DDCLS66240.2025.11065829"
      }
    ],
    "projects": [
      {
        "name": "面向程序设计教育的大模型辅助学习真实性诊断与干预方法研究",
        "source": "北京市自然科学基金",
        "period": "2026.07—2029.06",
        "amount": 30,
        "type": "fund",
        "done": false
      },
      {
        "name": "特定领域大数据工程模块及模型研制",
        "source": "科研院所委托",
        "period": "2023.01—2026.12",
        "amount": 201.5,
        "type": "commission",
        "done": false
      },
      {
        "name": "面向化工领域专业知识的大模型知识增强与复杂任务工具调用算法研发",
        "source": "企事业单位委托",
        "period": "2026.09—2027.02",
        "amount": 78.45,
        "type": "commission",
        "done": false
      },
      {
        "name": "典型场景验证数据采集与处理",
        "source": "科研院所委托",
        "period": "2025.12—2027.12",
        "amount": 93.5,
        "type": "commission",
        "done": false
      },
      {
        "name": "海洋环境要素可视化及数据预处理技术服务",
        "source": "科研院所委托",
        "period": "2024.09—2026.09",
        "amount": 80,
        "type": "commission",
        "done": false
      },
      {
        "name": "能源网络的关键节点识别与分析",
        "source": "国家重点实验室自主科研基金",
        "period": "2024.08—2025.08",
        "amount": 30,
        "type": "lab",
        "done": true
      },
      {
        "name": "多终端的资产综合信息可视化平台开发",
        "source": "企事业单位委托",
        "period": "2022.03—2024.03",
        "amount": 180,
        "type": "commission",
        "done": true
      }
    ],
    "teachingViews": {
      "chl": {
        "title": "CHL：编程学习分析与教学反馈",
        "label": "CLASSROOM PRACTICE",
        "image": "assets/chl.png",
        "caption": "学生提交记录分析 · 已完成整学期课堂应用",
        "body": "在《面向对象程序设计》中开展覆盖104名学生、8个单元的整学期应用。汇集课程任务与编程练习记录，分析学生的学习困难，为课堂追问、作业讲评、变式练习及个别指导提供依据。"
      },
      "fund": {
        "title": "大模型辅助学习的能力诊断与干预",
        "label": "BEIJING NATURAL SCIENCE FOUNDATION",
        "image": "assets/learning-framework.png",
        "caption": "北京市自然科学基金 · 2026.07—2029.06",
        "body": "北京市自然科学基金支持该项研究。以知识、行为与认知三层异质网络组织多源学习记录，研究外部支持不完全可观测时的能力估计与困难定位；结合认知状态转移设计分层干预，并在真实课堂中验证。"
      },
      "trace": {
        "title": "TRACE：学习证据与教师反馈",
        "label": "RESEARCH PROTOTYPE",
        "image": "assets/trace.png",
        "caption": "教师反馈研究原型 · 学习记录与形成条件的关联呈现",
        "body": "面向生成式AI辅助学习，研究教师如何结合学习记录及其形成条件判断学生理解。原型将过程记录、教师判断与后续反馈关联呈现，为认知困难分析和个别化指导提供支持。"
      }
    },
    "milestones": {
      "2005": {
        "title": "计算机科学与技术学习起点",
        "period": "2005.09—2009.06",
        "body": "就读北京化工大学计算机科学与技术专业，获得学士学位。"
      },
      "2009": {
        "title": "计算机应用技术硕士阶段",
        "period": "2009.09—2012.06",
        "body": "在北京化工大学学习计算机应用技术，获得硕士学位。"
      },
      "2012": {
        "title": "在北京化工大学任教",
        "period": "2012.07至今",
        "body": "加入北京化工大学信息科学与技术学院，持续从事教学与科研工作，现为副教授、硕士生导师。长期主讲数据结构、面向对象程序设计等课程。"
      },
      "2016": {
        "title": "控制科学与工程博士阶段",
        "period": "2016.09—2021.06",
        "body": "在北京化工大学攻读控制科学与工程博士，同时持续承担教学与科研工作，2021年获得工学博士学位。"
      },
      "2021": {
        "title": "获得工学博士学位",
        "period": "2021",
        "body": "获得工学博士学位；获北京高校青年教师教学基本功比赛工科类A组三等奖、北京化工大学优秀青年主讲教师。参与欧盟Erasmus+国际协作项目。"
      },
      "2024": {
        "title": "北京化工大学青年教学名师",
        "period": "2024",
        "body": "获北京化工大学青年教学名师奖。主持基于大语言模型的智能教学模式研究等教学改革项目，以科研方法研究课堂中的学习与评价问题。"
      },
      "2026": {
        "title": "科研与教学研究进展",
        "period": "2026年最新进展",
        "body": "北京市自然科学基金与《数据结构》智慧课程获批；HTP-Net论文获IEEE Sensors Journal录用，持续开展图学习、工业智能与教育人工智能研究。"
      }
    },
    "ui": {
      "skip": "跳至正文",
      "brand": "江志英 <small>ZHIYING JIANG</small>",
      "navResearch": "研究",
      "navWorks": "成果",
      "navProjects": "项目",
      "navTeaching": "教学",
      "navJourney": "履历",
      "navContact": "联系",
      "menu": "导航",
      "affiliation": "北京化工大学 · 信息科学与技术学院",
      "name": "江志英<span>ZHIYING JIANG</span>",
      "identity": "工学博士 <i></i> 副教授 <i></i> 硕士生导师",
      "focus": "图学习 · 大模型<br>多模态感知与具身智能",
      "intro": "研究多层网络表征、大模型知识增强与智能体推理、多模态感知与具身问答。主持北京市自然科学基金、国家重点实验室自主科研基金及委托课题10余项，以第一作者或通讯作者发表高质量期刊、会议论文10余篇。同时开展教育人工智能研究，将图建模与实验验证用于学习诊断和课堂教学。",
      "researchAction": "研究方向",
      "worksAction": "代表成果",
      "teachingHonor": "北京化工大学青年教学名师",
      "service": "中国指挥与控制学会<br>具身智能专业委员会常务委员",
      "yearsUnit": "年",
      "yearsMetric": "教学与科研工作 · 2012年起",
      "fundUnit": "万元",
      "totalMetric": "7项项目立项或合同经费 · 2021年以来",
      "recentMetric": "支配科研经费 · 2023年以来",
      "papersUnit": "余篇",
      "papersMetric": "第一作者或通讯作者发表论文",
      "researchTitle": "研究方向",
      "researchLead": "结构表征 · 推理与决策<br>科研方法与教育研究",
      "mapHint": "选择方向，查看研究问题与成果",
      "mapCore1": "建模 · 推断",
      "mapCore2": "实验验证",
      "mapGraph": "结构表征",
      "mapAgents": "大模型",
      "mapEmbodied": "主动感知",
      "mapEducation": "认知诊断",
      "areaNetwork": "结构化表征与复杂网络",
      "areaAgents": "大模型与智能体",
      "areaEmbodied": "多模态与具身智能",
      "areaEducation": "教育人工智能",
      "worksTitle": "代表学术成果",
      "worksLead": "四篇期刊论文与一项授权专利<br>研究方法、实验与论文原图",
      "otherPapers": "其他学术论文",
      "viewDoi": "查看论文 DOI",
      "projectsTitle": "代表性科研项目",
      "projectsLead": "所列7项均主持<br>经费按立项或合同金额统计",
      "filterAll": "全部项目",
      "filterFund": "自然科学基金",
      "filterLab": "重点实验室",
      "filterCommission": "委托研究",
      "totalLabel": "合计",
      "teachingTitle": "用科研方法研究教学问题",
      "teachingLead": "长期教学积累<br>生成式AI环境下的学习与评价",
      "teachingIntro": "自2012年任教以来，长期主讲《数据结构》《面向对象程序设计》等课程，注重从问题分析走向算法推演与代码实现。生成式AI进入课堂后，学生能完成任务，是否意味着真正理解？围绕这一问题，将图网络与大模型的方法积累用于学习者建模，研究能力估计、认知困难定位与教学干预，并通过课堂实验和独立测验检验其有效性。",
      "methodData": "多源学习记录",
      "methodModel": "知识、行为与认知建模",
      "methodTest": "课堂实验与独立测验",
      "tabChl": "CHL课堂应用",
      "tabFund": "自然基金研究",
      "tabTrace": "TRACE研究原型",
      "itemsUnit": "项",
      "competitionMetric": "指导学生获国家级竞赛一等奖",
      "innovationMetric": "指导国家级大学生创新创业项目",
      "enrolmentsUnit": "人次",
      "moocMetric": "参与建设的大学计算机基础慕课选课量",
      "coursesTitle": "课程与教学建设",
      "course1": "本科核心课程：数据结构、面向对象程序设计。",
      "course2": "本科课程：C语言程序设计（含英文授课）、移动互联网技术；参与人工智能导论教学。",
      "course3": "研究生课程：专业英语、学术英语写作。",
      "course4": "主持《数据结构》课程思政示范课、智慧课程及《移动互联网技术》一流本科课程建设；参与《数据结构》一流课程建设。",
      "course5": "独立录制《数据结构实验》全套教程视频，结合CHL、CodeLab与BUCTOJ开展实践教学。",
      "course6": "副主编《大学计算机实验指导》第5版，清华大学出版社，2025。",
      "educationPapers": "教育研究论文",
      "cooperationTitle": "国际协作与教学交流",
      "cooperationBody": "参与欧盟Erasmus+ Global Innovation Teams项目，与6国7所高校开展国际协作和虚拟实习教学研究。项目结题评审获88分，被列为可推广的良好实践。",
      "summitBody": "担任数字教育与行业伙伴关系研究峰会执行主席，作《中外合作教学模式改革研究》报告。",
      "journeyTitle": "教育与任教经历",
      "journeyLead": "教育经历、任教历程与荣誉<br>选择年份，查看阶段记录",
      "honorsTitle": "主要荣誉与奖励",
      "honor1": "北京化工大学青年教学名师奖",
      "honor2": "北京市高等教育教学成果奖二等奖 <small>第8/10完成人</small>",
      "honor3": "北京高校青年教师教学基本功比赛工科类A组三等奖",
      "honor4": "北京化工大学优秀青年主讲教师",
      "honor5": "北京化工大学青教赛一等奖 <small>最佳现场展示奖、最受学生欢迎奖</small>",
      "honor6": "第二届全国高校微课教学比赛北京市比赛三等奖",
      "contactTitle": "学术交流与合作",
      "schoolLink": "学院个人主页",
      "footerName": "江志英 · 科研与教学",
      "updated": "更新于2026年10月15日",
      "top": "返回顶部",
      "title": "江志英 · 科研与教学",
      "description": "江志英，北京化工大学副教授、硕士生导师。研究图学习、大模型与智能体、多模态感知与具身智能，并将科研方法用于教育人工智能研究。",
      "navigation": "主导航",
      "language": "语言切换",
      "portraitAlt": "江志英工作照片",
      "mapAria": "研究方向图",
      "areaGroup": "选择研究方向",
      "projectGroup": "按来源筛选科研项目",
      "teachingGroup": "教学研究与实践",
      "yearGroup": "选择履历年份",
      "close": "关闭详情",
      "euCaption": "欧盟项目结题评审 · Good Practice评价",
      "summitCaption": "峰会手册 · 执行主席介绍",
      "researchMethods": "研究主题与方法",
      "relatedResearch": "相关研究",
      "teachingLink": "自然基金与课堂实践",
      "patentLabel": "授权发明专利",
      "viewWork": "查看成果详情：",
      "principalInvestigator": "主持",
      "completed": "已结题",
      "projectCount": "项项目",
      "enlarge": "放大图片：",
      "problem": "研究问题",
      "method": "方法设计",
      "evidence": "实验与成果",
      "copy": "复制学术引用",
      "copied": "学术引用已复制",
      "copyFallback": "请选中引用文字复制",
      "published": "已发表",
      "accepted": "已录用",
      "granted": "已授权",
      "otherPapersLead": "期刊与会议论文 · 已发表及已录用",
      "publicationFilters": "按研究领域筛选论文",
      "publicationsAll": "全部",
      "publicationsResearch": "科研论文",
      "publicationsEducation": "教育研究",
      "publicationCount": "篇论文",
      "schoolUrl": "https://cist.buct.edu.cn/_s11/2026/0603/c15683a220265/page.psp"
    },
    "featuredWorkIds": [
      "rtgcn",
      "sensors",
      "crossray",
      "corea",
      "patent"
    ]
  },
  "en": {
    "researchAreas": {
      "network": {
        "number": "01",
        "title": "Structured Representation and Complex Networks",
        "body": "I study heterogeneous relationships and cross-layer dependencies in multilayer networks, focusing on representation learning, key-node identification and robustness. Related work combines temporal modelling and hyperbolic representations for industrial fault diagnosis.",
        "tags": [
          "Multilayer networks",
          "Hyperbolic representations",
          "Temporal modelling",
          "Network robustness"
        ],
        "works": [
          "rtgcn",
          "sensors",
          "patent"
        ]
      },
      "agents": {
        "number": "02",
        "title": "Large Language Models and Agents",
        "body": "My research addresses knowledge enhancement, task planning and tool use for complex domain-specific tasks. Collaboration among planning, tool-execution and reflection agents is used to improve multi-step reasoning and tool selection.",
        "tags": [
          "Knowledge enhancement & RAG",
          "Multi-agent collaboration",
          "Task planning",
          "Tool use"
        ],
        "works": [
          "corea",
          "food"
        ]
      },
      "embodied": {
        "number": "03",
        "title": "Multimodal Perception and Embodied Intelligence",
        "body": "I study image–point-cloud fusion, 3D object detection and embodied question answering with vision-language models. When existing observations do not support an answer, evidence assessment guides further observation, balancing answer quality with a limited exploration budget.",
        "tags": [
          "Image–point-cloud fusion",
          "3D object detection",
          "Embodied question answering",
          "Evidence-constrained perception"
        ],
        "works": [
          "crossray"
        ]
      },
      "education": {
        "number": "04",
        "title": "Artificial Intelligence in Education",
        "body": "I study capability estimation and cognitive diagnosis in AI-assisted learning. Multilayer heterogeneous graphs connect knowledge, behaviour and cognition to identify learning difficulties when external support is only partly observable. Classroom studies and independent tests evaluate diagnosis and targeted interventions.",
        "tags": [
          "Learner modelling",
          "Authentic learning assessment",
          "Cognitive repair",
          "Teacher feedback"
        ],
        "works": []
      }
    },
    "works": [
      {
        "id": "rtgcn",
        "name": "RT-GCN",
        "subtitle": "Multilayer network representation",
        "venue": "Expert Systems with Applications",
        "year": "2027 · Online 2026",
        "status": "Published",
        "statusClass": "",
        "role": "First author",
        "image": "assets/rtgcn.png",
        "title": "Learning multilayer network representation via rotational graph convolutional networks",
        "intro": "Rotational mappings model heterogeneous interlayer relations while preserving within-layer topology and cross-layer dependencies.",
        "problem": "Many-to-many heterogeneous dependencies in multilayer networks are difficult to preserve through separate layer modelling or simple aggregation.",
        "method": "Relation-specific rotational mappings in complex space are combined with relation-aware attention and consistency gating to selectively fuse cross-layer information.",
        "evidence": "Link prediction and sparse-coupling experiments on four real-world network datasets, with further analysis of centrality and network visualisation.",
        "citation": "JIANG Z, JI G, DAI Y, DOYLE P, GU W. Learning multilayer network representation via rotational graph convolutional networks[J]. Expert Systems with Applications, 2027, 333: 134080.",
        "doi": "10.1016/j.eswa.2026.134080",
        "caption": "RT-GCN: within-layer encoding and cross-layer fusion"
      },
      {
        "id": "sensors",
        "name": "HTP-Net",
        "subtitle": "Industrial fault diagnosis",
        "venue": "IEEE Sensors Journal",
        "year": "2026 · Accepted 23 September",
        "status": "Accepted",
        "statusClass": "accepted",
        "role": "Corresponding author",
        "image": "assets/htp-net.png",
        "title": "Novel Hyperbolic Temporal Prototype Network for Industrial Fault Diagnosis",
        "intro": "Temporal representations and hyperbolic class prototypes distinguish industrial faults with similar responses.",
        "problem": "Nonlinear dynamics, feedback control and coupled variables can produce similar temporal responses for different industrial faults.",
        "method": "Multiscale convolutions, BiGRU and temporal attention extract features, which are mapped to the Poincaré ball. Classification uses hyperbolic geodesic distances to learnable class prototypes.",
        "evidence": "Comparisons and ablations across five random seeds on two selected fault groups of the Tennessee Eastman process assess temporal modelling and hyperbolic prototype classification.",
        "citation": "HE Y L, LI J Y, ZHU Q X, JIANG Z Y. Novel Hyperbolic Temporal Prototype Network for Industrial Fault Diagnosis[J]. IEEE Sensors Journal, 2026. Accepted. DOI: 10.1109/JSEN.2026.3737913.",
        "doi": "10.1109/JSEN.2026.3737913",
        "caption": "HTP-Net architecture · Figure from the accepted proof"
      },
      {
        "id": "crossray",
        "name": "CrossRay3D",
        "subtitle": "Multimodal 3D object detection",
        "venue": "IEEE Transactions on Intelligent Transportation Systems",
        "year": "2026",
        "status": "Published",
        "statusClass": "",
        "role": "Corresponding author",
        "image": "assets/crossray.png",
        "title": "CrossRay3D: Geometry and Distribution Guidance for Efficient Multimodal 3D Detection",
        "intro": "Sparse feature selection and geometric alignment improve image–point-cloud fusion for 3D detection.",
        "problem": "Multimodal 3D detection faces weak foreground features, imbalanced class distributions and geometric misalignment between images and point clouds.",
        "method": "Ray-aware and class-balanced supervision selects sparse features. Ray positional encoding aligns cross-modal representations.",
        "evidence": "Detection quality and computational efficiency are evaluated on nuScenes, including robustness to missing camera or LiDAR data.",
        "citation": "YANG H, LIU W, QIAO Y, YANG L, ZENG X, WANG L, LI Z, ZENG Z, JIANG Z, LIU H, WANG K. CrossRay3D: Geometry and Distribution Guidance for Efficient Multimodal 3D Detection[J]. IEEE Transactions on Intelligent Transportation Systems, 2026, 27(5): 6027–6039.",
        "doi": "10.1109/TITS.2026.3651273",
        "caption": "CrossRay3D: sparse feature selection and cross-modal geometric alignment"
      },
      {
        "id": "corea",
        "name": "CoReaAgents",
        "subtitle": "Collaborative agent reasoning",
        "venue": "Applied Sciences",
        "year": "2025",
        "status": "Published",
        "statusClass": "",
        "role": "Corresponding author",
        "image": "assets/corea.png",
        "title": "CoReaAgents: A Collaboration and Reasoning Framework Based on LLM-Powered Agents for Complex Reasoning Tasks",
        "intro": "Planning, tool-execution and reflection agents collaborate on complex reasoning tasks.",
        "problem": "Complex reasoning tasks are prone to omitted steps, execution errors and inappropriate tool selection.",
        "method": "A planning agent selects tools and decomposes tasks, a tool agent enriches tool descriptions and executes subtasks, and a reflection agent checks results and revises the plan.",
        "evidence": "Comparative and ablation studies on five public datasets covering tool learning, mathematical reasoning and multi-hop question answering.",
        "citation": "HAN Z, WANG J, YAN X, JIANG Z, ZHANG Y, LIU S, GONG Q, SONG C. CoReaAgents: A Collaboration and Reasoning Framework Based on LLM-Powered Agents for Complex Reasoning Tasks[J]. Applied Sciences, 2025, 15(10): 5663.",
        "doi": "10.3390/app15105663",
        "caption": "CoReaAgents compared with conventional reasoning approaches · Original paper figure"
      },
      {
        "id": "patent",
        "name": "Multilayer Network Robustness",
        "subtitle": "Representation-learning patent",
        "venue": "Chinese invention patent",
        "year": "2026",
        "status": "Granted",
        "statusClass": "",
        "role": "First inventor",
        "image": null,
        "title": "A representation-learning method for improving the robustness of multilayer networks",
        "intro": "A granted invention patent on representation learning for multilayer network robustness.",
        "problem": "Representation learning for the analysis and improvement of multilayer network robustness.",
        "method": "Learning network representations to support robustness analysis and improvement.",
        "evidence": "Chinese invention patent CN120337984B, granted in 2026. Zhiying Jiang is the first inventor.",
        "citation": "JIANG Z, et al. 一种基于表征学习增强多层网络鲁棒性的方法: China, CN120337984B[P]. 2026.",
        "doi": null
      },
      {
        "id": "food",
        "name": "Food Safety News Summarisation",
        "subtitle": "LLMs and RAG",
        "venue": "IEEE DDCLS",
        "year": "2025",
        "status": "Published",
        "statusClass": "",
        "role": "First author",
        "image": null,
        "title": "Food Safety News Summarization Paradigm Based On Large Language Models And RAG",
        "intro": "Large language models and retrieval-augmented generation for food safety news summarisation.",
        "problem": "Applying language models and retrieval-augmented generation to food safety news.",
        "method": "Combining large language models with RAG for news summarisation.",
        "evidence": "Published in 2025 IEEE 14th Data Driven Control and Learning Systems (DDCLS).",
        "citation": "JIANG Z, ZHANG Z, JI G, LI F. Food Safety News Summarization Paradigm Based On Large Language Models And RAG[C]//2025 IEEE 14th Data Driven Control and Learning Systems (DDCLS). Wuxi: IEEE, 2025: 1681–1686.",
        "doi": "10.1109/DDCLS66240.2025.11065829"
      }
    ],
    "projects": [
      {
        "name": "Diagnosis and Intervention for Authentic Learning with LLM Assistance in Programming Education",
        "source": "Beijing Natural Science Foundation",
        "period": "2026.07—2029.06",
        "amount": 30,
        "type": "fund",
        "done": false
      },
      {
        "name": "Engineering Modules and Models for Domain-Specific Big Data",
        "source": "Commissioned by a research institute",
        "period": "2023.01—2026.12",
        "amount": 201.5,
        "type": "commission",
        "done": false
      },
      {
        "name": "Knowledge Enhancement and Complex-Task Tool Use for Large Models in Chemical Engineering",
        "source": "Commissioned by an enterprise or institution",
        "period": "2026.09—2027.02",
        "amount": 78.45,
        "type": "commission",
        "done": false
      },
      {
        "name": "Data Collection and Processing for Representative Validation Scenarios",
        "source": "Commissioned by a research institute",
        "period": "2025.12—2027.12",
        "amount": 93.5,
        "type": "commission",
        "done": false
      },
      {
        "name": "Marine Environmental Data Visualisation and Preprocessing",
        "source": "Commissioned by a research institute",
        "period": "2024.09—2026.09",
        "amount": 80,
        "type": "commission",
        "done": false
      },
      {
        "name": "Identification and Analysis of Key Nodes in Energy Networks",
        "source": "State Key Laboratory research fund",
        "period": "2024.08—2025.08",
        "amount": 30,
        "type": "lab",
        "done": true
      },
      {
        "name": "Multi-Terminal Platform for Integrated Asset Information Visualisation",
        "source": "Commissioned by an enterprise or institution",
        "period": "2022.03—2024.03",
        "amount": 180,
        "type": "commission",
        "done": true
      }
    ],
    "teachingViews": {
      "chl": {
        "title": "CHL: Programming Learning Analytics and Feedback",
        "label": "CLASSROOM PRACTICE",
        "image": "assets/chl.png",
        "caption": "Student submission analysis · Full-semester classroom use",
        "body": "CHL was used throughout an Object-Oriented Programming course with 104 students across eight units. Course tasks and programming records were analysed to identify learning difficulties and inform classroom questioning, assignment feedback, transfer exercises and individual guidance."
      },
      "fund": {
        "title": "Diagnosing Capabilities in LLM-Assisted Learning",
        "label": "BEIJING NATURAL SCIENCE FOUNDATION",
        "image": "assets/learning-framework.png",
        "caption": "Beijing Natural Science Foundation · July 2026–June 2029",
        "body": "This funded project organises learning records through three heterogeneous network layers: knowledge, behaviour and cognition. It investigates capability estimation and difficulty diagnosis when external assistance is partly unobserved, with cognitive-state transitions informing targeted interventions and validation in real classrooms."
      },
      "trace": {
        "title": "TRACE: Learning Evidence and Teacher Feedback",
        "label": "RESEARCH PROTOTYPE",
        "image": "assets/trace.png",
        "caption": "Research prototype · Learning records and the conditions in which they were produced",
        "body": "TRACE studies how teachers interpret learning records and their formation conditions in AI-assisted learning. The prototype links process records, teacher judgements and subsequent feedback to support analysis of conceptual difficulties and individual guidance."
      }
    },
    "milestones": {
      "2005": {
        "title": "Undergraduate Study in Computer Science",
        "period": "September 2005–June 2009",
        "body": "Studied Computer Science and Technology at Beijing University of Chemical Technology and received a bachelor’s degree."
      },
      "2009": {
        "title": "Master’s Study in Computer Applications",
        "period": "September 2009–June 2012",
        "body": "Studied Computer Application Technology at Beijing University of Chemical Technology and received a master’s degree."
      },
      "2012": {
        "title": "Joined Beijing University of Chemical Technology",
        "period": "July 2012–present",
        "body": "Joined the College of Information Science and Technology. Now an Associate Professor and master’s supervisor, with long-term teaching in Data Structures and Object-Oriented Programming."
      },
      "2016": {
        "title": "Doctoral Study in Control Science and Engineering",
        "period": "September 2016–June 2021",
        "body": "Pursued doctoral research at Beijing University of Chemical Technology while continuing teaching and research duties. Received a Ph.D. in engineering in 2021."
      },
      "2021": {
        "title": "Completed the Ph.D.",
        "period": "2021",
        "body": "Received a Ph.D., a third prize in the Beijing Young University Teachers’ Teaching Competition and the BUCT Outstanding Young Lecturer award. Contributed to an Erasmus+ international collaboration project."
      },
      "2024": {
        "title": "BUCT Young Distinguished Teacher",
        "period": "2024",
        "body": "Received the BUCT Young Distinguished Teacher Award. Led educational reform projects on language-model-supported teaching, applying research methods to learning and assessment in the classroom."
      },
      "2026": {
        "title": "Research and Educational Research Updates",
        "period": "Latest developments in 2026",
        "body": "Awarded a Beijing Natural Science Foundation grant and approval for the Data Structures smart-course project. HTP-Net was accepted by IEEE Sensors Journal, alongside continuing research in graph learning, industrial intelligence and AI in education."
      }
    },
    "ui": {
      "title": "Zhiying Jiang · Research & Teaching",
      "description": "Zhiying Jiang, Associate Professor at Beijing University of Chemical Technology. Research in graph learning, large language models, multimodal perception, embodied intelligence and AI in education.",
      "skip": "Skip to content",
      "brand": "Zhiying Jiang <small>北京化工大学 · BUCT</small>",
      "navigation": "Main navigation",
      "language": "Choose language",
      "menu": "Menu",
      "navResearch": "Research",
      "navWorks": "Publications",
      "navProjects": "Projects",
      "navTeaching": "Teaching",
      "navJourney": "Biography",
      "navContact": "Contact",
      "affiliation": "College of Information Science and Technology<br>Beijing University of Chemical Technology",
      "name": "Zhiying Jiang<span lang=\"zh-CN\">江志英</span>",
      "identity": "Ph.D. <i></i> Associate Professor <i></i> Master’s Supervisor",
      "focus": "Graph Learning · Large Language Models<br>Multimodal Perception & Embodied Intelligence",
      "intro": "My research spans multilayer network representation, knowledge-enhanced large language models, agent reasoning, multimodal perception and embodied question answering. I have led more than ten funded and commissioned projects and published over ten papers as first or corresponding author. I also study learning diagnosis and classroom teaching using graph modelling and experimental methods.",
      "researchAction": "Research areas",
      "worksAction": "Selected work",
      "portraitAlt": "Portrait of Zhiying Jiang",
      "teachingHonor": "BUCT Young Distinguished Teacher",
      "service": "Standing Committee Member<br>Embodied Intelligence Committee<br>Chinese Institute of Command and Control",
      "yearsUnit": "years",
      "yearsMetric": "Teaching and research at BUCT since 2012",
      "fundUnit": "×10⁴ CNY",
      "totalMetric": "Approved or contracted funding for 7 projects since 2021",
      "recentMetric": "Research funding under management since 2023",
      "papersUnit": "+ papers",
      "papersMetric": "Published as first or corresponding author",
      "researchTitle": "Research Areas",
      "researchLead": "Representation, reasoning and decision-making<br>Research methods for educational questions",
      "mapHint": "Select an area to explore its questions and related work",
      "mapAria": "Interactive research areas",
      "mapCore1": "Model · Infer",
      "mapCore2": "Validate",
      "mapGraph": "Structure",
      "mapAgents": "LLMs",
      "mapEmbodied": "Perception",
      "mapEducation": "Learning",
      "areaGroup": "Choose a research area",
      "areaNetwork": "Network Representation",
      "areaAgents": "LLMs & Agents",
      "areaEmbodied": "Multimodal & Embodied AI",
      "areaEducation": "AI in Education",
      "worksTitle": "Selected Academic Work",
      "worksLead": "Four journal papers and one granted patent<br>Methods, experiments and original figures",
      "otherPapers": "Other Publications",
      "viewDoi": "View DOI",
      "projectsTitle": "Selected Research Projects",
      "projectsLead": "Principal investigator on all 7 projects<br>Approved or contracted funding",
      "projectGroup": "Filter projects by funding source",
      "filterAll": "All projects",
      "filterFund": "Natural Science Foundation",
      "filterLab": "Key Laboratory",
      "filterCommission": "Commissioned research",
      "totalLabel": "Total",
      "teachingTitle": "Research Methods for Teaching",
      "teachingLead": "Teaching since 2012<br>Learning and assessment with generative AI",
      "teachingIntro": "I teach Data Structures and Object-Oriented Programming, connecting problem analysis with algorithm development and implementation. Generative AI raises a question for assessment: does completing a task demonstrate understanding? My educational research draws on graph learning and language models to estimate learners’ capabilities, diagnose conceptual difficulties and inform instructional interventions, evaluated through classroom studies and independent tests.",
      "methodData": "Learning records",
      "methodModel": "Knowledge, behaviour and cognition",
      "methodTest": "Classroom studies and independent tests",
      "teachingGroup": "Educational research and practice",
      "tabChl": "CHL in class",
      "tabFund": "Foundation project",
      "tabTrace": "TRACE prototype",
      "itemsUnit": "",
      "enrolmentsUnit": "enrolments",
      "competitionMetric": "National first prizes won by supervised students",
      "innovationMetric": "National undergraduate innovation projects supervised",
      "moocMetric": "Enrolments in the Fundamentals of Computing MOOC I co-developed",
      "coursesTitle": "Courses and Curriculum Development",
      "course1": "Core undergraduate courses: Data Structures and Object-Oriented Programming.",
      "course2": "Other undergraduate teaching: C Programming, including English-medium classes, and Mobile Internet Technology; contributions to Introduction to Artificial Intelligence.",
      "course3": "Postgraduate courses: English for Computer Science and Academic English Writing.",
      "course4": "Lead the Data Structures smart-course project and curriculum-based values education project, and the first-class undergraduate course project for Mobile Internet Technology; contribute to the first-class Data Structures course project.",
      "course5": "Recorded the complete Data Structures Laboratory tutorial series and use CHL, CodeLab and BUCTOJ in practical teaching.",
      "course6": "Associate editor, University Computing Laboratory Guide, 5th edition, Tsinghua University Press, 2025.",
      "educationPapers": "Educational Research Publications",
      "cooperationTitle": "International Collaboration",
      "cooperationBody": "Contributed to the Erasmus+ Global Innovation Teams project, involving seven universities across six countries in international collaboration and virtual internships. Its final assessment scored 88 and identified it as a good practice for dissemination.",
      "summitBody": "Executive Chair of the research summit on digital education and industry partnerships; presented research on collaborative teaching across countries.",
      "euCaption": "Erasmus+ final assessment · Good Practice evaluation",
      "summitCaption": "Summit programme · Executive Chair profile",
      "journeyTitle": "Education and Career",
      "journeyLead": "Education, appointments and awards<br>Select a year to view a milestone",
      "yearGroup": "Choose a year",
      "honorsTitle": "Honours and Awards",
      "honor1": "Young Distinguished Teacher Award, Beijing University of Chemical Technology",
      "honor2": "Second Prize, Beijing Higher Education Teaching Achievement Award <small>Contributor 8 of 10</small>",
      "honor3": "Third Prize, Beijing Young University Teachers’ Teaching Competition, Engineering Group A",
      "honor4": "Outstanding Young Lecturer, Beijing University of Chemical Technology",
      "honor5": "First Prize, BUCT Young Teachers’ Teaching Competition <small>Best Live Presentation and Students’ Favourite Teacher</small>",
      "honor6": "Third Prize, Beijing Division of the 2nd National University Micro-Lecture Teaching Competition",
      "contactTitle": "Academic Exchange and Collaboration",
      "schoolLink": "University profile",
      "footerName": "Zhiying Jiang · Research & Teaching",
      "updated": "Updated 15 October 2026",
      "top": "Back to top",
      "close": "Close details",
      "researchMethods": "Topics and methods",
      "relatedResearch": "Related work",
      "teachingLink": "Foundation project and classroom practice",
      "patentLabel": "Granted invention patent",
      "viewWork": "View details: ",
      "principalInvestigator": "Principal investigator",
      "completed": "Completed",
      "projectCount": " projects",
      "enlarge": "Enlarge image: ",
      "problem": "Research question",
      "method": "Method",
      "evidence": "Evaluation and results",
      "copy": "Copy citation",
      "copied": "Citation copied",
      "copyFallback": "Select the citation text to copy it",
      "published": "Published",
      "accepted": "Accepted",
      "granted": "Granted",
      "otherPapersLead": "Journal and conference papers · Published and accepted",
      "publicationFilters": "Filter publications by research area",
      "publicationsAll": "All",
      "publicationsResearch": "Research",
      "publicationsEducation": "Education",
      "publicationCount": " publications",
      "schoolUrl": "https://en-cist.buct.edu.cn/2023/0306/c13314a176314/page.htm"
    },
    "featuredWorkIds": [
      "rtgcn",
      "sensors",
      "crossray",
      "corea",
      "patent"
    ]
  }
};

window.CV_PUBLICATIONS = [
  {
    "id": "chl2026",
    "year": 2026,
    "category": "education",
    "status": "accepted",
    "citation": "江志英, 刘晔宁, 卢罡, 贺彦林. 生成式AI环境下数据结构CHL教学实践[J]. 计算机教育（已录用）.",
    "doi": "",
    "titleEn": "CHL Teaching Practice for Data Structures with Generative AI"
  },
  {
    "id": "repair2026",
    "year": 2026,
    "category": "education",
    "status": "accepted",
    "citation": "江志英, 刘晔宁, 谷伟伟. 新工科视域下认知结构断裂的修复机理与实践分析——以《数据结构》课程为例[J]. 北京化工大学学报（社会科学版）（已录用）.",
    "doi": "",
    "titleEn": "Mechanisms and Practice of Cognitive-Structure Repair in Data Structures"
  },
  {
    "id": "food2025",
    "year": 2025,
    "category": "research",
    "status": "published",
    "citation": "JIANG Z, ZHANG Z, JI G, LI F. Food Safety News Summarization Paradigm Based On Large Language Models And RAG[C]//2025 IEEE 14th Data Driven Control and Learning Systems (DDCLS). Wuxi: IEEE, 2025: 1681–1686.",
    "doi": "10.1109/DDCLS66240.2025.11065829"
  },
  {
    "id": "reaco2025",
    "year": 2025,
    "category": "research",
    "status": "published",
    "citation": "江志英, 黄震宇, 宋晨炜, 张泽宇, 韩众和, 谷伟伟, 龚启航, 刘思叶, 赵妍. 基于思维代码的大语言模型多工具协调调用提示方法[J]. 北京化工大学学报（自然科学版）, 2025, 52(3): 105–113.",
    "doi": "10.13543/j.bhxbzr.2025.03.011"
  },
  {
    "id": "oop2025",
    "year": 2025,
    "category": "education",
    "status": "published",
    "citation": "江志英, 冀港, 谷伟伟. 新工科背景下生成式AI赋能教学模式探索——以面向对象程序设计课程为例[J]. 教育理论与研究, 2025, 3(40): 128–130.",
    "doi": "10.61369/ETR.2025400050",
    "titleEn": "Generative AI in Object-Oriented Programming Education"
  },
  {
    "id": "mooc2023",
    "year": 2023,
    "category": "education",
    "status": "published",
    "citation": "江志英, 王嘉薪, 卢罡, DOYLE P, GILLESPIE B. 基于定制MOOC与中外联合课堂的混合教学模式探究[J]. 计算机教育, 2023(10): 112–116.",
    "doi": "10.16512/j.cnki.jsjjy.2023.10.040",
    "titleEn": "Blended Teaching with Customised MOOCs and Joint International Classes"
  },
  {
    "id": "risk2023",
    "year": 2023,
    "category": "research",
    "status": "published",
    "citation": "HAN Y, LIU J, LI J, JIANG Z, MA B, CHU C, GENG Z. Novel risk assessment model of food quality and safety considering physical-chemical and pollutant indexes based on coefficient of variance integrating entropy weight[J]. Science of The Total Environment, 2023, 877: 162730.",
    "doi": "10.1016/j.scitotenv.2023.162730"
  },
  {
    "id": "cohosted2022",
    "year": 2022,
    "category": "education",
    "status": "published",
    "citation": "GILLESPIE B, DOYLE P, JIANG Z, HUMBLE D. Sustainable international engagement using a partner co-hosted teaching model[J]. Irish Journal of Academic Practice, 2022, 10(1): Article 13.",
    "doi": "10.21427/as8x-eq43",
    "titleEn": "Sustainable International Engagement through Co-hosted Teaching"
  },
  {
    "id": "ahplstm2021",
    "year": 2021,
    "category": "research",
    "status": "published",
    "citation": "江志英, 李宇洋, 李佳桐, 贺彦林, 朱群雄. 基于层次分析的长短记忆网络（AHP-LSTM）的食品安全网络舆情预警模型[J]. 北京化工大学学报（自然科学版）, 2021, 48(6): 98–107.",
    "doi": "10.13543/j.bhxbzr.2021.06.013"
  },
  {
    "id": "tfidf2021",
    "year": 2021,
    "category": "research",
    "status": "published",
    "citation": "JIANG Z, GAO B, HE Y, HAN Y, DOYLE P, ZHU Q. Text Classification Using Novel Term Weighting Scheme-Based Improved TF-IDF for Internet Media Reports[J]. Mathematical Problems in Engineering, 2021, 2021: 6619088.",
    "doi": "10.1155/2021/6619088"
  },
  {
    "id": "blended2020",
    "year": 2020,
    "category": "education",
    "status": "published",
    "citation": "江志英, 石雯雯, 史晟辉, 彭四伟. 基于在线教育平台的混合教学模式研究——以《数据结构》课程改革为例[J]. 科教导刊-电子版（中旬）, 2020(12): 134–135.",
    "doi": "",
    "titleEn": "Blended Learning in Data Structures"
  },
  {
    "id": "codit2020",
    "year": 2020,
    "category": "research",
    "status": "published",
    "citation": "JIANG Z Y, GAO B, TIAN X, HE Y L, ZHU Q X. An Improved Term Weighting Method for Content Analysis on Chinese Internet Media Contents[C]//2020 7th International Conference on Control, Decision and Information Technologies (CoDIT). Prague: IEEE, 2020: 48–52.",
    "doi": "10.1109/CoDIT49905.2020.9263808"
  },
  {
    "id": "storm2019",
    "year": 2019,
    "category": "research",
    "status": "published",
    "citation": "JIANG Z, HAO G, HE Y, CHEN K, WANG Y, ZHU Q. An Online-Offline Computing Mode based on Apache Storm for Text Classification[C]//2019 Chinese Automation Congress (CAC). Hangzhou: IEEE, 2019: 3385–3390.",
    "doi": "10.1109/CAC48633.2019.8996352"
  },
  {
    "id": "plsr2018",
    "year": 2018,
    "category": "research",
    "status": "published",
    "citation": "ZHANG X, ZHU Q, JIANG Z Y, HE Y, XU Y. A novel ensemble model using PLSR integrated with multiple activation functions based ELM: Applications to soft sensor development[J]. Chemometrics and Intelligent Laboratory Systems, 2018, 183: 147–157.",
    "doi": "10.1016/j.chemolab.2018.10.016"
  }
];
