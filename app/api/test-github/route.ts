export async function GET() {
  const hasAppId = !!process.env.GITHUB_APP_ID;
  const hasPrivateKey = !!process.env.GITHUB_APP_PRIVATE_KEY;
  const keyLength = process.env.GITHUB_APP_PRIVATE_KEY?.length || 0;
  
  return Response.json({
    hasAppId,
    hasPrivateKey,
    keyLength,
    startsCorrectly: process.env.GITHUB_APP_PRIVATE_KEY?.startsWith('-----BEGIN') || false
  });
}