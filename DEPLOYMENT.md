# 🚀 SuperCalc Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SuperCalc"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! 🎉

3. **Connect Custom Domain** (Optional)
   - Go to Project Settings > Domains
   - Add your domain
   - Update DNS records as instructed

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Checklist

### 1. Google Search Console
- Go to [Google Search Console](https://search.google.com/search-console)
- Add your property (domain)
- Verify ownership
- Submit sitemap: `https://yourdomain.com/sitemap.xml`
- Request indexing for important pages

### 2. Google Analytics (Optional)
- Create account at [Google Analytics](https://analytics.google.com)
- Get your tracking ID
- Add to `src/app/layout.tsx`:

```tsx
// Add in <head> section
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'YOUR_GA_ID');
    `,
  }}
></script>
```

### 3. Google AdSense (Monetization)
- Sign up at [Google AdSense](https://www.google.com/adsense)
- Add your site
- Get approved (takes 1-2 weeks)
- Replace `AdSpace` component with actual ad code

### 4. Performance Monitoring
- Monitor Core Web Vitals in Search Console
- Use PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- Target scores: 90+ on mobile, 95+ on desktop

## Environment Variables (If Needed)

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production on Vercel:
- Go to Project Settings > Environment Variables
- Add: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

## Custom Domain Setup

### If using Vercel:
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS:
   - Type: `A` or `CNAME`
   - Value: Provided by Vercel
   - TTL: Automatic

### If using other hosts:
```bash
# Build the project
npm run build

# The output will be in .next folder
# Upload to your hosting provider
```

## SEO Checklist

- [ ] Sitemap submitted to Search Console
- [ ] Robots.txt accessible
- [ ] All pages indexed
- [ ] No crawl errors
- [ ] Mobile-friendly test passed
- [ ] Page speed optimized
- [ ] Meta tags present on all pages
- [ ] Internal linking working

## Monitoring & Analytics

### Weekly Tasks:
- Check Search Console for errors
- Monitor traffic in Analytics
- Review top performing pages

### Monthly Tasks:
- Analyze user behavior
- Add new calculators
- Update existing content
- Build backlinks

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next
npm run build
```

### Slow Performance
- Enable Vercel Analytics
- Check bundle size: `npm run build`
- Optimize images
- Use CDN (Vercel does this automatically)

### SEO Issues
- Validate sitemap: [xml-sitemaps.com](https://www.xml-sitemaps.com)
- Check meta tags: [metatags.io](https://metatags.io)
- Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)

## Scaling Tips

1. **Add Blog Section** - Weekly posts about calculator usage
2. **Add More Tools** - 2-3 new calculators per week
3. **Social Media** - Share on Twitter, Facebook, LinkedIn
4. **Backlinks** - Submit to calculator directories
5. **Email List** - Collect emails for newsletter

## Support

For issues:
- Check GitHub Issues
- Read Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

---

**Good luck with your SuperCalc launch! 🚀**
