import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });

export async function getNotionTexts(databaseId: string) {  
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    
    return response.results.map((page: any) => ({
        id: page.id,

        textTop: page.properties.TopText?.rich_text?.[0]?.plain_text || '',
        textTopServices: page.properties.TopTextServices?.rich_text?.[0]?.plain_text || '',

        herroText: page.properties.HeroText?.rich_text?.[0]?.plain_text || '',
        herroTexti: page.properties.HeroTexti?.rich_text?.[0]?.plain_text || '',

        title: page.properties.Title?.title?.[0]?.plain_text || '',
        content: page.properties.Content?.rich_text?.[0]?.plain_text || '',
        iconName: page.properties.IconName?.rich_text?.[0]?.plain_text || '',

        titlei: page.properties.Titlei?.rich_text?.[0]?.plain_text || '',
        content1: page.properties.Content1?.rich_text?.[0]?.plain_text || '',
        content2: page.properties.Content2?.rich_text?.[0]?.plain_text || '',

        direccionChile: page.properties.DireccionChile?.rich_text?.[0]?.plain_text || '',
        direccionEspaña: page.properties.DireccionEspaña?.rich_text?.[0]?.plain_text || '',
  }));
}