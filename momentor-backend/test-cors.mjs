// Test CORS configuration
// Uses built-in fetch (Node.js 18+)

const BACKEND_URL = 'http://localhost:5001';
const FRONTEND_ORIGIN = 'http://localhost:3000';

console.log('🧪 Testing CORS Configuration...\n');

// Test 1: Check if server is running
console.log('1️⃣ Testing server health...');
try {
  const healthRes = await fetch(`${BACKEND_URL}/health`, {
    signal: AbortSignal.timeout(5000), // 5 second timeout
    headers: {
      'Origin': FRONTEND_ORIGIN // Add Origin header for CORS
    }
  });
  
  if (!healthRes.ok) {
    const errorText = await healthRes.text();
    console.error(`❌ Server returned status: ${healthRes.status}`);
    console.error(`Response: ${errorText}`);
    process.exit(1);
  }
  
  const text = await healthRes.text();
  let healthData;
  try {
    healthData = JSON.parse(text);
  } catch {
    healthData = text;
  }
  console.log('✅ Server is running:', healthData);
} catch (error) {
  if (error.name === 'AbortError' || error.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
    console.error('❌ Server is not running or not accessible');
    console.error('   Error details:', error.message);
    console.log('\n💡 Make sure to:');
    console.log('   1. Start the server in another terminal: npm run dev');
    console.log('   2. Wait for "Server running at http://localhost:5001" message');
    console.log('   3. Then run this test again');
  } else {
    console.error('❌ Error:', error.message);
  }
  process.exit(1);
}

// Test 2: Test OPTIONS preflight request
console.log('\n2️⃣ Testing OPTIONS preflight request...');
try {
  const optionsRes = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: 'OPTIONS',
    headers: {
      'Origin': FRONTEND_ORIGIN,
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'Content-Type',
    },
    signal: AbortSignal.timeout(5000)
  });

  console.log('Status:', optionsRes.status);
  console.log('Headers:');
  const corsHeaders = {
    'access-control-allow-origin': optionsRes.headers.get('access-control-allow-origin'),
    'access-control-allow-methods': optionsRes.headers.get('access-control-allow-methods'),
    'access-control-allow-headers': optionsRes.headers.get('access-control-allow-headers'),
    'access-control-allow-credentials': optionsRes.headers.get('access-control-allow-credentials'),
  };

  console.log(JSON.stringify(corsHeaders, null, 2));

  if (corsHeaders['access-control-allow-origin'] === FRONTEND_ORIGIN) {
    console.log('✅ CORS preflight is working correctly!');
  } else {
    console.log('❌ CORS preflight is NOT working correctly!');
    console.log(`Expected origin: ${FRONTEND_ORIGIN}`);
    console.log(`Got origin: ${corsHeaders['access-control-allow-origin']}`);
  }
} catch (error) {
  console.error('❌ Preflight request failed:', error.message);
}

// Test 3: Test actual POST request
console.log('\n3️⃣ Testing POST request...');
try {
  const postRes = await fetch(`${BACKEND_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Origin': FRONTEND_ORIGIN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'test@example.com',
      password: 'test123',
    }),
    signal: AbortSignal.timeout(5000)
  });

  console.log('Status:', postRes.status);
  const text = await postRes.text();
  let postData;
  try {
    postData = JSON.parse(text);
    console.log('Response:', JSON.stringify(postData, null, 2));
  } catch {
    console.log('Response (text):', text);
    postData = { raw: text };
  }

  const corsHeaders = {
    'access-control-allow-origin': postRes.headers.get('access-control-allow-origin'),
    'access-control-allow-credentials': postRes.headers.get('access-control-allow-credentials'),
  };

  console.log('CORS Headers in response:');
  console.log(JSON.stringify(corsHeaders, null, 2));

  if (corsHeaders['access-control-allow-origin'] === FRONTEND_ORIGIN) {
    console.log('✅ CORS is working correctly for POST requests!');
  } else {
    console.log('❌ CORS is NOT working correctly for POST requests!');
  }
} catch (error) {
  console.error('❌ POST request failed:', error.message);
}

console.log('\n✅ CORS test completed!');

