import Database from 'better-sqlite3';
import { join } from 'path';
import fs from 'fs';

// Ensure data directory exists
const dataDir = join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(join(dataDir, 'database.db'));

// Enable foreign keys and better error handling
db.pragma('foreign_keys = ON');

try {
  // Start a transaction for schema updates
  db.prepare('BEGIN TRANSACTION').run();

  // Create forms table if it doesn't exist with all required columns
  db.prepare(`
    CREATE TABLE IF NOT EXISTS forms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT NOT NULL,
      email TEXT NOT NULL,
      phoneNumber TEXT NOT NULL,
      course TEXT NOT NULL,
      message TEXT,
      archived INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  // Check if archived column exists
  const tableInfo = db.prepare("PRAGMA table_info(forms)").all();
  const hasArchivedColumn = tableInfo.some(column => column.name === 'archived');

  // Add archived column if it doesn't exist (for backward compatibility)
  if (!hasArchivedColumn) {
    db.prepare('ALTER TABLE forms ADD COLUMN archived INTEGER DEFAULT 0').run();
  }

  // Create messages table if it doesn't exist
  db.prepare(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  // Commit the transaction
  db.prepare('COMMIT').run();
} catch (error) {
  // Rollback on error
  db.prepare('ROLLBACK').run();
  console.error('Database initialization error:', error);
  throw error;
}

export default db;
