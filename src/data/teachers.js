export const TEACHERS = [
  {
    id: 'teacher-f',
    name: 'Teacher F',
    role: 'Founder & Senior ESL Teacher',
    initials: 'F',
    number: '001',
    photo: '/assets/teachers/teache_f.png',
    tags: ['TEFL Certified', 'IELTS Speaking Coach', 'Business English'],
  },
  {
    id: 'teacher-cherry',
    name: 'Teacher Cherry',
    role: 'Senior English Instructor',
    initials: 'C',
    number: '002',
    photo: '/assets/teachers/teacher_cherry.png',
    tags: ['TESOL Certified', 'All Ages', 'Corporate Training'],
  },
  {
    id: 'teacher-diza',
    name: 'Teacher Diza',
    role: 'Senior ESL Instructor',
    initials: 'D',
    number: '003',
    photo: '/assets/teachers/teacher_diza.png',
    tags: ['TESOL Certified', 'TEYL Certified', 'Korea, China & Spain Specialist'],
  },
];

export function getTeacherById(id) {
  return TEACHERS.find((teacher) => teacher.id === id);
}

export function getOtherTeachers(id) {
  return TEACHERS.filter((teacher) => teacher.id !== id);
}
