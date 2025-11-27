import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin

  if (code) {
    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Auth callback error:', error)
        return NextResponse.redirect(`${origin}/login?error=auth_error`)
      }

      // 로그인 성공 시 홈페이지로 리디렉션
      return NextResponse.redirect(`${origin}/?auth=success`)
    } catch (error) {
      console.error('Auth callback error:', error)
      return NextResponse.redirect(`${origin}/login?error=auth_error`)
    }
  }

  // code가 없으면 로그인 페이지로 리디렉션
  return NextResponse.redirect(`${origin}/login`)
}