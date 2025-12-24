import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ser.vi - Restaurant Management Platform',
    short_name: 'Ser.vi',
    description: 'Zero monthly fees restaurant POS, online ordering, and management platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ff7043',
    icons: [
      {
        src: '/servi-app.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/servi-app.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

