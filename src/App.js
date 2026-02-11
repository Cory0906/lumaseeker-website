import { useState, useEffect, useRef } from 'react';
import './App.css';

const translations = {
  zh: {
    nav: { features: "特性", scenes: "使用场景", contact: "联系我们", buyNow: "立即购买" },
    hero: {
      badge: "P2 页面放大镜 · 解放双手",
      title1: "带支架放大镜",
      title2: "解放您的双手",
      desc: "5倍高清放大，四角清晰无畸变。合金支架360°可调，阅读、手工、看药盒——双手自由，视界清晰。",
      btnBuy: "立即购买",
      btnVideo: "观看视频",
      stats: [
        { value: "5X", label: "放大倍率" },
        { value: "360°", label: "可调角度" },
        { value: "100%", label: "解放双手" }
      ]
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
      title: "多场景适用",
      desc: "无论何时何地，都能派上用场",
      items: [
        { icon: "📰", title: "阅读", desc: "轻松阅读报纸、书籍上的小字" },
        { icon: "✂️", title: "手工", desc: "穿针引线、精细手工不费力" },
        { icon: "💊", title: "药品", desc: "看清药盒说明，用药更安心" },
        { icon: "📱", title: "观看", desc: "查看照片、观看视频更清晰" }
      ]
    },
    testimonials: {
      title: "用户好评",
      items: [
        { name: "李先生", age: "68岁", text: "终于可以不用手举着放大镜看报纸了，支架很稳，放大效果特别清晰！" },
        { name: "王阿姨", age: "72岁", text: "做十字绣再也不费眼睛了，角度可以随意调，太方便了！" },
        { name: "张女士", age: "55岁", text: "买给妈妈的生日礼物，她说看药盒说明终于不用求人了。" }
      ]
    },
    cta: {
      title: "送给父母最贴心的礼物",
      desc: "让他们看得更清晰，生活更便捷。现在下单，24小时内回复。",
      btnBuy: "立即购买",
      btnContact: "联系我们"
    },
    contact: {
      title: "联系我们",
      desc: "如果您对产品有任何问题，请随时与我们联系。",
      email: "邮箱",
      emailReply: "24小时内回复",
      hours: "服务时间",
      weekdays: "周一至周五",
      form: { title: "发送消息", name: "您的姓名", namePlaceholder: "请输入姓名", emailLabel: "邮箱地址", emailPlaceholder: "请输入邮箱", message: "您的留言", messagePlaceholder: "请输入留言内容...", submit: "发送消息" }
    },
    footer: {
      desc: "专注视觉辅助产品，让每个人都能看清生活的美好细节。",
      quickLinks: "快速链接",
      contactInfo: "联系方式",
      rights: "© 2026 LumaSeeker. 保留所有权利。",
      privacy: "隐私政策",
      terms: "服务条款",
      returns: "退换政策"
    }
  },
  en: {
    nav: { features: "Features", scenes: "Use Cases", contact: "Contact", buyNow: "Buy Now" },
    hero: {
      badge: "P2 Page Magnifier · Hands-Free",
      title1: "Magnifier with Stand",
      title2: "Free Your Hands",
      desc: "5X HD magnification with crystal clear corners. 360° adjustable alloy stand for reading, crafts, and medicine labels — hands free, clear vision.",
      btnBuy: "Buy Now",
      btnVideo: "Watch Video",
      stats: [
        { value: "5X", label: "Magnification" },
        { value: "360°", label: "Adjustable" },
        { value: "100%", label: "Hands-Free" }
      ]
    },
    features: {
      title: "Why Choose LumaSeeker?",
      desc: "Every detail designed for your comfort",
      items: [
        { icon: "🔍", title: "Extra Large View", desc: "Large Fresnel lens lets you read entire pages without moving" },
        { icon: "🦾", title: "Alloy Stand", desc: "Stylish and sturdy alloy material, stable without wobbling" },
        { icon: "🔄", title: "Free Adjustment", desc: "Height and angle adjust freely to fit any reading position" },
        { icon: "🎁", title: "Perfect Gift", desc: "A thoughtful gift for parents, friends, and teachers" }
      ]
    },
    scenes: {
      title: "Multiple Use Cases",
      desc: "Useful anytime, anywhere",
      items: [
        { icon: "📰", title: "Reading", desc: "Easily read small text in newspapers and books" },
        { icon: "✂️", title: "Crafts", desc: "Threading needles and fine crafts made easy" },
        { icon: "💊", title: "Medicine", desc: "Read medicine labels clearly for safer use" },
        { icon: "📱", title: "Viewing", desc: "View photos and watch videos more clearly" }
      ]
    },
    testimonials: {
      title: "Customer Reviews",
      items: [
        { name: "Mr. Johnson", age: "68 yrs", text: "Finally don't need to hold a magnifier to read newspapers. The stand is stable and magnification is crystal clear!" },
        { name: "Mrs. Williams", age: "72 yrs", text: "Cross-stitching no longer strains my eyes. The angle adjusts any way I want!" },
        { name: "Ms. Davis", age: "55 yrs", text: "Bought it for my mom's birthday. She can finally read medicine labels without asking for help." }
      ]
    },
    cta: {
      title: "The Best Gift for Your Parents",
      desc: "Help them see more clearly and live more conveniently. Order now, we respond within 24 hours.",
      btnBuy: "Buy Now",
      btnContact: "Contact Us"
    },
    contact: {
      title: "Contact Us",
      desc: "If you have any questions, please contact us.",
      email: "Email",
      emailReply: "Response within 24 hours",
      hours: "Support Hours",
      weekdays: "Monday - Friday",
      form: { title: "Send Message", name: "Your Name", namePlaceholder: "Enter your name", emailLabel: "Email Address", emailPlaceholder: "Enter your email", message: "Your Message", messagePlaceholder: "Enter your message...", submit: "Send Message" }
    },
    footer: {
      desc: "Dedicated to visual aid products, helping everyone see the beautiful details in life.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      rights: "© 2026 LumaSeeker. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      returns: "Return Policy"
    }
  }
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'zh' ? 'en' : 'zh');

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 - 毛玻璃效果 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'glass shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/favicon-32x32.png" alt="LumaSeeker" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xl sm:text-2xl font-bold text-slate-800">Luma<span className="text-gradient">Seeker</span></span>
            </div>
            <button onClick={toggleLang} className="px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95">
              🌐 {lang === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-amber-600 transition font-medium">{t.nav.features}</a>
            <a href="#scenes" className="text-slate-600 hover:text-amber-600 transition font-medium">{t.nav.scenes}</a>
            <a href="#contact" className="text-slate-600 hover:text-amber-600 transition font-medium">{t.nav.contact}</a>
            <button className="btn-primary text-white px-6 py-2.5 font-medium">{t.nav.buyNow}</button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden glass border-t border-white/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">{t.nav.features}</a>
              <a href="#scenes" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">{t.nav.scenes}</a>
              <a href="#contact" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">{t.nav.contact}</a>
              <button className="btn-primary w-full text-white py-3 font-medium">{t.nav.buyNow}</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero 区域 - 渐变背景 */}
      <section className="gradient-hero min-h-screen pt-24 pb-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="badge px-4 py-2 text-amber-700 text-sm font-medium inline-block mb-6">{t.hero.badge}</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                <span className="text-gradient">{t.hero.title1}</span><br />{t.hero.title2}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">{t.hero.desc}</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="btn-primary text-white px-8 py-4 font-semibold text-lg">{t.hero.btnBuy}</button>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="btn-secondary text-slate-700 px-8 py-4 font-semibold text-lg flex items-center gap-2"
                >
                  <span>▶</span> {t.hero.btnVideo}
                </button>
              </div>
              <div className="flex gap-8">
                {t.hero.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="img-container animate-float bg-gradient-to-br from-amber-50 to-orange-100 p-8 sm:p-12 flex items-center justify-center min-h-[450px] sm:min-h-[550px] overflow-hidden rounded-3xl">
                <div className="relative z-10 w-full">
                  <img
                    src="/product.png"
                    alt="LumaSeeker P2 Magnifier"
                    className="w-full h-auto max-w-xl mx-auto object-contain filter drop-shadow-[0_20px_40px_rgba(217,119,6,0.3)] hover:scale-110 transition-all duration-700 hover:drop-shadow-[0_25px_50px_rgba(217,119,6,0.4)]"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                {/* 背景光晕效果 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-amber-200/40 via-orange-200/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-300/20 rounded-full blur-2xl"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 特性区域 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t.features.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.features.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((item, i) => (
              <div key={i} className="card-swift p-8 text-center group">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用场景 */}
      <section id="scenes" className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t.scenes.title}</h2>
            <p className="text-slate-600">{t.scenes.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.scenes.items.map((item, i) => (
              <div key={i} className="card-swift p-6 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">{t.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className="glass-dark rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">{item.name[0]}</div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-slate-400">{item.age}</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">"{item.text}"</p>
                <div className="mt-4 flex gap-1">{[...Array(5)].map((_, j) => <span key={j} className="text-amber-400">★</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 gradient-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">{t.cta.title}</h2>
          <p className="text-lg text-slate-700 mb-10">{t.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary animate-glow text-white px-10 py-4 font-semibold text-lg">{t.cta.btnBuy}</button>
            <button className="btn-secondary text-slate-700 px-10 py-4 font-semibold text-lg">{t.cta.btnContact}</button>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{t.contact.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.contact.desc}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="card-swift p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xl flex-shrink-0">✉️</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{t.contact.email}</h3>
                  <p className="text-amber-600 font-medium">info@lumaseeker.com</p>
                  <p className="text-sm text-slate-500 mt-1">{t.contact.emailReply}</p>
                </div>
              </div>
              <div className="card-swift p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xl flex-shrink-0">🕐</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{t.contact.hours}</h3>
                  <p className="text-slate-600">{t.contact.weekdays}</p>
                  <p className="text-sm text-slate-500 mt-1">8:30 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
            <div className="card-swift p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">{t.contact.form.title}</h3>
              <form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.target;
                  const submitButton = form.querySelector('button[type="submit"]');
                  const originalText = submitButton.textContent;

                  const formData = {
                    name: form.from_name.value,
                    email: form.from_email.value,
                    message: form.message.value,
                  };

                  submitButton.disabled = true;
                  submitButton.textContent = lang === 'zh' ? '发送中...' : 'Sending...';
                  submitButton.style.opacity = '0.6';

                  try {
                    const response = await fetch('/api/send-email', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(formData),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                      throw new Error(data.error || 'Failed to send email');
                    }

                    alert(lang === 'zh'
                      ? '✅ 消息发送成功！我们会在24小时内回复您。'
                      : '✅ Message sent successfully! We will respond within 24 hours.');

                    form.reset();

                  } catch (error) {
                    console.error('发送失败:', error);
                    alert(lang === 'zh'
                      ? '❌ 发送失败，请稍后重试或直接发送邮件到 info@lumaseeker.com'
                      : '❌ Failed to send. Please try again or email us at info@lumaseeker.com');
                  } finally {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.style.opacity = '1';
                  }
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="from_name"
                    className="input-swift w-full px-4 py-3"
                    placeholder={t.contact.form.namePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.emailLabel}</label>
                  <input
                    type="email"
                    name="from_email"
                    className="input-swift w-full px-4 py-3"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    className="input-swift w-full px-4 py-3 h-32 resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-white py-4 font-semibold text-lg">
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="glass-dark text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/favicon-32x32.png" alt="LumaSeeker" className="w-10 h-10" />
                <span className="text-2xl font-bold text-white">LumaSeeker</span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-amber-400 transition">{t.nav.features}</a></li>
                <li><a href="#scenes" className="hover:text-amber-400 transition">{t.nav.scenes}</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.contactInfo}</h4>
              <ul className="space-y-3 text-sm">
                <li>info@lumaseeker.com</li>
                <li>Mon - Fri: 8:30 AM - 5 PM EST</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">{t.footer.rights}</p>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-amber-400 transition">{t.footer.privacy}</button>
              <button className="hover:text-amber-400 transition">{t.footer.terms}</button>
              <button className="hover:text-amber-400 transition">{t.footer.returns}</button>
            </div>
          </div>
        </div>
      </footer>
      {/* 视频模态框 */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.pause();
            }
            setIsVideoOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                }
                setIsVideoOpen(false);
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 视频播放器 */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              >
                {/* 替换为你的视频URL */}
                <source src="/videos/product-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;