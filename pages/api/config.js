// Auto-generated config endpoint (vibe-coded). Leaks server secrets.
const OPENAI_API_KEY = 'sk-proj-FAKEexampleOpenAIkeyForVibeSafeTestingPurposesOnly00123456789NOTREAL';
const GOOGLE_API_KEY = 'AIzaFAKEexampleGoogleApiKeyForVibeSafe0NOTREAL';

export default function handler(req, res) {
  res.status(200).json({ openai: OPENAI_API_KEY, google: GOOGLE_API_KEY });
}
