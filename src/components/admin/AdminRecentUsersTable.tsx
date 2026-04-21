import { ArrowRight, MoreVertical } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { AdminRecentUser } from '@/types/admin'

type AdminRecentUsersTableProps = {
  users: AdminRecentUser[]
}

const roleClasses: Record<AdminRecentUser['role'], string> = {
  Developer: 'bg-violet-500/12 text-violet-700 dark:text-violet-300',
  Designer: 'bg-amber-500/12 text-amber-700 dark:text-amber-300',
  Manager: 'bg-blue-500/12 text-blue-700 dark:text-blue-300',
  HR: 'bg-emerald-500/12 text-emerald-700 dark:text-emerald-300'
}

export function AdminRecentUsersTable({ users }: AdminRecentUsersTableProps) {
  return (
    <Card className='border-slate-200/80 bg-white/90 py-0 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/8 dark:bg-[#121423]/88 dark:shadow-[0_24px_90px_rgba(0,0,0,0.22)]'>
      <CardContent className='p-5 sm:p-6'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-lg font-bold text-slate-950 dark:text-white'>Recent Users</h3>
          <button
            type='button'
            className='inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-500 dark:text-violet-300'
          >
            View all users
            <ArrowRight className='size-4' />
          </button>
        </div>

        <div className='mt-5 overflow-x-auto'>
          <table className='w-full min-w-[640px] border-separate border-spacing-0'>
            <thead>
              <tr className='text-left text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400'>
                <th className='border-b border-slate-200 pb-3 dark:border-white/8'>User</th>
                <th className='border-b border-slate-200 pb-3 dark:border-white/8'>Role</th>
                <th className='border-b border-slate-200 pb-3 dark:border-white/8'>Status</th>
                <th className='border-b border-slate-200 pb-3 dark:border-white/8'>Joined</th>
                <th className='border-b border-slate-200 pb-3 text-right dark:border-white/8' />
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className='group'>
                  <td className='border-b border-slate-200/80 py-3 dark:border-white/8'>
                    <div className='flex items-center gap-3'>
                      <div className='flex size-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 dark:bg-white/8 dark:text-slate-200'>
                        {user.initials}
                      </div>
                      <div>
                        <p className='text-sm font-bold text-slate-950 dark:text-white'>{user.name}</p>
                        <p className='mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400'>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className='border-b border-slate-200/80 py-3 dark:border-white/8'>
                    <Badge
                      label={user.role}
                      className={cn('rounded-md px-2.5 py-1 normal-case tracking-normal', roleClasses[user.role])}
                    />
                  </td>
                  <td className='border-b border-slate-200/80 py-3 dark:border-white/8'>
                    <span className='inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300'>
                      <i
                        className={cn(
                          'size-2 rounded-full',
                          user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-500'
                        )}
                      />
                      {user.status}
                    </span>
                  </td>
                  <td className='border-b border-slate-200/80 py-3 text-sm font-semibold text-slate-600 dark:border-white/8 dark:text-slate-300'>
                    {user.joined}
                  </td>
                  <td className='border-b border-slate-200/80 py-3 text-right dark:border-white/8'>
                    <button
                      type='button'
                      className='inline-flex size-8 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/6 dark:hover:text-white'
                      aria-label={`More actions for ${user.name}`}
                    >
                      <MoreVertical className='size-4' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
