import Link from "next/link"
import SignIn from "../login/page"

export default function Component() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 py-2 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">커뮤니티 🔥</a>
              <a href="#" className="text-white hover:text-gray-300">PLAYREPORT</a>
              <a href="#" className="text-white hover:text-gray-300">듀오찾기</a>
              <a href="#" className="text-white hover:text-gray-300">멀티서치 AI</a>
            </div>
            <div>
              {/* Placeholder for any right-aligned items */}
              <Link href="/login" legacyBehavior>
                <a className="text-white hover:text-gray-300">로그인</a>
              </Link>
            </div>
          </div>
        </nav>
  
        {/* Blue Banner */}
        <div className="bg-blue-500 py-2 px-4 text-center text-white">
          선 2장이 장군 순위에 도움이 될까? 내 데이터 확인하기 &gt;
        </div>
  
        <header className="container mx-auto py-8">
          <h1 className="text-4xl font-bold text-center mb-8">YOUR.GG</h1>
          <div className="relative max-w-md mx-auto">
            <input
              className="w-full bg-white text-black pl-4 pr-10 py-2 rounded-md"
              placeholder="Search..."
            />
            {/* 검색아이콘 */}
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </header>
  
        {/* 메인 컨텐츠 / 검색 밑 비어있음 */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* Main content area - empty */}
        </main>
        
        <footer className="bg-gray-800 py-6 mt-auto">
          <div className="container mx-auto px-4 text-center text-sm text-gray-400">
            <p>© 2024 Team SSS. All rights reserved.</p>
            <p className="mt-2">
              여기에 저작권메세지
            </p>
          </div>
        </footer>

      </div>
    )
  }