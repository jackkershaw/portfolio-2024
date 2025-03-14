function Podroll() {
  const podcasts = [
    {
      title: "Syntax",
      description: "Web Development Podcast.",
      link: "https://syntax.fm/",
      RSS_link: "https://feed.syntax.fm/",
    },
    {
      title: "Tech Won't Save Us",
      description:
        "Great for keeping up to date with the very worst developments in tech.",
      link: "https://www.techwontsave.us/",
      RSS_link: "https://feeds.buzzsprout.com/1004689.rss",
    },
    {
      title: "The Wild Ones Podcast",
      description: "Cycling news and chat.",
      link: "https://shows.acast.com/the-wild-ones",
      RSS_link: "https://feeds.acast.com/public/shows/the-wild-ones",
    },
    {
      title: "Give The People What They Want",
      description: "News from social movements around the world.",
      link: "https://www.podbean.com/podcast-detail/7dse6-1877a8/Give-The-People-What-They-Want%21-wVijay-Prashad-Podcast",
      RSS_link: "https://anchor.fm/s/443b6c28/podcast/rss",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl pt-4">Podcasts</h1>
      <div className="flex flex-wrap py-4">
        {podcasts.map((podcast) => (
          <div
            key={podcast.title}
            className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          >
            <div className="rounded-lg border border-neutral-300 mb-2 h-50">
              <div className="p-6">
                <h2 className="text-2xl mb-2">{podcast.title}</h2>
                <p className="text-gray-700 mb-4 text-lg">
                  {podcast.description}
                </p>
                <div className="flex-row flex justify-start space-x-2">
                  <button>
                    <a
                      target="_blank"
                      href={podcast.link}
                      className="inline-block bg-ykb hover:bg-ykbdark text-neutral-100 py-2 px-2 rounded-sm"
                    >
                      Listen
                    </a>
                  </button>
                  <button>
                    <a
                      target="_blank"
                      href={podcast.RSS_link}
                      className="inline-block bg-ykb hover:bg-ykbdark text-neutral-100 py-2 px-2 rounded-sm"
                    >
                      RSS
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full px-4 mb-4 md:mb-0">
          <div className="rounded-lg border border-neutral-300 mb-2 h-50 p-6">
            <p className="text-neutral-900 mb-4 text-lg">
              Subscribe to my podcasts by importing{" "}
              <a
                href="/podcasts_opml.xml"
                target="_blank"
                className="hover:text-ykb"
              >
                this OPML file
              </a>{" "}
              into your podcast app.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podroll;
