# ANNEXI-STRAYLINE Blog

This is a custom blog built in React with Gatsby. The goal was to generate a fully static blog that could be easily searched by search engines, while also supporting a full automated publishing pipeline.

Blog posts are generated with an offline tool that converts the source document into a json blob, which is then processed by Gatsby/React to render the posts.

The system also indexes posts with hashtag keywords which allows filtering by topic.