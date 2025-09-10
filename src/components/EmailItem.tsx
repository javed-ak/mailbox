import React from 'react';
import { Star, Paperclip } from 'lucide-react';
import { Email } from '../types/email';

interface EmailItemProps {
  email: Email;
  isSelected: boolean;
  isChecked: boolean;
  onSelect: () => void;
  onCheck: (checked: boolean) => void;
  onAction: (action: string, emailId: string) => void;
}

const EmailItem: React.FC<EmailItemProps> = ({
  email,
  isSelected,
  isChecked,
  onSelect,
  onCheck,
  onAction,
}) => {
  const senderName = email.sender.split(' <')[0];
  const senderEmail = email.sender.match(/<(.+)>/)?.[1] || email.sender;
  
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  const getPreviewText = (content: string) => {
    // Remove email signatures and quoted text
    const cleanContent = content
      .split('\n\n')[0] // Get first paragraph
      .replace(/^(Hi|Hello|Dear).+,?\n/i, '') // Remove greeting
      .replace(/\n/g, ' ')
      .trim();
    
    return cleanContent.length > 120 
      ? cleanContent.substring(0, 120) + '...'
      : cleanContent;
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAction('star', email.id);
  };

  const generateAvatar = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-indigo-500', 'bg-yellow-500', 'bg-red-500', 'bg-gray-500'
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;
    
    return (
      <div className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white text-sm font-medium`}>
        {initials}
      </div>
    );
  };

  return (
    <div
      className={`flex items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
        isSelected ? 'bg-red-50 border-red-200' : ''
      } ${!email.isRead ? 'bg-white font-medium' : 'bg-gray-50/50'}`}
      onClick={onSelect}
    >
      <label className="flex items-center mr-3" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onCheck(e.target.checked)}
          className="sr-only"
        />
        <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-colors ${
          isChecked
            ? 'bg-blue-600 border-blue-600'
            : 'border-gray-300 hover:border-gray-400'
        }`}>
          {isChecked && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </label>

      <button
        onClick={handleStarClick}
        className="mr-3 p-1 rounded hover:bg-gray-200 transition-colors"
      >
        <Star
          className={`w-4 h-4 ${
            email.isStarred
              ? 'text-yellow-500 fill-current'
              : 'text-gray-400 hover:text-yellow-500'
          }`}
        />
      </button>

      {generateAvatar(senderName)}

      <div className="flex-1 min-w-0 ml-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0">
            <span className={`text-sm truncate mr-2 ${!email.isRead ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
              {senderName}
            </span>
            {!email.isRead && (
              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500 ml-2">
            {email.hasAttachments && (
              <Paperclip className="w-3 h-3 mr-1" />
            )}
            <span className="whitespace-nowrap">
              {formatTimestamp(email.timestamp)}
            </span>
          </div>
        </div>
        
        <div className="text-sm text-gray-900 font-medium truncate mt-0.5">
          {email.subject}
        </div>
        
        <div className="text-xs text-gray-600 truncate mt-1">
          {getPreviewText(email.content)}
        </div>
      </div>
    </div>
  );
};

export default EmailItem;