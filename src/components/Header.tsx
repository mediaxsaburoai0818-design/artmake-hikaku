'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-[var(--pink-beige)]">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wide">
            <span className="text-[var(--gold)]">Art</span>
            <span className="text-[var(--pink-sheer)]">Make</span>
            <span className="text-[var(--foreground)] text-sm ml-1 font-medium">比較ナビ</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            <Link href="/" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors">
              ランキング
            </Link>
            <div className="relative group">
              <span className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors cursor-pointer">
                クリニック ▾
              </span>
              <div className="absolute top-full left-0 glass-card shadow-lg rounded-2xl p-3 min-w-[200px] hidden group-hover:block">
                <Link href="/review/medicalbrow" className="block py-2 text-sm hover:text-[var(--gold)]">メディカルブロー</Link>
                <Link href="/review/creage" className="block py-2 text-sm hover:text-[var(--gold)]">クレアージュ東京</Link>
                <Link href="/review/dazzy" className="block py-2 text-sm hover:text-[var(--gold)]">デイジークリニック</Link>
                <Link href="/review/first-artmake" className="block py-2 text-sm hover:text-[var(--gold)]">ファーストアートメイク</Link>
                <Link href="/review/true-design" className="block py-2 text-sm hover:text-[var(--gold)]">トゥルーデザイン</Link>
              </div>
            </div>
            <div className="relative group">
              <span className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors cursor-pointer">
                比較 ▾
              </span>
              <div className="absolute top-full left-0 glass-card shadow-lg rounded-2xl p-3 min-w-[220px] hidden group-hover:block">
                <Link href="/compare/medicalbrow-vs-dazzy" className="block py-2 text-sm hover:text-[var(--gold)]">メディカルブロー vs デイジー</Link>
                <Link href="/compare/creage-vs-medicalbrow" className="block py-2 text-sm hover:text-[var(--gold)]">クレアージュ vs メディカルブロー</Link>
                <Link href="/compare/price" className="block py-2 text-sm hover:text-[var(--gold)]">料金比較</Link>
              </div>
            </div>
            <div className="relative group">
              <span className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors cursor-pointer">
                目的別 ▾
              </span>
              <div className="absolute top-full left-0 glass-card shadow-lg rounded-2xl p-3 min-w-[180px] hidden group-hover:block">
                <Link href="/purpose/cheap" className="block py-2 text-sm hover:text-[var(--gold)]">安い・コスパ重視</Link>
                <Link href="/purpose/natural" className="block py-2 text-sm hover:text-[var(--gold)]">ナチュラル重視</Link>
                <Link href="/purpose/mens" className="block py-2 text-sm hover:text-[var(--gold)]">メンズ</Link>
                <Link href="/purpose/40s-50s" className="block py-2 text-sm hover:text-[var(--gold)]">40代・50代</Link>
                <Link href="/purpose/first-time" className="block py-2 text-sm hover:text-[var(--gold)]">初心者</Link>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors">
              アートメイクとは
            </Link>
            <Link href="/faq" className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors">
              FAQ
            </Link>
          </nav>

          <Link href="/" className="hidden lg:inline-block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-5 py-2 rounded-full text-sm font-semibold btn-glow">
            おすすめを見る
          </Link>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-[var(--pink-beige)] pt-4 space-y-3">
            <Link href="/" className="block font-semibold text-[var(--gold)]" onClick={() => setIsMenuOpen(false)}>ランキング</Link>

            <div className="text-xs font-bold text-[var(--pink-sheer)] mt-3">クリニック</div>
            <Link href="/review/medicalbrow" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>メディカルブロー</Link>
            <Link href="/review/creage" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>クレアージュ東京</Link>
            <Link href="/review/dazzy" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>デイジークリニック</Link>
            <Link href="/review/first-artmake" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>ファーストアートメイク</Link>
            <Link href="/review/true-design" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>トゥルーデザイン</Link>

            <div className="text-xs font-bold text-[var(--pink-sheer)] mt-3">比較</div>
            <Link href="/compare/medicalbrow-vs-dazzy" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>メディカルブロー vs デイジー</Link>
            <Link href="/compare/creage-vs-medicalbrow" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>クレアージュ vs メディカルブロー</Link>
            <Link href="/compare/price" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>料金比較</Link>

            <div className="text-xs font-bold text-[var(--pink-sheer)] mt-3">目的別</div>
            <Link href="/purpose/cheap" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>安い・コスパ重視</Link>
            <Link href="/purpose/natural" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>ナチュラル重視</Link>
            <Link href="/purpose/mens" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>メンズ</Link>
            <Link href="/purpose/40s-50s" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>40代・50代</Link>
            <Link href="/purpose/first-time" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>初心者</Link>

            <div className="text-xs font-bold text-[var(--pink-sheer)] mt-3">部位別</div>
            <Link href="/parts/eyebrow" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>眉毛アートメイク</Link>
            <Link href="/parts/lip" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>リップアートメイク</Link>
            <Link href="/parts/eyeliner" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>アイラインアートメイク</Link>

            <div className="text-xs font-bold text-[var(--pink-sheer)] mt-3">お役立ち</div>
            <Link href="/about" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>アートメイクとは</Link>
            <Link href="/knowledge/risk" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>やめたほうがいい？</Link>
            <Link href="/knowledge/duration" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>何年持つ？</Link>
            <Link href="/knowledge/pain" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>痛い？ダウンタイム</Link>
            <Link href="/faq" className="block text-sm pl-3" onClick={() => setIsMenuOpen(false)}>よくある質問30選</Link>

            <div className="mt-4">
              <Link href="/" className="block bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-white px-6 py-3 rounded-full font-semibold text-center btn-glow" onClick={() => setIsMenuOpen(false)}>
                おすすめランキングを見る
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
