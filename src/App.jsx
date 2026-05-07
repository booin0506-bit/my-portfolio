import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, User, Heart, Coffee, Users, Target, MessageCircle, PenTool, Layout, Lightbulb, X, ArrowLeft, Image as ImageIcon } from 'lucide-react';

import port1_1 from './assets/img/portfolio1_1.jpg';
import port1_2 from './assets/img/portfolio1_2.jpg';
import port1_3 from './assets/img/portfolio1_3.jpg';
import port1_4 from './assets/img/portfolio1_4.jpg';
import port1_5 from './assets/img/portfolio1_5.jpg';
import port1_6 from './assets/img/portfolio1_6.jpg';
import port1_7 from './assets/img/portfolio1_7.jpg';
import port1_8 from './assets/img/portfolio1_8.jpg';
import port1_9 from './assets/img/portfolio1_9.jpg';

import port2_thumb from './assets/img/portfolio2_thumnail.png';
import port2_1 from './assets/img/portfolio2_01.jpg';
import port2_2 from './assets/img/portfolio2_02.jpg';
import port2_3 from './assets/img/portfolio2_03.jpg';
import port2_4 from './assets/img/portfolio2_04.jpg';
import port2_5 from './assets/img/portfolio2_05.jpg';
import port2_6 from './assets/img/portfolio2_06.jpg';
import port2_7 from './assets/img/portfolio2_07.jpg';

import port3_thumb from './assets/img/portfolio3_thumnail.png';
import port3_1 from './assets/img/portfolio3_01.jpg';
import port3_2 from './assets/img/portfolio3_02.jpg';
import port3_3 from './assets/img/portfolio3_03.jpg';

import port4_thumb from './assets/img/portfolio4_thumnail.png';
import port4_1 from './assets/img/portfolio4_01.jpg';
import port4_2 from './assets/img/portfolio4_02.jpg';
import port4_3 from './assets/img/portfolio4_03.gif';
import port4_4 from './assets/img/portfolio4_04.gif';

import coverLetterImg from './assets/img/Cover_Letter1.png';

// 스크롤 페이드인 애니메이션 컴포넌트 추가
const FadeInOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.15 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 자기소개서 전용 컴포넌트
const CoverLetter = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans pb-32 animate-fade-in relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" 
          alt="Cover Letter Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-black font-bold transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
              포트폴리오로 돌아가기
            </button>
            <div className="text-xl font-bold tracking-tight">
              Youngwan<span className="text-blue-600">.</span>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 pt-16">
          <div className="mb-16 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-blue-700 text-blue-50 rounded-full text-sm font-bold mb-4 shadow-sm">
              Cover Letter
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">자기소개서</h1>
          </div>

          <div className="space-y-20 bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-lg border border-gray-100">
            <FadeInOnScroll>
              <section>
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">01</div>
                  <h2 className="text-2xl font-bold text-gray-800">가치관과 일의 태도</h2>
                </div>
                {/* font-medium을 font-normal로 변경 */}
                <p className="text-lg leading-relaxed text-gray-600 font-normal break-keep">
                  "과정이 즐거워야 결과가 좋다"는 마음가짐으로 업무에 임합니다. 뛰어난 개인의 역량도 중요하지만, 무엇보다 팀워크를 중시하여 팀원들과 의견을 활발하게 교류하는 것을 즐깁니다. 업무 중 예상치 못한 문제가 발생하더라도 좌절하기보다는, 그 상황 안에서 프로젝트를 정상적으로 진행할 수 있는 최선의 방향을 찾기 위해 노력합니다. 혼자만의 생각에 갇히기보다 여러 사람과의 커뮤니케이션을 통해 가장 합리적인 결론을 도출하는 것을 업무의 기본 원칙으로 삼고 있습니다.
                </p>
              </section>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <section>
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">02</div>
                  <h2 className="text-2xl font-bold text-gray-800">강점과 단점</h2>
                </div>
                <div className="w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex flex-col items-center justify-center relative aspect-video mb-8 shadow-sm">
                  <img 
                    src={coverLetterImg} 
                    alt="강점과 단점 시각화 데이터" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* font-medium을 font-normal로 변경 */}
                <p className="text-lg leading-relaxed text-gray-600 font-normal break-keep">
                  저의 가장 큰 강점은 '사용자와 동료를 향한 배려' 그리고 '원활한 커뮤니케이션 능력'입니다. 디자인 결과물이 어떤 맥락에서 사용될지 꼼꼼히 분석하여 직관적인 경험을 설계합니다. 반면, [단점 입력: 예 - 너무 디테일에 집착하여 가끔 시간이 지체될 때가 있습니다.]라는 단점이 있습니다. 하지만 이를 극복하기 위해 [극복 노력 입력: 예 - 작업 전 명확한 타임라인을 설정하고 우선순위를 시각화하여 일정을 관리하는] 등 꾸준한 노력을 기울이고 있습니다.
                </p>
              </section>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <section>
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">03</div>
                  <h2 className="text-2xl font-bold text-gray-800">지원계기</h2>
                </div>
                {/* font-medium을 font-normal로 변경 */}
                <p className="text-lg leading-relaxed text-gray-600 font-normal break-keep">
                  귀사의 [회사의 비전이나 서비스 장점 입력]에 깊은 인상을 받아 지원하게 되었습니다. 밀키트 스타트업 '푸드어셈블'에서 2년 8개월간 웹/앱 디자인 리뉴얼을 주도하며 브랜드가 성장하는 과정을 함께했습니다. 이 과정에서 얻은 사용자에 대한 깊은 이해와 문제 해결 능력을 이제 귀사의 새로운 프로젝트와 서비스 개선에 쏟고 싶습니다.
                </p>
              </section>
            </FadeInOnScroll>

            <FadeInOnScroll>
              <section>
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">04</div>
                  <h2 className="text-2xl font-bold text-gray-800">지원포부</h2>
                </div>
                {/* font-medium을 font-normal로 변경 */}
                <p className="text-lg leading-relaxed text-gray-600 font-normal break-keep">
                  단순히 보기 좋은 디자인을 넘어, 비즈니스 목표와 사용자의 니즈를 연결하는 든든한 '징검다리' 역할을 하는 디자이너가 되겠습니다. 입사 후 가장 먼저 팀의 업무 프로세스와 도메인 지식을 빠르게 습득하겠습니다. 이후, 제가 가진 커뮤니케이션 역량과 UI/UX 분석력을 바탕으로 팀 내에 긍정적인 에너지를 불어넣고, 귀사의 서비스를 이용하는 고객에게 배려 넘치는 경험을 제공하는 핵심 인재로 성장하겠습니다.
                </p>
              </section>
            </FadeInOnScroll>
          </div>
        </main>
      </div>
    </div>
  );
};

// 메인 앱 컴포넌트
const App = () => {
  const [currentView, setCurrentView] = useState('main');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const handleNavigateToCoverLetter = () => {
    setCurrentView('cover-letter');
  };

  const handleNavigateToMain = () => {
    setCurrentView('main');
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const projects = [
    {
      id: 1,
      title: "코레일톡 앱 리뉴얼",
      category: 'UI/UX Design · Personal',
      description: '코레일톡 앱의 문제를 정의하고 앱을 리뉴얼하였습니다',
      tools: ['Figma', 'Protopie'],
      imageUrl: port1_9,
      detailImages: [
        port1_1, port1_2, port1_3, port1_4, 
        port1_5, port1_6, port1_7, port1_8
      ],
      color: 'bg-purple-50'
    },
    {
      id: 2,
      title: "'푸드어셈블' 웹 & 앱 리뉴얼",
      category: 'UI/UX Design · Web Publishing',
      description: '밀키트 스타트업 푸드어셈블의 전반적인 브랜딩 및 웹/앱 디자인 리뉴얼을 주도하고 웹페이지를 재구성했습니다.',
      tools: ['Photoshop', 'Cafe24'],
      // ✅ portfolio2 데이터 적용
      imageUrl: port2_thumb,
      detailImages: [
        port2_1, port2_2, port2_3, port2_4, 
        port2_5, port2_6, port2_7
      ],
      color: 'bg-orange-50'
    },
    {
      id: 3,
      title: "브랜드 프로모션 디자인",
      category: 'Web Design · Promotion',
      description: '고객 참여를 유도하고 브랜드 가치를 전달하는 다양한 이벤트 및 프로모션 배너를 기획하고 디자인했습니다.',
      tools: ['Illustrator', 'Photoshop'],
      // ✅ portfolio4 데이터 적용 (썸네일이 따로 없어 01번 이미지를 썸네일로 사용했습니다)
      imageUrl: port4_thumb,
      detailImages: [
        port4_1, port4_2, port4_3, port4_4
      ],
      color: 'bg-blue-50'
    },
    {
      id: 4,
      title: "제품 상세페이지 최적화",
      category: 'Web Design · Content',
      description: '제품의 매력을 돋보이게 하고 구매 전환율을 높일 수 있는 설득력 있는 상세페이지를 디자인했습니다.',
      tools: ['Illustrator', 'Photoshop'],
      // ✅ portfolio3 데이터 적용
      imageUrl: port3_thumb,
      detailImages: [
        port3_1, port3_2, port3_3
      ],
      color: 'bg-green-50'
    }
  ];

  const workEthics = [
    { icon: <Heart className="text-rose-500" size={24}/>, title: "즐거운 과정", desc: "과정이 즐거워야 결과가 좋다는 마인드로 임하여 일을 합니다." },
    { icon: <Users className="text-blue-500" size={24}/>, title: "팀워크 중시", desc: "개인보다는 팀이 중요함을 느끼며 서로의 의견을 교류하는 것을 즐깁니다." },
    { icon: <Target className="text-green-500" size={24}/>, title: "문제 해결", desc: "문제가 생겨도 그 상황 안에서 일을 진행할 수 있는 방향을 찾습니다." },
    { icon: <MessageCircle className="text-amber-500" size={24}/>, title: "커뮤니케이션", desc: "혼자만의 생각보다는 여러 명과 커뮤니케이션을 통해 결론을 도출합니다." }
  ];

  const skills = {
    tools: ['Figma', 'Protopie', 'Adobe Photoshop', 'Adobe Illustrator', 'HTML/CSS', 'Cafe24'],
    hard: ['웹 사이트 디자인', 'UI/UX 분석', 'IT 트렌드 파악'],
    soft: ['커뮤니케이션', '꼼꼼함', '자기개발', '스케줄링']
  };

  if (currentView === 'cover-letter') {
    return <CoverLetter onBack={handleNavigateToMain} />;
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans selection:bg-black selection:text-white pb-20">
      
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            Youngwan<span className="text-blue-600">.</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-32">
        <section className="relative mt-8 md:mt-16 mb-32 animate-fade-in-up rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://source.unsplash.com/kBzQNk9AgOg/2560x1440" 
              alt="Hero Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-24 lg:p-24">
            <div className="inline-block px-4 py-2 bg-blue-700 text-blue-50 rounded-full text-sm font-bold mb-6 shadow-sm">
              UI/UX & Web Designer
            </div>
            {/* 폰트 크기를 전체적으로 약 80% 수준으로 축소 (4xl->3xl, 6xl->5xl, 7xl->6xl) */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-[0.05em] mb-8 text-gray-900 break-keep">
              배려를 디자인하는<br/>
              디자이너 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">변영완</span>입니다.
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl break-keep font-medium tracking-[0.05em]">
              밀키트 스타트업 '푸드어셈블'에서 2년 8개월간 웹디자이너로 일하며 많은 것을 배우고 경험했습니다.<br className="hidden md:block"/> 
              현재는 프리랜서와 개인작업을 병행하며 단순한 디자인을 넘어 사용자의 맥락을 이해하고,<br className="hidden md:block"/> 
              명확한 경험을 설계하며 새로운 모험을 향해 나아가고 있습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-transform hover:-translate-y-1 inline-flex items-center gap-2 shadow-md">
                포트폴리오 보기 <ArrowUpRight size={18} />
              </a>
              <button 
                onClick={handleNavigateToCoverLetter}
                className="bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:border-gray-300 hover:bg-white transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                저에 대해 더 알아보기
              </button>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-32 mb-40">
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Works</h2>
            <div className="w-12 h-1 bg-black rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {projects.map((project, index) => (
              <FadeInOnScroll 
                key={project.id} 
                delay={index * 150} 
                className={`group cursor-pointer flex flex-col ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                <div onClick={() => setSelectedProject(project)}>
                  <div className={`relative overflow-hidden rounded-3xl mb-6 ${project.color} aspect-[4/3] shadow-sm`}>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="px-2">
                    <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 flex items-center justify-between group-hover:text-blue-700 transition-colors">
                      {project.title}
                      <ArrowUpRight size={24} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out text-blue-600" />
                    </h3>
                    {/* font-medium을 font-normal로 변경 */}
                    <p className="text-gray-600 leading-relaxed mb-4 font-normal break-keep">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-xs font-bold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-32 mb-40">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeInOnScroll>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
                  <div className="border-l-2 border-blue-100 ml-2 mb-12 flex flex-col gap-10 py-1">
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 border-4 border-white"></div>
                      <h3 className="text-xl font-bold mb-1">프리랜서 <span className="text-base font-medium text-gray-400 ml-2">웹디자인 및 유지보수</span></h3>
                      <p className="text-sm text-blue-600 font-bold mb-4">2022.07 - 현재</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 font-medium">
                        <li>클라이언트 맞춤형 웹/앱 디자인 및 유지보수</li>
                        <li>브랜드 프로모션 배너 및 제품 상세페이지 제작</li>
                      </ul>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-[9px] top-1 border-4 border-white"></div>
                      <h3 className="text-xl font-bold mb-1">푸드어셈블 <span className="text-base font-medium text-gray-400 ml-2">웹디자이너</span></h3>
                      <p className="text-sm text-gray-500 font-bold mb-4">2019.10 - 2022.06 (2년 8개월)</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 font-medium">
                        <li>브랜딩, 웹/앱 디자인 리뉴얼</li>
                        <li>전반적인 웹 페이지 재구성 및 유지보수</li>
                        <li>배너 및 상세페이지 디자인</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight mb-6">Life & Interests</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl w-24 h-24">
                      <span className="text-3xl mb-2">✈️</span>
                      <span className="text-xs font-bold text-gray-600">여행</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl w-24 h-24">
                      <span className="text-3xl mb-2">🏃‍♂️</span>
                      <span className="text-xs font-bold text-gray-600">러닝</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl w-24 h-24">
                      <span className="text-3xl mb-2">🍽️</span>
                      <span className="text-xs font-bold text-gray-600">미식</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl w-24 h-24">
                      <span className="text-3xl mb-2">🎮</span>
                      <span className="text-xs font-bold text-gray-600">게임</span>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={200}>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-8">How I Work</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {workEthics.map((ethic, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="mb-4 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                          {ethic.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{ethic.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium break-keep">{ethic.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-32 mb-32">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInOnScroll delay={0} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <PenTool size={32} />
                </div>
                <h3 className="text-xl font-bold mb-6">Tools</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.tools.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-bold border border-gray-100">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Layout size={32} />
                </div>
                <h3 className="text-xl font-bold mb-6">Hard Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.hard.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-bold border border-gray-100">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={400} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center h-full">
                <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.soft.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-bold border border-gray-100">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white mt-20 pt-24 pb-12 rounded-t-[3rem] mx-2 md:mx-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">새로운 팀을<br/>기다리고 있습니다.</h2>
              <p className="text-gray-400 text-lg font-medium">언제든 편하게 연락 주세요!</p>
            </div>
            
            <div className="flex flex-col gap-4 bg-gray-800/50 p-8 rounded-3xl border border-gray-700/50 w-full md:w-auto min-w-[300px]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold mb-1">NAME / BIRTH</p>
                  <p className="font-semibold text-gray-100">변영완 / 1994.02.02</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold mb-1">EMAIL</p>
                  <a href="mailto:byw0202@naver.com" className="font-semibold text-gray-100 hover:text-blue-400 transition-colors">byw0202@naver.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold mb-1">PHONE</p>
                  <p className="font-semibold text-gray-100">010-7447-8142</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold mb-1">LOCATION</p>
                  <p className="font-semibold text-gray-100">서울 은평구 불광동</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-gray-500 text-sm font-bold">
            <p>© {new Date().getFullYear()} Byun Young-wan. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 md:mt-0 px-6 py-2 border border-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              맨 위로 올라가기 ↑
            </button>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
              <h3 className="font-bold text-xl text-gray-800">프로젝트 상세</h3>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-3 bg-gray-50 hover:bg-gray-200 rounded-full transition-colors group"
              >
                <X size={24} className="text-gray-600 group-hover:text-black" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar flex-1">
              <div className="mb-10 text-center md:text-left flex flex-col md:items-start items-center">
                <div className="text-sm font-bold text-blue-50 mb-4 uppercase tracking-wider px-4 py-1 bg-blue-600 rounded-full inline-block">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 break-keep">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                  {selectedProject.tools.map(tool => (
                    <span key={tool} className="text-sm font-bold px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700">
                      {tool}
                    </span>
                  ))}
                </div>
                {/* font-medium을 font-normal로 변경 */}
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-normal break-keep bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full text-left">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-8 pb-10">
                <div className={`w-full rounded-3xl overflow-hidden ${selectedProject.color} border border-gray-100 flex items-center justify-center relative min-h-[300px]`}>
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={`${selectedProject.title} Main`} 
                    className="w-full h-auto object-cover relative z-10"
                  />
                </div>
                
                {selectedProject.detailImages.map((imgSrc, i) => (
                  <div key={i} className="w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center relative min-h-[400px]">
                    <img 
                      src={imgSrc} 
                      alt={`${selectedProject.title} Detail ${i + 1}`} 
                      className="w-full h-auto object-cover relative z-10"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
