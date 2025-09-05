# Yashaswin Sharma - Portfolio Website

A modern, dynamic portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features include a blog, contact form, GitHub integration, and dark/light mode toggle.

## Features

- **Responsive Design**: Optimized for all devices
- **Dark/Light Mode**: Persistent theme toggle
- **Smooth Animations**: Powered by Framer Motion
- **Blog Section**: Dynamic blog with sample posts
- **Contact Form**: Functional form using EmailJS
- **GitHub Integration**: Displays real repositories
- **SEO Optimized**: Built with Next.js for performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### EmailJS Setup (for Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service and template
3. Update the following in `src/components/Contact.tsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

### GitHub Integration

The GitHub repositories section fetches data from the GitHub API. To display your repositories:

1. Update the username in `src/components/GitHubRepos.tsx`:
   ```typescript
   const response = await fetch(
     "https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=6"
   );
   ```

### Customization

- **Personal Info**: Update content in components like `Hero.tsx`, `About.tsx`, etc.
- **Projects**: Modify the projects array in `Projects.tsx`
- **Blog Posts**: Add real posts or integrate with a CMS like Sanity
- **Colors**: Customize Tailwind theme in `tailwind.config.js`

## Project Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── GitHubRepos.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
└── ...
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Heroku

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Yashaswin Sharma - [Your Email] - [Your LinkedIn]

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
