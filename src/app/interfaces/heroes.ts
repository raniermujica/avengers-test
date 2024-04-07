export interface Heroes {
  id: number;
  name: string;
  thumbnail: {};
  path: string;
  description: {};
  comics: {};
  data: {
    results: any[];
  }
  
}
  // getHeroId: any;
    //   thumbnail:   {};
    //   comics:      {};
    //   stories:     {};
    //   events:      {};
    //   series:      {};
    // }
    // export interface Comics {
    //   available:     string;
    //   returned:      string;
    //   collectionURI: string;
    //   items:         ComicsItem[];
    // }
    // export interface ComicsItem {
    //   resourceURI: string;
    //   name:        string;
    // }
    // export interface Stories {
    //   available:     string;
    //   returned:      string;
    //   collectionURI: string;
    //   items:         StoriesItem[];
    // }
    // export interface StoriesItem {
    //   resourceURI: string;
    //   name:        string;
    //   type:        string;
    // }
    // export interface Thumbnail {
    //   path:      string;
    //   extension: string;
    // }
    // export interface URL {
    //   type: string;
    //   url:  string;
    // }getHeroId(heroId: number): unknown;


// export interface HeroesResults {
//   code: number;
//   status: string;
//   copyright: string;
//   attributionText: string;
//   attributionHTML: string;
//   data: {
//     offset: number;
//     limit: number;
//     total: number;
//     count: number;
//     results: Result[];
//   };


// export interface HeroFeatures {
//   id: number;
//   name: string;
//   description: string;
//   modified: Date;
//   resourceURI: string;
//   urls: any[];
//   thumbnail: { path: string, extension: string };
//   comics: {
//     available: number;
//     returned: number;
//     collectionURI: string;
//     items: any[];
//   };
//   stories: {
//     available: number;
//     returned: number;
//     collectionURI: string;
//     items: any[];
//   };
//   events: {
//     available: number;
//     returned: number;
//     collectionURI: string;
//     items: any[];
//   };
//   series: {
//     available: number;
//     returned: number;
//     collectionURI: string;
//     items: any[];
//   };
// }

// export interface Heroes {
//   code:            string;
//   status:          string;
//   copyright:       string;
//   attributionText: string;
//   attributionHTML: string;
//   data:            Data;
//   etag:            string;
// }

// export interface Data {
//   offset:  string;
//   limit:   string;
//   total:   string;
//   count:   string;
//   results: Result[];
// }

// export interface Result {
//   id:          number;
//   name:        string;
//   description: string;
//   modified:    string;
//   resourceURI: string;
//   urls:        URL[];
//   thumbnail:   {};
//   comics:      {};
//   stories:     {};
//   events:      {};
//   series:      {};
// }

// export interface Comics {
//   available:     string;
//   returned:      string;
//   collectionURI: string;
//   items:         ComicsItem[];
// }

// export interface ComicsItem {
//   resourceURI: string;
//   name:        string;
// }

// export interface Stories {
//   available:     string;
//   returned:      string;
//   collectionURI: string;
//   items:         StoriesItem[];
// }

// export interface StoriesItem {
//   resourceURI: string;
//   name:        string;
//   type:        string;
// }

// export interface Thumbnail {
//   path:      string;
//   extension: string;
// }

// export interface URL {
//   type: string;
//   url:  string;
// }