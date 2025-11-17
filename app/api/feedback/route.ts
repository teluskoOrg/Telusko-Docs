// app/api/feedback/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { Feedback } from '@/components/feedback';
import { onRateAction } from '@/lib/github'; // Your existing function

export async function POST(request: NextRequest) {
  try {
    const { url, feedback }: { url: string; feedback: Feedback } = await request.json();
    
    // This runs on the server, so env variables are accessible
    const response = await onRateAction(url, feedback);
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}