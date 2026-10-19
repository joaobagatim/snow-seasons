const coverFiles = import.meta.glob('../assets/images/covers/*.webp', { eager: true, query: '?url', import: 'default' })
const aboutFiles = import.meta.glob('../assets/images/about/*.webp', { eager: true, query: '?url', import: 'default' })
const galleryFiles = import.meta.glob('../assets/images/season-*/**/*.webp', { eager: true, query: '?url', import: 'default' })

const fileName = (path) => path.split('/').pop().replace(/\.webp$/i, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
const findCover = (name) => Object.entries(coverFiles).find(([path]) => path.endsWith(`/${name}`))?.[1]
const seasonMeta = {
  'season-1': { title: '1st Season', year: '2022-2023', palette: 'ice', code: 'Jost', call: 'First days in the snow, first trips and the beginning of the adventure', highlights: ['First days in the American winter', 'Exploring cities and mountains', 'Moments that shaped the beginning'], accents: ['aurora', 'frost', 'midnight', 'neon', 'ember', 'glacier'] },
  'season-2': { title: '2nd Season', year: '2023-2024', palette: 'shadow', code: 'DC', call: 'More control, more presence and a second season with its own identity', highlights: ['More confidence on the slopes and in every choice', 'More trips, more visual references', 'A season with a stronger presence'], accents: ['void', 'electric', 'steel', 'ember', 'noir', 'iceburn'] }
}

const gallery = Object.entries(galleryFiles).map(([path, image], index) => {
  const match = path.match(/season-(\d)\/(moments|snowboard|trips)\//)
  const category = match?.[2] ?? 'moments'
  return { id: `${match?.[0] ?? 'photo'}-${index}`, image, category, season: `season-${match?.[1] ?? '1'}`, title: `${category === 'snowboard' ? 'Snowboard' : category === 'trips' ? 'Trip' : 'Moment'} ${String(index + 1).padStart(2, '0')}`, location: category === 'snowboard' ? 'Mountain line' : category === 'trips' ? 'On the road' : 'Exchange diary', caption: 'A real frame from a season lived in the United States.', accent: seasonMeta[`season-${match?.[1] ?? '1'}`]?.accents[index % 6] ?? 'glacier', stat: 'Real photo' }
})

export const seasons = Object.entries(seasonMeta).map(([id, data]) => ({ id, route: `/${id}`, ...data, flag: 'USA', cover: findCover(id === 'season-1' ? 'season-1-cover.webp' : 'season-2-cover.webp'), photos: gallery.filter((photo) => photo.season === id) }))
export const aboutImage = Object.values(aboutFiles)[0]
export const accentClass = (accent) => `accent-${accent}`
