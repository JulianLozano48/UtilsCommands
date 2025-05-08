function actualizarSeccion(titulo, iconHTML, colorTexto = 'black') {
  const iconContainer = document.getElementById('icon-placeholder');
  const encabezado = document.getElementById('title');
  const watermark = document.getElementById('watermark');

  iconContainer.innerHTML = iconHTML;
  encabezado.textContent = titulo;
  encabezado.style.color = colorTexto;

  watermark.innerHTML = iconHTML;

  const icon = watermark.querySelector('i');
  if (icon) {
    icon.style.fontSize = '300px';
    icon.style.color = 'rgba(31, 31, 31, 0.05)'; // Negro muy transparente
  }
}

function loadSection(section) {
  const container = document.getElementById('content');
  const sectionFile = `sections/${section}.html`;

  fetch(sectionFile)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar la sección');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('section-content').innerHTML = html;

      switch (section) {
        case 'bash':
          actualizarSeccion('Terminal / Bash', `<i class="fa-brands fa-python" style="color: #36362a; font-size: 2.5rem;"></i>`, '#16374d');
          break;
        case 'git':
          actualizarSeccion('Git', `<i class="fa-brands fa-git-alt" style="color: #f5584d; font-size: 2.5rem;"></i>`, '#16374d');
          break;
        case 'docker':
          actualizarSeccion('Docker', `<i class="fa-brands fa-docker" style="color: #0db7ed; font-size: 2.5rem;"></i>`, '#16374d');
          break;
        case 'django':
          actualizarSeccion('Django / Python', `<i class="fa-brands fa-python" style="color: #3776AB; font-size: 2.5rem;"></i>`, '#16374d');
          break;
        case 'sql':
          actualizarSeccion('SQL', `<i class="fa-brands fa-python" style="color: #12444d; font-size: 2.5rem;"></i>`, '#16374d');
          break;
        default:
          actualizarSeccion('Sección no encontrada', `<i class="fa-solid fa-triangle-exclamation text-red-500"></i>`, 'red');
      }
    })
    .catch(error => {
      console.error('Error al cargar la sección:', error);
      container.innerHTML = '<p>Sección no encontrada</p>';
      actualizarSeccion('Sección no encontrada', `<i class="fa-solid fa-triangle-exclamation text-red-500"></i>`, 'red');
    });
}
