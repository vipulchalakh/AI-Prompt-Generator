# AI Prompt Generator

A modern, responsive website for generating professional AI prompts for images, text, video, presentations, and audio. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **AI Prompt Generation**: Generate professional prompts for multiple content types
- **Multiple Output Types**: Support for Image, Text, Video, Presentation, and Audio
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **SEO Optimized**: Full SEO implementation with meta tags and structured data
- **Mobile Responsive**: Works perfectly on all device sizes
- **Copy to Clipboard**: One-click prompt copying with feedback
- **Free to Use**: No registration required, completely free

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **API**: DeepSeek AI
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- DeepSeek API key

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AIPromptGenerator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   DEEPSEEK_API_KEY=your_deepseek_api_key_here
   NEXT_PUBLIC_SITE_URL=https://aipromptgenerator.info
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
AIPromptGenerator/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── generatePrompt/
│   │       └── route.ts   # DeepSeek API integration
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy-policy/    # Privacy policy page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── PromptForm.tsx     # Prompt generation form
│   └── PromptOutput.tsx   # Generated prompt display
├── public/                # Static assets
├── styles/                # Additional styles
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

- `DEEPSEEK_API_KEY`: Your DeepSeek API key (required)
- `NEXT_PUBLIC_SITE_URL`: Your website URL for SEO

### Vercel Deployment

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `DEEPSEEK_API_KEY`: Your DeepSeek API key
3. Deploy!

## 📱 Pages

- **Home** (`/`): Main prompt generator tool with SEO content
- **About** (`/about`): Information about the tool and company
- **Contact** (`/contact`): Contact form and information
- **Privacy Policy** (`/privacy-policy`): Legal privacy information

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for global styles
- Component-specific styles are in their respective files

### Content
- Update page content in respective page files
- Modify SEO metadata in layout and page files
- Update contact information in Footer and Contact components

## 🔒 Security

- API keys are stored securely in environment variables
- Server-side API calls prevent client-side exposure
- Input validation and sanitization implemented
- HTTPS enforced in production

## 📊 SEO Features

- Dynamic meta tags for all pages
- Open Graph and Twitter Card support
- JSON-LD structured data
- Semantic HTML structure
- Fast loading and responsive design
- Alt tags for all images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Email**: info@aipromptgenerator.info
- **Website**: aipromptgenerator.info
- **Documentation**: Check the code comments for detailed explanations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms

The app is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔄 Updates

- Regular dependency updates
- Security patches
- Feature enhancements
- Performance optimizations

---

**Built with ❤️ for the AI community** 