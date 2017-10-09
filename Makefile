install:
	touch .npmignore
	echo "{\"presets\":[\"stage-0\"]}" > .babelrc 
	echo "node_modules\ndist" > .gitignore 
	npm i -D babel-cli babel-core babel-preset-env babel-preset-stage-0 

start:
	npm run babel-node -- src/bin/brain-games.js
	
publish:
	npm publish
