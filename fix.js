const fs = require('fs');
let content = fs.readFileSync('Buddhima_Portfolio.html', 'utf8');

// 1. Replace anime.animate(TARGET, { ... }) with anime({ targets: TARGET, ... })
content = content.replace(/anime\.animate\((.*?),\s*\{/g, 'anime({ targets: $1, ');

// 2. Add CSS to hide elements initially to prevent FOUC
const cssToInject = `
/* Prevent FOUC for animated elements */
.reveal, nav, .hero-eyebrow, h1.hero-name, .hero-role, .hero-desc, .hero-cta, .hero-photo-wrap,
.skill-bar-item, .contact-subtitle, .cinput, .csend-btn, .ccard, .tech-chip, .edu-titem, .project-card, .cert-card, .section-title, .section-tag, .about-text p, .btn-primary {
  opacity: 0;
}
</style>`;
content = content.replace('</style>', cssToInject);

// 3. Remove JS lines that hide elements to let CSS handle initial state
content = content.replace(/.*el\.style\.opacity = 0;.*/g, '');
content = content.replace(/.*chips\.forEach\(c => { c\.style\.opacity = 0;.*/g, '');

fs.writeFileSync('Buddhima_Portfolio.html', content);
