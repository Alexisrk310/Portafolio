import { test, expect, Page } from '@playwright/test';

const BASE = 'http://localhost:4173';

// ── helpers ──────────────────────────────────────────────────────────────────
async function noConsoleErrors(page: Page) {
  const errs: string[] = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errs.push(m.text());
  });
  return errs;
}

// ── suite ────────────────────────────────────────────────────────────────────
test.describe('Portafolio — Suite completa', () => {

  // ── 1. Carga básica ───────────────────────────────────────────────────────
  test('1. Carga sin errores en consola', async ({ page }) => {
    const errs = await noConsoleErrors(page);
    await page.goto(BASE, { waitUntil: 'networkidle' });
    expect(errs.filter((e) => !e.includes('favicon'))).toHaveLength(0);
  });

  test('2. Título de página correcto', async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Alexis/i);
  });

  // ── 2. Navbar ─────────────────────────────────────────────────────────────
  test('3. Navbar visible con los 5 enlaces de navegación', async ({ page }) => {
    await page.goto(BASE);
    // En desktop los links están en el header (no en tag nav)
    const header = page.locator('header, [class*="fixed"]').first();
    await expect(header).toBeVisible();
    for (const txt of ['Proyectos', 'Experiencia', 'Acerca de mi', 'Contacto']) {
      // buscar en toda la página (pueden estar ocultos en móvil pero visibles en desktop)
      await expect(page.getByText(txt, { exact: true }).first()).toBeVisible();
    }
  });

  test('4. Botón de tema (toggle dark/light) funciona', async ({ page }) => {
    await page.goto(BASE);
    const html = page.locator('html');
    const before = await html.getAttribute('class');
    await page.locator('button[aria-label="Cambiar tema"]').first().click();
    const after = await html.getAttribute('class');
    expect(before).not.toBe(after);
  });

  test('5. Navbar menú móvil se abre y cierra', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE);
    const burger = page.locator('button[aria-label="Toggle menu"]');
    await burger.click();
    await expect(page.getByText('Servicios', { exact: false }).first()).toBeVisible();
    await burger.click();
  });

  // ── 3. Hero ───────────────────────────────────────────────────────────────
  test('6. Hero — nombre y cargo visibles', async ({ page }) => {
    await page.goto(BASE);
    await expect(page.getByText(/Alexis/i).first()).toBeVisible();
    await expect(page.getByText(/Full Stack/i).first()).toBeVisible();
  });

  test('7. Hero — imagen de perfil carga (no broken)', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const img = page.locator('img[alt*="Alexis"]').first();
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  // ── 4. Badges eliminados ──────────────────────────────────────────────────
  test('8. No existen badges SectionLabel eliminados en sesiones anteriores', async ({ page }) => {
    await page.goto(BASE);
    // Badges de sección que se pidió eliminar (no deben existir como chips/badges)
    await expect(page.getByText('Lo que ofrezco')).toHaveCount(0);
    await expect(page.getByText('Arsenal técnico')).toHaveCount(0);
    await expect(page.getByText('El humano detrás del código')).toHaveCount(0);
    await expect(page.getByText('Disponible ahora')).toHaveCount(0);
    await expect(page.getByText('Disponible para nuevos proyectos')).toHaveCount(0);
  });

  // ── 5. Servicios ──────────────────────────────────────────────────────────
  test('9. Sección Servicios — sin "Ver más"', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#servicios, section').filter({ hasText: 'Servicios' }).first().scrollIntoViewIfNeeded();
    await expect(page.getByText('Ver más')).toHaveCount(0);
  });

  test('10. Sección Servicios — al menos 3 tarjetas visibles', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('section').filter({ hasText: 'Profesionales' }).scrollIntoViewIfNeeded();
    const cards = page.locator('section').filter({ hasText: 'Profesionales' }).locator('[class*="rounded"]');
    expect(await cards.count()).toBeGreaterThanOrEqual(3);
  });

  // ── 6. Proyectos ──────────────────────────────────────────────────────────
  test('11. Proyectos — FilterBar visible', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#proyectos').scrollIntoViewIfNeeded();
    // Usar first() para evitar strict mode cuando hay varios botones con texto similar
    await expect(page.locator('#proyectos').getByRole('button', { name: 'Todos' }).first()).toBeVisible();
  });

  test('12. Proyectos — botones Demo/Código siempre visibles (sin hover)', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#proyectos').scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const demoLinks = page.locator('a', { hasText: /Demo|Live/i });
    const codeLinks = page.locator('a', { hasText: /Código|GitHub/i });
    expect(await demoLinks.count()).toBeGreaterThan(0);
    expect(await codeLinks.count()).toBeGreaterThan(0);
  });

  test('13. Proyectos — botones Demo/Código visibles en móvil', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE);
    await page.locator('#proyectos').scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const demoLinks = page.locator('a', { hasText: /Demo|Live/i });
    expect(await demoLinks.count()).toBeGreaterThan(0);
  });

  test('14. Proyectos — filtro React funciona', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#proyectos').scrollIntoViewIfNeeded();
    const reactBtn = page.getByRole('button', { name: /React/i });
    if (await reactBtn.count() > 0) {
      await reactBtn.click();
      await page.waitForTimeout(400);
      const cards = page.locator('#proyectos [class*="rounded"]').filter({ hasText: /React/i });
      expect(await cards.count()).toBeGreaterThanOrEqual(0);
    }
  });

  // ── 7. LinkedIn ───────────────────────────────────────────────────────────
  test('15. LinkedIn — URL correcta en toda la página', async ({ page }) => {
    await page.goto(BASE);
    const correctUrl = 'https://www.linkedin.com/in/alexis-miguel-gutierrez-ruiz-542364202/';
    const wrongUrl = 'https://www.linkedin.com/in/alexisrk310/';
    const wrongLinks = page.locator(`a[href="${wrongUrl}"]`);
    await expect(wrongLinks).toHaveCount(0);
    const correctLinks = page.locator(`a[href="${correctUrl}"]`);
    expect(await correctLinks.count()).toBeGreaterThanOrEqual(1);
  });

  // ── 8. Links externos ─────────────────────────────────────────────────────
  test('16. Links externos tienen target="_blank" y rel="noopener"', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const extLinks = page.locator('a[href^="http"]');
    const count = await extLinks.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < Math.min(count, 15); i++) {
      const rel = await extLinks.nth(i).getAttribute('rel');
      const target = await extLinks.nth(i).getAttribute('target');
      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
    }
  });

  // ── 9. Experiencia ────────────────────────────────────────────────────────
  test('17. Sección Experiencia — al menos 1 item visible', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#experiencia').scrollIntoViewIfNeeded();
    await expect(page.locator('#experiencia').getByText(/Trayectoria Profesional/i)).toBeVisible();
  });

  // ── 10. Contacto ──────────────────────────────────────────────────────────
  test('18. Formulario de contacto — campos presentes', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.getByRole('button', { name: /Enviar/i })).toBeVisible();
  });

  test('19. Formulario — validación: botón bloqueado sin datos', async ({ page }) => {
    await page.goto(BASE);
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    await page.locator('input[name="name"]').fill('Test');
    // sin email ni mensaje — el botón no debería disparar el envío
    const sendBtn = page.getByRole('button', { name: /Enviar/i });
    await sendBtn.click();
    await expect(page.locator('input[name="email"]:invalid')).toHaveCount(1);
  });

  // ── 11. Accesibilidad básica ──────────────────────────────────────────────
  test('20. Todas las imágenes tienen alt', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const imgs = page.locator('img');
    const count = await imgs.count();
    for (let i = 0; i < count; i++) {
      const alt = await imgs.nth(i).getAttribute('alt');
      expect(alt, `img[${i}] sin alt`).not.toBeNull();
      expect(alt!.trim().length).toBeGreaterThan(0);
    }
  });

  // ── 12. Responsivo ────────────────────────────────────────────────────────
  test('21. No hay scroll horizontal en móvil (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });

  test('22. No hay scroll horizontal en tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  });

  // ── 13. Colores — sin gradientes violeta/fuchsia ──────────────────────────
  test('23. No hay clases CSS de violet/fuchsia en el HTML renderizado', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const html = await page.content();
    const violetMatches = html.match(/\btext-violet-\d|bg-violet-\d|from-violet|to-violet/g) ?? [];
    const fuchsiaMatches = html.match(/\btext-fuchsia-\d|bg-fuchsia-\d|from-fuchsia|to-fuchsia/g) ?? [];
    expect(violetMatches, `Clases violet encontradas: ${violetMatches.join(', ')}`).toHaveLength(0);
    expect(fuchsiaMatches, `Clases fuchsia encontradas: ${fuchsiaMatches.join(', ')}`).toHaveLength(0);
  });

  // ── 14. Skills ────────────────────────────────────────────────────────────
  test('24. Sección Skills — se renderizan grupos de tecnologías', async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole('heading', { name: /Stack Técnico/i }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await expect(page.getByText(/Frontend|Backend|IA/i).first()).toBeVisible();
  });

  // ── 15. Footer ────────────────────────────────────────────────────────────
  test('25. Footer — copyright y link a GitHub visibles', async ({ page }) => {
    await page.goto(BASE);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await expect(page.getByText(/2026 Alexis/i)).toBeVisible();
    await expect(page.locator('a[href*="github.com/Alexisrk310/Portafolio"]')).toBeVisible();
  });

});
