export const TEACHERS = [
  {
    id: 'teacher-f',
    initials: 'F',
    number: '001',
    photo: '/assets/teachers/teache_f.png',
    certificates: ['/assets/certificates/teacher-f/certificate.png'],
  },
  {
    id: 'teacher-cherry',
    initials: 'C',
    number: '002',
    photo: '/assets/teachers/teacher_cherry.png',
    certificates: ['/assets/certificates/teacher-cherry/certificate.png'],
  },
  {
    id: 'teacher-diza',
    initials: 'D',
    number: '003',
    photo: '/assets/teachers/teacher_diza.png',
    certificates: [
      '/assets/certificates/teacher-diza/certificate_1.png',
      '/assets/certificates/teacher-diza/certificate_2.png',
    ],
  },
];

export function getTeacherById(id) {
  return TEACHERS.find((teacher) => teacher.id === id);
}

export function getOtherTeachers(id) {
  return TEACHERS.filter((teacher) => teacher.id !== id);
}
