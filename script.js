// ========== 打字机效果 ==========
const typedTexts = [
    "全栈开发工程师 🚀",
    "AI 应用探索者 🧠",
    "创意编程爱好者 🎨",
    "终身学习践行者 📚"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeEffect() {
    const currentText = typedTexts[textIndex];
    if (isDeleting) {
        typedEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typedTexts.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

// ========== 粒子效果 ==========
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    particle.style.animationDelay = Math.random() * 4 + 's';
    particle.style.width = (Math.random() * 3 + 1) + 'px';
    particle.style.height = particle.style.width;

    const colors = ['var(--accent)', 'var(--purple)', 'var(--cyan)', 'var(--blue)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    particlesContainer.appendChild(particle);

    setTimeout(() => particle.remove(), 16000);
}

// 创建初始粒子
for (let i = 0; i < 30; i++) {
    setTimeout(createParticle, Math.random() * 8000);
}
setInterval(createParticle, 600);

// ========== 导航栏滚动效果 ==========
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ========== 移动端菜单 ==========
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

// 点击链接关闭菜单
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// ========== 滚动动画 (Intersection Observer) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 给需要动画的元素添加 fade-in 类
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.skill-category, .project-card, .achievement-card, .timeline-item, .about-text, .about-image-wrapper, .contact-card, .highlight-item'
    );

    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = (index % 6) * 0.1 + 's';
        observer.observe(el);
    });
});

// ========== 导航链接高亮 ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--accent-light)';
        }
    });
});

// ========== 平滑滚动 ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});




// ==================== 动态加载功能 ====================

// 全局数据存储
let blogData = {
    articles: [],
    works: [],
    categories: {}
};

// 加载数据
async function loadBlogData() {
    try {
        // 首先尝试从 localStorage 加载
        const stored = localStorage.getItem('blogData');
        if (stored) {
            blogData = JSON.parse(stored);
            console.log('从 localStorage 加载数据');
        } else {
            // 如果没有，从 data.json 加载
            const response = await fetch('data.json');
            blogData = await response.json();
            localStorage.setItem('blogData', JSON.stringify(blogData));
            console.log('从 data.json 加载数据');
        }
        
        renderArticles();
        renderWorks();
    } catch (error) {
        console.error('加载数据失败:', error);
        // 如果加载失败，使用默认数据
        loadDefaultData();
    }
}

// 加载默认数据（备用）
function loadDefaultData() {
    blogData = {
        articles: [
            {
                id: 1,
                title: "从零搭建 AI 智能备忘录助手",
                excerpt: "使用 Django + React + OpenAI API 构建智能备忘录应用，实现语音识别、自动分类和智能提醒功能。",
                category: "ai",
                date: "2025-05-20",
                readTime: "15 分钟",
                tags: ["Django", "React", "OpenAI", "NLP"],
                icon: "fas fa-brain",
                featured: true,
                url: "#"
            },
            {
                id: 2,
                title: "React + Vite + Tailwind CSS 项目实战",
                excerpt: "分享使用 React + Vite + Tailwind CSS 搭建现代化前端项目的最佳实践。",
                category: "frontend",
                date: "2025-05-15",
                readTime: "12 分钟",
                tags: ["React", "Vite", "Tailwind CSS"],
                icon: "fab fa-react",
                featured: false,
                url: "#"
            }
        ],
        works: [
            {
                id: 1,
                title: "AI 智能备忘录助手",
                description: "集成 AI 技术的智能备忘录应用，支持语音备忘、自动分类、智能提醒和内容总结。",
                category: "ai",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
                tech: ["Django", "React", "OpenAI", "MySQL"],
                github: "https://github.com/lhx0715/notebook-parent",
                demo: "#",
                featured: true,
                status: "已上线"
            },
            {
                id: 2,
                title: "个人博客网站",
                description: "使用纯 HTML/CSS/JS 搭建的现代化个人博客，支持暗色模式、响应式设计。",
                category: "web",
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
                tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
                github: "https://github.com/lhx0715/xuan-blog",
                demo: "https://lhx0715.github.io/xuan-blog/",
                featured: true,
                status: "已上线"
            }
        ],
        categories: {
            articles: {
                all: "全部",
                ai: "AI/ML",
                frontend: "前端开发",
                backend: "后端开发",
                devops: "开发工具",
                algorithm: "算法"
            },
            works: {
                all: "全部",
                ai: "AI/ML",
                web: "Web开发",
                design: "设计",
                creative: "创意"
            }
        }
    };
    
    renderArticles();
    renderWorks();
}

// 渲染文章列表
function renderArticles(filter = 'all') {
    const container = document.getElementById('articlesGrid');
    if (!container) return;
    
    let filteredArticles = blogData.articles;
    if (filter !== 'all') {
        filteredArticles = blogData.articles.filter(a => a.category === filter);
    }
    
    container.innerHTML = filteredArticles.map(article => `
        <article class="tech-card" data-category="${article.category}">
            <div class="tech-card-header">
                <div class="tech-icon"><i class="${article.icon}"></i></div>
                <span class="tech-date">${article.date}</span>
            </div>
            <h3 class="tech-title">${article.title}</h3>
            <p class="tech-excerpt">${article.excerpt}</p>
            <div class="tech-meta">
                <span class="tech-category">${getCategoryName(article.category, 'articles')}</span>
                <span class="tech-read-time"><i class="fas fa-clock"></i> ${article.readTime}</span>
            </div>
            <div class="tech-tags-list">
                ${article.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <a href="${article.url}" class="tech-link" ${article.url !== '#' ? 'target="_blank"' : ''}>
                阅读全文 <i class="fas fa-arrow-right"></i>
            </a>
        </article>
    `).join('');
}

// 渲染作品列表
function renderWorks(filter = 'all') {
    const container = document.getElementById('worksGrid');
    if (!container) return;
    
    let filteredWorks = blogData.works;
    if (filter !== 'all') {
        filteredWorks = blogData.works.filter(w => w.category === filter);
    }
    
    container.innerHTML = filteredWorks.map(work => `
        <div class="work-card" data-category="${work.category}">
            ${work.featured ? '<div class="work-featured"><i class="fas fa-star"></i> 精选</div>' : ''}
            <div class="work-image-wrapper">
                <img src="${work.image}" alt="${work.title}" class="work-image" loading="lazy">
                <span class="work-status ${getStatusClass(work.status)}">${work.status}</span>
            </div>
            <div class="work-content">
                <span class="work-category">${getCategoryName(work.category, 'works')}</span>
                <h3 class="work-title">${work.title}</h3>
                <p class="work-description">${work.description}</p>
                <div class="work-tech">
                    ${work.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="work-links">
                    ${work.github && work.github !== '#' ? `
                        <a href="${work.github}" target="_blank" class="work-link github">
                            <i class="fab fa-github"></i> 源码
                        </a>
                    ` : ''}
                    ${work.demo && work.demo !== '#' ? `
                        <a href="${work.demo}" target="_blank" class="work-link demo">
                            <i class="fas fa-external-link-alt"></i> 演示
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// 获取分类名称
function getCategoryName(category, type) {
    return blogData.categories[type]?.[category] || category;
}

// 获取状态样式类
function getStatusClass(status) {
    const statusMap = {
        '已上线': 'online',
        '进行中': 'progress',
        '已完成': 'completed',
        '持续更新': 'updating'
    };
    return statusMap[status] || 'online';
}

// 初始化分类筛选
function initWorksFilter() {
    const filterButtons = document.querySelectorAll('.works-tag');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            renderWorks(filter);
        });
    });
}

// 初始化文章筛选
function initArticlesFilter() {
    const filterButtons = document.querySelectorAll('.tech-tag');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            renderArticles(filter);
        });
    });
}

// 初始化加载更多功能
function initLoadMore() {
    // 文章加载更多
    const loadMoreTechBtn = document.getElementById('loadMoreTech');
    if (loadMoreTechBtn) {
        loadMoreTechBtn.addEventListener('click', () => {
            // 这里可以实现加载更多的逻辑
            alert('所有文章已加载完毕');
        });
    }
    
    // 作品加载更多
    const loadMoreWorksBtn = document.getElementById('loadMoreWorks');
    if (loadMoreWorksBtn) {
        loadMoreWorksBtn.addEventListener('click', () => {
            alert('所有作品已加载完毕');
        });
    }
}

// 监听 localStorage 变化（用于管理后台更新后自动刷新）
window.addEventListener('storage', (e) => {
    if (e.key === 'blogData') {
        blogData = JSON.parse(e.newValue);
        renderArticles();
        renderWorks();
        console.log('数据已更新');
    }
});


// ==================== AI Agent 进阶看板 ====================

// 渲染 Agent 看板
function renderAgentRoadmap() {
    const roadmap = blogData.agentRoadmap;
    if (!roadmap || !roadmap.length) return;

    const timeline = document.getElementById('agentRoadmapTimeline');
    if (!timeline) return;

    // 计算总体统计
    let totalPoints = 0, completedPoints = 0, inProgressPoints = 0;
    roadmap.forEach(phase => {
        phase.knowledgePoints.forEach(kp => {
            totalPoints++;
            if (kp.status === '已完成') completedPoints++;
            else if (kp.status === '进行中') inProgressPoints++;
        });
    });

    const progressPercent = totalPoints > 0 ? Math.round((completedPoints / totalPoints) * 100) : 0;

    // 更新统计数字
    const completedEl = document.getElementById('completedCount');
    const inProgressEl = document.getElementById('inProgressCount');
    const totalEl = document.getElementById('totalCount');
    const progressTextEl = document.getElementById('progressText');
    const progressLabelEl = document.getElementById('overallProgressLabel');
    const progressFillEl = document.getElementById('overallProgressFill');
    const progressCircleEl = document.getElementById('progressCircle');

    if (completedEl) completedEl.textContent = completedPoints;
    if (inProgressEl) inProgressEl.textContent = inProgressPoints;
    if (totalEl) totalEl.textContent = totalPoints;
    if (progressTextEl) progressTextEl.textContent = progressPercent + '%';
    if (progressLabelEl) progressLabelEl.textContent = completedPoints + ' / ' + totalPoints + ' 已完成';
    if (progressFillEl) progressFillEl.style.width = progressPercent + '%';
    if (progressCircleEl) {
        const circumference = 2 * Math.PI * 52;
        progressCircleEl.style.strokeDasharray = circumference;
        progressCircleEl.style.strokeDashoffset = circumference - (circumference * progressPercent / 100);
    }

    // 渲染时间线
    timeline.innerHTML = roadmap.map((phase, index) => {
        const phaseTotal = phase.knowledgePoints.length;
        const phaseCompleted = phase.knowledgePoints.filter(kp => kp.status === '已完成').length;
        const phaseInProgress = phase.knowledgePoints.filter(kp => kp.status === '进行中').length;
        const phasePercent = phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0;

        const statusIcon = phasePercent === 100 ? 'fa-check-circle' :
                          phasePercent > 0 ? 'fa-spinner fa-spin' : 'fa-lock';
        const statusClass = phasePercent === 100 ? 'completed' :
                           phasePercent > 0 ? 'in-progress' : 'locked';

        return `
        <div class="roadmap-phase ${statusClass}" data-phase="${phase.id}">
            <div class="phase-connector">
                <div class="connector-line"></div>
                <div class="connector-dot">
                    <i class="fas ${statusIcon}"></i>
                </div>
            </div>
            <div class="phase-card">
                <div class="phase-header">
                    <div class="phase-icon"><i class="${phase.icon || 'fas fa-brain'}"></i></div>
                    <div class="phase-info">
                        <span class="phase-number">Phase ${index + 1}</span>
                        <h3 class="phase-title">${phase.title}</h3>
                    </div>
                    <div class="phase-progress-badge">
                        <span class="badge-percent">${phasePercent}%</span>
                    </div>
                </div>
                <div class="phase-progress-bar">
                    <div class="phase-progress-track">
                        <div class="phase-progress-fill" style="width: ${phasePercent}%"></div>
                    </div>
                    <span class="phase-progress-text">${phaseCompleted}/${phaseTotal} 完成</span>
                </div>
                <div class="phase-body">
                    <div class="knowledge-points">
                        <h4 class="kp-title"><i class="fas fa-list-check"></i> 知识点</h4>
                        <ul class="kp-list">
                            ${phase.knowledgePoints.map(kp => {
                                const kpClass = kp.status === '已完成' ? 'done' :
                                               kp.status === '进行中' ? 'active' : 'pending';
                                const kpIcon = kp.status === '已完成' ? 'fa-check-circle' :
                                              kp.status === '进行中' ? 'fa-play-circle' : 'fa-circle';
                                return `<li class="kp-item ${kpClass}">
                                    <i class="fas ${kpIcon}"></i>
                                    <span>${kp.name}</span>
                                    <span class="kp-status">${kp.status}</span>
                                </li>`;
                            }).join('')}
                        </ul>
                    </div>
                    ${phase.project && phase.project.projectName ? `
                    <div class="phase-project">
                        <h4 class="project-title"><i class="fas fa-code-branch"></i> 实战项目</h4>
                        <div class="project-info">
                            <span class="project-name">${phase.project.projectName}</span>
                            <div class="project-links">
                                ${phase.project.githubLink ? `<a href="${phase.project.githubLink}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>` : ''}
                                ${phase.project.demoLink ? `<a href="${phase.project.demoLink}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    ${phase.insights ? `
                    <div class="phase-insights">
                        <h4 class="insights-title"><i class="fas fa-lightbulb"></i> 学习感想</h4>
                        <div class="insights-content">${phase.insights.replace(/\n/g, '<br>')}</div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>`;
    }).join('');
}

// 在 loadBlogData 中调用
const originalLoadBlogData = loadBlogData;
loadBlogData = async function() {
    await originalLoadBlogData.call(this);
    renderAgentRoadmap();
};

// localStorage 变化时也更新看板
const originalStorageHandler = window._storageHandler;
window.addEventListener('storage', (e) => {
    if (e.key === 'blogData') {
        blogData = JSON.parse(e.newValue);
        renderAgentRoadmap();
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadBlogData();
    initWorksFilter();
    initArticlesFilter();
    initLoadMore();
});

