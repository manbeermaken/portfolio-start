import type { Project } from '#/db'

export const projects: Project[] = [
  {
    id: 1,
    name: 'Social Spring',
    domain: 'backend',
    live_url: 'https://social-api.manbeermaken.xyz',
    github_url: 'https://github.com/manbeermaken/social-spring',
    short_desc:
      'Architected and deployed a secure, scalable social media REST API to AWS using Docker, GitHub Actions CI/CD, and custom JWT authentication.',
    long_desc:
      'Architected and deployed a secure, scalable social media REST API to AWS using Docker, GitHub Actions CI/CD, and custom JWT authentication.',
    tech_stack: [
      'java',
      'spring-boot',
      'postgresql',
      'mongodb',
      'redis',
      'aws',
      'github-actions',
    ],
    bullet_points: [
      'Resolved cross database consistency challenges by building an event driven sync pipeline using Redis Streams.',
      'Reduced MongoDB server load by implementing cursor based pagination, enabling a seamless infinite scrolling feature for user feeds.',
      'Secured the API by building a custom JWT auth flow, safely generating, storing, and validating access and refresh tokens to manage persistent user sessions.',
    ],
    screenshots: [
      'https://placehold.co/1200x800/1e293b/ffffff?text=Portfolio+Home',
      'https://placehold.co/1200x800/0f172a/ffffff?text=Project+Details',
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Social Next',
    domain: 'frontend',
    live_url: 'https://social.manbeermaken.xyz',
    github_url: 'https://github.com/manbeermaken/social-next',
    short_desc:
      'Engineered a full stack client to consume Social Spring/Node API.',
    long_desc:
      'Architected and deployed a secure, scalable social media REST API to AWS using Docker, GitHub Actions CI/CD, and custom JWT authentication.',
    tech_stack: [
      'typescript',
      'react',
      'nextjs',
      'tailwindcss',
      'zod',
      'vercel',
    ],
    bullet_points: [
      'Resolved cross database consistency challenges by building an event driven sync pipeline using Redis Streams.',
      'Reduced MongoDB server load by implementing cursor based pagination, enabling a seamless infinite scrolling feature for user feeds.',
      'Secured the API by building a custom JWT auth flow, safely generating, storing, and validating access and refresh tokens to manage persistent user sessions.',
    ],
    screenshots: [
      'https://placehold.co/1200x800/1e293b/ffffff?text=Portfolio+Home',
      'https://placehold.co/1200x800/0f172a/ffffff?text=Project+Details',
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: 'API Rate Limiter',
    domain: 'backend',
    live_url: '',
    github_url: 'https://github.com/manbeermaken/api-rate-limiter',
    short_desc:
      'Engineered a high performance rate limiter implementing the Token Bucket Algorithm to manage request quotas and prevent abuse.',
    long_desc:
      'Architected and deployed a secure, scalable social media REST API to AWS using Docker, GitHub Actions CI/CD, and custom JWT authentication.',
    tech_stack: [
      'python',
      'lua',
      'fastapi',
      'redis',
    ],
    bullet_points: [
      'Resolved cross database consistency challenges by building an event driven sync pipeline using Redis Streams.',
      'Reduced MongoDB server load by implementing cursor based pagination, enabling a seamless infinite scrolling feature for user feeds.',
      'Secured the API by building a custom JWT auth flow, safely generating, storing, and validating access and refresh tokens to manage persistent user sessions.',
    ],
    screenshots: [
      'https://placehold.co/1200x800/1e293b/ffffff?text=Portfolio+Home',
      'https://placehold.co/1200x800/0f172a/ffffff?text=Project+Details',
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 4,
    name: 'Social Node',
    domain: 'backend',
    live_url: 'https://social-api.manbeermaken.xyz',
    github_url: 'https://github.com/manbeermaken/social-node',
    short_desc:
      'Architected and deployed a secure, scalable social media REST API to AWS using Docker, GitHub Actions CI/CD, and custom JWT authentication.',
    long_desc:
      'Architected and deployed a secure, scalable social media REST API to AWS using Docker, GitHub Actions CI/CD, and custom JWT authentication.',
    tech_stack: [
      'typescript',
      'nodejs',
      'postgresql',
      'mongodb',
      'redis',
      'aws',
      'github-actions',
    ],
    bullet_points: [
      'Resolved cross database consistency challenges by building an event driven sync pipeline using Redis Streams.',
      'Reduced MongoDB server load by implementing cursor based pagination, enabling a seamless infinite scrolling feature for user feeds.',
      'Secured the API by building a custom JWT auth flow, safely generating, storing, and validating access and refresh tokens to manage persistent user sessions.',
    ],
    screenshots: [
      'https://placehold.co/1200x800/1e293b/ffffff?text=Portfolio+Home',
      'https://placehold.co/1200x800/0f172a/ffffff?text=Project+Details',
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
]
