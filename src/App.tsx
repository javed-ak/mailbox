import { useState } from 'react';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';
import ComposeEmail from './components/ComposeEmail';
import SearchBar from './components/SearchBar';
import { sampleEmails } from './data/sampleEmails';
import { Email, EmailFolder } from './types/email';

function App() {
  const [emails, setEmails] = useState<Email[]>(sampleEmails);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [currentFolder, setCurrentFolder] = useState<EmailFolder>('inbox');
  const [isComposing, setIsComposing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmailIds, setSelectedEmailIds] = useState<string[]>([]);

  const filteredEmails = emails.filter(email => {
    const matchesFolder = email.folder === currentFolder;
    const matchesSearch = searchQuery === '' || 
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFolder && matchesSearch;
  });

  const handleEmailSelect = (email: Email) => {
    setSelectedEmail(email);
    if (!email.isRead) {
      setEmails(emails.map(e => 
        e.id === email.id ? { ...e, isRead: true } : e
      ));
    }
  };

  const handleEmailAction = (action: string, emailId: string) => {
    setEmails(emails.map(email => {
      if (email.id === emailId) {
        switch (action) {
          case 'delete':
            return { ...email, folder: 'trash' as EmailFolder };
          case 'star':
            return { ...email, isStarred: !email.isStarred };
          case 'unread':
            return { ...email, isRead: false };
          default:
            return email;
        }
      }
      return email;
    }));
    
    if (action === 'delete' && selectedEmail?.id === emailId) {
      setSelectedEmail(null);
    }
  };

  const handleBatchAction = (action: string) => {
    setEmails(emails.map(email => {
      if (selectedEmailIds.includes(email.id)) {
        switch (action) {
          case 'delete':
            return { ...email, folder: 'trash' as EmailFolder };
          case 'markRead':
            return { ...email, isRead: true };
          case 'markUnread':
            return { ...email, isRead: false };
          default:
            return email;
        }
      }
      return email;
    }));
    setSelectedEmailIds([]);
  };

  const handleSendEmail = (emailData: { to: string; subject: string; content: string }) => {
    const newEmail: Email = {
      id: Date.now().toString(),
      sender: 'You <me@example.com>',
      recipient: emailData.to,
      subject: emailData.subject,
      content: emailData.content,
      timestamp: new Date(),
      isRead: true,
      isStarred: false,
      folder: 'sent',
      hasAttachments: false
    };
    
    setEmails([newEmail, ...emails]);
    setIsComposing(false);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onBatchAction={handleBatchAction}
        selectedCount={selectedEmailIds.length}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar 
          currentFolder={currentFolder}
          onFolderChange={setCurrentFolder}
          emailCounts={{
            inbox: emails.filter(e => e.folder === 'inbox').length,
            sent: emails.filter(e => e.folder === 'sent').length,
            drafts: emails.filter(e => e.folder === 'drafts').length,
            trash: emails.filter(e => e.folder === 'trash').length,
          }}
        />
        
        <div className="flex-1 flex">
          <EmailList
            emails={filteredEmails}
            selectedEmail={selectedEmail}
            onEmailSelect={handleEmailSelect}
            onEmailAction={handleEmailAction}
            selectedEmailIds={selectedEmailIds}
            onSelectedEmailIdsChange={setSelectedEmailIds}
          />
          
          {selectedEmail && (
            <EmailDetail
              email={selectedEmail}
              onAction={handleEmailAction}
              onReply={() => setIsComposing(true)}
             onClose={() => setSelectedEmail(null)}
            />
          )}
        </div>
      </div>

      <button
        onClick={() => setIsComposing(true)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {isComposing && (
        <ComposeEmail
          onSend={handleSendEmail}
          onClose={() => setIsComposing(false)}
        />
      )}
    </div>
  );
}

export default App;