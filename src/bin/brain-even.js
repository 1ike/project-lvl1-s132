#!/usr/bin/env node

import { greeting, declareRules, greetingByName, play } from '..';

const rulesMessage = 'Answer "yes" if number even otherwise answer "no"';

greeting();
declareRules(rulesMessage);
greetingByName();
play();
