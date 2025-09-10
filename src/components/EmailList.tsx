import React from 'react';
import { Email } from '../types/email';
import EmailItem from './EmailItem';

interface EmailListProps {
  emails: Email[];
  selectedEmail: Email | null;
  onEmailSelect: (email: Email) => void;
  onEmailAction: (action: string, emailId: string) => void;
  selectedEmailIds: string[];
  onSelectedEmailIdsChange: (ids: string[]) => void;
}

const EmailList: React.FC<EmailListProps> = ({
  emails,
  selectedEmail,
  onEmailSelect,
  onEmailAction,
  selectedEmailIds,
  onSelectedEmailIdsChange,
}) => {
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectedEmailIdsChange(emails.map(email => email.id));
    } else {
      onSelectedEmailIdsChange([]);
    }
  };

  const handleSelectEmail = (emailId: string, checked: boolean) => {
    if (checked) {
      onSelectedEmailIdsChange([...selectedEmailIds, emailId]);
    } else {
      onSelectedEmailIdsChange(selectedEmailIds.filter(id => id !== emailId));
    }
  };

  const isAllSelected = emails.length > 0 && selectedEmailIds.length === emails.length;
  const isSomeSelected = selectedEmailIds.length > 0 && selectedEmailIds.length < emails.length;

  if (emails.length === 0) {
    return (
      <div className="flex-1 bg-white border-r border-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No emails found</h3>
          <p className="text-gray-500">Try adjusting your search or check a different folder.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white border-r border-gray-200 flex flex-col">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center">
          <label className="relative flex items-center">
            <input
              type="checkbox"
              checked={isAllSelected}
              ref={input => {
                if (input) input.indeterminate = isSomeSelected;
              }}
              onChange={(e) => handleSelectAll(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-colors ${
              isAllSelected || isSomeSelected
                ? 'bg-blue-600 border-blue-600'
                : 'border-gray-300 hover:border-gray-400'
            }`}>
              {(isAllSelected || isSomeSelected) && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </label>
          <span className="ml-3 text-sm text-gray-600 font-medium">
            {emails.length} {emails.length === 1 ? 'email' : 'emails'}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            isSelected={selectedEmail?.id === email.id}
            isChecked={selectedEmailIds.includes(email.id)}
            onSelect={() => onEmailSelect(email)}
            onCheck={(checked) => handleSelectEmail(email.id, checked)}
            onAction={onEmailAction}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;