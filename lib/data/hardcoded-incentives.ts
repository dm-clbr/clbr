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
      'Hit your monthly sales targets and earn exclusive CLBR branded merchandise. Rookies need 5 sales installed, Vets need 20 sales installed to qualify.',
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
    category_color: '#8B5CF6',
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
    category_color: '#8B5CF6',
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
  {
    id: '6',
    title: 'No Borders',
    description:
      'International trip incentive. Manager: sign 5 new recruits by April 30 — those recruits must have at least 10 active accounts by September 1. Leader: 4+ qualifying managers earns the senior leader a spot; or 2,500 accounts from your downline.',
    category: 'Yearly',
    category_color: '#8B5CF6',
    background_image_url: '/images/incentives/(NO BORDERS) 2.png',
    start_date: '2026-01-28',
    end_date: '2026-04-30',
    sort_order: 6,
    is_published: true,
  },
  {
    id: '7',
    title: 'American Made',
    description:
      'Memorial Day weekend competition (May 24–26). Hit your TSI targets to win prizes including a Pickleball Set and Jordan shoes.',
    category: 'Monthly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/26_ AMERICAN MADE.png',
    start_date: '2026-05-24',
    end_date: '2026-05-26',
    sort_order: 7,
    is_published: true,
  },
  {
    id: '8',
    title: 'Beat Your Best',
    description:
      'Challenge yourself to outdo your own personal best. Beat your previous performance record to earn exclusive rewards — every rep competes against themselves.',
    category: 'Monthly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/26_ BEAT YOUR BEST.png',
    start_date: '2026-01-01',
    end_date: '2026-12-31',
    sort_order: 8,
    is_published: true,
  },
  {
    id: '9',
    title: 'Hit List',
    description:
      'Five rounds of escalating summer prizes (July 14 – Aug 1). Round 2 (Jul 17–19): Polos & Hat Pack. Round 3 (Jul 21–23): Beats Studio Pro. Round 4: Luggage. Round 5 (Jul 28–30): 1-Year Starlink Membership or iPhone 18 Pro.',
    category: 'Summer',
    category_color: '#F59E0B',
    background_image_url: '/images/incentives/26_ HIT LIST.png',
    start_date: '2026-07-14',
    end_date: '2026-08-01',
    sort_order: 9,
    is_published: true,
  },
  {
    id: '10',
    title: 'Independence Day',
    description:
      'Patriotic-themed summer incentive celebrating Independence Day. Compete for special July 4th prizes.',
    category: 'Summer',
    category_color: '#F59E0B',
    background_image_url: '/images/incentives/26_ INDEPENDENCE DAY.png',
    start_date: '2026-07-01',
    end_date: '2026-07-07',
    sort_order: 10,
    is_published: true,
  },
  {
    id: '11',
    title: 'One Up',
    description:
      'Head-to-head sales competition — outperform your peers and one-up the next rep. Last one standing takes the win.',
    category: 'Monthly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/26_ ONE UP.png',
    start_date: '2026-01-01',
    end_date: '2026-12-31',
    sort_order: 11,
    is_published: true,
  },
  {
    id: '12',
    title: 'The LABL',
    description:
      'Two-phase June competition. June 9–14: Pick Captains. June 15–21: Competition. Prizes: GoPro Hero 12, AirPod Pros, Sunglasses.',
    category: 'Monthly',
    category_color: '#3B82F6',
    background_image_url: '/images/incentives/26_ THE LABL.png',
    start_date: '2026-06-09',
    end_date: '2026-06-21',
    sort_order: 12,
    is_published: true,
  },
  {
    id: '13',
    title: 'Branded 30',
    description:
      'Hit 30 sales and you get a custom laser engraved cowboy hat.',
    category: 'Yearly',
    category_color: '#8B5CF6',
    background_image_url: '/images/incentives/BRANDED 30.png',
    start_date: '2026-01-01',
    end_date: '2026-12-31',
    sort_order: 13,
    is_published: true,
  },
]

export const HARDCODED_INCENTIVES: Incentive[] = raw.map((inc) => ({
  ...inc,
  live_status: calculateIncentiveStatus(inc.start_date, inc.end_date),
}))
