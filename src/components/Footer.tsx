import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">アートメイク比較ナビ</h3>
            <p className="text-sm mb-3">眉毛・リップ・アイラインのアートメイククリニックを100点独自採点で徹底比較</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">クリニック</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/review/medicalbrow" className="hover:text-white transition-colors">メディカルブロー</Link></li>
              <li><Link href="/review/creage" className="hover:text-white transition-colors">クレアージュ東京</Link></li>
              <li><Link href="/review/dazzy" className="hover:text-white transition-colors">デイジークリニック</Link></li>
              <li><Link href="/review/first-artmake" className="hover:text-white transition-colors">ファーストアートメイク</Link></li>
              <li><Link href="/review/true-design" className="hover:text-white transition-colors">トゥルーデザイン</Link></li>
              <li><Link href="/compare/price" className="hover:text-white transition-colors">料金比較</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">目的・部位別</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/purpose/cheap" className="hover:text-white transition-colors">安い・コスパ重視</Link></li>
              <li><Link href="/purpose/natural" className="hover:text-white transition-colors">ナチュラル重視</Link></li>
              <li><Link href="/purpose/mens" className="hover:text-white transition-colors">メンズ</Link></li>
              <li><Link href="/purpose/40s-50s" className="hover:text-white transition-colors">40代・50代</Link></li>
              <li><Link href="/purpose/first-time" className="hover:text-white transition-colors">初心者向け</Link></li>
              <li><Link href="/parts/eyebrow" className="hover:text-white transition-colors">眉毛アートメイク</Link></li>
              <li><Link href="/parts/lip" className="hover:text-white transition-colors">リップアートメイク</Link></li>
              <li><Link href="/parts/eyeliner" className="hover:text-white transition-colors">アイラインアートメイク</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">エリア別</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/area/tokyo" className="hover:text-white transition-colors">東京</Link></li>
              <li><Link href="/area/ginza" className="hover:text-white transition-colors">銀座</Link></li>
              <li><Link href="/area/shinjuku" className="hover:text-white transition-colors">新宿</Link></li>
              <li><Link href="/area/osaka" className="hover:text-white transition-colors">大阪</Link></li>
              <li><Link href="/area/nagoya" className="hover:text-white transition-colors">名古屋</Link></li>
              <li><Link href="/area/fukuoka" className="hover:text-white transition-colors">福岡</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">お役立ち情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">アートメイクとは</Link></li>
              <li><Link href="/knowledge/risk" className="hover:text-white transition-colors">やめたほうがいい？</Link></li>
              <li><Link href="/knowledge/duration" className="hover:text-white transition-colors">何年持つ？</Link></li>
              <li><Link href="/knowledge/pain" className="hover:text-white transition-colors">痛い？ダウンタイム</Link></li>
              <li><Link href="/knowledge/tattoo-difference" className="hover:text-white transition-colors">タトゥーとの違い</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">よくある質問30選</Link></li>
              <li><Link href="/compare/medicalbrow-vs-dazzy" className="hover:text-white transition-colors">メディカルブロー vs デイジー</Link></li>
              <li><Link href="/compare/creage-vs-medicalbrow" className="hover:text-white transition-colors">クレアージュ vs メディカルブロー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 アートメイク比較ナビ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
