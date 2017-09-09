# South Texas Hyperion User Group

This is the source for the [South Texas Hyperion User Group (stxhug.org)](https://stxhug.org) website. This site is built using [Hugo](https://gohugo.io/).

## Setup

### Hugo

Download Hugo from [GitHub](https://github.com/gohugoio/hugo/releases).
Extract the hugo.exe from the zip file and drop it in a folder. (ex. X:\hugo) Add the hugo folder to **PATH**.

### Node.Js

Download and install [node.js](https://nodejs.org/en/download/)

### Clone GitHub Repository

Clone stxhug into a directory. This assumes you have [git](https://git-scm.com/downloads) installed.

```
git clone https://github.com/newbish/stxhug.git
```

### Build Site
Install packages and run the hugo server. This needs to be done only once. Subsequent builds only require the last two commands to be run. Once built the output will be placed in the "public" directory. If testing locally use `hugo serve` to start up the test webserver.
```
cd stxhug\
npm install
npm install gulp -g
gulp
hugo
```

### Full list of Hugo commands

```
A full list of commands:
Usage:
  hugo server [flags]

Aliases:
  server, serve

Flags:
      --appendPort                 append port to baseURL (default true)
  -b, --baseURL string             hostname (and path) to the root, e.g. http://spf13.com/
      --bind string                interface to which the server will bind (default "127.0.0.1")
  -D, --buildDrafts                include content marked as draft
  -E, --buildExpired               include expired content
  -F, --buildFuture                include content with publishdate in the future
      --cacheDir string            filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
      --canonifyURLs               if true, all relative URLs will be canonicalized using baseURL
      --cleanDestinationDir        remove files from destination not found in static directories
  -c, --contentDir string          filesystem path to content directory
  -d, --destination string         filesystem path to write files to
      --disable404                 do not render 404 page
      --disableKinds stringSlice   disable different kind of pages (home, RSS etc.)
      --disableLiveReload          watch without enabling live browser reload on rebuild
      --disableRSS                 do not build RSS files
      --disableSitemap             do not build Sitemap file
      --enableGitInfo              add Git revision, date and author info to the pages
      --forceSyncStatic            copy all files when static is changed.
  -h, --help                       help for server
      --i18n-warnings              print missing translations
      --ignoreCache                ignores the cache directory
  -l, --layoutDir string           filesystem path to layout directory
      --meminterval string         interval to poll memory usage (requires --memstats), valid time units are "ns", "us" (or "Âµs"), "ms", "s", "m", "h". (default "100ms")
      --memstats string            log memory usage to this file
      --noChmod                    don't sync permission mode of files
      --noTimes                    don't sync modification time of files
      --pluralizeListTitles        pluralize titles in lists using inflect (default true)
  -p, --port int                   port on which the server will listen (default 1313)
      --preserveTaxonomyNames      preserve taxonomy names as written ("GÃ©rard Depardieu" vs "gerard-depardieu")
      --renderToDisk               render to Destination path (default is render to memory & serve from there)
  -s, --source string              filesystem path to read files relative from
      --stepAnalysis               display memory and timing of different steps of the program
  -t, --theme string               theme to use (located in /themes/THEMENAME/)
      --themesDir string           filesystem path to themes directory
      --uglyURLs                   if true, use /filename.html instead of /filename/
  -w, --watch                      watch filesystem for changes and recreate as needed (default true)

Global Flags:Usage:
  hugo server [flags]

Aliases:
  server, serve

Flags:
      --appendPort                 append port to baseURL (default true)
  -b, --baseURL string             hostname (and path) to the root, e.g. http://spf13.com/
      --bind string                interface to which the server will bind (default "127.0.0.1")
  -D, --buildDrafts                include content marked as draft
  -E, --buildExpired               include expired content
  -F, --buildFuture                include content with publishdate in the future
      --cacheDir string            filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
      --canonifyURLs               if true, all relative URLs will be canonicalized using baseURL
      --cleanDestinationDir        remove files from destination not found in static directories
  -c, --contentDir string          filesystem path to content directory
  -d, --destination string         filesystem path to write files to
      --disable404                 do not render 404 page
      --disableKinds stringSlice   disable different kind of pages (home, RSS etc.)
      --disableLiveReload          watch without enabling live browser reload on rebuild
      --disableRSS                 do not build RSS files
      --disableSitemap             do not build Sitemap file
      --enableGitInfo              add Git revision, date and author info to the pages
      --forceSyncStatic            copy all files when static is changed.
  -h, --help                       help for server
      --i18n-warnings              print missing translations
      --ignoreCache                ignores the cache directory
  -l, --layoutDir string           filesystem path to layout directory
      --meminterval string         interval to poll memory usage (requires --memstats), valid time units are "ns", "us" (or "Âµs"), "ms", "s", "m", "h". (default "100ms")
      --memstats string            log memory usage to this file
      --noChmod                    don't sync permission mode of files
      --noTimes                    don't sync modification time of files
      --pluralizeListTitles        pluralize titles in lists using inflect (default true)
  -p, --port int                   port on which the server will listen (default 1313)
      --preserveTaxonomyNames      preserve taxonomy names as written ("GÃ©rard Depardieu" vs "gerard-depardieu")
      --renderToDisk               render to Destination path (default is render to memory & serve from there)
  -s, --source string              filesystem path to read files relative from
      --stepAnalysis               display memory and timing of different steps of the program
  -t, --theme string               theme to use (located in /themes/THEMENAME/)
      --themesDir string           filesystem path to themes directory
      --uglyURLs                   if true, use /filename.html instead of /filename/
  -w, --watch                      watch filesystem for changes and recreate as needed (default true)

Global Flags:
      --config string    config file (default is path/config.yaml|json|toml)
      --log              enable Logging
      --logFile string   log File path (if set, logging enabled automatically)
      --quiet            build in quiet mode
  -v, --verbose          verbose output
      --verboseLog       verbose logging
      --config string    config file (default is path/config.yaml|json|toml)
      --log              enable Logging
      --logFile string   log File path (if set, logging enabled automatically)
      --quiet            build in quiet mode
  -v, --verbose          verbose output
      --verboseLog       verbose logging
```