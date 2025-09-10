import React from 'react';
import { Search, Archive, Trash2, MailOpen, Mail } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onBatchAction: (action: string) => void;
  selectedCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchQuery, 
  onSearchChange, 
  onBatchAction, 
  selectedCount 
}) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-2xl relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search emails..."
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {selectedCount > 0 && (
          <div className="flex items-center space-x-2 ml-4">
            <span className="text-sm text-gray-600 font-medium">
              {selectedCount} selected
            </span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onBatchAction('markRead')}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                title="Mark as read"
              >
                <MailOpen className="w-4 h-4" />
              </button>
              <button
                onClick={() => onBatchAction('markUnread')}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                title="Mark as unread"
              >
                <Mail className="w-4 h-4" />
              </button>
              <button
                onClick={() => onBatchAction('delete')}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;