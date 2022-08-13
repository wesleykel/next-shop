import { NextResponse } from 'next/server'

export function middleware(request) {
   
const userCookie = request.cookies.get("user")

if (request.nextUrl.pathname.startsWith('/admin') && !userCookie) {



  return(NextResponse.redirect("http://localhost:3000"))
}

}