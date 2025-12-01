import React from 'react'
© {new Date().getFullYear()} VotreMédia — Tous droits réservés
</footer>
)
}


function Home(){
return (
<main className="max-w-5xl mx-auto px-4 py-8">
<h2 className="text-xl font-bold mb-4">Actu courte</h2>


{shortNews.length === 0 && <p className="text-gray-500">Aucune actu pour le moment.</p>}


<div className="grid md:grid-cols-2 gap-4">
{shortNews.map(n => (
<article key={n.id} className="border rounded-lg p-4 hover:shadow-md transition">
<h3 className="font-semibold text-lg"><Link to={`/short/${n.id}`}>{n.title}</Link></h3>
<p className="text-sm text-gray-600 mt-2">{n.excerpt}</p>
<div className="mt-3 text-xs text-gray-500">{n.date}</div>
</article>
))}
</div>


<h2 className="text-xl font-bold mt-10 mb-4">Articles longs</h2>


{longArticles.length === 0 && <p className="text-gray-500">Aucun article pour le moment.</p>}


<ul className="space-y-4">
{longArticles.map(a => (
<li key={a.id} className="border-l-4 border-gray-200 pl-4 py-3">
<Link to={`/articles/${a.id}`} className="text-lg font-medium hover:underline">{a.title}</Link>
<div className="text-xs text-gray-500">{a.author} · {a.date}</div>
</li>
))}
</ul>
</main>
)
}


function ShortDetail(){
const { id } = useParams()
const item = shortNews.find(s => s.id === id)
if(!item) return <div className="p-10">Introuvable.</div>


return (
<main className="max-w-3xl mx-auto px-4 py-8">
<h1 className="text-2xl font-bold">{item.title}</h1>
<div className="text-sm text-gray-500 mt-2">{item.date}</div>
<p className="mt-4 text-gray-700">{item.excerpt}</p>
</main>
)
}


function ArticleDetail(){
const { id } = useParams()
const item = longArticles.find(a => a.id === id)
if(!item) return <div className="p-10">Introuvable.</div>


return (
<main className="max-w-3xl mx-auto px-4 py-8">
<h1 className="text-3xl font-bold mb-2">{item.title}</h1>
<div className="text-sm text-gray-500">{item.author} · {item.date}</div>
<article className="prose mt-6">{item.content}</article>
</main>
)
}


export default function App(){
return (
<>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/short/:id" element={<ShortDetail />} />
<Route path="/articles" element={<Home />} />
<Route path="/articles/:id" element={<ArticleDetail />} />
</Routes>
<Footer />
</>
)
}
