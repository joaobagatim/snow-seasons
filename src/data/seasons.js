const coverFiles = import.meta.glob('../assets/images/covers/*.webp', { eager: true, query: '?url', import: 'default' })
const aboutFiles = import.meta.glob('../assets/images/about/*.webp', { eager: true, query: '?url', import: 'default' })
const galleryFiles = import.meta.glob('../assets/images/season-*/**/*.webp', { eager: true, query: '?url', import: 'default' })

const fileName = (path) => path.split('/').pop().replace(/\.webp$/i, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
const findCover = (name) => Object.entries(coverFiles).find(([path]) => path.endsWith(`/${name}`))?.[1]
const seasonMeta = {
  'season-1': { title: 'Season 1', year: '2022-2023', palette: 'ice', code: 'Jost', call: 'Primeira experiência na neve, primeiras viagens e início da aventura', highlights: ['Primeiros dias no inverno americano', 'Exploração de cidades e montanhas', 'Momentos que definiram o começo da jornada'], accents: ['aurora', 'frost', 'midnight', 'neon', 'ember', 'glacier'] },
  'season-2': { title: 'Season 2', year: '2023-2024', palette: 'shadow', code: 'DC', call: 'Mais controle, mais presença e uma segunda temporada com identidade própria', highlights: ['Confiança maior nas pistas e nas escolhas', 'Mais viagens, mais repertório visual', 'Uma temporada com presença mais forte'], accents: ['void', 'electric', 'steel', 'ember', 'noir', 'iceburn'] }
}

const gallery = Object.entries(galleryFiles).map(([path, image], index) => {
  const match = path.match(/season-(\d)\/(moments|snowboard|trips)\//)
  return { id: `${match?.[0] ?? 'photo'}-${index}`, image, category: match?.[2] ?? 'moments', season: `season-${match?.[1] ?? '1'}`, title: fileName(path), location: match?.[2] === 'snowboard' ? 'Mountain line' : match?.[2] === 'trips' ? 'On the road' : 'Exchange diary', caption: 'Um frame real de uma temporada vivida nos Estados Unidos.', accent: seasonMeta[`season-${match?.[1] ?? '1'}`]?.accents[index % 6] ?? 'glacier', stat: 'Foto real' }
})

export const seasons = Object.entries(seasonMeta).map(([id, data]) => ({ id, route: `/${id}`, ...data, flag: 'USA', cover: findCover(id === 'season-1' ? 'season-1-cover.webp' : 'season-2-cover.webp'), photos: gallery.filter((photo) => photo.season === id) }))
export const aboutImage = Object.values(aboutFiles)[0]
export const accentClass = (accent) => `accent-${accent}`
