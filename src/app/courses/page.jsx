'use server';

import CoursesClient from '@/components/CoursesClient';

async function getCourses() {
  const res = await fetch('https://dev.bonzhivar.com/api/courses?populate=*', {
    next: { revalidate: 0 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }
  
  return res.json();
}

export default async function CoursesPage() {
  const { data: courses } = await getCourses();
  
  return <CoursesClient courses={courses} />;
}
