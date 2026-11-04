const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

async function createOgImage() {
  const cakePhotoPath = path.join(__dirname, 'temp-cake.jpg')
  const outputPath = path.join(__dirname, '..', 'public', 'og-image.jpg')
  const outAppPath = path.join(__dirname, '..', 'app', 'og-image.jpg')

  // Resize photo to 1200x630 cover
  const bgPhoto = await sharp(cakePhotoPath)
    .resize(1200, 630, { fit: 'cover', position: 'right top' })
    .toBuffer()

  // SVG overlay with dark warm vignette on the left and brand typography
  const svgOverlay = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1A0B06" stop-opacity="0.95" />
        <stop offset="42%" stop-color="#230E08" stop-opacity="0.88" />
        <stop offset="68%" stop-color="#230E08" stop-opacity="0.45" />
        <stop offset="100%" stop-color="#1A0B06" stop-opacity="0.2" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCD34D" />
        <stop offset="100%" stop-color="#F59E0B" />
      </linearGradient>
    </defs>

    <!-- Background Gradient Overlay -->
    <rect width="1200" height="630" fill="url(#overlayGrad)" />

    <!-- Subtle border frame -->
    <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#F59E0B" stroke-opacity="0.25" stroke-width="1.5" />

    <!-- Brand Badge -->
    <g transform="translate(70, 75)">
      <rect width="210" height="38" rx="19" fill="#8B263E" fill-opacity="0.9" />
      <text x="105" y="24" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" letter-spacing="2" text-anchor="middle">ATELIÊ ARTESANAL</text>
    </g>

    <!-- Cake Icon / Mini Logo -->
    <g transform="translate(70, 140)">
      <!-- Candle Flame -->
      <path d="M32 3 C30 7 28.5 9 32 12 C35.5 9 34 7 32 3 Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.2"/>
      <circle cx="32" cy="8.5" r="1.5" fill="#FEF08A"/>
      <!-- Candle -->
      <rect x="30" y="12" width="4" height="9" rx="1.5" fill="#E8B4B8" stroke="#4A261A" stroke-width="1.5"/>
      <!-- Upper Tier -->
      <path d="M19 23 C19 20.5 45 20.5 45 23 L45 36 C45 38.5 19 38.5 19 36 Z" fill="#FDF3E7" stroke="#4A261A" stroke-width="2"/>
      <path d="M19 23 C19 25 22 29 25 27 C28 25 31 30 35 27 C39 25 42 29 45 25 L45 22 C45 20 19 20 19 22 Z" fill="#8B263E" stroke="#4A261A" stroke-width="1.5"/>
      <!-- Lower Tier -->
      <path d="M11 36 C11 33 53 33 53 36 L53 53 C53 57 11 57 11 53 Z" fill="#FED7AA" stroke="#4A261A" stroke-width="2"/>
      <path d="M11 45 C20 47 44 47 53 45" stroke="#8B263E" stroke-width="2.5"/>
      <path d="M11 36 C11 38 15 42 19 40 C23 38 27 43 32 40 C37 37 41 43 45 40 C49 37 53 41 53 36 L53 34 C53 32 11 32 11 34 Z" fill="#8B263E" stroke="#4A261A" stroke-width="1.5"/>
      <!-- Plate -->
      <ellipse cx="32" cy="56" rx="27" ry="4.5" fill="#EADFD5" stroke="#4A261A" stroke-width="2"/>
      <!-- Sprinkles -->
      <circle cx="21" cy="49" r="1.5" fill="#E11D48"/>
      <circle cx="28" cy="51" r="1.5" fill="#F59E0B"/>
      <circle cx="36" cy="50" r="1.5" fill="#10B981"/>
      <circle cx="43" cy="49" r="1.5" fill="#3B82F6"/>
    </g>

    <!-- Brand Name -->
    <text x="150" y="190" fill="#FFFFFF" font-family="'Playfair Display', Georgia, serif" font-size="56" font-weight="bold" letter-spacing="-0.5">Doce Afeto</text>

    <!-- Subtitle / Specialty -->
    <text x="70" y="270" fill="#F59E0B" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="600" letter-spacing="1">CONFEITARIA &amp; ATELIÊ DE BOLOS</text>

    <!-- Headline text -->
    <text x="70" y="340" fill="#FDF3E7" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700">Bolos e Doces Artesanais</text>
    <text x="70" y="385" fill="#FDF3E7" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700">Feitos para Celebrar Momentos</text>

    <!-- Features / Highlights Bar -->
    <g transform="translate(70, 440)">
      <!-- Rating Star -->
      <text x="0" y="28" fill="#F59E0B" font-size="26">★★★★★</text>
      <text x="135" y="26" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold">4.9 no Google</text>
      <text x="280" y="26" fill="#A89B91" font-family="Arial, Helvetica, sans-serif" font-size="18">·</text>
      <text x="300" y="26" fill="#E5D8CC" font-family="Arial, Helvetica, sans-serif" font-size="18">Ingredientes Nobres &amp; Chocolates Belgas</text>
    </g>

    <!-- CTA pill -->
    <g transform="translate(70, 505)">
      <rect width="280" height="48" rx="24" fill="url(#goldGrad)" />
      <text x="140" y="30" fill="#2C1810" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="bold" text-anchor="middle">Peça direto pelo WhatsApp →</text>
    </g>
  </svg>
  `

  const finalImage = await sharp(bgPhoto)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toBuffer()

  fs.writeFileSync(outputPath, finalImage)
  console.log('Saved', outputPath)

  if (fs.existsSync(path.dirname(outAppPath))) {
    fs.writeFileSync(outAppPath, finalImage)
    console.log('Saved', outAppPath)
  }
}

createOgImage().catch(console.error)
