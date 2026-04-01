import {NextResponse} from 'next/server';
import Effect from '@/lib/models/Effect';
type RouteData = {
  url: string;
  priority: number;
  lastModified?: Date | string | null; // The '?' is the magic fix here
};
export async function GET(request:Request){
    const authHeader = request.headers.get('authorization');
    if (authHeader!==`Bearer ${process.env.CRON_SECRET}`){
        return NextResponse.json({error:'not authorized'},{status:401});
    }
    try{
    console.log('starting sitemap generation...');
    const staticRoutes:RouteData[] =[
      { url: 'https://codophile.in', priority: 1.0 },
      { url: 'https://codophile.in/about', priority: 0.8 },
      { url: 'https://codophile.in/effects', priority: 0.9 },
      { url: 'https://codophile.in/playground', priority: 0.9 },
    ];
    const effectsData = await Effect.find();
    console.log(effectsData);
    const effectRoutes:RouteData[] =effectsData.map(effect=>({
        url:`https://codophile.in/effects/${effect.id}`,
        lastModified:effect.updatedAt,priority:0.7
    }));
  

    const allRoutes = [...staticRoutes,...effectRoutes];

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allRoutes.map(route => `
          <url>
            <loc>${route.url}</loc>
            ${route.lastModified ? `<lastmod>${new Date(route.lastModified).toISOString()}</lastmod>` : ''}
            <priority>${route.priority}</priority>
          </url>
        `).join('')}
      </urlset>`;

      return new Response(sitemapXML,{status:200,headers:{
        'Content-Type':'application/xml',
      },
    });

   
    } catch (error) {
    console.error("Sitemap generation failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

    


}
