import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-[#A8A29E] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-[var(--gold)]">Art</span>
              <span className="text-[var(--pink-sheer)]">Make</span>
              <span className="text-white text-sm ml-1">比較ナビ</span>
            </h3>
            <p className="text-sm mb-3">眉毛・リップ・アイラインのアートメイククリニックを100点独自採点で徹底比較</p>
          </div>

          <div>
            <h4 className="text-[var(--gold-light)] font-semibold mb-4">クリニック</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/review/medicalbrow" className="hover:text-[var(--gold)] transition-colors">メディカルブロー</Link></li>
              <li><Link href="/review/creage" className="hover:text-[var(--gold)] transition-colors">クレアージュ東京</Link></li>
              <li><Link href="/review/dazzy" className="hover:text-[var(--gold)] transition-colors">デイジークリニック</Link></li>
              <li><Link href="/review/first-artmake" className="hover:text-[var(--gold)] transition-colors">ファーストアートメイク</Link></li>
              <li><Link href="/review/true-design" className="hover:text-[var(--gold)] transition-colors">トゥルーデザイン</Link></li>
              <li><Link href="/compare/price" className="hover:text-[var(--gold)] transition-colors">料金比較</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--gold-light)] font-semibold mb-4">目的・部位別</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/purpose/cheap" className="hover:text-[var(--gold)] transition-colors">安い・コスパ重視</Link></li>
              <li><Link href="/purpose/natural" className="hover:text-[var(--gold)] transition-colors">ナチュラル重視</Link></li>
              <li><Link href="/purpose/mens" className="hover:text-[var(--gold)] transition-colors">メンズ</Link></li>
              <li><Link href="/purpose/40s-50s" className="hover:text-[var(--gold)] transition-colors">40代・50代</Link></li>
              <li><Link href="/purpose/first-time" className="hover:text-[var(--gold)] transition-colors">初心者向け</Link></li>
              <li><Link href="/parts/eyebrow" className="hover:text-[var(--gold)] transition-colors">眉毛アートメイク</Link></li>
              <li><Link href="/parts/lip" className="hover:text-[var(--gold)] transition-colors">リップアートメイク</Link></li>
              <li><Link href="/parts/eyeliner" className="hover:text-[var(--gold)] transition-colors">アイラインアートメイク</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--gold-light)] font-semibold mb-4">エリア別</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/area/tokyo" className="hover:text-[var(--gold)] transition-colors">東京</Link></li>
              <li><Link href="/area/ginza" className="hover:text-[var(--gold)] transition-colors">銀座</Link></li>
              <li><Link href="/area/shinjuku" className="hover:text-[var(--gold)] transition-colors">新宿</Link></li>
              <li><Link href="/area/osaka" className="hover:text-[var(--gold)] transition-colors">大阪</Link></li>
              <li><Link href="/area/nagoya" className="hover:text-[var(--gold)] transition-colors">名古屋</Link></li>
              <li><Link href="/area/fukuoka" className="hover:text-[var(--gold)] transition-colors">福岡</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--gold-light)] font-semibold mb-4">お役立ち情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[var(--gold)] transition-colors">アートメイクとは</Link></li>
              <li><Link href="/knowledge/risk" className="hover:text-[var(--gold)] transition-colors">やめたほうがいい？</Link></li>
              <li><Link href="/knowledge/duration" className="hover:text-[var(--gold)] transition-colors">何年持つ？</Link></li>
              <li><Link href="/knowledge/pain" className="hover:text-[var(--gold)] transition-colors">痛い？ダウンタイム</Link></li>
              <li><Link href="/knowledge/tattoo-difference" className="hover:text-[var(--gold)] transition-colors">タトゥーとの違い</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--gold)] transition-colors">よくある質問30選</Link></li>
              <li><Link href="/compare/medicalbrow-vs-dazzy" className="hover:text-[var(--gold)] transition-colors">メディカルブロー vs デイジー</Link></li>
              <li><Link href="/compare/creage-vs-medicalbrow" className="hover:text-[var(--gold)] transition-colors">クレアージュ vs メディカルブロー</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3D3A36] pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <Link href="/terms/" className="hover:text-[var(--gold)] transition-colors">利用規約</Link>
            <Link href="/privacy/" className="hover:text-[var(--gold)] transition-colors">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-[var(--gold)] transition-colors">記事制作ポリシー</Link>
          </div>
          <p className="text-center text-sm">&copy; 2026 アートメイク比較ナビ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
