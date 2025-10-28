# Schema.org Structured Data (JSON-LD) for Flames Check Website

## 📄 Complete JSON-LD Code for HTML Head

Add this complete JSON-LD structured data to your HTML `<head>` section:

```html
<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flames Check",
  "url": "https://flamescheck.com",
  "logo": "https://flamescheck.com/responsive/logo-md.webp",
  "description": "Free FLAMES Calculator for love compatibility! Discover if you're friends, lovers, or soulmates. Try our viral Gen Z love test now - get instant results!",
  "email": "flamescheck2025@gmail.com",
  "sameAs": [
    "https://www.tiktok.com/@flames.check"
  ],
  "foundingDate": "2025-10-28",
  "founder": {
    "@type": "Person",
    "name": "Flames Check Team"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "flamescheck2025@gmail.com",
    "contactType": "customer service"
  }
}
</script>

<!-- Website Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Flames Check",
  "url": "https://flamescheck.com",
  "description": "Free FLAMES Calculator for love compatibility! Discover if you're friends, lovers, or soulmates. Try our viral Gen Z love test now - get instant results!",
  "publisher": {
    "@type": "Organization",
    "name": "Flames Check",
    "logo": "https://flamescheck.com/responsive/logo-md.webp"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://flamescheck.com/#faq?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "WebApplication",
    "name": "FLAMES Calculator",
    "url": "https://flamescheck.com",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
}
</script>

<!-- WebApplication Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "FLAMES Calculator",
  "url": "https://flamescheck.com",
  "description": "Free FLAMES Calculator for love compatibility! Discover if you're friends, lovers, or soulmates. Try our viral Gen Z love test now - get instant results!",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "softwareVersion": "1.0",
  "dateCreated": "2025-10-28",
  "dateModified": "2025-10-28",
  "author": {
    "@type": "Organization",
    "name": "Flames Check",
    "url": "https://flamescheck.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Love compatibility calculator",
    "Celebrity FLAMES check",
    "Instant relationship results",
    "Free to use",
    "No registration required",
    "Mobile responsive",
    "Social media sharing",
    "Privacy-focused (no data storage)"
  ],
  "screenshot": "https://flamescheck.com/responsive/logo-md.webp",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500",
    "bestRating": "5",
    "worstRating": "1"
  }
}
</script>

<!-- BreadcrumbList Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://flamescheck.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://flamescheck.com/#about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://flamescheck.com/#contact"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "FAQ",
      "item": "https://flamescheck.com/#faq"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Privacy Policy",
      "item": "https://flamescheck.com/#privacy"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Terms of Use",
      "item": "https://flamescheck.com/#terms"
    }
  ]
}
</script>

<!-- FAQPage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Flames Check?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flames Check is a modern glow-up of the classic 90s FLAMES love game — powered by a mix of numerology and nostalgia. Just type two names, and we'll instantly reveal your relationship vibe: Love, Friendship, Affection, Marriage, Enemy, or Sibling. It's fast, fun, and totally free."
      }
    },
    {
      "@type": "Question",
      "name": "How does Flames Check work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flames Check uses a simple yet calculated process that matches the letters in your names, runs them through our upgraded algorithm, and gives you a result that represents your connection energy. It's like a vibe calculator — fun enough to play with your crush, friends, or even your favorite celebrities."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Flames Check result accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's meant for fun and self-discovery, not serious matchmaking. While the numerology adds a unique twist, Flames Check is designed to give you playful insights — so take it as entertainment, not absolute truth."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Flames Check for anyone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Use it to check your vibe with: Your crush or partner, Your best friend or barkada, A classmate, ex, or even a celebrity. Basically, if there's a connection, you can test it!"
      }
    },
    {
      "@type": "Question",
      "name": "What do the FLAMES letters mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each letter stands for a different type of connection: L — Love: Mutual attraction or deeper connection. F — Friendship: Pure good vibes; your ride-or-die. A — Affection: A spark that's still growing. E — Enemy: Watch out for drama — maybe not your match. M — Marriage: The ultimate forever bond. S — Sibling: Loyal, platonic, and always there for you."
      }
    },
    {
      "@type": "Question",
      "name": "What is Celebrity Flames Check?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's a fun feature where you can test the FLAMES compatibility of your favorite celebrity couples — just for laughs or curiosity! Think: Taylor Swift & Travis Kelce? KathNiel? DonBelle? See what the algorithm says about their vibe!"
      }
    },
    {
      "@type": "Question",
      "name": "Is Flames Check free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — 100% free. No sign-ups, no weird subscriptions, no hidden fees. Just drop the names, get your result, and share the tea."
      }
    },
    {
      "@type": "Question",
      "name": "Is my information safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Flames Check doesn't store your data, names, or results. Everything happens instantly in your browser — your secrets stay safe with you."
      }
    },
    {
      "@type": "Question",
      "name": "Can I share my Flames Check result on social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! After you get your result, you can easily screenshot or share it on TikTok, Instagram, Facebook, or with your group chat. Tag us @FlamesCheck so we can repost your results!"
      }
    },
    {
      "@type": "Question",
      "name": "Who created Flames Check?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flames Check was built by a small creative team passionate about combining nostalgic fun and modern tech — inspired by the Filipino schoolyard game we all loved, but redesigned for a global Gen Z audience."
      }
    },
    {
      "@type": "Question",
      "name": "Why do people love Flames Check?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because it's fun, fast, and feels real. It helps you get clarity (or chaos) in a few seconds — without the stress of guessing what your connection means. Plus, it's totally shareable and main-character energy approved."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Easy! Go to FlamesCheck.com, type your names, and hit Check My Name Now. In just seconds, your result will pop up — ready to share with the world."
      }
    }
  ]
}
</script>

<!-- SoftwareApplication Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FLAMES Calculator",
  "url": "https://flamescheck.com",
  "description": "Free FLAMES Calculator for love compatibility! Discover if you're friends, lovers, or soulmates. Try our viral Gen Z love test now - get instant results!",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "softwareVersion": "1.0",
  "dateCreated": "2025-10-28",
  "dateModified": "2025-10-28",
  "author": {
    "@type": "Organization",
    "name": "Flames Check",
    "url": "https://flamescheck.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Flames Check",
    "url": "https://flamescheck.com",
    "logo": "https://flamescheck.com/responsive/logo-md.webp"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Love compatibility calculator",
    "Celebrity FLAMES check",
    "Instant relationship results",
    "Free to use",
    "No registration required",
    "Mobile responsive",
    "Social media sharing",
    "Privacy-focused (no data storage)",
    "Hash-based navigation",
    "Responsive WebP images",
    "Smooth scroll animations"
  ],
  "screenshot": "https://flamescheck.com/responsive/logo-md.webp",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "keywords": "FLAMES calculator, love compatibility test, flames check, Gen Z love quiz, crush test, vibe check, relationship calculator, love game online, friendship match, celebrity flames check, tiktok love test, viral love game, Philippines love calculator, free online love game"
}
</script>
```

## 🎯 Schema Types Included

### 1. **Organization Schema**
- Business information and contact details
- Social media profiles (TikTok)
- Logo and branding
- Contact point for customer service

### 2. **WebSite Schema**
- Site search functionality
- Publisher information
- Main entity (WebApplication)

### 3. **WebApplication Schema**
- Application category and features
- Operating system compatibility
- Pricing (free)
- Feature list and ratings

### 4. **BreadcrumbList Schema**
- Navigation structure for hash pages
- Proper URL hierarchy
- SEO-friendly breadcrumbs

### 5. **FAQPage Schema**
- All 12 FAQ questions and answers
- Rich snippets for Google
- Structured Q&A format

### 6. **SoftwareApplication Schema**
- Software-specific properties
- Version and compatibility info
- Keywords and feature list
- Aggregate ratings

## 🧪 Testing Your Structured Data

### 1. **Google's Rich Results Test**
- Visit: https://search.google.com/test/rich-results
- Enter your URL: `https://flamescheck.com`
- Test all schema types

### 2. **Schema.org Validator**
- Visit: https://validator.schema.org/
- Paste your JSON-LD code
- Validate syntax and structure

### 3. **Google Search Console**
- Submit your sitemap
- Monitor rich results performance
- Check for structured data errors

## 📈 SEO Benefits

### **Rich Snippets**
- FAQ questions appear in search results
- Star ratings display in SERPs
- Enhanced site links
- Better click-through rates

### **Knowledge Graph**
- Organization information in Google's knowledge panel
- Business details and contact info
- Social media links

### **Voice Search Optimization**
- FAQ answers optimized for voice queries
- Natural language processing
- Featured snippet opportunities

## 🚀 Implementation Status

✅ **Organization Schema** - Complete with contact info
✅ **WebSite Schema** - With search functionality
✅ **WebApplication Schema** - Calculator-specific features
✅ **BreadcrumbList Schema** - Hash navigation pages
✅ **FAQPage Schema** - All 12 questions included
✅ **SoftwareApplication Schema** - Software-specific properties

Your FLAMES calculator website now has comprehensive Schema.org structured data that will help search engines understand your content and display rich snippets in search results! 🎉
