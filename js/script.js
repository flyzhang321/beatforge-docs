// 导航高亮
document.querySelectorAll('nav a').forEach(a => {
  if (a.href === location.href) a.style.color = 'var(--primary)';
});

// 分享按钮
document.getElementById('shareBtn')?.addEventListener('click', async function() {
  const url = 'https://flyzhang321.github.io/beatforge-docs/';
  const text = '🎵 BeatForge - 专业节拍器，练鼓编曲必备！多段落编排、M4A导出、免费下载';
  if (navigator.share) {
    try { await navigator.share({ title: 'BeatForge', text, url }); }
    catch (e) { /* user cancelled */ }
  } else {
    // 不支持 Web Share API 则复制链接
    try {
      await navigator.clipboard.writeText(url);
      const btn = document.getElementById('shareBtn');
      btn.textContent = '✓ 已复制链接';
      setTimeout(() => { btn.textContent = '📤 分享此页'; }, 2000);
    } catch { prompt('复制链接:', url); }
  }
});
