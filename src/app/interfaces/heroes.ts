export interface Heroes {
id: any;
  name: string;
  thumbnail: {};
  path: string;
}

export interface HeroesResults {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: any[];
  };
}

export interface HeroFeatures {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: any[];
  thumbnail: string;
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: any[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: any[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: any[];
  };
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: any[];
  };

};
