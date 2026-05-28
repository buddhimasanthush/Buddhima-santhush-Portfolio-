const fs = require('fs');
let content = fs.readFileSync('Buddhima_Portfolio.html', 'utf8');

// Replace ease: with easing:
content = content.replace(/ease:\s*'outExpo'/g, "easing: 'easeOutExpo'");
content = content.replace(/ease:\s*'outBack'/g, "easing: 'easeOutBack'");
content = content.replace(/ease:\s*'outElastic(.*?)'/g, "easing: 'easeOutElastic$1'");

// Replace Array.from targets with CSS selectors directly
content = content.replace(
  /const els = document\.querySelectorAll\('(.*?)'\);\s*const skillItems = document\.querySelectorAll\('(.*?)'\);\s*animateSection\('about', \(\) => \{\s*anime\(\{ targets: Array\.from\(els\),/s, 
  "animateSection('about', () => {\n    anime({ targets: '$1',"
);

content = content.replace(
  /anime\(\{ targets: Array\.from\(skillItems\),/s, 
  "anime({ targets: '#about .skill-bar-item',"
);

// Contact section
content = content.replace(
  /const formEls = document\.querySelectorAll\('(.*?)'\);\s*const ccards = document\.querySelectorAll\('(.*?)'\);\s*animateSection\('contact', \(\) => \{\s*anime\(\{ targets: Array\.from\(formEls\),/s,
  "animateSection('contact', () => {\n    anime({ targets: '$1',"
);

content = content.replace(
  /anime\(\{ targets: Array\.from\(ccards\),/s,
  "anime({ targets: '#contact .ccard',"
);

fs.writeFileSync('Buddhima_Portfolio.html', content);
