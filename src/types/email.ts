export interface Email {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  isStarred: boolean;
  folder: EmailFolder;
  hasAttachments: boolean;
}

export type EmailFolder = 'inbox' | 'sent' | 'drafts' | 'trash' | 'starred' | 'important';

export interface EmailCounts {
  inbox: number;
  sent: number;
  drafts: number;
  trash: number;
}