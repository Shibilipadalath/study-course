// User type matching Prisma schema
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// Session type (if needed for future use)
export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date | string;
  createdAt: Date | string;
}

// The actual payload inside the nested `data`
export interface SessionData {
  session: Session;
  user: User;
}

// What betterFetch returns from /api/auth/get-session
export interface SessionResponse {
  data: SessionData;
  error: unknown; // you can make this stricter if you know the error shape
}

// Auth client session data type (returned by authClient.getSession())
export interface AuthClientSessionData {
  data: SessionResponse | null;
}

// Login data types
export interface LoginData {
  email: string;
  password: string;
}
