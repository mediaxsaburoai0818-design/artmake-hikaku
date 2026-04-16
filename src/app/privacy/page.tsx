import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | アートメイク比較ナビ',
  description: 'アートメイク比較ナビのプライバシーポリシーです。個人情報の取り扱いについてご説明します。',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Breadcrumb items={[{ name: 'プライバシーポリシー' }]} />

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-10 text-center">プライバシーポリシー</h1>

          <div className="space-y-10 text-sm leading-relaxed text-[#4A4540]">
            <p>
              株式会社MediaX（以下「当社」）は、当社が運営するウェブサイト「アートメイク比較ナビ」（以下「当サイト」）における利用者の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            <article>
              <h2 className="text-lg font-bold mb-3">1. 個人情報の定義</h2>
              <p>本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に規定される個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、メールアドレス、その他の記述等により特定の個人を識別できるものを指します。</p>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">2. 個人情報の取得方法</h2>
              <p>当社は、以下の方法で利用者の個人情報を取得する場合があります。</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>お問い合わせフォームからのご連絡時（氏名、メールアドレス等）</li>
                <li>当サイトの閲覧時に自動的に取得される情報（IPアドレス、ブラウザ情報、アクセスログ等）</li>
                <li>Cookie等の技術を通じて取得される情報</li>
              </ul>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">3. 個人情報の利用目的</h2>
              <p>当社は、取得した個人情報を以下の目的で利用します。</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>当サイトのサービスの提供・運営のため</li>
                <li>利用者からのお問い合わせに対応するため</li>
                <li>当サイトの利用状況の分析・改善のため</li>
                <li>メンテナンスや重要なお知らせの通知のため</li>
                <li>利用規約に違反した利用者への対応のため</li>
                <li>上記の利用目的に付随する目的のため</li>
              </ul>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">4. 個人情報の第三者提供</h2>
              <p>当社は、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>利用者の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、利用者の同意を得ることが困難である場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">5. 個人情報の管理</h2>
              <p>当社は、利用者の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏洩等を防止するため、セキュリティの維持・管理体制の整備等、必要かつ適切な措置を講じます。</p>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">6. 個人情報の開示・訂正・削除</h2>
              <p>利用者から個人情報の開示、訂正、追加、削除、利用停止を求められた場合は、本人確認を行った上で、遅滞なく対応いたします。ただし、法令に基づき当社が保管義務を負う場合等、対応できない場合もあります。</p>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">7. Cookieの使用について</h2>
              <p>当サイトでは、以下の目的でCookieおよび類似の技術を使用しています。</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>利用者の利便性の向上（表示設定の保持等）</li>
                <li>アクセス解析（Google Analytics等によるサイト利用状況の把握）</li>
                <li>広告配信（利用者の興味・関心に基づいた広告の表示）</li>
              </ul>
              <p className="mt-2">利用者はブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、当サイトの一部機能がご利用いただけなくなる場合があります。</p>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">8. 免責事項</h2>
              <p>当サイトからリンクされたアートメイククリニックの公式サイト等、第三者のウェブサイトにおける個人情報の取り扱いについて、当社は一切の責任を負いません。各クリニックの予約・申し込みにあたっては、各クリニックのプライバシーポリシーをご確認ください。</p>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">9. プライバシーポリシーの変更</h2>
              <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。重大な変更がある場合は、当サイト上でお知らせします。</p>
            </article>

            <article>
              <h2 className="text-lg font-bold mb-3">10. お問い合わせ</h2>
              <p>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
              <div className="mt-3 p-4 bg-[var(--blush)] rounded-xl">
                <p>運営会社：株式会社MediaX</p>
                <p>所在地：〒150-0011 東京都渋谷区東一丁目27番10号</p>
                <p>サイト名：アートメイク比較ナビ</p>
              </div>
            </article>

            <p className="text-right text-xs text-[#8B8580] mt-8">制定日：2026年4月1日</p>
          </div>
        </div>
      </section>
    </main>
  )
}
