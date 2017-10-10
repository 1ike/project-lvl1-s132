install:
	touch .npmignore
	echo "node_modules\ndist\n*.log" > .gitignore
	npm i

start:
	npm run babel-node -- src/bin/brain-games.js

build: lint
	npm run build && chmod +x dist/bin/brain-even.js

lint:
	npm run eslint src

publish:
	npm publish
