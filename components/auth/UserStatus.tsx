"use client"

import { useAuth } from './AuthProvider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function UserStatus() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <Link href="/login">
          <Button variant="outline" size="sm" className="bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:bg-[#e78a53] hover:text-white hover:border-[#e78a53] transition-all duration-200">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm" className="bg-[#e78a53] hover:bg-[#e78a53]/90 text-white transition-all duration-200">
            Sign Up
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        {user.user_metadata?.avatar_url && (
          <img
            src={user.user_metadata.avatar_url}
            alt="Profile"
            className="w-8 h-8 rounded-full border border-zinc-600"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">
            {user.user_metadata?.full_name || user.email}
          </span>
          <span className="text-xs text-zinc-400">
            via {user.app_metadata?.provider || 'email'}
          </span>
        </div>
      </div>
      <Button
        onClick={signOut}
        variant="outline"
        size="sm"
        className="bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
      >
        Sign Out
      </Button>
    </div>
  )
}