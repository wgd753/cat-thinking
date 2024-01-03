# What is the cat thinking-猫猫在想什么
这是一个使用 Next.js 和 Gemini pro vision 构建的图生文项目，通过上传猫咪的图片，我们将告诉你它可能在想什么。
## 体验地址
https://cat.jellyw.com/
## 项目配置

在项目的根目录下创建一个 `.env.local` 文件，然后添加以下内容：
```
GEMINI_API_KEY=你的API密钥
```

PS：可以在这里申请 API https://ai.google.dev/tutorials/setup

## 项目启动

首先，运行开发服务器：
```
    npm run dev
    # 或者
    yarn dev
    # 或者
    pnpm dev
    # 或者
    bun dev
```

然后，打开浏览器访问 http://localhost:3000 即可看到结果。

你可以通过修改 app/page.js 文件来编辑页面，文件修改后页面会自动更新。

## 项目部署

最简单的部署 Next.js 应用的方式是使用 Next.js 的创建者提供的 Vercel 平台。


## 项目结构

- pages/：存放页面组件的目录，如首页 index.js，API 路由 api/upload.js 等。
- components/：存放复用的 UI 组件，如按钮 ui/button.jsx，卡片 ui/card.jsx 等。
- public/：存放静态资源，如网站图标，robots.txt，sitemap.xml 等。
- styles/：存放全局样式文件。
  
## 项目特性

- 使用 Google Analytics 进行网站访问统计，相关代码在 _document.js 中。
- 使用 next-connect 和 multer 处理图片上传，相关代码在 api/upload.js 中。
- 使用 browser-image-compression 进行图片压缩，相关代码在 index.js 中。
- 使用 @google/generative-ai 进行图片分析，相关代码在 api/upload.js 中。
