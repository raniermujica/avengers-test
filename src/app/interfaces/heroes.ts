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
          results: []
        },
        etag: string
};