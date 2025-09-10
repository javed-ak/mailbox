# Gmail-like Mailbox Application

A modern, responsive email client application built with React and TypeScript, featuring a Gmail-inspired interface with comprehensive email management capabilities.

![Mailbox Application](https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## 🚀 Features

### Core Email Functionality
- **📧 Email Management**: Create, read, reply, forward, and delete emails
- **📁 Folder Organization**: Inbox, Sent, Drafts, Trash, Starred, and Important folders
- **🔍 Advanced Search**: Real-time search across email content, subjects, and senders
- **✅ Batch Operations**: Multi-select emails for bulk actions
- **📎 Attachment Support**: View and download email attachments
- **⭐ Email Actions**: Star/unstar, mark as read/unread, archive

### User Interface
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, Gmail-inspired interface with smooth animations
- **👤 User Avatars**: Color-coded initials for visual sender identification
- **⚡ Interactive Elements**: Hover effects, transitions, and micro-interactions
- **⌨️ Keyboard Shortcuts**: Power user features (Ctrl+Enter to send, Escape to close)

### Advanced Features
- **🔄 Real-time Updates**: Instant UI updates for email status changes
- **📝 Rich Compose**: Full-featured email composition with formatting options
- **🕒 Smart Timestamps**: Intelligent time display (today, yesterday, dates)
- **📋 Email Preview**: Smart content extraction for email previews
- **🎯 Context Actions**: Folder-specific actions and email state management

## 🛠️ Technologies Used

### Frontend Framework
- **React** - Modern React with hooks and functional components
- **TypeScript** - Static type checking for better code quality
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer
- **Lucide React** - Beautiful, consistent icon library

### Development Tools
- **ESLint** - Code linting with TypeScript support
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin** - React hooks linting
- **Globals** - Global variables for ESLint

### Build & Development
- **@vitejs/plugin-react** - Vite React plugin
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/javed-ak/mailbox.git
cd mailbox-application
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── SearchBar.tsx    # Search functionality
│   ├── EmailList.tsx    # Email list container
│   ├── EmailItem.tsx    # Individual email item
│   ├── EmailDetail.tsx  # Email reading view
│   └── ComposeEmail.tsx # Email composition modal
├── data/
│   └── sampleEmails.ts  # Sample email data
├── types/
│   └── email.ts         # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

## 📝 Assumptions & Design Decisions

### Data Management
- **Local State**: Uses React state for data management (no external database)
- **Sample Data**: Includes realistic sample emails for demonstration
- **Session Persistence**: Email state persists during the browser session
- **Mock Attachments**: Attachment functionality is simulated with sample files

### User Interface
- **Single User**: Designed for single-user email management
- **Responsive First**: Mobile-responsive design with desktop optimization
- **Accessibility**: Basic accessibility features with keyboard navigation
- **Modern Browsers**: Optimized for modern browser features

### Email Functionality
- **Client-Side Only**: No actual email sending/receiving (demonstration purposes)
- **Folder System**: Implements standard email folder structure
- **Search Algorithm**: Simple text-based search across email content
- **Batch Operations**: Limited to UI state changes (no server persistence)

### Performance
- **Component Optimization**: Efficient re-rendering with React best practices
- **Image Handling**: Uses external image URLs (Pexels) for sample content
- **Bundle Size**: Optimized with Vite for fast loading times

## 🎨 Design Philosophy

### Visual Design
- **Apple-Level Aesthetics**: Clean, sophisticated interface design
- **Consistent Spacing**: 8px grid system for uniform spacing
- **Color System**: Comprehensive color palette with semantic meanings
- **Typography**: System fonts with proper hierarchy and readability

### User Experience
- **Intuitive Navigation**: Familiar Gmail-like interface patterns
- **Progressive Disclosure**: Complex features revealed contextually
- **Feedback Systems**: Visual feedback for all user interactions
- **Error Prevention**: Form validation and user guidance

## 🔮 Future Enhancements

### Potential Features
- **Email Synchronization**: Integration with email providers (Gmail, Outlook)
- **Advanced Filtering**: Labels, custom filters, and smart categorization
- **Rich Text Editor**: Enhanced email composition with formatting tools
- **Offline Support**: Service worker for offline email access
- **Push Notifications**: Real-time email notifications
- **Multi-Account**: Support for multiple email accounts
- **Calendar Integration**: Meeting scheduling and calendar sync
- **Contact Management**: Address book and contact suggestions

### Technical Improvements
- **State Management**: Redux or Zustand for complex state management
- **Database Integration**: Backend API with database persistence
- **Authentication**: User login and account management
- **Testing Suite**: Unit and integration tests with Jest/Vitest
- **Performance Monitoring**: Analytics and performance tracking

## 🐛 Known Limitations

- **No Email Sending**: Compose functionality is UI-only
- **Local Storage**: No data persistence between sessions
- **Single User**: No multi-user or authentication system
- **Mock Data**: Uses sample data instead of real email integration
- **Limited Search**: Basic text search without advanced filters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Gmail** - Interface design inspiration
- **Lucide** - Beautiful icon library
- **Tailwind CSS** - Utility-first CSS framework

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**