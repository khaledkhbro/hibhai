import { NextRequest, NextResponse } from 'next/server'

interface RouteParams {
  userId: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: RouteParams }
) {
  const { userId } = params

  // Mock transaction data for development
  const mockTransactions = [
    {
      id: 'tx_001',
      walletId: `wallet_${userId}`,
      type: 'deposit' as const,
      amount: 100.00,
      feeAmount: 0,
      netAmount: 100.00,
      balanceType: 'deposit' as const,
      description: 'Initial deposit',
      status: 'completed' as const,
      createdAt: '2025-09-04T10:00:00Z'
    },
    {
      id: 'tx_002',
      walletId: `wallet_${userId}`,
      type: 'earning' as const,
      amount: 25.50,
      feeAmount: 0,
      netAmount: 25.50,
      balanceType: 'earnings' as const,
      description: 'Job completion payment',
      status: 'completed' as const,
      createdAt: '2025-09-04T10:30:00Z'
    }
  ]

  return NextResponse.json(mockTransactions)
}