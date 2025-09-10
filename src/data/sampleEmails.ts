import { Email } from '../types/email';

export const sampleEmails: Email[] = [
  {
    id: '1',
    sender: 'John Smith <john@company.com>',
    recipient: 'me@example.com',
    subject: 'Quarterly Report Review',
    content: `Hi there,

I hope this email finds you well. I wanted to follow up on the quarterly report we discussed last week. After reviewing the numbers, I think we're on track to exceed our targets for Q4.

The key metrics show:
• Revenue growth of 15% compared to last quarter
• Customer acquisition cost down by 8%
• Customer satisfaction scores at an all-time high of 94%

I'd love to schedule a meeting to discuss the details and plan our strategy for the upcoming quarter. Are you available sometime next week?

Best regards,
John Smith
Senior Business Analyst`,
    timestamp: new Date('2024-01-15T10:30:00'),
    isRead: false,
    isStarred: true,
    folder: 'inbox',
    hasAttachments: true
  },
  {
    id: '2',
    sender: 'Sarah Johnson <sarah@marketing.co>',
    recipient: 'me@example.com',
    subject: 'New Marketing Campaign Launch',
    content: `Hello!

I'm excited to share that our new marketing campaign "Innovation Starts Here" is ready for launch. The creative team has done an amazing job, and the initial feedback has been overwhelmingly positive.

Campaign highlights:
- Multi-channel approach (social media, email, web)
- Targeted at tech-savvy millennials and Gen Z
- Expected reach of 2.5M potential customers
- Launch date: January 22nd

Please let me know if you have any questions or need additional information.

Cheers,
Sarah Johnson
Marketing Director`,
    timestamp: new Date('2024-01-15T09:15:00'),
    isRead: true,
    isStarred: false,
    folder: 'inbox',
    hasAttachments: false
  },
  {
    id: '3',
    sender: 'Tech Support <support@platform.com>',
    recipient: 'me@example.com',
    subject: 'Your ticket #12345 has been resolved',
    content: `Dear Valued Customer,

We're pleased to inform you that your support ticket #12345 regarding login issues has been successfully resolved.

Issue: Unable to access account dashboard
Resolution: Updated authentication system and reset user permissions
Time to resolve: 2 hours

Your account is now fully functional. If you experience any further issues, please don't hesitate to contact us.

Thank you for your patience.

Best regards,
Technical Support Team
Platform Solutions Inc.`,
    timestamp: new Date('2024-01-14T16:45:00'),
    isRead: true,
    isStarred: false,
    folder: 'inbox',
    hasAttachments: false
  },
  {
    id: '4',
    sender: 'Newsletter <news@techblog.com>',
    recipient: 'me@example.com',
    subject: 'Weekly Tech Digest - AI Breakthroughs',
    content: `This Week in Tech 🚀

Welcome to your weekly dose of the latest technology trends and breakthroughs!

🤖 AI & Machine Learning
- OpenAI releases new multimodal capabilities
- Google announces advances in quantum computing
- Microsoft integrates AI across Office suite

💻 Software Development
- React 19 beta now available
- TypeScript 5.5 introduces new features
- GitHub Copilot updates improve code suggestions

🔒 Cybersecurity
- New zero-day vulnerability discovered
- Industry adopts new encryption standards
- Best practices for secure development

Read more at techblog.com

Happy coding!
The TechBlog Team`,
    timestamp: new Date('2024-01-14T08:00:00'),
    isRead: false,
    isStarred: false,
    folder: 'inbox',
    hasAttachments: false
  },
  {
    id: '5',
    sender: 'Javed Akhtar <javedakhtarsofficial@gmail.com>',
    recipient: 'client@business.com',
    subject: 'Project Proposal - Web Development',
    content: `Dear Client,

Thank you for considering our services for your web development project. Based on our initial consultation, I've prepared a comprehensive proposal that outlines our approach and timeline.

Project Scope:
• Custom website design and development
• Mobile-responsive implementation
• Content management system integration
• SEO optimization
• 3 months of post-launch support

Timeline: 6-8 weeks from project kickoff
Investment: $15,000 - $20,000

I'm confident we can deliver a solution that exceeds your expectations. I'd be happy to schedule a call to discuss the details further.

Looking forward to hearing from you.

Best regards,
[Your Name]`,
    timestamp: new Date('2024-01-13T14:20:00'),
    isRead: true,
    isStarred: false,
    folder: 'sent',
    hasAttachments: true
  },
  {
    id: '6',
    sender: 'LinkedIn <notifications@linkedin.com>',
    recipient: 'me@example.com',
    subject: 'You have 5 new profile views',
    content: `Hi there,

Your LinkedIn profile has been getting attention! Here's what happened this week:

📈 Profile Statistics:
• 5 new profile views
• 2 new connection requests  
• 1 skill endorsement
• Your posts reached 1,200+ people

Recent viewers include professionals from:
- Microsoft
- Google
- Amazon
- Apple

Keep engaging with your network to boost your visibility even more!

Best,
The LinkedIn Team`,
    timestamp: new Date('2024-01-12T19:30:00'),
    isRead: true,
    isStarred: false,
    folder: 'inbox',
    hasAttachments: false
  }
];