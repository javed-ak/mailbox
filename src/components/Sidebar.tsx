import React from 'react';
import { Inbox, Send, Edit3, Trash2, Star, AlertCircle, Settings } from 'lucide-react';
import { EmailFolder, EmailCounts } from '../types/email';

interface SidebarProps {
  currentFolder: EmailFolder;
  onFolderChange: (folder: EmailFolder) => void;
  emailCounts: EmailCounts;
}

const Sidebar: React.FC<SidebarProps> = ({ currentFolder, onFolderChange, emailCounts }) => {
  const menuItems = [
    { id: 'inbox' as EmailFolder, icon: Inbox, label: 'Inbox', count: emailCounts.inbox },
    { id: 'starred' as EmailFolder, icon: Star, label: 'Starred', count: 0 },
    { id: 'important' as EmailFolder, icon: AlertCircle, label: 'Important', count: 0 },
    { id: 'sent' as EmailFolder, icon: Send, label: 'Sent', count: emailCounts.sent },
    { id: 'drafts' as EmailFolder, icon: Edit3, label: 'Drafts', count: emailCounts.drafts },
    { id: 'trash' as EmailFolder, icon: Trash2, label: 'Trash', count: emailCounts.trash },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          Mailbox
        </h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = currentFolder === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onFolderChange(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </div>
                  {item.count > 0 && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      isActive ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;