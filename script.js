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


// ==================== 技术分享功能 ====================

// 分类筛选功能
function initTechFilter() {
    const filterButtons = document.querySelectorAll('.tech-tag');
    const techCards = document.querySelectorAll('.tech-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的 active 状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的 active 状态
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            techCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 加载更多文章功能
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreTech');
    if (!loadMoreBtn) return;
    
    // 模拟文章数据
    const moreArticles = [
        {
            category: 'ai',
            icon: 'fas fa-eye',
            date: '2025-04-15',
            title: 'YOLOv8 目标检测实战：从训练到部署',
            excerpt: '使用 Ultralytics YOLOv8 进行目标检测模型训练，包括数据集准备、模型调优、推理优化和部署上线的完整流程。',
            categoryText: 'AI/ML',
            readTime: '20 分钟',
            tags: ['YOLOv8', 'PyTorch', '计算机视觉', '模型部署']
        },
        {
            category: 'frontend',
            icon: 'fas fa-palette',
            date: '2025-04-10',
            title: 'Tailwind CSS 高级技巧与最佳实践',
            excerpt: '深入探索 Tailwind CSS 的高级用法，包括自定义配置、组件提取、响应式设计、暗色模式和性能优化等实用技巧。',
            categoryText: '前端开发',
            readTime: '11 分钟',
            tags: ['Tailwind CSS', 'CSS', '响应式设计', 'UI/UX']
        },
        {
            category: 'backend',
            icon: 'fas fa-database',
            date: '2025-04-05',
            title: 'MySQL 性能优化：索引设计与查询调优',
            excerpt: '学习 MySQL 数据库性能优化的核心技巧，包括索引原理、慢查询分析、执行计划解读和常见优化策略。',
            categoryText: '后端开发',
            readTime: '16 分钟',
            tags: ['MySQL', '数据库', '性能优化', '索引']
        }
    ];
    
    let loadCount = 0;
    
    loadMoreBtn.addEventListener('click', () => {
        if (loadCount >= moreArticles.length) {
            loadMoreBtn.textContent = '没有更多文章了';
            loadMoreBtn.disabled = true;
            return;
        }
        
        const techGrid = document.querySelector('.tech-grid');
        const article = moreArticles[loadCount];
        
        const newCard = document.createElement('article');
        newCard.className = 'tech-card';
        newCard.dataset.category = article.category;
        newCard.style.animation = 'fadeInUp 0.6s ease forwards';
        
        newCard.innerHTML = `
            <div class="tech-card-header">
                <div class="tech-icon"><i class="${article.icon}"></i></div>
                <span class="tech-date">${article.date}</span>
            </div>
            <h3 class="tech-title">${article.title}</h3>
            <p class="tech-excerpt">${article.excerpt}</p>
            <div class="tech-meta">
                <span class="tech-category">${article.categoryText}</span>
                <span class="tech-read-time"><i class="fas fa-clock"></i> ${article.readTime}</span>
            </div>
            <div class="tech-tags-list">
                ${article.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <a href="#" class="tech-link">阅读全文 <i class="fas fa-arrow-right"></i></a>
        `;
        
        techGrid.appendChild(newCard);
        loadCount++;
        
        if (loadCount >= moreArticles.length) {
            loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> 已加载全部文章';
            loadMoreBtn.disabled = true;
            loadMoreBtn.style.opacity = '0.6';
        }
    });
}

// 初始化技术分享功能
document.addEventListener('DOMContentLoaded', () => {
    initTechFilter();
    initLoadMore();
});

