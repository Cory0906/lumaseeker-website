import { useState, useEffect } from 'react';

// 中英文翻译
const translations = {
  zh: {
    nav: { product: "产品", features: "特性", scenes: "使用场景", contact: "联系我们", buyNow: "立即购买" },
    hero: {
      badge: "P2 页面放大镜 · 解放双手",
      title1: "带支架放大镜",
      title2: "解放您的双手",
      desc: "5倍高清放大，四角清晰无畸变。合金支架360°可调，阅读、手工、看药盒——双手自由，视界清晰。",
      btnBuy: "立即购买",
      btnVideo: "观看视频",
      tag1: "5倍放大", tag2: "360°可调", tag3: "解放双手",
      imgPlaceholder: "产品主图", imgSub: "带支架放大镜"
    },
    product: {
      subtitle: "PRODUCT MODEL P2",
      title: "页面放大镜，解放您的双手",
      desc: "专为阅读设计，无需手持，调整到舒适角度，享受清晰视界",
      gallery: [
        { label: "产品展示", desc: "优雅简约设计" },
        { label: "角度调节", desc: "适应各种姿势" },
        { label: "合金支架", desc: "坚固耐用" },
        { label: "实际使用", desc: "阅读场景" }
      ],
      featureTitle: "5倍放大，四角清晰无畸变",
      featureDesc: "采用专业菲涅尔光学镜片，经过精密注塑工艺制造。一面光滑透亮，另一面是精心设计的同心圆纹理，有效控制光线干扰，呈现专业级光学表现。",
      mag: "放大倍率", adjust: "多向调节", compareImg: "放大效果对比图"
    },
    features: {
      title: "为什么选择 LumaSeeker？",
      desc: "每一个细节，都为您的舒适体验而设计",
      items: [
        { icon: "🔍", title: "超大视野", desc: "大尺寸菲涅尔镜片，阅读整页内容无需移动" },
        { icon: "🦾", title: "合金支架", desc: "时尚坚固的合金材质，稳定支撑不晃动" },
        { icon: "🔄", title: "自由调节", desc: "高度、角度随心调整，适应各种阅读姿势" },
        { icon: "🎁", title: "完美礼物", desc: "送给父母、朋友、老师的贴心好礼" }
      ]
    },
    scenes: {
      title: "多场景适用", desc: "无论何时何地，都能派上用场",
      items: [
        { icon: "📰", title: "阅读", desc: "轻松阅读报纸、书籍上的小字" },
        { icon: "✂️", title: "手工", desc: "穿针引线、精细手工不费力" },
        { icon: "💊", title: "药品", desc: "看清药盒说明，用药更安心" },
        { icon: "📱", title: "观看", desc: "查看照片、观看视频更清晰" }
      ],
      benefits: ["清晰放大，细节一目了然", "无需手持，长时间使用不累", "角度可调，找到最舒适的位置"],
      imgPlaceholder: "场景图片"
    },
    package: {
      title: "包装内容", desc: "开箱即用，配件齐全",
      items: [
        { icon: "🔍", name: "放大镜", qty: "×1" },
        { icon: "👝", name: "清洁袋", qty: "×1" },
        { icon: "🔧", name: "六角扳手", qty: "×1" },
        { icon: "📖", name: "使用手册", qty: "×1" }
      ]
    },
    testimonials: {
      title: "用户真实评价", desc: "听听他们怎么说",
      items: [
        { name: "王阿姨", age: "68岁", text: "终于不用一直举着放大镜看报纸了！支架特别稳，调好角度就不用管了，太方便了。" },
        { name: "李先生", age: "72岁", text: "买来看药盒说明的，字放得很大很清楚。儿子帮我调好了高度，现在每天都在用。" },
        { name: "张女士", age: "55岁", text: "送给我妈当生日礼物，她特别喜欢！说做十字绣终于看得清了，不累眼睛。" }
      ]
    },
    cta: {
      title: "送给父母最好的礼物",
      desc: "让他们看得更清晰，生活更便利。现在下单，我们快速响应，24小时内回复。",
      btnBuy: "立即购买", btnContact: "联系客服"
    },
    contact: {
      title: "联系我们",
      desc: "如果您对产品有任何问题，或者没有完全满意您的购买，请随时联系我们。我们会尽快为您解决问题。",
      email: "邮箱", emailReply: "24小时内回复",
      hours: "服务时间", weekdays: "周一至周五",
      form: {
        title: "发送消息", name: "您的姓名", namePlaceholder: "请输入姓名",
        emailLabel: "邮箱地址", emailPlaceholder: "请输入邮箱",
        message: "您的消息", messagePlaceholder: "请输入您想说的话...", submit: "发送消息"
      }
    },
    footer: {
      desc: "我们致力于研发高品质的视觉辅助产品，帮助每一个人看清生活中的美好细节。您的满意是我们的首要目标。",
      quickLinks: "快速链接", contactInfo: "联系方式",
      rights: "© 2025 LumaSeeker. 保留所有权利。",
      privacy: "隐私政策", terms: "服务条款", returns: "退换货政策"
    }
  },
  en: {
    nav: { product: "Product", features: "Features", scenes: "Use Cases", contact: "Contact", buyNow: "Buy Now" },
    hero: {
      badge: "P2 Page Magnifier · Hands-Free",
      title1: "Magnifying Glass",
      title2: "With Stand",
      desc: "5X HD magnification with crystal-clear corners. 360° adjustable alloy stand for reading, crafts, and more — free your hands, see clearly.",
      btnBuy: "Buy Now",
      btnVideo: "Watch Video",
      tag1: "5X Magnification", tag2: "360° Adjustable", tag3: "Hands-Free",
      imgPlaceholder: "Product Image", imgSub: "Magnifier with Stand"
    },
    product: {
      subtitle: "PRODUCT MODEL P2",
      title: "Page Magnifier, Free Your Hands",
      desc: "Designed for reading, no need to hold. Adjust to your comfort and enjoy a clear view.",
      gallery: [
        { label: "Product Display", desc: "Elegant minimalist design" },
        { label: "Angle Adjustment", desc: "Adapts to various postures" },
        { label: "Alloy Bracket", desc: "Sturdy and durable" },
        { label: "In Use", desc: "Reading scenario" }
      ],
      featureTitle: "5X Magnification, Clear Corners Without Distortion",
      featureDesc: "Made with professional Fresnel optical lenses through precision injection molding. One side is smooth and glossy, while the other features carefully designed concentric circles to control light interference for professional-grade optical performance.",
      mag: "Magnification", adjust: "Multi-directional", compareImg: "Magnification comparison"
    },
    features: {
      title: "Why Choose LumaSeeker?",
      desc: "Every detail is designed for your comfort",
      items: [
        { icon: "🔍", title: "Large Field of View", desc: "Large Fresnel lens, read entire pages without moving" },
        { icon: "🦾", title: "Alloy Stand", desc: "Stylish and sturdy alloy material, stable support" },
        { icon: "🔄", title: "Adjustable", desc: "Height and angle adjustable for any reading posture" },
        { icon: "🎁", title: "Perfect Gift", desc: "Thoughtful gift for parents, friends, and teachers" }
      ]
    },
    scenes: {
      title: "Multiple Use Cases", desc: "Useful anytime, anywhere",
      items: [
        { icon: "📰", title: "Reading", desc: "Easily read small text in newspapers and books" },
        { icon: "✂️", title: "Crafts", desc: "Threading needles and detailed crafts made easy" },
        { icon: "💊", title: "Medicine", desc: "Read medicine labels clearly for safety" },
        { icon: "📱", title: "Viewing", desc: "View photos and videos more clearly" }
      ],
      benefits: ["Clear magnification, details at a glance", "Hands-free, comfortable for long use", "Adjustable angle for optimal position"],
      imgPlaceholder: "Scene image"
    },
    package: {
      title: "Package Contents", desc: "Ready to use, complete accessories",
      items: [
        { icon: "🔍", name: "Magnifier", qty: "×1" },
        { icon: "👝", name: "Cleaning Pouch", qty: "×1" },
        { icon: "🔧", name: "Hex Wrench", qty: "×1" },
        { icon: "📖", name: "User Manual", qty: "×1" }
      ]
    },
    testimonials: {
      title: "Customer Reviews", desc: "See what they say",
      items: [
        { name: "Mrs. Wang", age: "68 yrs", text: "Finally don't have to hold the magnifier while reading! The stand is very stable, just set the angle and forget it." },
        { name: "Mr. Li", age: "72 yrs", text: "Got it to read medicine labels. The text is magnified large and clear. Using it every day now." },
        { name: "Ms. Zhang", age: "55 yrs", text: "Gave it to my mom as a birthday gift, she loves it! Says she can finally see clearly when doing cross-stitch." }
      ]
    },
    cta: {
      title: "The Best Gift for Your Parents",
      desc: "Help them see more clearly and live more conveniently. Order now, we respond within 24 hours.",
      btnBuy: "Buy Now", btnContact: "Contact Us"
    },
    contact: {
      title: "Contact Us",
      desc: "If you have any questions about our products or are not completely satisfied with your purchase, please feel free to contact us.",
      email: "Email", emailReply: "Response within 24 hours",
      hours: "Support Hours", weekdays: "Monday - Friday",
      form: {
        title: "Send Message", name: "Your Name", namePlaceholder: "Enter your name",
        emailLabel: "Email Address", emailPlaceholder: "Enter your email",
        message: "Your Message", messagePlaceholder: "Enter your message...", submit: "Send Message"
      }
    },
    footer: {
      desc: "We are committed to developing high-quality visual aid products to help everyone see the beautiful details in life.",
      quickLinks: "Quick Links", contactInfo: "Contact Info",
      rights: "© 2025 LumaSeeker. All rights reserved.",
      privacy: "Privacy Policy", terms: "Terms of Service", returns: "Return Policy"
    }
  }
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const [lang, setLang] = useState('zh');
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'zh' ? 'en' : 'zh');

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo + Language Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                  <path strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-slate-800">Luma<span className="text-amber-500">Seeker</span></span>
            </div>
            
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-all shadow"
            >
              🌐 {lang === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#product" className="text-slate-700 hover:text-amber-600 transition font-medium">{t.nav.product}</a>
            <a href="#features" className="text-slate-700 hover:text-amber-600 transition font-medium">{t.nav.features}</a>
            <a href="#scenes" className="text-slate-700 hover:text-amber-600 transition font-medium">{t.nav.scenes}</a>
            <a href="#contact" className="text-slate-700 hover:text-amber-600 transition font-medium">{t.nav.contact}</a>
            <button className="bg-slate-800 text-white px-6 py-2.5 rounded-full hover:bg-amber-600 transition font-medium shadow-lg">
              {t.nav.buyNow}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4 shadow-lg">
            <a href="#product" className="block text-slate-700 py-2 hover:text-amber-600">{t.nav.product}</a>
            <a href="#features" className="block text-slate-700 py-2 hover:text-amber-600">{t.nav.features}</a>
            <a href="#scenes" className="block text-slate-700 py-2 hover:text-amber-600">{t.nav.scenes}</a>
            <a href="#contact" className="block text-slate-700 py-2 hover:text-amber-600">{t.nav.contact}</a>
            <button className="w-full bg-slate-800 text-white py-3 rounded-full font-medium">{t.nav.buyNow}</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 sm:px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              {t.hero.title1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="group bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-amber-600 transition-all duration-300 flex items-center gap-2 shadow-xl">
                {t.hero.btnBuy}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-amber-500 hover:text-amber-600 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.hero.btnVideo}
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-6 pt-4 flex-wrap">
              {[t.hero.tag1, t.hero.tag2, t.hero.tag3].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 bg-green-50 px-3 sm:px-4 py-2 rounded-full">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700 font-medium text-sm sm:text-base">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100">
              <div className="w-56 sm:w-72 h-64 sm:h-80 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
                <svg className="w-16 sm:w-20 h-16 sm:h-20 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-slate-400 text-center px-4">{t.hero.imgPlaceholder}<br/><span className="text-sm">{t.hero.imgSub}</span></p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                ¥159
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t.features.title}</h2>
            <p className="text-lg sm:text-xl text-slate-500">{t.features.desc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feature, i) => (
              <div key={i} className="group bg-white hover:bg-gradient-to-br hover:from-white hover:to-amber-50 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl border border-slate-100 hover:border-amber-200">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenes Section */}
      <section id="scenes" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t.scenes.title}</h2>
            <p className="text-lg sm:text-xl text-slate-500">{t.scenes.desc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {t.scenes.items.map((scene, i) => (
              <button
                key={i}
                onClick={() => setActiveScene(i)}
                className={`p-4 sm:p-6 rounded-2xl text-left transition-all duration-300 ${activeScene === i ? 'bg-amber-500 text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{scene.icon}</div>
                <div className="font-bold text-base sm:text-lg">{scene.title}</div>
                <div className={`text-xs sm:text-sm ${activeScene === i ? 'text-amber-100' : 'text-slate-500'}`}>{scene.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.testimonials.title}</h2>
            <p className="text-lg sm:text-xl text-slate-400">{t.testimonials.desc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.testimonials.items.map((review, i) => (
              <div key={i} className="bg-slate-700/50 backdrop-blur p-6 sm:p-8 rounded-3xl border border-slate-600">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{review.name}</div>
                    <div className="text-slate-400 text-sm">{review.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-lg sm:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-amber-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-xl">
              {t.cta.btnBuy}
            </button>
            <button className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300">
              {t.cta.btnContact}
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">{t.contact.title}</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-8">{t.contact.desc}</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{t.contact.email}</div>
                    <div className="text-slate-600">Lumaseeker@gmail.com</div>
                    <div className="text-slate-500 text-sm">{t.contact.emailReply}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{t.contact.hours}</div>
                    <div className="text-slate-600">{t.contact.weekdays}</div>
                    <div className="text-slate-500 text-sm">8:30 AM - 5:00 PM PST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">{t.contact.form.title}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.name}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition" placeholder={t.contact.form.namePlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.emailLabel}</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition" placeholder={t.contact.form.emailPlaceholder} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.message}</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition h-32 resize-none" placeholder={t.contact.form.messagePlaceholder}></textarea>
                </div>
                <button className="w-full bg-amber-500 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition">
                  {t.contact.form.submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🔍</span>
                </div>
                <span className="text-2xl font-bold text-white">LumaSeeker</span>
              </div>
              <p className="leading-relaxed mb-4">{t.footer.desc}</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#product" className="hover:text-amber-400 transition">{t.nav.product}</a></li>
                <li><a href="#features" className="hover:text-amber-400 transition">{t.nav.features}</a></li>
                <li><a href="#scenes" className="hover:text-amber-400 transition">{t.nav.scenes}</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition">{t.nav.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.contactInfo}</h4>
              <ul className="space-y-2 text-sm">
                <li>Lumaseeker@gmail.com</li>
                <li>{t.contact.weekdays}</li>
                <li>8:30 AM - 5:00 PM PST</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">{t.footer.rights}</p>
            <div className="flex gap-4 sm:gap-6 text-sm">
              <a href="#" className="hover:text-amber-400 transition">{t.footer.privacy}</a>
              <a href="#" className="hover:text-amber-400 transition">{t.footer.terms}</a>
              <a href="#" className="hover:text-amber-400 transition">{t.footer.returns}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;