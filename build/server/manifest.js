const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b17d1655.js","imports":["_app/immutable/entry/start.b17d1655.js","_app/immutable/chunks/index.7df24d5a.js","_app/immutable/chunks/singletons.2571394c.js","_app/immutable/chunks/index.d1f5b076.js","_app/immutable/chunks/parse.d12b0d5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d97c6c38.js","imports":["_app/immutable/entry/app.d97c6c38.js","_app/immutable/chunks/pocketbase.b37ce63f.js","_app/immutable/chunks/index.d1f5b076.js","_app/immutable/chunks/index.7df24d5a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-914715d9.js'),
			() => import('./chunks/1-04b6282d.js'),
			() => import('./chunks/2-4cd74e27.js'),
			() => import('./chunks/3-1ad25502.js'),
			() => import('./chunks/4-7875bb2f.js'),
			() => import('./chunks/5-e2ccc865.js'),
			() => import('./chunks/6-31edd8ad.js'),
			() => import('./chunks/7-f836f3b5.js'),
			() => import('./chunks/8-94ec7f41.js'),
			() => import('./chunks/9-55158f4b.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/dataFromDevices",
				pattern: /^\/api\/dataFromDevices\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-6b6227a7.js')
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard/add-device",
				pattern: /^\/dashboard\/add-device\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard/map/[map]",
				pattern: /^\/dashboard\/map\/([^/]+?)\/?$/,
				params: [{"name":"map","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
