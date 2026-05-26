# Jax 的个人博客

一个现代化的个人博客网站，支持动态内容管理、文章分享和作品展示。

## 🌐 在线访问

**https://lhx0715.github.io/xuan-blog/**

## ✨ 功能特点

### 1. 个人介绍
- 精美的 Hero 区域，带打字机效果
- 粒子动画背景
- 社交媒体链接
- 代码风格的个人简介卡片

### 2. 技能栈展示
- 6 大类技能分类
- 响应式标签云设计
- 暗色模式支持

### 3. 作品展示
- 分类筛选（AI/Web/设计/创意）
- 项目封面图展示
- 技术栈标签
- GitHub 和演示链接
- 精选作品标记

### 4. 技术博客
- 分类筛选（AI/前端/后端/工具/算法）
- 文章卡片设计
- 阅读时间估算
- 技术标签
- 加载更多功能

### 5. 荣誉成就
- 竞赛获奖记录
- 奖学金信息
- 培训经历
- 社会实践

### 6. 成长时间线
- 可视化时间轴
- 关键里程碑

### 7. 联系方式
- 邮箱
- GitHub
- 微信

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (原生)
- **图标**: Font Awesome 6.5
- **字体**: Google Fonts (Inter, Noto Sans SC)
- **部署**: GitHub Pages
- **数据管理**: JSON + localStorage

## 📁 项目结构

```
blog/
├── index.html          # 主页面
├── admin.html          # 管理后台
├── style.css           # 样式文件
├── script.js           # JavaScript 功能
├── data.json           # 数据文件（文章和作品）
└── README.md           # 项目说明
```

## 🚀 快速开始

### 本地运行

1. 克隆仓库
```bash
git clone https://github.com/lhx0715/xuan-blog.git
cd xuan-blog
```

2. 启动本地服务器
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve
```

3. 访问 http://localhost:8000

### 部署到 GitHub Pages

1. Fork 或克隆本仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 访问 `https://your-username.github.io/xuan-blog/`

## 📝 内容管理

### 方法一：使用管理后台（推荐）

1. 访问 `admin.html`
2. 在文章管理中添加/编辑/删除文章
3. 在作品管理中添加/编辑/删除作品
4. 数据自动保存到浏览器 localStorage
5. 导出 JSON 数据并更新 `data.json`

### 方法二：直接编辑 data.json

编辑 `data.json` 文件，按照现有格式添加内容：

#### 添加文章
```json
{
    "id": 7,
    "title": "文章标题",
    "excerpt": "文章摘要",
    "category": "ai",
    "date": "2025-05-26",
    "readTime": "10 分钟",
    "tags": ["标签1", "标签2"],
    "icon": "fas fa-brain",
    "featured": false,
    "url": "https://..."
}
```

#### 添加作品
```json
{
    "id": 7,
    "title": "作品名称",
    "description": "作品描述",
    "category": "web",
    "image": "https://...",
    "tech": ["技术1", "技术2"],
    "github": "https://github.com/...",
    "demo": "https://...",
    "featured": false,
    "status": "已上线"
}
```

### 分类说明

#### 文章分类
- `ai` - AI/ML
- `frontend` - 前端开发
- `backend` - 后端开发
- `devops` - 开发工具
- `algorithm` - 算法

#### 作品分类
- `ai` - AI/ML
- `web` - Web开发
- `design` - 设计
- `creative` - 创意

#### 项目状态
- `已上线` - 绿色标记
- `进行中` - 黄色标记
- `已完成` - 紫色标记
- `持续更新` - 紫色标记

## 🎨 自定义

### 修改颜色

编辑 `style.css` 中的 CSS 变量：

```css
:root {
    --accent: #6366f1;           /* 主色调 */
    --accent-secondary: #8b5cf6; /* 次色调 */
    --bg-primary: #0f172a;       /* 主背景 */
    --bg-secondary: #1e293b;     /* 次背景 */
}
```

### 修改个人信息

编辑 `index.html` 中的对应部分：
- Hero 区域的姓名和标题
- 关于我部分的介绍
- 联系方式

## 📱 响应式设计

博客完全支持响应式设计，适配：
- 桌面端（1200px+）
- 平板端（768px - 1199px）
- 移动端（< 768px）

## 🌙 暗色模式

博客默认使用暗色模式，所有组件都已适配。

## 📄 许可证

MIT License

## 👨‍💻 作者

**李昊烜 (Jax)**
- GitHub: [@lhx0715](https://github.com/lhx0715)
- Email: lhx20050715@qq.com

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体服务
- [Unsplash](https://unsplash.com/) - 图片素材
- [GitHub Pages](https://pages.github.com/) - 托管服务
