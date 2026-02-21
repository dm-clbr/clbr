import { calculateIncentiveStatus, type Incentive } from './incentives'

/**
 * Returns a human-readable period string derived from start/end dates.
 * Single-month spans → "Feb 2026", multi-month/year spans → "2026".
 */
export function getIncentivePeriod(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)
  if (
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth()
  ) {
    return start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
  return String(start.getFullYear())
}

const raw = [
  {
    id: '1',
    title: 'Out of Stock',
    description:
      'Hit your monthly sales targets and earn exclusive CLBR branded merchandise. Rookies need 5 sales, Vets need 20 sales to qualify.',
    category: 'Monthly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/26_ OUT OF STOCK 2.png',
    start_date: '2026-02-01',
    end_date: '2026-02-28',
    sort_order: 1,
    is_published: true,
  },
  {
    id: '2',
    title: 'Top Office',
    description:
      'Monthly office-level competition to recognize and reward the highest-performing CLBR sales office.',
    category: 'Yearly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/26_ TOP OFFICE.png',
    start_date: '2026-02-01',
    end_date: '2026-02-28',
    sort_order: 2,
    is_published: true,
  },
  {
    id: '3',
    title: 'Top Ten Rookies',
    description:
      'Monthly recognition program for the top 10 rookie sales reps. Compete with other new reps for exclusive rewards and recognition.',
    category: 'Yearly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/TOP TEN ROOKIES.png',
    start_date: '2026-02-01',
    end_date: '2026-02-28',
    sort_order: 3,
    is_published: true,
  },
  {
    id: '4',
    title: 'Top Ten Vets',
    description:
      'Year-long cumulative competition for veteran reps. Every close matters, every sale adds up. Top 10 reps by end of year get something insane.',
    category: 'Yearly',
    category_color: '#8B5CF6',
    background_image_url: '/images/incentives/TOP TEN VETS.png',
    start_date: '2026-01-01',
    end_date: '2026-12-31',
    sort_order: 4,
    is_published: true,
  },
  {
    id: '5',
    title: 'Offsite 2026',
    description:
      'Annual all-expenses-paid tropical vacation for top performers. Qualify with points: 450 TSI = 1 DISH install is 3 points, T-Mobile is 1 point.',
    category: 'Yearly',
    category_color: '#8B5CF6',
    background_image_url: '/images/incentives/OFFSITE 26_ FINAL.png',
    start_date: '2026-01-01',
    end_date: '2026-12-31',
    sort_order: 5,
    is_published: true,
  },
]

export const HARDCODED_INCENTIVES: Incentive[] = raw.map((inc) => ({
  ...inc,
  live_status: calculateIncentiveStatus(inc.start_date, inc.end_date),
}))
