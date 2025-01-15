import AnnouncementsClient from "./AnnouncementsClient";

async function getAnnouncements() {
  const res = await fetch('https://dev.bonzhivar.com/api/announcements?populate=*', { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error('Failed to fetch announcements');
  }
  return res.json();
}

export default async function Announcements() {
  const announcementsData = await getAnnouncements();
  const announcements = announcementsData.data.map(item => ({
    id: item.id,
    title: item.Title,
    date: new Date(item.Date).toLocaleDateString('fa-IR'),
    category: item.Category,
    description: item.Description,
    imagePath: `https://dev.bonzhivar.com${item.Cover.url}`,
    status: item.CourseStatus
  }));

  return <AnnouncementsClient announcements={announcements} />;
}
