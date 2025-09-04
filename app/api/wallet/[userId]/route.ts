import { NextRequest, NextResponse } from 'next/server'

interface RouteParams {
  userId: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: RouteParams }
) {
  const { userId } = params

  // Mock wallet data for development - matching the expected Wallet interface
  const mockWallet = {
    id: `wallet_${userId}`,
    userId: userId,
    balance: 125.50, // Legacy field for backward compatibility  
    depositBalance: 100.00, // Cannot be withdrawn
    earningsBalance: 25.50, // Can be withdrawn
    pendingBalance: 0,
    totalEarned: 25.50,
    totalSpent: 0,
    upcomingPayments: 0,
    pendingPayments: 0,
    createdAt: '2025-09-04T10:00:00Z',
    updatedAt: '2025-09-04T10:30:00Z'
  }

  return NextResponse.json(mockWallet)
}

export async function POST(
  request: NextRequest,
  { params }: { params: RouteParams }
) {
  const { userId } = params
  const body = await request.json()
  
  // Mock response for wallet operations
  return NextResponse.json({
    success: true,
    message: 'Wallet operation completed',
    userId,
    data: body
  })
}