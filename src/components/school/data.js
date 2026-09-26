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
const building = { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/5f51d826b_WhatsApp_Image_2026-09-18_at_112304.jpeg', alt: 'The Queen of Peace Model Secondary School building' };

export const images = {
  logo: { src: 'https://res.cloudinary.com/df2q6gyuq/image/upload/w_240,c_limit/v1754589763/rev_fr_tochi_sch_logo_-_Queen_of_Peace_nkcvgq.png', alt: 'Queen of Peace Model Secondary School logo' },
  building,
  students: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/85bf63844_generated_176ed34a.jpg', alt: 'Illustrative image of a student in a school courtyard' },
  about: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/10781ece0_generated_fa10abc5.jpg', alt: 'Illustrative image of students learning together outdoors' },
  faith: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/dbf04dd06_generated_993ba4bb.jpg', alt: 'Illustrative Catholic school prayer space' },
  arts: { src: 'https://res.cloudinary.com/df2q6gyuq/image/upload/w_900,c_limit/v1754845459/IMG_20250311_143450_993_-_george_opara_xgaiq6.jpg', alt: 'Queen of Peace students in the Arts programme' },
  science: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/35dbaaee7_IMG_20250520_115034_779_-_george_opara.jpg', alt: 'Queen of Peace students in the Science programme' },
  life: { src: 'https://media.base44.com/images/public/6ab4d29f49c6fd7a6aaab45d/673200a95_generated_427bd142.jpg', alt: 'Illustrative image of students walking together in a courtyard' },
  gallery: [
    { src: 'https://res.cloudinary.com/df2q6gyuq/image/upload/w_900,c_limit/v1754845464/IMG_20250408_094328_289_-_george_opara_qvhcot.jpg', alt: 'Students learning together in a classroom', category: 'Learning' },
    { ...building, category: 'Campus' },
    { src: 'https://res.cloudinary.com/df2q6gyuq/image/upload/w_900,c_limit/v1754845461/IMG_20250408_094258_240_-_george_opara_ksfv80.jpg', alt: 'Students in the school community', category: 'Community' }
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