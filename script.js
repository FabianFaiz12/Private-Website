function showPage(pageId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

function kirimPesan() {
  const notif = document.getElementById('notif');
  if (notif) notif.innerText = 'Pesan berhasil dikirim!';
}
