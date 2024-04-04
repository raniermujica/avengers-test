export interface Heroes {
    name: string;
    url: string;
}

export interface HeroesResults {
        code: number,
        status: string,
        copyright: string,
        attributionText: string,
        attributionHTML: string,
        data: {
          offset: number,
          limit: number,
          total: number,
          count: number,
          results: any [
          //   {
          //   id: number,
          //   name: string,
          //   description: string,
          //   modified: Date,
          //   resourceURI: string,
          //   urls: [
          //     {
          //       type: string,
          //       url: string
          //     }
          //   ],
          //   comics: {
          //     available: number,
          //     returned: number,
          //     collectionURI: string,
          //     items: [
          //       {
          //         resourceURI: string,
          //         name: string
          //       }
          //     ]
          //   }
          // }
          ]
        }
};