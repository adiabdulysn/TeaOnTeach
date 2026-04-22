import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = new Set([
  'pdf',
  'png',
  'jpg',
  'jpeg',
  'gif',
  'webp',
  'txt',
  'csv',
  'doc',
  'docx',
  'xls',
  'xlsx',
]);

export type IncomingFile = {
  name: string;
  type?: string;
  size?: number;
  base64: string;
};

function sanitizeOriginalName(input: string) {
  const base = path.basename(String(input ?? 'file'));
  // Keep it human-friendly but safe.
  return base.replace(/[^\w.\- ()[\]]+/g, '_').slice(0, 180) || 'file';
}

function parseBase64DataUrl(dataUrl: string) {
  const match = /^data:([^;]+);base64,(.+)$/i.exec(String(dataUrl ?? ''));
  if (!match) throw new Error('Invalid file payload');
  const mime = match[1].toLowerCase();
  const b64 = match[2];
  return { mime, b64 };
}

export function saveIncomingFile(file: IncomingFile, category: 'tickets' | 'replies') {
  const originalName = sanitizeOriginalName(file.name);
  const ext = path.extname(originalName).slice(1).toLowerCase();
  if (!ext || !ALLOWED_EXTENSIONS.has(ext)) {
    throw new Error(`File type not allowed: .${ext || 'unknown'}`);
  }

  if (typeof file.size === 'number' && file.size > MAX_FILE_BYTES) {
    throw new Error('File too large (max 10MB)');
  }

  const { b64 } = parseBase64DataUrl(file.base64);
  const buffer = Buffer.from(b64, 'base64');
  if (!buffer.length || buffer.length > MAX_FILE_BYTES) {
    throw new Error('File too large (max 10MB)');
  }

  const storageName = `${crypto.randomUUID()}.${ext}`;
  const storageRelPath = path.join(category, storageName).replace(/\\/g, '/');

  const uploadDir = path.join(process.cwd(), 'storage', 'uploads', category);
  const fullPath = path.join(uploadDir, storageName);

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  fs.writeFileSync(fullPath, buffer, { flag: 'wx' });

  return {
    originalName,
    storageName,
    storageRelPath,
    size: buffer.length,
    extension: ext,
  };
}

export function resolveStoragePath(storageRelPath: string) {
  const normalized = String(storageRelPath ?? '').replace(/\\/g, '/');
  const full = path.join(process.cwd(), 'storage', 'uploads', normalized);
  const root = path.join(process.cwd(), 'storage', 'uploads');
  const resolved = path.resolve(full);
  const resolvedRoot = path.resolve(root);
  if (!resolved.startsWith(resolvedRoot + path.sep) && resolved !== resolvedRoot) {
    throw new Error('Invalid file path');
  }
  return resolved;
}

export function getMimeType(extension: string) {
  const mimes: Record<string, string> = {
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'pdf': 'application/pdf',
    'txt': 'text/plain',
    'csv': 'text/csv',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  };
  return mimes[extension.toLowerCase()] || 'application/octet-stream';
}

