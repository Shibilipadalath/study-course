// Fix CORS configuration - Diagnostic and Fix Script
import { readFileSync, writeFileSync } from 'fs';

console.log('🔧 CORS Configuration Fixer\n');

const appJsPath = './app.js';

try {
  let appJs = readFileSync(appJsPath, 'utf8');
  
  console.log('📋 Current configuration check...\n');
  
  // Check if CORS is configured
  if (!appJs.includes('corsOptions')) {
    console.log('❌ CORS options not found!');
    console.log('💡 Adding CORS configuration...\n');
    
    // Find where to insert CORS config
    const expressJsonIndex = appJs.indexOf('app.use(express.json())');
    const corsConfig = `
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [FRONTEND_URL];
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
`;
    
    appJs = appJs.replace(
      'app.use(express.json());',
      `app.use(express.json());${corsConfig}`
    );
    
    writeFileSync(appJsPath, appJs);
    console.log('✅ CORS configuration added!\n');
  } else {
    console.log('✅ CORS options found\n');
    
    // Check if it's using a function for origin
    if (!appJs.includes('origin: function')) {
      console.log('⚠️  CORS origin is not using a function (may cause issues)');
      console.log('💡 Updating to use function-based origin check...\n');
      
      // Replace simple origin with function
      appJs = appJs.replace(
        /origin:\s*FRONTEND_URL/g,
        `origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    const allowedOrigins = [FRONTEND_URL];
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }`
      );
      
      // Add preflightContinue and optionsSuccessStatus
      if (!appJs.includes('preflightContinue')) {
        appJs = appJs.replace(
          /allowedHeaders:.*?\]/s,
          `allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204`
        );
      }
      
      writeFileSync(appJsPath, appJs);
      console.log('✅ CORS configuration updated!\n');
    } else {
      console.log('✅ CORS is using function-based origin check\n');
    }
  }
  
  // Check CORS middleware order
  const corsIndex = appJs.indexOf('app.use(cors');
  const helmetIndex = appJs.indexOf('app.use(helmet');
  
  if (corsIndex > helmetIndex && corsIndex !== -1 && helmetIndex !== -1) {
    console.log('⚠️  CORS middleware is after Helmet (should be before)');
    console.log('💡 Reordering middleware...\n');
    
    // This is complex to fix automatically, so just warn
    console.log('⚠️  Please ensure CORS is applied BEFORE Helmet in app.js\n');
  } else {
    console.log('✅ CORS middleware order is correct\n');
  }
  
  console.log('✅ Configuration check complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Make sure your .env file has: FRONTEND_URL=http://localhost:3000');
  console.log('2. Restart your server: npm run dev');
  console.log('3. Run the test: node test-cors.mjs');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

