export const school = {
  name: 'Queen of Peace Model Secondary School',
  location: 'Oboama Ezinihitte, Mbaise, Imo State, Nigeria',
  address: 'Oboama Ezi-west, Ezinihitte Mbaise, Imo State, Nigeria',
  phone: '08065256135', email: 'qpgroupofschoolsmbaise@gmail.com',
  portal: 'https://bridgetech.ng/portal/queenofpeace',
  motto: 'Excellence · Honesty · Service',
  stats: [{ value: '2008', label: 'Established' }, { value: '180', label: 'Students' }, { value: '22', label: 'Teachers' }]
};
export const nav = [
  { label: 'About', path: '/about' }, { label: 'Academics', path: '/academics' },
  { label: 'Leadership', path: '/leadership' }, { label: 'School Life', path: '/school-life' },
  { label: 'Gallery', path: '/gallery' }, { label: 'Admissions', path: '/admissions' }, { label: 'Contact', path: '/contact' }
];
// Replace any URL here when approved school photographs become available.
export const images = {
  building: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/df85a98b4_generated_image.png', alt: 'Illustrative image of the Queen of Peace Model Secondary School building' },
  students: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/85bf63844_generated_176ed34a.jpg', alt: 'Illustrative image of a student in a school courtyard' },
  about: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/10781ece0_generated_fa10abc5.jpg', alt: 'Illustrative image of students learning together outdoors' },
  faith: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/dbf04dd06_generated_993ba4bb.jpg', alt: 'Illustrative Catholic school prayer space' },
  arts: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/cfe9ae7ef_generated_c3b5374f.jpg', alt: 'Illustrative image of students reading and writing' },
  science: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/2d08b94b6_generated_10ce5aa0.jpg', alt: 'Illustrative image of science learning with a microscope' },
  life: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/673200a95_generated_427bd142.jpg', alt: 'Illustrative image of students walking together in a courtyard' },
  gallery: [
    { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/305931f2d_generated_06a5ae56.jpg', alt: 'Illustrative classroom study scene', category: 'Learning' },
    { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/a62c3ae22_generated_20c42f9e.jpg', alt: 'Illustrative school courtyard scene', category: 'Campus' },
    { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/25375c20f_generated_4a3e7791.jpg', alt: 'Illustrative student community scene', category: 'Community' }
  ]
};
// Hero media. Change `mode` to swap what fills the hero visual — the hero layout stays the same.
// 'image'     → the still school-building photograph (current production state).
// 'slideshow' → cycles through `slides` every `interval` milliseconds.
// 'video'     → plays `video.src` (set it to an mp4 URL) with `image` as the poster frame.
export const heroMedia = {
  mode: 'image',
  interval: 6000,
  image: images.building,
  slides: [images.building, images.students, images.life],
  video: { src: '', type: 'video/mp4', alt: 'A short film about Queen of Peace Model Secondary School' }
};
export const values = [
  { no: '01', name: 'Excellence', text: 'Academic growth, intellectual curiosity and high standards.' },
  { no: '02', name: 'Honesty', text: 'Integrity, discipline and moral character.' },
  { no: '03', name: 'Service', text: 'Community, responsibility and compassion.' }
];
export const programs = [
  { no: '01', name: 'Arts', image: images.arts, text: 'A place to develop expression, perspective and thoughtful inquiry.' },
  { no: '02', name: 'Science', image: images.science, text: 'A place to explore questions, investigate ideas and think critically.' }
];