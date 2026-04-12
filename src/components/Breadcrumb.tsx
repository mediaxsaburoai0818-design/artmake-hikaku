import Link from 'next/link'
import Script from 'next/script'

type BreadcrumbItem = {
  name: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'ホーム', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://artmake-hikaku.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <Script
        id={`breadcrumb-jsonld-${items.length}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <nav className="bg-gray-50 py-3 px-4 text-sm border-b" aria-label="パンくずリスト">
        <div className="max-w-4xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-gray-500">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && <span className="text-gray-300">&gt;</span>}
                {item.href && index < allItems.length - 1 ? (
                  <Link href={item.href} className="hover:text-rose-500 transition-colors">{item.name}</Link>
                ) : (
                  <span className="text-gray-700 font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
