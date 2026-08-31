export const TEACHERS = [
  {
    id: 'teacher-f',
    name: 'Teacher F',
    role: 'Founder & Senior ESL Teacher',
    initials: 'F',
    number: '001',
    photo: '/assets/teachers/teache_f.png',
  },
  {
    id: 'teacher-cherry',
    name: 'Teacher Cherry',
    role: 'Senior English Instructor',
    initials: 'C',
    number: '002',
    photo: '/assets/teachers/teacher_cherry.png',
  },
  {
    id: 'teacher-diza',
    name: 'Teacher Diza',
    role: 'Senior ESL Instructor',
    initials: 'D',
    number: '003',
    photo: '/assets/teachers/teacher_diza.png',
  },
];

export function getTeacherById(id) {
  return TEACHERS.find((teacher) => teacher.id === id);
}

export function getOtherTeachers(id) {
  return TEACHERS.filter((teacher) => teacher.id !== id);
}
