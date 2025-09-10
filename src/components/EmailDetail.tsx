import React from 'react';
import { ArrowLeft, Reply, ReplyAll, Forward, Trash2, Star, MoreHorizontal, Paperclip, Download } from 'lucide-react';
import { Email } from '../types/email';

interface EmailDetailProps {
  email: Email;
  onAction: (action: string, emailId: string) => void;
  onReply: () => void;
 onClose: () => void;
}

const EmailDetail: React.FC<EmailDetailProps> = ({ email, onAction, onReply, onClose }) => {
  const senderName = email.sender.split(' <')[0];
  const senderEmail = email.sender.match(/<(.+)>/)?.[1] || email.sender;

  const formatFullTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const generateAvatar = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-indigo-500', 'bg-yellow-500', 'bg-red-500', 'bg-gray-500'
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;
    
    return (
      <div className={`w-12 h-12 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-medium`}>
        {initials}
      </div>
    );
  };

  const formatEmailContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <p key={index} className={`${line.trim() === '' ? 'mb-4' : 'mb-2'}`}>
        {line.trim() === '' ? '\u00A0' : line}
      </p>
    ));
  };

  return (
    <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
         <button
           onClick={onClose}
           className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
           title="Close email"
         >
           <ArrowLeft className="w-5 h-5 text-gray-400 hover:text-gray-600" />
         </button>
          <h2 className="text-xl font-semibold text-gray-900 flex-1 pr-4">
            {email.subject}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onAction('star', email.id)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title={email.isStarred ? 'Remove star' : 'Add star'}
            >
              <Star
                className={`w-5 h-5 ${
                  email.isStarred
                    ? 'text-yellow-500 fill-current'
                    : 'text-gray-400 hover:text-yellow-500'
                }`}
              />
            </button>
            <button
              onClick={() => onAction('delete', email.id)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Delete"
            >
              <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {generateAvatar(senderName)}
            <div className="ml-4">
              <div className="flex items-center">
                <span className="font-medium text-gray-900">{senderName}</span>
                <span className="text-gray-500 text-sm ml-2">&lt;{senderEmail}&gt;</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                to me • {formatFullTimestamp(email.timestamp)}
              </div>
            </div>
          </div>

          {email.hasAttachments && (
            <div className="flex items-center text-sm text-gray-600">
              <Paperclip className="w-4 h-4 mr-1" />
              <span>1 attachment</span>
            </div>
          )}
        </div>
      </div>

      {email.hasAttachments && (
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-medium">PDF</span>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">quarterly-report.pdf</div>
                <div className="text-xs text-gray-500">2.4 MB</div>
              </div>
            </div>
            <button className="flex items-center text-sm text-red-600 hover:text-red-700 font-medium">
              <Download className="w-4 h-4 mr-1" />
              Download
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="prose max-w-none text-gray-900 leading-relaxed">
          {formatEmailContent(email.content)}
        </div>
      </div>

      <div className="border-t border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <button
              onClick={onReply}
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <Reply className="w-4 h-4 mr-2" />
              Reply
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              <ReplyAll className="w-4 h-4 mr-2" />
              Reply All
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
              <Forward className="w-4 h-4 mr-2" />
              Forward
            </button>
          </div>
          
          <button
            onClick={() => onAction('unread', email.id)}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            Mark as unread
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;