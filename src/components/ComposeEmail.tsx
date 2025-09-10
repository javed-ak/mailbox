import React, { useState } from 'react';
import { X, Send, Paperclip, Image, Smile, Minimize2 } from 'lucide-react';

interface ComposeEmailProps {
  onSend: (email: { to: string; subject: string; content: string }) => void;
  onClose: () => void;
}

const ComposeEmail: React.FC<ComposeEmailProps> = ({ onSend, onClose }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = () => {
    if (to.trim() && subject.trim() && content.trim()) {
      onSend({ to, subject, content });
      setTo('');
      setSubject('');
      setContent('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSend();
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-0 right-6 w-80 bg-white border border-gray-300 rounded-t-lg shadow-lg z-50">
        <div 
          className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 cursor-pointer rounded-t-lg"
          onClick={() => setIsMinimized(false)}
        >
          <span className="font-medium text-gray-900">New Message</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onKeyDown={handleKeyDown}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">New Message</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-1 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4 border-b border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="recipient@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex-1 p-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your message here..."
            className="w-full h-64 resize-none border-none focus:outline-none text-gray-900 leading-relaxed"
          />
        </div>

        <div className="border-t border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSend}
              disabled={!to.trim() || !subject.trim() || !content.trim()}
              className="inline-flex items-center px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Send
            </button>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <button className="p-2 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                <Image className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                <Smile className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            Press <kbd className="px-1 py-0.5 bg-gray-100 rounded">Ctrl+Enter</kbd> to send
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;