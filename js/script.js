// 导航高亮
document.querySelectorAll('nav a').forEach(a => {
  if (a.href === location.href) a.style.color = 'var(--primary)';
});
