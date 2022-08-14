import { NextResponse } from 'next/server'

export function middleware(request) {
   
const userCookie = request.cookies.get("user")
const PASSWORD  = process.env.PASSWORD

if (request.nextUrl.pathname.startsWith('/admin') && !userCookie) {



  return(NextResponse.redirect("https://nimble-stroopwafel-1e44e9.netlify.app/"))
}






}